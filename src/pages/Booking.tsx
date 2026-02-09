import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, ChevronLeft, ChevronRight, Clock, MapPin, User, Video, Phone, MessageSquare, PartyPopper } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  { id: "individual", name: "Individual Therapy", duration: "50 min", price: "$120", description: "One-on-one sessions for personal growth" },
  { id: "anxiety", name: "Anxiety & Depression", duration: "50 min", price: "$120", description: "Specialized treatment for mood disorders" },
  { id: "relationship", name: "Relationship Counselling", duration: "60 min", price: "$150", description: "Couples therapy and relationship issues" },
  { id: "family", name: "Family Therapy", duration: "75 min", price: "$180", description: "Family dynamics and communication" },
  { id: "career", name: "Career Counselling", duration: "45 min", price: "$100", description: "Professional development guidance" },
  { id: "stress", name: "Stress Management", duration: "50 min", price: "$120", description: "Coping strategies and resilience" },
];

const therapists = [
  { id: 1, name: "Dr. Sarah Mitchell", specialty: "Anxiety & Depression", experience: "12 years", avatar: "SM", rating: 4.9, available: true },
  { id: 2, name: "Dr. James Chen", specialty: "Relationship Therapy", experience: "8 years", avatar: "JC", rating: 4.8, available: true },
  { id: 3, name: "Dr. Emily Roberts", specialty: "Family Therapy", experience: "15 years", avatar: "ER", rating: 4.9, available: true },
  { id: 4, name: "Dr. Michael Brown", specialty: "Career Counselling", experience: "10 years", avatar: "MB", rating: 4.7, available: false },
  { id: 5, name: "Dr. Lisa Anderson", specialty: "Stress Management", experience: "9 years", avatar: "LA", rating: 4.8, available: true },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
];

