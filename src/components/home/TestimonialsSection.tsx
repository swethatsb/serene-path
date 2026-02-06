import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Marketing Professional",
    content: "MindfulPath helped me overcome my anxiety and find balance in my hectic work life. My therapist was incredibly understanding and equipped me with practical coping strategies.",
    rating: 5,
    image: null,
  },
  {
    name: "James K.",
    role: "University Student",
    content: "I was struggling with academic pressure and depression. The therapy sessions gave me tools to manage stress and improved my confidence. I'm now thriving in my studies.",
    rating: 5,
    image: null,
  },
  {
    name: "Emily & David",
    role: "Married Couple",
    content: "Couples counselling transformed our relationship. We learned to communicate better and rediscovered why we fell in love. Highly recommend for any couple facing challenges.",
    rating: 5,
    image: null,
  },
  {
    name: "Michael R.",
    role: "Business Owner",
    content: "The corporate wellness program we implemented has significantly improved team morale and reduced burnout. Our employees feel more supported than ever.",
    rating: 5,
    image: null,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-wellness">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stories of Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real people who found their path to mental wellness with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-wellness p-6 lg:p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "10,000+", label: "Happy Clients" },
            { number: "500+", label: "Expert Therapists" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Would Recommend" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
