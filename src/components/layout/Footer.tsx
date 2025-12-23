import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Destinations", path: "/destinations" },
    { name: "Tours & Packages", path: "/tours" },
    { name: "Experiences", path: "/experiences" },
    { name: "Gallery", path: "/gallery" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Travel Guide", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Cancellation Policy", path: "/cancellation" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold">Endless Summer</h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Your gateway to authentic Sri Lankan experiences. We craft unforgettable journeys that connect you with the heart of this beautiful island.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  123 Galle Road, Colombo 03, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+94112345678" className="text-primary-foreground/70 hover:text-primary-foreground">
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@endlesssummer.lk" className="text-primary-foreground/70 hover:text-primary-foreground">
                  hello@endlesssummer.lk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Endless Summer Sri Lanka. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
