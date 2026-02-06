import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Users, Briefcase, GraduationCap, Building2, Home, Baby, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your unique needs and goals. Our therapists use evidence-based approaches to help you navigate life's challenges.",
    benefits: ["Personalized treatment plans", "Flexible scheduling", "Multiple therapy modalities", "Progress tracking"],
    whoItHelps: "Anyone seeking personal growth, coping with life transitions, or working through specific challenges.",
    methods: ["Cognitive Behavioral Therapy (CBT)", "Mindfulness-Based Therapy", "Psychodynamic Therapy", "Solution-Focused Therapy"],
    path: "/services/individual",
    color: "sage",
  },
  {
    icon: Heart,
    title: "Anxiety & Depression Therapy",
    description: "Specialized treatment for anxiety disorders and depression using proven therapeutic techniques to help you regain control of your life.",
    benefits: ["Evidence-based treatment", "Coping skill development", "Symptom management", "Long-term recovery support"],
    whoItHelps: "Individuals experiencing persistent worry, panic attacks, low mood, loss of interest, or hopelessness.",
    methods: ["CBT for Anxiety", "Behavioral Activation", "Exposure Therapy", "Interpersonal Therapy"],
    path: "/services/anxiety-depression",
    color: "lavender",
  },
  {
    icon: Users,
    title: "Relationship Counselling",
    description: "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection with your partner.",
    benefits: ["Improved communication", "Conflict resolution skills", "Rebuilding trust", "Deeper intimacy"],
    whoItHelps: "Couples facing communication issues, trust problems, major life transitions, or seeking to strengthen their bond.",
    methods: ["Gottman Method", "Emotionally Focused Therapy", "Imago Relationship Therapy"],
    path: "/services/relationship",
    color: "peach",
  },
  {
    icon: Home,
    title: "Family Therapy",
    description: "Navigate family dynamics, improve communication between family members, and build stronger, healthier relationships together.",
    benefits: ["Family harmony", "Better understanding", "Healthy boundaries", "Collective healing"],
    whoItHelps: "Families dealing with conflict, major changes, behavioral issues, or seeking to improve relationships.",
    methods: ["Structural Family Therapy", "Strategic Family Therapy", "Narrative Family Therapy"],
    path: "/services/family",
    color: "sky",
  },
  {
    icon: Briefcase,
    title: "Career & Professional Counselling",
    description: "Navigate career transitions, workplace stress, professional challenges, and find fulfillment in your work life.",
    benefits: ["Career clarity", "Work-life balance", "Stress management", "Professional growth"],
    whoItHelps: "Professionals facing burnout, career transitions, workplace conflicts, or seeking direction.",
    methods: ["Career Assessment", "Stress Management Training", "Executive Coaching"],
    path: "/services/career",
    color: "cream",
  },
  {
    icon: GraduationCap,
    title: "Academic Counselling",
    description: "Support for students facing academic pressure, exam anxiety, and the unique challenges of educational environments.",
    benefits: ["Reduced exam anxiety", "Better focus", "Academic confidence", "Healthy study habits"],
    whoItHelps: "Students at any level struggling with academic stress, performance anxiety, or educational challenges.",
    methods: ["Academic Coaching", "Anxiety Management", "Study Skills Training"],
    path: "/services/academic",
    color: "sage",
  },
  {
    icon: Building2,
    title: "Corporate Wellness Programs",
    description: "Comprehensive employee wellness programs designed to boost productivity, reduce burnout, and create healthier workplaces.",
    benefits: ["Reduced absenteeism", "Improved productivity", "Better team morale", "Lower healthcare costs"],
    whoItHelps: "Organizations of all sizes looking to support employee mental health and well-being.",
    methods: ["EAP Programs", "Wellness Workshops", "Stress Management Training", "Leadership Coaching"],
    path: "/services/corporate",
    color: "lavender",
  },
  {
    icon: Baby,
    title: "Child & Adolescent Therapy",
    description: "Specialized therapy for children and teenagers dealing with emotional, behavioral, or developmental challenges.",
    benefits: ["Age-appropriate care", "Family involvement", "Developmental support", "Safe expression"],
    whoItHelps: "Children and teens facing anxiety, depression, behavioral issues, trauma, or social difficulties.",
    methods: ["Play Therapy", "Art Therapy", "Family Systems Therapy", "CBT for Youth"],
    path: "/services/youth",
    color: "peach",
  },
  {
    icon: Zap,
    title: "Crisis Intervention",
    description: "Immediate support during mental health crises, providing stabilization and safety planning when you need it most.",
    benefits: ["Rapid response", "Safety planning", "Stabilization", "Ongoing support"],
    whoItHelps: "Individuals experiencing acute mental health crises or emotional emergencies.",
    methods: ["Crisis Stabilization", "Safety Planning", "Brief Intervention", "Resource Connection"],
    path: "/services/crisis",
    color: "sky",
  },
];

const colorClasses = {
  sage: "bg-sage-light text-sage-dark",
  lavender: "bg-lavender text-lavender-dark",
  peach: "bg-peach text-peach-dark",
  sky: "bg-sky-light text-sky",
  cream: "bg-cream-dark text-foreground",
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
          <div className="container-wellness">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Comprehensive Mental Health Care
              </h1>
              <p className="text-lg text-muted-foreground">
                We offer a wide range of therapeutic services designed to support your mental wellness 
                journey, no matter where you are in life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-wellness">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card-wellness p-6 md:p-8 lg:p-10"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center shrink-0`}>
                          <service.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-semibold text-foreground">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">Who It Helps</h4>
                          <p className="text-sm text-muted-foreground">{service.whoItHelps}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">Methods Used</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {service.methods.slice(0, 3).map((method) => (
                              <li key={method}>• {method}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Link 
                        to="/booking" 
                        className="inline-flex items-center gap-2 btn-primary text-sm"
                      >
                        Book Appointment
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Benefits */}
                    <div className="bg-muted/50 rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
