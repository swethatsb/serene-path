import { motion } from "framer-motion";
import { Search, Calendar, Video, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose Your Service",
    description: "Browse our range of services and find the support that matches your needs and goals.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Book an Appointment",
    description: "Select a convenient time and your preferred therapist. We'll handle the rest.",
  },
  {
    icon: Video,
    number: "03",
    title: "Attend Your Session",
    description: "Connect via video, audio, or chat from the comfort of your home or office.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Track Your Progress",
    description: "Monitor your mental wellness journey with personalized insights and resources.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-sage-light">
      <div className="container-wellness">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with MindfulPath is easy. Follow these simple steps to begin your wellness journey.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-y-1/2 z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card shadow-card flex items-center justify-center group-hover:shadow-hover transition-shadow">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number.slice(-1)}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
