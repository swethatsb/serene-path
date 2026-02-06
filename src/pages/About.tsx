import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Heart, Target, Eye, Award, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every client with empathy and understanding, creating a safe space for healing.",
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description: "Your privacy is sacred. All sessions and information are kept strictly confidential.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Mental health care should be available to everyone, regardless of background or circumstance.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our therapists are highly qualified professionals committed to evidence-based practices.",
  },
];

const About = () => {
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
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dedicated to Your Mental Wellness Journey
              </h1>
              <p className="text-lg text-muted-foreground">
                MindfulPath was founded with a simple mission: to make quality mental health care 
                accessible, compassionate, and effective for everyone.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="container-wellness">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2020, MindfulPath emerged from a vision to transform how people 
                    access and experience mental health care. Our founders, experienced mental 
                    health professionals, recognized the barriers many face in seeking help.
                  </p>
                  <p>
                    Today, we've grown into a trusted platform connecting thousands of individuals 
                    with qualified therapists. Our approach combines clinical expertise with 
                    technological innovation to deliver personalized, effective care.
                  </p>
                  <p>
                    We believe that everyone deserves access to mental wellness support, and we're 
                    committed to breaking down the stigma surrounding mental health.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-sage-light via-sky-light to-lavender rounded-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-sage-light">
          <div className="container-wellness">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-wellness p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, compassionate, and evidence-based mental health care that 
                  empowers individuals to achieve lasting wellness and live their fullest lives.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-wellness p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-light flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-sky" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where mental health care is universally accessible, free from stigma, 
                  and integrated seamlessly into everyday life for people of all backgrounds.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-wellness">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at MindfulPath.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-wellness p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding bg-cream">
          <div className="container-wellness text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certified & Trusted
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our platform and therapists are fully licensed, certified, and committed to 
                maintaining the highest standards of professional practice.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {["APA Certified", "HIPAA Compliant", "Licensed Therapists", "Secure Platform"].map((badge) => (
                  <div key={badge} className="px-6 py-3 bg-card rounded-full border border-border text-sm font-medium text-foreground">
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
