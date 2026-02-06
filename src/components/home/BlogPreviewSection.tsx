import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

const articles = [
  {
    title: "5 Daily Habits to Improve Your Mental Health",
    excerpt: "Simple yet powerful practices you can incorporate into your daily routine to boost your mental wellness and resilience.",
    category: "Self-Care",
    author: "Dr. Sarah Chen",
    readTime: "5 min read",
    date: "Feb 5, 2026",
    slug: "daily-habits-mental-health",
  },
  {
    title: "Understanding Anxiety: Signs, Causes, and Coping Strategies",
    excerpt: "Learn to recognize anxiety symptoms and discover evidence-based techniques to manage them effectively.",
    category: "Anxiety",
    author: "Dr. Michael Ross",
    readTime: "8 min read",
    date: "Feb 3, 2026",
    slug: "understanding-anxiety",
  },
  {
    title: "The Power of Mindfulness in Managing Stress",
    excerpt: "Explore how mindfulness meditation can transform your relationship with stress and improve your overall well-being.",
    category: "Mindfulness",
    author: "Dr. Emily Park",
    readTime: "6 min read",
    date: "Feb 1, 2026",
    slug: "mindfulness-stress-management",
  },
];

const categoryColors: Record<string, string> = {
  "Self-Care": "bg-sage-light text-sage-dark",
  "Anxiety": "bg-lavender text-lavender-dark",
  "Mindfulness": "bg-sky-light text-sky",
};

export function BlogPreviewSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wellness">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Resources
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Latest from Our Blog
            </h2>
          </div>
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/resources/${article.slug}`} className="block h-full">
                <div className="card-wellness overflow-hidden h-full group">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-sage-light via-sky-light to-lavender" />
                  
                  <div className="p-6">
                    {/* Category */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[article.category] || "bg-muted text-muted-foreground"}`}>
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
