import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Layout } from "@/components/layout/Layout";

import galleImage from "@/assets/galle.jpg";

const Contact = () => {
  const phoneNumber = "+94770719741";
  const email = "esummertours@gmail.com";
  const address = "58/23, Somathalagala 3rd Lane, Gangodawilla, Nugegoda, Sri Lanka";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const instagramUrl = "https://www.instagram.com/endless_summer_tours";
  const facebookUrl = "https://www.facebook.com/share/1EsZaNbGtG/?mibextid=wwXIfr";

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
            Reach out directly - we'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Get in Touch Directly
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We prefer personal connections! Reach out through any of these channels and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp - Primary */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-2xl p-8 text-center transition-all hover:scale-[1.02] group"
            >
              <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-4">
                Fastest response - chat with us anytime!
              </p>
              <span className="text-[#25D366] font-semibold">+94 77 071 9741</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-2xl p-8 text-center transition-all hover:scale-[1.02] group"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground mb-4">
                Send us your detailed inquiries
              </p>
              <span className="text-primary font-semibold">{email}</span>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 hover:from-[#833AB4]/20 hover:via-[#E1306C]/20 hover:to-[#F77737]/20 border border-[#E1306C]/30 rounded-2xl p-8 text-center transition-all hover:scale-[1.02] group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Instagram
              </h3>
              <p className="text-muted-foreground mb-4">
                Follow us & send a DM
              </p>
              <span className="text-[#E1306C] font-semibold">@endless_summer_tours</span>
            </a>

            {/* Facebook */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 rounded-2xl p-8 text-center transition-all hover:scale-[1.02] group"
            >
              <div className="w-16 h-16 rounded-full bg-[#1877F2] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Facebook
              </h3>
              <p className="text-muted-foreground mb-4">
                Connect with us on Facebook
              </p>
              <span className="text-[#1877F2] font-semibold">Endless Summer Tours</span>
            </a>
          </div>

          {/* Phone Call */}
          <div className="bg-muted rounded-2xl p-8 text-center mb-12">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Prefer a Call?
            </h3>
            <p className="text-muted-foreground mb-4">
              Give us a ring and speak to our travel experts directly
            </p>
            <a href={`tel:${phoneNumber}`} className="text-primary font-bold text-2xl hover:underline">
              +94 77 071 9741
            </a>
          </div>

          {/* Address */}
          <div className="bg-card rounded-2xl p-8 text-center shadow-card">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Visit Our Office
            </h3>
            <p className="text-muted-foreground">
              {address}
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;