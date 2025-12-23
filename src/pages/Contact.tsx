import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/ui/section";
import { Layout } from "@/components/layout/Layout";
import { toast } from "@/hooks/use-toast";

import galleImage from "@/assets/galle.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Galle Road", "Colombo 03, Sri Lanka"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+94 11 234 5678", "+94 77 123 4567"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@endlesssummer.lk", "bookings@endlesssummer.lk"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleImage}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch today!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Send a Message
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form and we'll respond within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
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
                    Email Address
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
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    placeholder="Tour inquiry"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell us about your travel plans..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Have questions? We're here to help plan your perfect Sri Lankan adventure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-muted rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-tropical/10 rounded-2xl p-8 text-center">
              <MessageCircle className="w-12 h-12 text-tropical mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Quick Response via WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                For faster assistance, reach us on WhatsApp anytime.
              </p>
              <Button variant="whatsapp" size="lg">
                <Phone className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section className="!pt-0">
        <div className="h-[400px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Interactive map would go here</p>
            <p className="text-sm">123 Galle Road, Colombo 03, Sri Lanka</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
