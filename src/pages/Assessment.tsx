import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Brain, Heart, Battery, Flame, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const assessments = [
  {
    id: "stress",
    icon: Battery,
    title: "Stress Level Assessment",
    description: "Evaluate your current stress levels and learn about healthy coping mechanisms.",
    duration: "5 min",
    questions: 10,
    color: "sage",
  },
  {
    id: "anxiety",
    icon: Brain,
    title: "Anxiety Screening",
    description: "Identify signs of anxiety and understand when professional support might help.",
    duration: "7 min",
    questions: 15,
    color: "lavender",
  },
  {
    id: "depression",
    icon: Heart,
    title: "Depression Screening",
    description: "Assess symptoms of depression using validated clinical screening tools.",
    duration: "8 min",
    questions: 12,
    color: "peach",
  },
  {
    id: "burnout",
    icon: Flame,
    title: "Burnout Assessment",
    description: "Measure your burnout levels across emotional, physical, and mental dimensions.",
    duration: "6 min",
    questions: 14,
    color: "sky",
  },
];

const stressQuestions = [
  "In the last month, how often have you felt upset because of something unexpected?",
  "How often have you felt unable to control important things in your life?",
  "How often have you felt nervous or stressed?",
  "How often have you felt confident in your ability to handle personal problems?",
  "How often have you felt things were going your way?",
];

const options = [
  { value: 0, label: "Never" },
  { value: 1, label: "Almost Never" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Fairly Often" },
  { value: 4, label: "Very Often" },
];

const colorClasses = {
  sage: "bg-sage-light text-sage-dark",
  lavender: "bg-lavender text-lavender-dark",
  peach: "bg-peach text-peach-dark",
  sky: "bg-sky-light text-sky",
};

const Assessment = () => {
  const [activeAssessment, setActiveAssessment] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleStartAssessment = (id: string) => {
    setActiveAssessment(id);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestion < stressQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = stressQuestions.length * 4;
    return Math.round((total / max) * 100);
  };

  const getResultLevel = () => {
    const score = calculateScore();
    if (score < 30) return { level: "Low", color: "text-primary", message: "Your stress levels appear to be manageable." };
    if (score < 60) return { level: "Moderate", color: "text-yellow-600", message: "You may benefit from stress management techniques." };
    return { level: "High", color: "text-destructive", message: "Consider speaking with a professional for support." };
  };

  const resetAssessment = () => {
    setActiveAssessment(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

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
                Self Assessment
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Understand Your Mental Wellness
              </h1>
              <p className="text-lg text-muted-foreground">
                Take our confidential assessments to better understand your mental health 
                and receive personalized recommendations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Assessment Selection or Active Assessment */}
        <section className="section-padding bg-background">
          <div className="container-wellness">
            {!activeAssessment ? (
              /* Assessment Cards */
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                {assessments.map((assessment, index) => (
                  <motion.div
                    key={assessment.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card-wellness p-6 lg:p-8"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${colorClasses[assessment.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                      <assessment.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {assessment.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {assessment.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>{assessment.duration}</span>
                      <span>•</span>
                      <span>{assessment.questions} questions</span>
                    </div>
                    <Button 
                      onClick={() => handleStartAssessment(assessment.id)}
                      className="w-full btn-primary"
                    >
                      Start Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : showResults ? (
              /* Results */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="card-wellness p-8 lg:p-12">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Assessment Complete
                  </h2>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Your Stress Level</p>
                    <p className={`text-4xl font-bold ${getResultLevel().color} mb-2`}>
                      {getResultLevel().level}
                    </p>
                    <Progress value={calculateScore()} className="h-3 mb-2" />
                    <p className="text-muted-foreground">{getResultLevel().message}</p>
                  </div>
                  <div className="space-y-3">
                    <Button asChild className="w-full btn-primary">
                      <Link to="/booking">Book a Session with a Therapist</Link>
                    </Button>
                    <Button variant="outline" onClick={resetAssessment} className="w-full">
                      Take Another Assessment
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Active Question */
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-2xl mx-auto"
              >
                <div className="card-wellness p-8 lg:p-12">
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>Question {currentQuestion + 1} of {stressQuestions.length}</span>
                      <span>{Math.round(((currentQuestion + 1) / stressQuestions.length) * 100)}%</span>
                    </div>
                    <Progress value={((currentQuestion + 1) / stressQuestions.length) * 100} className="h-2" />
                  </div>

                  {/* Question */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-8">
                    {stressQuestions[currentQuestion]}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3">
                    {options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="w-full p-4 text-left rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={resetAssessment}
                    className="mt-6 text-sm text-muted-foreground hover:text-foreground"
                  >
                    ← Back to assessments
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="pb-16 px-4">
          <div className="container-wellness">
            <div className="bg-muted/50 rounded-2xl p-6 text-center max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> These assessments are for informational purposes only and are not 
                a substitute for professional diagnosis. If you're experiencing severe symptoms or having 
                thoughts of self-harm, please contact a crisis helpline or mental health professional immediately.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;
