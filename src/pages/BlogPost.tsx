import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin, ArrowRight, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { getArticleBySlug, getRelatedArticles, categoryColors } from "@/lib/blogData";

function renderMarkdownContent(content: string) {
  // Convert markdown-like content to HTML with internal links preserved
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<br key={key++} />);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-display text-xl font-semibold text-foreground mt-6 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("- **")) {
      const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
      if (match) {
        elements.push(
          <li key={key++} className="ml-6 mb-2 text-muted-foreground list-disc">
            <strong className="text-foreground">{match[1]}</strong>
            {match[2] ? `: ${match[2]}` : ""}
          </li>
        );
      } else {
        elements.push(
          <li key={key++} className="ml-6 mb-2 text-muted-foreground list-disc">
            {trimmed.slice(2)}
          </li>
        );
      }
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-6 mb-2 text-muted-foreground list-disc">
          {trimmed.slice(2)}
        </li>
      );
    } else {
      // Parse inline links [text](/blog/slug)
      const parts = trimmed.split(/(\[.+?\]\(.+?\))/g);
      const rendered = parts.map((part, i) => {
        const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
        if (linkMatch) {
          return (
            <Link key={i} to={linkMatch[2]} className="text-primary hover:underline font-medium">
              {linkMatch[1]}
            </Link>
          );
        }
        return part;
      });

      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed mb-4">
          {rendered}
        </p>
      );
    }
  }
  return elements;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/blog" replace />;

  const relatedArticles = getRelatedArticles(article.slug, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(article.title);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                categoryColors[article.category] || "bg-muted text-muted-foreground"
              }`}
            >
              {article.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
                <span className="text-xs">• {article.authorRole}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-sage-light via-sky-light to-lavender mb-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {renderMarkdownContent(article.content)}
          </motion.div>

          {/* Share Buttons */}
          <Separator className="my-10" />
          <div className="flex items-center gap-4 mb-10">
            <span className="text-sm font-medium text-foreground flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share this article
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-8 text-center" style={{ background: "var(--gradient-cta)" }}>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Book a session with one of our licensed therapists and take the first step toward better mental health.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/booking">Book a Session</Link>
            </Button>
          </div>
        </article>

        {/* Related Articles */}
        <section className="container mx-auto px-4 max-w-6xl mt-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((related, index) => (
              <motion.div
                key={related.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link to={`/blog/${related.slug}`} className="block h-full">
                  <div className="card-wellness overflow-hidden h-full group">
                    <div className="aspect-[16/10] bg-gradient-to-br from-sage-light via-sky-light to-lavender" />
                    <div className="p-5">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          categoryColors[related.category] || "bg-muted text-muted-foreground"
                        }`}
                      >
                        {related.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{related.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
