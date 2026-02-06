import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Calendar, Languages, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const therapists = [
  {
    name: "Dr. Sarah Chen",
    title: "Clinical Psychologist",
    specializations: ["Anxiety", "Depression", "Trauma"],
    experience: 12,
    languages: ["English", "Mandarin"],
    methods: ["CBT", "EMDR", "Mindfulness"],
    rating: 4.9,
    reviews: 128,
    availability: "Mon, Wed, Fri",
    bio: "Dr. Chen specializes in anxiety and trauma recovery, using evidence-based approaches to help clients achieve lasting change.",
  },
  {
    name: "Dr. Michael Ross",
    title: "Licensed Therapist",
    specializations: ["Relationships", "Family Therapy", "Grief"],
    experience: 15,
    languages: ["English", "Spanish"],
    methods: ["Gottman Method", "EFT", "Family Systems"],
    rating: 4.8,
    reviews: 156,
    availability: "Tue, Thu, Sat",
    bio: "Dr. Ross is passionate about helping couples and families build stronger, healthier relationships through compassionate therapy.",
  },
  {
    name: "Dr. Emily Park",
    title: "Psychiatrist",
    specializations: ["Bipolar Disorder", "ADHD", "OCD"],
    experience: 10,
    languages: ["English", "Korean"],
    methods: ["Medication Management", "CBT", "DBT"],
    rating: 4.9,
    reviews: 89,
    availability: "Mon, Tue, Thu",
    bio: "Dr. Park combines psychiatric expertise with therapeutic skills to provide comprehensive care for complex mental health conditions.",
  },
  {
    name: "James Thompson",
    title: "Licensed Counselor",
    specializations: ["Career", "Stress", "Life Transitions"],
    experience: 8,
    languages: ["English"],
    methods: ["Solution-Focused", "Career Coaching", "CBT"],
    rating: 4.7,
    reviews: 72,
    availability: "Mon-Fri",
    bio: "James helps professionals navigate career challenges and life transitions with practical, goal-oriented counseling.",
  },
  {
    name: "Dr. Aisha Patel",
    title: "Clinical Psychologist",
    specializations: ["Children", "Adolescents", "Autism"],
    experience: 11,
    languages: ["English", "Hindi", "Gujarati"],
    methods: ["Play Therapy", "CBT for Youth", "ABA"],
    rating: 4.9,
    reviews: 94,
    availability: "Tue, Wed, Sat",
    bio: "Dr. Patel specializes in working with children and teens, creating safe spaces for young people to express and heal.",
  },
  {
    name: "Lisa Martinez",
    title: "Marriage & Family Therapist",
    specializations: ["Couples", "Premarital", "Divorce"],
    experience: 9,
    languages: ["English", "Spanish", "Portuguese"],
    methods: ["Gottman Method", "Imago", "Narrative Therapy"],
    rating: 4.8,
    reviews: 113,
    availability: "Wed, Thu, Fri",
    bio: "Lisa is dedicated to helping couples strengthen their bonds and navigate relationship challenges with empathy and expertise.",
  },
];

const Therapists = () => {
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
                Our Experts
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet Our Therapists
              </h1>
              <p className="text-lg text-muted-foreground">
                Our team of licensed, experienced mental health professionals is here to support 
                your journey to wellness with compassion and expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Therapists Grid */}
        <section className="section-padding bg-background">
          <div className="container-wellness">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {therapists.map((therapist, index) => (
                <motion.div
                  key={therapist.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-wellness overflow-hidden"
                >
                  {/* Avatar */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-sage-light via-sky-light to-lavender relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-card shadow-lg flex items-center justify-center">
                        <span className="font-display text-3xl text-primary">
                          {therapist.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Name & Title */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {therapist.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{therapist.title}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-semibold text-foreground">{therapist.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({therapist.reviews} reviews)</span>
                    </div>

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {therapist.specializations.map((spec) => (
                        <span key={spec} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="w-4 h-4" />
                        <span>{therapist.experience} years experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Languages className="w-4 h-4" />
                        <span>{therapist.languages.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{therapist.availability}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                      {therapist.bio}
                    </p>

                    {/* CTA */}
                    <Button className="w-full btn-primary" asChild>
                      <Link to="/booking">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Link>
                    </Button>
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

export default Therapists;
