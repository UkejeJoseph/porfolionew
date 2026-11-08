import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import { ArrowUpRight, ArrowLeft, Search, ArrowRight } from "lucide-react";
import {
  engineeringNotes,
  noteCategories,
  type EngineeringNote,
} from "@/data/engineering-notes";
import "@/styles/engineering.css";

function Cover({ post, index = 0 }: { post: EngineeringNote; index?: number }) {
  return (
    <div className={`note-cover cover-${index % 3}`} aria-hidden="true">
      <span className="small-label">JU / ENGINEERING NOTES</span>
      <div className="cover-diagram">
        <span>
          {post.category === "Applied AI"
            ? "context"
            : post.category === "Go"
              ? "queue"
              : "request"}
        </span>
        <i>↓</i>
        <span>
          {post.category === "Applied AI"
            ? "retrieve → reason"
            : "validate → execute"}
        </span>
        <i>↓</i>
        <span>
          {post.category === "Applied AI"
            ? "grounded result"
            : "observable result"}
        </span>
      </div>
      <span className="small-label">
        {post.category} <ArrowUpRight size={20} />
      </span>
    </div>
  );
}

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [limit, setLimit] = useState(9);
  const filtered = useMemo(
    () =>
      engineeringNotes.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          `${p.title} ${p.description} ${p.category}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [query, category],
  );
  useEffect(() => {
    document.title = "Engineering notes — Joseph Ukeje";
  }, []);
  return (
    <div className="engineering-theme">
      <div className="engineering-shell">
        <header className="editorial-hero">
          <div>
            <p className="small-label">03 / FIELD NOTES</p>
            <h1>
              Blog<span className="serif-line">From the workbench.</span>
            </h1>
            <p className="hero-description">
              Backend systems, applied AI, and the web around them. Notes on the
              decisions that make software reliable—and the trade-offs worth
              writing down.
            </p>
            <a className="text-link" href="#notebook">
              Browse the notebook <ArrowRight size={17} />
            </a>
          </div>
          <div className="notebook-art" aria-hidden="true">
            <span className="small-label">JU / THE NOTEBOOK</span>
            <div>
              <span>01</span> Systems that hold up <ArrowUpRight />
            </div>
            <div>
              <span>02</span> Decisions with context <ArrowUpRight />
            </div>
            <div>
              <span>03</span> Ideas made practical <ArrowUpRight />
            </div>
            <p>Build. Observe. Write it down.</p>
            <span className="notebook-orbit" />
          </div>
        </header>
        <section className="featured-notes" aria-labelledby="featured-title">
          <p className="small-label">START HERE</p>
          <h2 id="featured-title">The decisions behind the code.</h2>
          <div className="featured-grid">
            {engineeringNotes.slice(0, 3).map((post, i) => (
              <Link
                className="featured-note"
                key={post.id}
                href={`/blog/${post.id}`}
              >
                <Cover post={post} index={i} />
                <div className="note-caption">
                  <p className="small-label">
                    {post.category} / {post.minutes} MIN READ
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section
          id="notebook"
          className="notebook-section"
          aria-labelledby="notebook-title"
        >
          <div className="section-heading">
            <h2 id="notebook-title">
              The notebook <span>({engineeringNotes.length})</span>
            </h2>
            <label className="note-search">
              <Search size={18} />
              <span className="sr-only">Search articles</span>
              <input
                type="search"
                value={query}
                placeholder="Search the notebook…"
                onChange={(e) => {
                  setQuery(e.target.value);
                  setLimit(9);
                }}
              />
            </label>
          </div>
          <div className="topic-filters" aria-label="Article topics">
            {noteCategories.map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => {
                  setCategory(c);
                  setLimit(9);
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="result-count" role="status">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </p>
          <div className="article-list">
            {filtered.slice(0, limit).map((post) => (
              <Link
                className="article-row"
                key={post.id}
                href={`/blog/${post.id}`}
              >
                <div>
                  <p className="small-label">
                    {post.category} / {post.minutes} MIN READ
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <span className="article-author">
                    {post.shared
                      ? "Joseph Ukeje & Yashraj Jain · Shared writing"
                      : "Joseph Ukeje"}
                  </span>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="empty-notes">
              <h3>No notes match that search.</h3>
              <p>Try a different topic or clear the filters.</p>
              <button
                className="pill-button"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Show all articles
              </button>
            </div>
          )}
          {limit < filtered.length && (
            <button
              className="pill-button load-more"
              onClick={() => setLimit((n) => n + 9)}
            >
              More from the notebook <ArrowRight size={17} />
            </button>
          )}
        </section>
        <footer className="engineering-footer">
          <span>Joseph Ukeje / Engineering notes</span>
          <Link href="/lab">
            Explore the engineering lab <ArrowUpRight size={17} />
          </Link>
        </footer>
      </div>
    </div>
  );
}

export function BlogArticle() {
  const [, params] = useRoute("/blog/:slug");
  const post = engineeringNotes.find((p) => p.id === params?.slug);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = post
      ? `${post.title} — Joseph Ukeje`
      : "Article not found — Joseph Ukeje";
  }, [post]);
  const headings = post
    ? Array.from(
        post.html.matchAll(/<h[23][^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/g),
      ).map((m) => ({ id: m[1], text: m[2].replace(/<[^>]+>/g, "") }))
    : [];
  if (!post)
    return (
      <div className="engineering-theme">
        <div className="engineering-shell article-page">
          <Link className="text-link" href="/blog">
            <ArrowLeft size={17} /> All writing
          </Link>
          <h1>That note isn’t here.</h1>
          <p>Browse the notebook to find another article.</p>
        </div>
      </div>
    );
  return (
    <div className="engineering-theme">
      <div className="engineering-shell article-page">
        <Link className="text-link" href="/blog">
          <ArrowLeft size={17} /> Back to the notebook
        </Link>
        <header className="article-header">
          <p className="small-label">
            {post.category} / {post.minutes} MIN READ
          </p>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.description}</p>
          <div className="article-byline">
            <span>{post.authors.join(" & ")}</span>
            <time dateTime={post.date}>
              {new Date(post.date + "T12:00:00Z").toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          {post.shared && (
            <p className="shared-writing-note">
              Shared writing with Yashraj Jain. First-person examples retain the
              original author's project context.
            </p>
          )}
        </header>
        <div className="article-layout">
          <article
            className="engineering-prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <aside className="article-toc">
            <p className="small-label">ON THIS PAGE</p>
            <nav aria-label="Article contents">
              {headings.map((h, i) => (
                <a key={`${h.id}-${i}`} href={`#${h.id}`}>
                  {h.text}
                </a>
              ))}
            </nav>
            <Link className="text-link" href="/blog">
              All writing <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>
        <footer className="engineering-footer">
          <Link href="/blog">
            <ArrowLeft size={17} /> More engineering notes
          </Link>
          <Link href="/lab">
            Try the lab <ArrowUpRight size={17} />
          </Link>
        </footer>
      </div>
    </div>
  );
}
