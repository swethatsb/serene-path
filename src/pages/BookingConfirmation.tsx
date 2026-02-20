import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Check, CalendarPlus, Download, LayoutDashboard, Plus, PartyPopper } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface BookingData {
  bookingRef: string;
  service: { name: string; duration: string; price: string };
  therapist: { name: string; specialty: string; avatar: string };
  date: string;
  time: string;
  mode: string;
}

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state as BookingData | null;

  useEffect(() => {
    if (!booking) {
      navigate("/booking", { replace: true });
    }
  }, [booking, navigate]);

  if (!booking) return null;

  const handleAddToCalendar = () => {
    const dateObj = new Date(booking.date);
    const startDate = format(dateObj, "yyyyMMdd");
    const title = encodeURIComponent(`${booking.service.name} with ${booking.therapist.name}`);
    const details = encodeURIComponent(`Booking Ref: ${booking.bookingRef}\nMode: ${booking.mode}\nDuration: ${booking.service.duration}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${startDate}&details=${details}`;
    window.open(url, "_blank");
  };

  const handleDownloadInvoice = () => {
    const invoiceContent = `
INVOICE
=======
MindWell Pro - Therapy Booking

Booking Reference: ${booking.bookingRef}
Date: ${booking.date}
Time: ${booking.time}
Service: ${booking.service.name} (${booking.service.duration})
Therapist: ${booking.therapist.name}
Mode: ${booking.mode}
Amount: ${booking.service.price}
Status: PAID

Thank you for choosing MindWell Pro.
    `.trim();
    const blob = new Blob([invoiceContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `invoice-${booking.bookingRef}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
            >
              <PartyPopper className="w-10 h-10 text-primary" />
            </motion.div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Your Session Has Been Successfully Booked!
            </h1>
            <p className="text-muted-foreground mb-8">
              A confirmation email has been sent with your booking details.
            </p>

            {/* Booking Details Card */}
            <Card className="text-left mb-8">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Booking ID</span>
                  <span className="font-mono font-bold text-primary">{booking.bookingRef}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Service</span>
                  <span className="font-medium">{booking.service.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Therapist</span>
                  <span className="font-medium">{booking.therapist.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <span className="font-medium">{booking.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Time</span>
                  <span className="font-medium">{booking.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Consultation Mode</span>
                  <span className="font-medium">{booking.mode}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Payment Status</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                    Confirmed
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Paid</span>
                  <span className="text-xl font-bold text-primary">{booking.service.price}</span>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <Button variant="outline" onClick={handleAddToCalendar} className="flex items-center gap-2">
                <CalendarPlus className="w-4 h-4" />
                Add to Calendar
              </Button>
              <Button variant="outline" onClick={handleDownloadInvoice} className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Invoice
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <Button variant="secondary" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" />
                  Go to Dashboard
                </Link>
              </Button>
              <Button asChild>
                <Link to="/booking" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Book Another Session
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
