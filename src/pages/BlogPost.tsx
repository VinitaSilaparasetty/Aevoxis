import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, type ContentBlock } from "@/data/blog-posts";

function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-border">
      <div className="flex items-center justify-between px-4 py-2 bg-secondary/80 border-b border-border">
        <span className="text-xs font-mono text-muted-foreground">{language}</span>
      </div>
      <pre className="overflow-x-auto p-5 bg-secondary/40 text-sm leading-relaxed">
        <code className="font-mono text-foreground whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function PreformattedBlock({ content }: { content: string }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-border">
      <pre className="overflow-x-auto p-5 bg-secondary/40 text-xs sm:text-sm leading-relaxed font-mono text-foreground whitespace-pre">
        {content}
      </pre>
    </div>
  );
}

function FaqSection({ items }: { items: Array<{ question: string; answer: string }> }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-secondary/40 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <span>{item.question}</span>
              {open === i ? (
                <ChevronUp className="w-4 h-4 shrink-0 text-accent" />
              ) : (
                <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" />
              )}
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CtaBlock({
  heading,
  body,
  linkText,
  linkHref,
}: {
  heading: string;
  body: string;
  linkText: string;
  linkHref: string;
}) {
  return (
    <div className="my-10 rounded-3xl p-8 sm:p-10 premium-card premium-card-blue">
      <div className="relative z-10">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{heading}</h2>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">{body}</p>
        <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20">
          <Link to={linkHref}>{linkText}</Link>
        </Button>
      </div>
    </div>
  );
}

function AuthorBio({ text, disclosure }: { text: string; disclosure: string }) {
  return (
    <div className="my-10 space-y-6">
      <div className="rounded-2xl border border-border bg-secondary/40 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-border shrink-0">
            <span className="text-sm font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              VS
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Vinita Silaparasetty</p>
            <p className="text-xs text-muted-foreground">AI Governance Engineer, Aevoxis Solutions</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
        <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
          <a
            href="https://aevoxis.de"
            className="hover:text-accent transition-colors"
          >
            aevoxis.de
          </a>
          <a
            href="mailto:info@aevoxis.de"
            className="hover:text-accent transition-colors"
          >
            info@aevoxis.de
          </a>
          <a
            href="https://www.linkedin.com/company/aevoxis-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/VinitaSilaparasetty"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-secondary/20 p-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Disclosure</p>
        <p className="text-xs text-muted-foreground leading-relaxed">{disclosure}</p>
      </div>
    </div>
  );
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-base text-muted-foreground leading-relaxed my-4">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={index}
          className="text-xl sm:text-2xl font-bold text-foreground mt-10 mb-4 tracking-tight"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="text-lg font-semibold text-foreground mt-7 mb-3"
        >
          {block.text}
        </h3>
      );
    case "code":
      return <CodeBlock key={index} language={block.language} code={block.code} />;
    case "preformatted":
      return <PreformattedBlock key={index} content={block.content} />;
    case "unordered-list":
      return (
        <ul key={index} className="my-4 space-y-2 pl-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "faq":
      return <FaqSection key={index} items={block.items} />;
    case "cta":
      return (
        <CtaBlock
          key={index}
          heading={block.heading}
          body={block.body}
          linkText={block.linkText}
          linkHref={block.linkHref}
        />
      );
    case "author-bio":
      return <AuthorBio key={index} text={block.text} disclosure={block.disclosure} />;
    default:
      return null;
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} – Aevoxis Solutions`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <article className="relative pt-36 pb-20 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            All Insights
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
            <span className="font-medium text-foreground">{post.author}</span>
            <span>{post.authorRole}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span>{post.publishedDate}</span>
          </div>

          {(post.liveDemo || post.sourceCode) && (
            <div className="flex flex-wrap gap-3 mb-10 pb-10 border-b border-border">
              {post.liveDemo && (
                <a
                  href={post.liveDemo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-primary transition-colors border border-accent/30 hover:border-primary/40 rounded-full px-4 py-1.5"
                >
                  <ExternalLink className="w-3 h-3" />
                  Live demo: {post.liveDemo.label}
                </a>
              )}
              {post.sourceCode && (
                <a
                  href={post.sourceCode.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/40 rounded-full px-4 py-1.5"
                >
                  <Github className="w-3 h-3" />
                  {post.sourceCode.label}
                </a>
              )}
            </div>
          )}

          <div className="prose-content">
            {post.content.map((block, index) => renderBlock(block, index))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
