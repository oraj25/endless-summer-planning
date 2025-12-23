import { Section, SectionHeader } from "@/components/ui/section";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Layout } from "@/components/layout/Layout";

import heroImage from "@/assets/hero-beach.jpg";

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
  {
    name: "Hans Mueller",
    country: "Germany",
    quote: "Outstanding service from start to finish. The cultural tours gave us authentic experiences you can't get from regular tourist agencies.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    country: "India",
    quote: "As someone who has traveled extensively, I can say Endless Summer is truly exceptional. Their attention to detail and local connections are unmatched.",
    rating: 5,
  },
  {
    name: "John & Lisa",
    country: "United States",
    quote: "We traveled with our teenage kids and everyone had an amazing time. The itinerary balanced adventure with relaxation perfectly.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Testimonials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Testimonials
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Hear from travelers who've experienced Sri Lanka with us
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <Section>
        <SectionHeader
          subtitle="What Travelers Say"
          title="Real Stories, Real Experiences"
          description="Don't just take our word for it. Here's what our guests have to say about their Sri Lankan adventures."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Testimonials;
