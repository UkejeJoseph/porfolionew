import sharedArticles from "./shared-articles.json";

export interface EngineeringNote {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  minutes: number;
  authors: string[];
  html: string;
  shared: boolean;
}

const note = (
  id: string,
  title: string,
  category: string,
  description: string,
  html: string,
): EngineeringNote => ({
  id,
  title,
  category,
  description,
  html,
  date: "2026-11-08",
  minutes: Math.max(2, Math.ceil(html.split(/\s+/).length / 200)),
  authors: ["Joseph Ukeje"],
  shared: false,
});

export const engineeringNotes: EngineeringNote[] = [
  note(
    "spring-boot-payment-idempotency",
    "A retry should not become a second payment.",
    "Java / Spring Boot",
    "Idempotency keys, database constraints and the boundary between accepting a request and moving money.",
    `
    <p>A payment endpoint has two jobs: accept legitimate work and recognise work it has already accepted. A network timeout makes those jobs inseparable. The caller cannot tell whether the request failed before the commit or whether only the response was lost.</p>
    <h2 id="contract">Start with the request contract</h2><p>Accept an idempotency key scoped to the authenticated customer and operation. Store a hash of the relevant request fields alongside the result. Reusing a key with a different amount or destination is a conflict, not a request to replay the old response.</p>
    <h2 id="constraint">Make the database enforce uniqueness</h2><p>A read-before-write check races across application instances. Put a unique constraint on the customer, operation and key. Let the winner create the operation; handle a conflicting insert by reading its recorded state. A Java lock cannot coordinate separate service instances.</p>
    <pre><code>UNIQUE (customer_id, operation_type, idempotency_key)</code></pre>
    <h2 id="boundary">Keep the transaction boundary honest</h2><p>A Spring transaction can atomically persist local state and an outbox event. It cannot roll back a transfer already accepted by a remote provider. Use the same stable operation reference with that provider where supported, and reconcile uncertain outcomes before retrying a money-moving call.</p>
    <h2 id="tests">Test the uncomfortable paths</h2><ul><li>Send concurrent requests with the same key; expect one operation.</li><li>Reuse a key with a changed payload; expect a conflict.</li><li>Lose the response after commit; retry and return the persisted result.</li><li>Simulate a provider timeout; retain an explicit unknown or pending state.</li></ul>
    <p>The useful outcome is a recoverable operation with a stable identity. Exactly-once execution across independent systems needs more than an annotation.</p>
    <h2 id="references">Further reading</h2><p><a href="https://docs.spring.io/spring-framework/reference/data-access/transaction.html">Spring transaction management</a> · <a href="https://www.postgresql.org/docs/current/ddl-constraints.html">PostgreSQL constraints</a></p>`,
  ),
  note(
    "dotnet-async-is-not-unlimited-capacity",
    "Async is not unlimited capacity.",
    ".NET",
    "Keep ASP.NET Core responsive by bounding downstream work, propagating cancellation and measuring the actual bottleneck.",
    `
    <p>Awaiting database or HTTP I/O lets a request stop occupying a thread while it waits. It does not create more database connections, provider capacity or memory. An endpoint can be asynchronous and still overwhelm every dependency it touches.</p>
    <h2 id="blocking">Remove blocking from the request path</h2><p>Use asynchronous APIs through the entire call chain. Calling <code>.Result</code> or <code>.Wait()</code> turns a wait into blocked thread-pool work. Wrapping synchronous I/O in <code>Task.Run</code> still consumes a worker thread; it does not make the dependency asynchronous.</p>
    <h2 id="budget">Give concurrency a budget</h2><p><code>Task.WhenAll</code> is useful for independent operations, but materialising thousands of calls at once can exhaust a connection pool. For finite batches, consider <code>Parallel.ForEachAsync</code> with an explicit maximum degree of parallelism. For long-lived background processing, a bounded <code>Channel&lt;T&gt;</code> gives producers and consumers a shared capacity boundary.</p>
    <h2 id="cancel">Propagate cancellation</h2><p>Pass the request cancellation token into HTTP and database operations that support it. Give outbound calls their own timeout policy. Background work that must survive a disconnected client belongs in a durable queue, not a fire-and-forget task captured by a controller.</p>
    <h2 id="measure">Measure before adding workers</h2><p>Track request latency, queued work, thread-pool growth, connection-pool waits and downstream errors. Increasing concurrency can lower throughput when a database is already saturated. Tune the queue and worker count against representative load, including slow responses and failures.</p>
    <p>A useful load test asks whether the service stays within resource limits and recovers after overload, not only how many requests finish on the happy path.</p>
    <h2 id="references">Further reading</h2><p><a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/best-practices">ASP.NET Core best practices</a> · <a href="https://learn.microsoft.com/en-us/dotnet/core/extensions/channels">System.Threading.Channels</a></p>`,
  ),
  note(
    "go-worker-pools-and-cancellation",
    "A worker pool needs an exit plan.",
    "Go",
    "Bounded fan-out, backpressure and cancellation: the parts that make goroutines manageable in a service.",
    `
    <p>A goroutine is cheap to start. The work it triggers may not be. A pool makes concurrency an explicit resource decision: a fixed number of consumers read jobs from a bounded channel instead of starting unlimited downstream calls.</p>
    <h2 id="ownership">Decide who owns each channel</h2><p>The producer closes the jobs channel after its final send. Consumers stop when it closes or the context is cancelled. A coordinator waits for all consumers before closing a shared results channel. Closing results from an individual worker risks panics while another worker is still sending.</p>
    <pre><code>select {
case jobs &lt;- job:
    // Accepted into the bounded queue.
case &lt;-ctx.Done():
    return ctx.Err()
}</code></pre>
    <h2 id="backpressure">Choose the overload behaviour</h2><p>A full queue can block a producer, reject work or persist it elsewhere. That is a product and reliability decision. A large buffer merely delays the moment at which overload becomes visible; it can also increase memory use and the time a job spends waiting.</p>
    <h2 id="failure">Specify what a failure means</h2><p>Does the first error cancel the whole batch, or should successful results continue? Either policy can be right. Make it explicit and ensure blocked sends also observe cancellation. Passing a context to a worker does not automatically interrupt a library call that ignores it.</p>
    <h2 id="verify">Verify shutdown as well as throughput</h2><p>Test a cancelled producer, a slow consumer, an early worker error and a downstream timeout. Check that all workers exit and that the coordinator still closes results. Use the race detector for shared-memory mistakes; it will not prove that a channel protocol cannot deadlock.</p>
    <h2 id="references">Further reading</h2><p><a href="https://go.dev/blog/pipelines">Go pipelines and cancellation</a> · <a href="https://go.dev/doc/articles/race_detector">Go race detector</a></p>`,
  ),
  note(
    "python-bounded-concurrency",
    "Python concurrency starts with a boundary.",
    "Python",
    "Choosing asyncio, threads and processes by workload, with timeouts and bounded work instead of unbounded fan-out.",
    `
    <p>Concurrency is not one mechanism. Waiting on an HTTP API, calling a synchronous SDK and running a CPU-heavy transformation put different pressure on a Python service. Start by identifying which resource each operation consumes.</p>
    <h2 id="io">Async I/O for cooperative waits</h2><p>Use an async client for network and database operations in an async request path. A <code>TaskGroup</code> gives related tasks a common lifetime and propagates failures. Add a semaphore or bounded worker queue to limit active calls; structured concurrency alone does not set a capacity limit.</p>
    <h2 id="threads">Threads for blocking integrations</h2><p><code>asyncio.to_thread</code> or a deliberately sized <code>ThreadPoolExecutor</code> can isolate blocking libraries from the event loop. Give the underlying integration a timeout. Cancelling the await does not forcibly terminate a function already running in a thread.</p>
    <h2 id="processes">Processes for suitable CPU work</h2><p>A <code>ProcessPoolExecutor</code> is an option for CPU-bound Python workloads, with costs for startup, memory and serialisation. Batch work when transfer overhead dominates. Profile the actual runtime and dependencies before assuming a larger pool will improve throughput.</p>
    <h2 id="budget">Bound submitted work too</h2><p>A semaphore around a million tasks still leaves a million task objects. For large streams, use a small set of consumers and a bounded queue. Track waiting time separately from execution time so saturation is visible before request timeouts hide it.</p>
    <p>Verify cancellation, partial failures and shutdown under load. The goal is predictable resource use and an understandable failure path.</p>
    <h2 id="references">Further reading</h2><p><a href="https://docs.python.org/3/library/asyncio-task.html">asyncio tasks and cancellation</a> · <a href="https://docs.python.org/3/library/concurrent.futures.html">Concurrent futures</a></p>`,
  ),
  note(
    "applied-ai-retrieval-and-tool-boundaries",
    "Let the agent reason. Make the tools enforce.",
    "Applied AI",
    "A practical boundary for retrieval and text-to-SQL systems: typed tools, permissions, evaluation and traceable results.",
    `
    <p>A model can propose a query that is syntactically correct and still inappropriate for the user, tenant or data source. In an applied AI system, the tool boundary must enforce the rules independently of the prompt.</p>
    <h2 id="typed">Start with a narrow tool contract</h2><p>Use typed request and result schemas with explicit validation. For a SQL assistant, expose an approved read-only query operation rather than a general database connection. Apply database permissions, statement restrictions, row limits and execution timeouts outside the model.</p>
    <h2 id="retrieval">Keep retrieval scoped</h2><p>Filter retrieval by authorised tenant and document scope before returning context. Store source identifiers so an answer can point back to its evidence. Embedding similarity is a retrieval signal, not proof that a source supports the generated claim.</p>
    <h2 id="cache">Treat semantic caching as a correctness decision</h2><p>Two similar questions may require different answers because permissions, dates or underlying data changed. Cache keys and eligibility rules must incorporate the relevant scope and freshness. Evaluate false hits as well as hit rate; a fast wrong answer is still wrong.</p>
    <h2 id="eval">Evaluate each stage</h2><ul><li>Retrieval: did the authorised supporting material appear?</li><li>Tools: was the proposed operation valid and permitted?</li><li>Answers: were claims grounded in returned evidence?</li><li>Operations: what were latency, token use, cost and failure rate?</li></ul>
    <p>Trace these stages with appropriate redaction. LangGraph can coordinate state and Langfuse or LangSmith can help inspect execution, but the application still owns permissions and failure recovery. Begin with a deterministic workflow and add agent autonomy where it earns its complexity.</p>
    <h2 id="references">Further reading</h2><p><a href="https://docs.pydantic.dev/latest/concepts/models/">Pydantic models</a> · <a href="https://docs.langchain.com/oss/python/langgraph/overview">LangGraph overview</a></p>`,
  ),
  ...sharedArticles,
];

export const noteCategories = [
  "All",
  ...Array.from(new Set(engineeringNotes.map((p) => p.category))),
];