const consultationModes = [
  { id: "video", name: "Video Call", icon: Video, description: "Face-to-face online session" },
  { id: "audio", name: "Audio Call", icon: Phone, description: "Voice-only session" },
  { id: "chat", name: "Chat Session", icon: MessageSquare, description: "Text-based therapy" },
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTherapist, setSelectedTherapist] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const totalSteps = 5;

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService !== null;
      case 2: return selectedTherapist !== null;
      case 3: return selectedDate !== undefined;
      case 4: return selectedTime !== null && selectedMode !== null;
      default: return true;
    }
  };

  const nextStep = () => {
    if (canProceed() && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getSelectedServiceDetails = () => services.find(s => s.id === selectedService);
  const getSelectedTherapistDetails = () => therapists.find(t => t.id === selectedTherapist);

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {bookingConfirmed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
              >
                <PartyPopper className="w-10 h-10 text-primary" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-6">Your appointment has been successfully scheduled.</p>
              <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto mb-8 space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reference</span>
                  <span className="font-semibold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service</span>
                  <span className="font-medium">{getSelectedServiceDetails()?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Therapist</span>
                  <span className="font-medium">{getSelectedTherapistDetails()?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">{selectedDate && format(selectedDate, "MMM d, yyyy")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mode</span>
                  <span className="font-medium">{consultationModes.find(m => m.id === selectedMode)?.name}</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-primary">{getSelectedServiceDetails()?.price}</span>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => window.location.href = "/"}>
                  Back to Home
                </Button>
                <Button onClick={() => {
                  setBookingConfirmed(false);
                  setStep(1);
                  setSelectedService(null);
                  setSelectedTherapist(null);
                  setSelectedDate(undefined);
                  setSelectedTime(null);
                  setSelectedMode(null);
                }}>
                  Book Another Session
                </Button>
              </div>
            </motion.div>
          ) : (
          <>
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors",
                    s < step ? "bg-primary text-primary-foreground" :
                    s === step ? "bg-primary text-primary-foreground" :
                    "bg-muted text-muted-foreground"
                  )}>
                    {s < step ? <Check className="w-5 h-5" /> : s}
                  </div>
                  {s < 5 && (
                    <div className={cn(
                      "w-full h-1 mx-2 rounded hidden sm:block",
                      s < step ? "bg-primary" : "bg-muted"
                    )} style={{ width: "60px" }} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Service</span>
              <span>Therapist</span>
              <span>Date</span>
              <span>Time</span>
              <span>Confirm</span>
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Select a Service</h2>
                  <p className="text-muted-foreground mb-6">Choose the type of therapy that best fits your needs</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Card 
                        key={service.id}
                        className={cn(
                          "cursor-pointer transition-all hover:shadow-md",
                          selectedService === service.id && "ring-2 ring-primary bg-primary/5"
                        )}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {service.duration}
                            </span>
                            <span className="font-semibold text-primary">{service.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Therapist Selection */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Choose Your Therapist</h2>
                  <p className="text-muted-foreground mb-6">Select a therapist based on your preferences</p>
                  
                  <div className="space-y-4">
                    {therapists.map((therapist) => (
                      <Card 
                        key={therapist.id}
                        className={cn(
                          "cursor-pointer transition-all hover:shadow-md",
                          !therapist.available && "opacity-50 cursor-not-allowed",
                          selectedTherapist === therapist.id && "ring-2 ring-primary bg-primary/5"
                        )}
                        onClick={() => therapist.available && setSelectedTherapist(therapist.id)}
                      >
                        <CardContent className="flex items-center gap-4 p-4">
                          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg">
                            {therapist.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{therapist.name}</h3>
                              {!therapist.available && (
                                <span className="text-xs bg-muted px-2 py-1 rounded">Unavailable</span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{therapist.specialty}</p>
                            <div className="flex items-center gap-4 mt-1 text-sm">
                              <span>{therapist.experience} experience</span>
                              <span className="flex items-center gap-1">
                                <span className="text-accent-foreground">★</span>
                                {therapist.rating}
                              </span>
                            </div>
                          </div>
                          {selectedTherapist === therapist.id && (
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                              <Check className="w-5 h-5 text-primary-foreground" />
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Date Selection */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Select a Date</h2>
                  <p className="text-muted-foreground mb-6">Choose your preferred appointment date</p>
                  
                  <Card className="max-w-md mx-auto">
                    <CardContent className="p-4 flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="pointer-events-auto"
                      />
                    </CardContent>
                  </Card>
                  
                  {selectedDate && (
                    <p className="text-center mt-4 text-primary font-medium">
                      Selected: {format(selectedDate, "EEEE, MMMM d, yyyy")}
                    </p>
                  )}
                </div>
              )}

              {/* Step 4: Time & Mode Selection */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Select Time & Mode</h2>
                  <p className="text-muted-foreground mb-6">Choose your preferred time slot and consultation mode</p>
                  
                  <div className="space-y-8">
                    {/* Time Slots */}
                    <div>
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Available Time Slots
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className="text-sm"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Consultation Mode */}
                    <div>
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Consultation Mode
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {consultationModes.map((mode) => (
                          <div
                            key={mode.id}
                            role="button"
                            tabIndex={0}
                            className={cn(
                              "cursor-pointer transition-all hover:shadow-md rounded-lg border bg-card text-card-foreground shadow-sm p-4 text-center",
                              selectedMode === mode.id && "ring-2 ring-primary bg-primary/5"
                            )}
                            onClick={() => setSelectedMode(mode.id)}
                            onKeyDown={(e) => e.key === "Enter" && setSelectedMode(mode.id)}
                          >
                            <mode.icon className="w-8 h-8 mx-auto mb-2 text-primary pointer-events-none" />
                            <h4 className="font-medium pointer-events-none">{mode.name}</h4>
                            <p className="text-xs text-muted-foreground pointer-events-none">{mode.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Confirmation */}
              {step === 5 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Confirm Your Booking</h2>
                  <p className="text-muted-foreground mb-6">Review your appointment details</p>
                  
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Service</p>
                          <p className="font-semibold">{getSelectedServiceDetails()?.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {getSelectedServiceDetails()?.duration} • {getSelectedServiceDetails()?.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                          {getSelectedTherapistDetails()?.avatar}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Therapist</p>
                          <p className="font-semibold">{getSelectedTherapistDetails()?.name}</p>
                          <p className="text-sm text-muted-foreground">{getSelectedTherapistDetails()?.specialty}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <CalendarIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Date & Time</p>
                          <p className="font-semibold">
                            {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                          </p>
                          <p className="text-sm text-muted-foreground">{selectedTime}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          {selectedMode === "video" && <Video className="w-6 h-6" />}
                          {selectedMode === "audio" && <Phone className="w-6 h-6" />}
                          {selectedMode === "chat" && <MessageSquare className="w-6 h-6" />}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Consultation Mode</p>
                          <p className="font-semibold">
                            {consultationModes.find(m => m.id === selectedMode)?.name}
                          </p>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4 mt-6">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Total Amount</span>
                          <span className="text-xl font-bold text-primary">
                            {getSelectedServiceDetails()?.price}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            
            {step < 5 ? (
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                className="flex items-center gap-2"
                onClick={() => {
                  setBookingRef("MWP-" + Math.random().toString(36).substring(2, 8).toUpperCase());
                  setBookingConfirmed(true);
                }}
              >
                <Check className="w-4 h-4" />
                Confirm Booking
              </Button>
            )}
          </div>
        </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
