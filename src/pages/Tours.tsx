import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { TourCard } from "@/components/cards/TourCard";
import { Layout } from "@/components/layout/Layout";

import sigiriyaImage from "@/assets/sigiriya.jpg";
import ellaImage from "@/assets/ella.jpg";
import galleImage from "@/assets/galle.jpg";
import kandyImage from "@/assets/kandy.jpg";
import yalaImage from "@/assets/yala-safari.jpg";
import heroImage from "@/assets/hero-beach.jpg";
import surfingImage from "@/assets/surfing.jpg";
import whaleImage from "@/assets/whale-watching.jpg";

const tourCategories = [
  { name: "All Tours", slug: "all" },
  { name: "Cultural & Heritage", slug: "cultural" },
  { name: "Wildlife & Safari", slug: "wildlife" },
  { name: "Beach & Coastal", slug: "beach" },
  { name: "Adventure", slug: "adventure" },
  { name: "Honeymoon", slug: "honeymoon" },
];

const tours = [
  {
    name: "Cultural Triangle Explorer",
    image: sigiriyaImage,
    description: "Discover ancient cities, sacred temples, and UNESCO World Heritage sites including Sigiriya, Polonnaruwa, and Anuradhapura.",
    duration: "7 Days",
    groupSize: "2-12",
    price: 899,
    slug: "cultural-triangle",
    category: "cultural",
  },
  {
    name: "Wildlife Safari Adventure",
    image: yalaImage,
    description: "Encounter leopards, elephants, and exotic birds in Yala and Udawalawe National Parks with expert naturalists.",
    duration: "5 Days",
    groupSize: "2-8",
    price: 749,
    slug: "wildlife-safari",
    category: "wildlife",
  },
  {
    name: "Coastal Paradise Escape",
    image: galleImage,
    description: "Beach hopping from Galle to Mirissa, whale watching, snorkeling, and exploring colonial heritage along the southern coast.",
    duration: "6 Days",
    groupSize: "2-10",
    price: 799,
    slug: "coastal-paradise",
    category: "beach",
  },
  {
    name: "Hill Country Retreat",
    image: ellaImage,
    description: "Scenic train rides through tea plantations, hiking Ella Rock, and exploring the cool highlands of Nuwara Eliya.",
    duration: "5 Days",
    groupSize: "2-10",
    price: 699,
    slug: "hill-country",
    category: "cultural",
  },
  {
    name: "Surf & Sun Experience",
    image: surfingImage,
    description: "Learn to surf in Weligama, chase perfect waves in Arugam Bay, and enjoy beach life along Sri Lanka's coast.",
    duration: "8 Days",
    groupSize: "2-6",
    price: 949,
    slug: "surf-sun",
    category: "adventure",
  },
  {
    name: "Romantic Sri Lanka",
    image: heroImage,
    description: "Luxurious honeymoon package with private tours, candlelit dinners, spa treatments, and breathtaking sunsets.",
    duration: "10 Days",
    groupSize: "2",
    price: 1899,
    slug: "romantic-honeymoon",
    category: "honeymoon",
  },
  {
    name: "Whale Watching Expedition",
    image: whaleImage,
    description: "Witness blue whales, sperm whales, and dolphins off Mirissa, combined with coastal exploration.",
    duration: "4 Days",
    groupSize: "2-12",
    price: 549,
    slug: "whale-watching",
    category: "wildlife",
  },
  {
    name: "Complete Sri Lanka",
    image: kandyImage,
    description: "The ultimate 14-day journey covering culture, wildlife, beaches, and mountains—the best of everything.",
    duration: "14 Days",
    groupSize: "2-8",
    price: 2199,
    slug: "complete-sri-lanka",
    category: "cultural",
  },
];

const Tours = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ellaImage}
            alt="Sri Lanka tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 opacity-90">
            Curated Journeys
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tours & Packages
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Expertly crafted itineraries for every type of traveler
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <Section className="!py-8 bg-muted">
        <div className="flex flex-wrap justify-center gap-3">
          {tourCategories.map((category) => (
            <Button
              key={category.slug}
              variant={category.slug === "all" ? "default" : "outline"}
              size="sm"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </Section>

      {/* Tours Grid */}
      <Section>
        <SectionHeader
          subtitle="Choose Your Journey"
          title="Our Tour Packages"
          description="From cultural immersion to wildlife adventures, find the perfect tour for your dream Sri Lankan experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.slug} {...tour} />
          ))}
        </div>
      </Section>

      {/* Custom Tour CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Want Something Custom?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Can't find the perfect tour? Let us create a personalized itinerary tailored to your interests, budget, and travel style.
          </p>
          <Button variant="sunset" size="xl" asChild>
            <Link to="/plan-trip">
              Plan Custom Trip
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Tours;
