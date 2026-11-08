export const architectureStudies = [
  {
    id: "payments",
    name: "Distributed Payments",
    title: "Preserve financial truth across uncertain networks.",
    summary:
      "Payment initiation, bank integration, balanced posting, callbacks and reconciliation have different consistency and failure boundaries. The durable payment attempt connects them.",
    constraint:
      "One intended payment must not become two charges. A timeout remains an unknown outcome until authoritative evidence resolves it.",
    views: [
      {
        name: "Request & state",
        file: "payments-request",
        width: 3607,
        text: "NGINX distributes requests across API replicas. Persist the attempt before dispatching to the bank; validated webhook evidence advances the same durable state machine.",
      },
      {
        name: "Events & recovery",
        file: "payments-events",
        width: 3047,
        text: "Business changes and an outbox record commit together. A publisher delivers committed events to Kafka; independent consumers drive callbacks, audit exports and reporting. Reconciliation resolves missing or contradictory evidence.",
      },
    ],
    steps: [
      "Authenticate the merchant, validate amount/currency and scope the idempotency key by caller and operation.",
      "Atomically record the request fingerprint, payment intent and attempt. Repeated keys return the original result; conflicting payloads fail.",
      "Dispatch using a stable provider identity outside the database transaction. Bound each provider's connections and concurrency.",
      "Persist signed webhook evidence in an inbox. Guard state transitions against stale events and mismatched references, amounts or currencies.",
      "Commit the transition, balanced journal entries where applicable, and outbox event in one local transaction.",
      "Publish events and reconcile unresolved attempts. Callback replay never creates another financial charge.",
    ],
    decisions: [
      {
        title: "Durable authority",
        text: "PostgreSQL uniqueness, conditional transitions and balanced journals enforce correctness. Redis caches routing/configuration and admission budgets; it is not the record of whether money moved.",
      },
      {
        title: "Outbox and consumer inbox",
        text: "Choose a polling publisher or CDC for one outbox. Publication can repeat after a crash, so consumer effects and their inbox record commit atomically. Keep Kafka topics, publishers and workers separate.",
      },
      {
        title: "Partitioning and backpressure",
        text: "Key payment events by payment ID when per-payment ordering matters. Separate provider bulkheads, bounded pools and retry budgets prevent one slow bank from exhausting every worker.",
      },
      {
        title: "Operational evidence",
        text: "Trace payment, attempt and provider references through OpenTelemetry. Prometheus and Grafana track unresolved age/value, consumer lag, lock wait and reconciliation mismatches; Loki holds logs and Tempo holds traces. S3 retains controlled audit exports and provider files.",
      },
    ],
    failures: [
      [
        "Provider charges, then times out",
        "Keep the attempt pending/unknown; reuse its provider key and reconcile. Do not silently create a new attempt at another bank.",
      ],
      [
        "Crash after database commit",
        "The committed outbox survives. Resume publication; tolerate duplicate events with inbox and business-level uniqueness.",
      ],
      [
        "Two concurrent debits",
        "Use conditional updates or ordered row locks around spendable balances; never authorise from an eventually consistent read projection.",
      ],
      [
        "Database or cache failure",
        "Fail unsafe financial writes rather than guess. Fence the previous writer during failover; warm caches under bounded origin concurrency.",
      ],
    ],
    contracts: [
      "POST /payments · caller-scoped Idempotency-Key + request hash",
      "POST /provider-webhooks · raw-body signature + durable inbox",
      "Kafka payment-events · payment_id partition key · callback-v1 / audit-v1 / reporting-v1 consumer groups",
    ],
    caseLink: "/projects/iris-payment-gateway",
    sources: [
      [
        "Transactional outbox",
        "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html",
      ],
      [
        "NGINX load balancing",
        "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/",
      ],
    ],
  },
  {
    id: "retrieval",
    name: "Retrieval AI",
    title: "Separate ingestion, retrieval, reasoning and model serving.",
    summary:
      "A distributed retrieval engine needs versioned source documents, access-aware indexes, bounded agent execution and a recovery path for partial ingestion. Caching and fine-tuning address different parts of that system.",
    constraint:
      "An answer must use sources the caller can access, with current source versions. Similar wording does not imply equivalent permissions or a safe cached answer.",
    views: [
      {
        name: "Query & retrieval",
        file: "ai-query",
        width: 4269,
        text: "An authenticated FastAPI boundary checks tenant scope before semantic-cache lookup. On a miss, LangGraph coordinates retrieval, reranking, model routing and typed output validation. A hit still requires current access and freshness checks.",
      },
      {
        name: "Ingestion & indexing",
        file: "ai-ingest",
        width: 2933,
        text: "S3 stores versioned documents; durable indexing intents reach Kafka. Bounded workers parse, chunk, embed and publish a complete index generation. Updates, deletions and ACL changes invalidate affected cached answers.",
      },
      {
        name: "Training & serving",
        file: "ai-training",
        width: 2692,
        text: "LoRA is an offline adaptation path over approved datasets. MLflow records model/adapter versions and evaluation evidence. Approved models enter a serving pool with controlled rollout; prefix caching and inference KV caching reduce different kinds of repeated work.",
      },
    ],
    steps: [
      "Authenticate the user and resolve tenant, document permissions, corpus generation and model version.",
      "Look up an eligible exact or semantic answer-cache entry using that complete scope. Re-check access and citations before reuse.",
      "On a miss, embed the query with the same compatible embedding model used by the index; retrieve authorised candidates from PostgreSQL/pgvector.",
      "Combine lexical/vector evidence where appropriate, rerank candidates and build a prompt within the token/context budget.",
      "Route through LiteLLM to an API model or self-hosted serving pool. LangGraph enforces tool budgets; Pydantic validates inputs and outputs.",
      "Return sources and record retrieval, generation and tool spans. Cache only eligible responses; evaluate groundedness, retrieval quality, latency and cost separately.",
    ],
    decisions: [
      {
        title: "Three distinct cache layers",
        text: "Redis LangCache reuses eligible answers by semantic similarity. Provider prompt caching reuses matching prompt prefixes. Model-serving KV caches reuse attention state during inference. Each has different keys, invalidation rules and memory or cost trade-offs.",
      },
      {
        title: "Versioned retrieval authority",
        text: "S3 holds source bytes; the document catalogue owns identity, ACLs and versions. pgvector stores embeddings plus scoped metadata. Pin model/dimensions and publish index generations only when complete. HNSW/IVFFlat tuning trades recall, memory and query cost.",
      },
      {
        title: "LoRA without conflating it with RAG",
        text: "PyTorch and Hugging Face PEFT train small adapters offline to change model behaviour. Retrieval supplies current evidence at query time. MLflow tracks dataset/base-model/adapter versions; evaluation gates promotion. Fine-tuning does not replace document updates or access checks.",
      },
      {
        title: "Bounded inference and observable quality",
        text: "Limit concurrent embedding, tool and generation requests independently. Self-hosted GPU pools may use continuous batching with explicit queue and KV-memory limits. Langfuse and OpenTelemetry expose token use, cache hit quality, retrieval latency and failure paths.",
      },
    ],
    failures: [
      [
        "Stale or cross-tenant cache hit",
        "Partition by tenant/permission scope and corpus/model versions. Revalidate sources; reject entries after ACL changes or deletion.",
      ],
      [
        "Worker dies halfway through indexing",
        "Retry using document ID + source version + model version. Publish a generation atomically after all expected chunks are validated; remove stale vectors through controlled cleanup.",
      ],
      [
        "Model/provider unavailable",
        "Apply deadlines, concurrency limits and an approved fallback policy. Return retrieved evidence or an explicit incomplete result instead of fabricating an answer.",
      ],
      [
        "Generated SQL or tool action is unsafe",
        "Enforce read-only database roles, allowlisted tools, statement deadlines and row limits outside the model. Validate schemas and authorise each operation.",
      ],
    ],
    contracts: [
      "POST /query · authenticated tenant/user + permitted sources + deadline",
      "Index job · document_id + source_version + embedding_model_version",
      "Evaluation · recall/groundedness + false semantic-cache hits + token latency + cost",
    ],
    caseLink: "/projects/retrieval-sql-assistant",
    sources: [
      [
        "Redis LangCache",
        "https://redis.io/docs/latest/develop/ai/context-engine/langcache/",
      ],
      ["pgvector", "https://github.com/pgvector/pgvector"],
      [
        "Prompt caching",
        "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
      ],
      [
        "Hugging Face LoRA",
        "https://huggingface.co/docs/peft/package_reference/lora",
      ],
    ],
  },
  {
    id: "matching",
    name: "Order Matching",
    title: "Parallel markets. Deterministic order within each market.",
    summary:
      "Keep admission, sequencing, matching, settlement and market-data delivery distinct. A distributed exchange scales independent markets while preserving a single ordered owner for each matching shard.",
    constraint:
      "Order acceptance, price-time priority, fund reservations and execution identity must survive retries and recovery. An active and a stale shard owner must never both publish authoritative fills.",
    views: [
      {
        name: "Admission & matching",
        file: "matching-hotpath",
        width: 3027,
        text: "Validated place/cancel/amend commands enter a bounded per-market sequencer. A durable command journal supports a deterministic single-owner matching shard; committed execution reports feed downstream trade consumers.",
      },
      {
        name: "Settlement & recovery",
        file: "matching-recovery",
        width: 2494,
        text: "Settlement consumes stable trade identities and commits balanced postings with an inbox and outbox. A fenced standby loads a snapshot, replays the committed journal and verifies state before taking ownership.",
      },
    ],
    steps: [
      "Validate identity, signatures, integer prices/quantities and client-order uniqueness. Reserve funds against an authoritative risk/balance boundary.",
      "Route by market/instrument and sequence place, cancel and amend commands through a bounded admission queue.",
      "Durably commit the command under the chosen replication/quorum contract before acknowledging the accepted state.",
      "Apply commands through a single-owner price-time-priority book. Produce explicit partial-fill, completed, cancelled and rejected states.",
      "Publish execution events for independently progressing settlement and market-data consumers. Dedupe by trade identity and apply guarded state transitions.",
      "Recover with a versioned snapshot plus journal offsets; fence the old owner, verify state and only then enable the new writer.",
    ],
    decisions: [
      {
        title: "Concurrency through partition ownership",
        text: "Independent markets can run in parallel, while one owner orders mutations within a book. Bounded channels and an explicit sequencer avoid uncontrolled shared mutation. One hot market remains a capacity boundary even when other markets are idle.",
      },
      {
        title: "Execution versus projections",
        text: "Kafka carries durable execution events to settlement and market-data consumers. Redis quote caches and WebSocket views may lag; they do not determine fills or available funds. Clients detect sequence gaps and resynchronise from a snapshot.",
      },
      {
        title: "Workflow and recovery",
        text: "Settlement owns durable progress, retries and exception handling per trade. A refund or compensation is another audited operation. S3 book snapshots reduce replay cost; the committed journal supplies the authoritative events after the snapshot offset.",
      },
      {
        title: "dYdX comparison",
        text: "This reference design describes a sequenced-shard exchange service. The local dYdX v4 code study uses validator-local order books and consensus-driven execution; its protocol is not identical to this Kafka/ledger service design. Compare ownership, replay and matching invariants at the source level.",
      },
    ],
    failures: [
      [
        "Matcher crashes after accepting an order",
        "Recover from the committed command journal and snapshot. Replaying the same sequence must produce the same book state and execution identities.",
      ],
      [
        "Old leader resumes after failover",
        "Use a fenced ownership epoch enforced at the durable boundary. Stop stale writers from committing or publishing authoritative results.",
      ],
      [
        "Duplicate fill or concurrent cancel",
        "Guard order-state transitions and trade identities. The sequenced order determines whether a cancel precedes or follows a fill.",
      ],
      [
        "Slow settlement or market-data consumers",
        "Track lag and bound backlog. Pause unsafe new exposure when required; allow sequence-aware projections to catch up without changing matching history.",
      ],
    ],
    contracts: [
      "Place/cancel/amend · client_order_id + account + market + integer units",
      "Execution report · order_id + trade_id + sequence + ownership epoch",
      "Kafka trade-executions · market_id ordering · independent settlement and market-data consumers",
    ],
    caseLink: "/blockchain",
    sources: [
      [
        "dYdX order book and matching",
        "https://docs.dydx.exchange/concepts-limit-order-book-and-matching",
      ],
      [
        "dYdX matching source",
        "https://github.com/dydxprotocol/v4-chain/tree/main/protocol/x/clob/memclob",
      ],
    ],
  },
];
