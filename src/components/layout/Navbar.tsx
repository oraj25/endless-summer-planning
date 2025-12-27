import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Destinations", path: "/destinations" },
  { name: "Tours", path: "/tours" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span
            className={cn(
              "font-display text-2xl font-bold transition-colors",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}
          >
            Endless Summer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? isScrolled
                    ? "text-primary"
                    : "text-primary-foreground"
                  : isScrolled
                  ? "text-foreground/80"
                  : "text-primary-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant={isScrolled ? "outline" : "heroOutline"}
            size="sm"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            className="gap-2"
            asChild
          >
            <a href="https://wa.me/+94770719741" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[64px] bg-background/98 backdrop-blur-md transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen py-6" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-3 text-lg font-medium border-b border-border transition-colors",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="whatsapp" size="lg" className="gap-2" asChild>
              <a href="https://wa.me/+94770719741" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
