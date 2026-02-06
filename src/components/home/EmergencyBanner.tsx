import { motion } from "framer-motion";
import { Phone, AlertTriangle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function EmergencyBanner() {
  return (
    <section className="bg-destructive/5 border-y border-destructive/20">
      <div className="container-wellness py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                Need Immediate Help?
              </h3>
              <p className="text-sm text-muted-foreground">
                If you're in crisis or experiencing thoughts of self-harm, please reach out immediately.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="tel:988"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-destructive text-destructive-foreground rounded-full font-medium hover:bg-destructive/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call 988 (Suicide Prevention)
            </a>
            <Link 
              to="/crisis"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full font-medium text-foreground hover:bg-muted transition-colors"
            >
              Crisis Resources
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
