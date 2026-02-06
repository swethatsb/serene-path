import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Users, Briefcase, GraduationCap, Building2 } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your unique needs, helping you navigate personal challenges and achieve mental wellness.",
    color: "sage",
    path: "/services/individual",
  },
  {
    icon: Heart,
    title: "Anxiety & Depression",
    description: "Evidence-based treatment for anxiety and depression, using CBT, mindfulness, and other proven therapeutic approaches.",
    color: "lavender",
    path: "/services/anxiety-depression",
  },
  {
    icon: Users,
    title: "Relationship Counselling",
    description: "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection.",
    color: "peach",
    path: "/services/relationship",
  },
  {
    icon: Briefcase,
    title: "Career Counselling",
    description: "Navigate career transitions, workplace stress, and professional challenges with expert guidance and support.",
    color: "sky",
    path: "/services/career",
  },
  {
    icon: GraduationCap,
    title: "Academic Support",
    description: "Help for students facing academic pressure, exam anxiety, and the unique challenges of educational environments.",
    color: "cream",
    path: "/services/academic",
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "Comprehensive employee wellness programs to boost productivity, reduce burnout, and create healthier workplaces.",
    color: "sage",
    path: "/services/corporate",
  },
];

const colorClasses = {
  sage: "bg-sage-light text-sage-dark",
  lavender: "bg-lavender text-lavender-dark",
  peach: "bg-peach text-peach-dark",
  sky: "bg-sky-light text-sky",
  cream: "bg-cream text-foreground",
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wellness">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of therapeutic services designed to support your mental wellness journey, 
            no matter where you are in life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.path} className="block h-full">
                <div className="card-wellness p-6 lg:p-8 h-full group">
                  <div className={`w-14 h-14 rounded-2xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-full transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
