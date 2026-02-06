import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wellness relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-sky-light to-lavender/30 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <Sparkles className="w-8 h-8 text-primary/30" />
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
            <Sparkles className="w-6 h-6 text-sky/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Start Your Journey Today
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Take the First Step Towards a{" "}
              <span className="text-gradient">Healthier Mind?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands who have transformed their lives through compassionate, professional therapy. 
              Your well-being is worth investing in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary group" asChild>
                <Link to="/booking">
                  Book Your First Session
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/assessment">
                  Take Free Assessment
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              100% confidential • No commitment required • Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
