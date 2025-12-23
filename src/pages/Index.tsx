import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Award, Headphones, Compass, Leaf, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { TourCard } from "@/components/cards/TourCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Layout } from "@/components/layout/Layout";

import heroImage from "@/assets/hero-beach.jpg";
import sigiriyaImage from "@/assets/sigiriya.jpg";
import ellaImage from "@/assets/ella.jpg";
import galleImage from "@/assets/galle.jpg";
import kandyImage from "@/assets/kandy.jpg";
import yalaImage from "@/assets/yala-safari.jpg";
import surfingImage from "@/assets/surfing.jpg";
import whaleImage from "@/assets/whale-watching.jpg";

const destinations = [
  {
    name: "Sigiriya",
    image: sigiriyaImage,
    description: "Ancient rock fortress rising majestically above the jungle",
    slug: "sigiriya",
  },
  {
    name: "Ella",
    image: ellaImage,
    description: "Scenic hill country with iconic train rides and tea plantations",
    slug: "ella",
  },
  {
    name: "Galle",
    image: galleImage,
    description: "Historic Dutch fort city with colonial charm",
    slug: "galle",
  },
  {
    name: "Kandy",
    image: kandyImage,
    description: "Sacred city of temples and rich cultural heritage",
    slug: "kandy",
  },
];

const tours = [
  {
    name: "Cultural Triangle Explorer",
    image: sigiriyaImage,
    description: "Discover ancient cities, sacred temples, and UNESCO World Heritage sites",
    duration: "7 Days",
    groupSize: "2-12",
    price: 899,
    slug: "cultural-triangle",
  },
  {
    name: "Wildlife Safari Adventure",
    image: yalaImage,
    description: "Encounter leopards, elephants, and exotic birds in their natural habitat",
    duration: "5 Days",
    groupSize: "2-8",
    price: 749,
    slug: "wildlife-safari",
  },
  {
    name: "Coastal Paradise Escape",
    image: galleImage,
    description: "Beach hopping, whale watching, and coastal heritage exploration",
    duration: "6 Days",
    groupSize: "2-10",
    price: 799,
    slug: "coastal-paradise",
  },
];

const experiences = [
  {
    name: "Surfing Adventures",
    image: surfingImage,
    description: "Ride world-class waves at Arugam Bay and Weligama",
    slug: "surfing",
  },
  {
    name: "Wildlife Safaris",
    image: yalaImage,
    description: "Spot leopards, elephants, and exotic wildlife",
    slug: "wildlife-safari",
  },
  {
    name: "Whale Watching",
    image: whaleImage,
    description: "Witness majestic blue whales off Mirissa coast",
    slug: "whale-watching",
  },
  {
    name: "Cultural Tours",
    image: kandyImage,
    description: "Explore ancient temples and living traditions",
    slug: "cultural-tours",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    quote: "Endless Summer made our Sri Lanka trip absolutely magical. Every detail was perfectly planned, and our guide was incredibly knowledgeable. We'll definitely be back!",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    country: "Australia",
    quote: "The wildlife safari exceeded all expectations. Seeing leopards in Yala was a dream come true. The team's local expertise made all the difference.",
    rating: 5,
  },
  {
    name: "Emma & James",
    country: "Canada",
    quote: "Our honeymoon was perfect thanks to Endless Summer. The private tours, luxurious accommodations, and romantic sunset dinners were unforgettable.",
    rating: 5,
  },
];

const features = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Our guides are born and raised in Sri Lanka with deep knowledge of hidden gems.",
  },
  {
    icon: Compass,
    title: "Custom Itineraries",
    description: "Every trip is tailored to your interests, pace, and travel style.",
  },
  {
    icon: Award,
    title: "Trusted Guides",
    description: "Professional, certified guides who speak multiple languages.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your entire journey.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sri Lanka tropical beach at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-6 opacity-90 animate-fade-up">
              Discover Sri Lanka
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-up stagger-1">
              Endless Summer
              <span className="block text-secondary">Sri Lanka</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-2">
              Experience the magic of tropical beaches, ancient temples, lush mountains, and incredible wildlife with expertly crafted journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/tours">
                  Explore Tours
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/plan-trip">Plan Your Trip</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/80 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="bg-gradient-warm">
        <SectionHeader
          subtitle="Why Choose Us"
          title="Your Journey, Our Passion"
          description="We don't just plan trips—we craft experiences that transform the way you see the world."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`animate-fade-up stagger-${index + 1}`}
            />
          ))}
        </div>
      </Section>

      {/* Popular Destinations */}
      <Section>
        <SectionHeader
          subtitle="Destinations"
          title="Explore Sri Lanka"
          description="From misty mountains to sun-kissed beaches, discover the diverse landscapes that make Sri Lanka truly unique."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} {...destination} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/destinations">
              View All Destinations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Featured Tours */}
      <Section className="bg-muted">
        <SectionHeader
          subtitle="Tours & Packages"
          title="Handcrafted Journeys"
          description="Carefully designed itineraries that showcase the best of Sri Lanka while respecting local culture and environment."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.slug} {...tour} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/tours">
              Browse All Tours
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Experiences */}
      <Section>
        <SectionHeader
          subtitle="Experiences"
          title="Adventures Await"
          description="Immerse yourself in unforgettable activities that bring you closer to nature and culture."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.slug} {...experience} />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gradient-warm">
        <SectionHeader
          subtitle="Testimonials"
          title="What Travelers Say"
          description="Real stories from real travelers who experienced the magic of Sri Lanka with us."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Let us help you plan the perfect Sri Lankan getaway. Our travel experts are here to create your dream itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sunset" size="xl" asChild>
              <Link to="/plan-trip">
                Plan Your Trip
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/50"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
