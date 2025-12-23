import { useState } from "react";
import { Calendar, Users, DollarSign, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/ui/section";
import { Layout } from "@/components/layout/Layout";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

import heroImage from "@/assets/hero-beach.jpg";

const interests = [
  "Beach & Relaxation",
  "Wildlife & Safari",
  "Cultural Heritage",
  "Adventure & Hiking",
  "Surfing",
  "Whale Watching",
  "Ayurveda & Wellness",
  "Photography",
  "Food & Culinary",
  "Honeymoon",
];

const budgetRanges = [
  "$1,000 - $2,000",
  "$2,000 - $3,500",
  "$3,500 - $5,000",
  "$5,000+",
];

const PlanTrip = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    travelers: "2",
    budget: "",
    interests: [] as string[],
    specialRequests: "",
  });

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Trip Request Submitted!",
      description: "Our travel experts will contact you within 24 hours with a custom itinerary.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Plan your trip"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Plan Your Trip
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Tell us your dream vacation and we'll make it happen
          </p>
        </div>
      </section>

      {/* Trip Planner Form */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Custom Trip Request
              </h2>
              <p className="text-muted-foreground">
                Share your preferences and our experts will create a personalized itinerary just for you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Travel Dates */}
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Travel Dates
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Arrival Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) =>
                        setFormData({ ...formData, arrivalDate: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Departure Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) =>
                        setFormData({ ...formData, departureDate: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Travelers *
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="20"
                      value={formData.travelers}
                      onChange={(e) =>
                        setFormData({ ...formData, travelers: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Budget Range (per person)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget })}
                      className={cn(
                        "px-5 py-2.5 rounded-lg text-sm font-medium transition-all",
                        formData.budget === budget
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Interests (select all that apply)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                        formData.interests.includes(interest)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Requests or Notes
                </label>
                <Textarea
                  placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific experiences you're hoping for..."
                  rows={5}
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequests: e.target.value })
                  }
                />
              </div>

              {/* Submit */}
              <Button type="submit" variant="sunset" size="xl" className="w-full">
                <Send className="w-5 h-5" />
                Submit Trip Request
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We'll respond with a custom itinerary within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default PlanTrip;
