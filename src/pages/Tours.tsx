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
  { name: "Classic Tours", slug: "classic" },
  { name: "Beach & Coastal", slug: "beach" },
  { name: "Hill Country", slug: "hillcountry" },
  { name: "Wildlife & Safari", slug: "wildlife" },
  { name: "Religious & Pilgrimage", slug: "religious" },
  { name: "Adventure", slug: "adventure" },
];

const tours = [
  // Classic Tours
  {
    name: "Small Sri Lanka Escape",
    image: galleImage,
    description: "A quick 3-day getaway covering Colombo city tour, Galle Fort exploration, beach time in the South, and scenic train ride back.",
    duration: "3 Days",
    groupSize: "2-8",
    price: 299,
    slug: "small-escape",
    category: "classic",
  },
  {
    name: "Classic Sri Lanka Tour",
    image: sigiriyaImage,
    description: "Day 1: Negombo - fish market, Dutch church, Hamilton River. Day 2: Sigiriya rock, Habarana jeep safari. Day 3: Dambulla cave temple, Kandy temple, lake & dances. Day 4: Botanical garden, whale watching, stilt fishing, Galle Fort. Day 5: Turtle hatchery, Madu River boat safari, sea train to Colombo. Day 6: Colombo city tour, airport.",
    duration: "6 Days",
    groupSize: "2-12",
    price: 699,
    slug: "classic-tour",
    category: "classic",
  },
  {
    name: "Grand Sri Lanka Explorer",
    image: kandyImage,
    description: "The ultimate 14-day journey covering Negombo, Sigiriya, Polonnaruwa, Kandy, Nuwara Eliya, Ella, Yala safari, whale watching in Mirissa, Galle Fort, Colombo—the complete Sri Lankan experience.",
    duration: "14 Days",
    groupSize: "2-10",
    price: 1899,
    slug: "grand-explorer",
    category: "classic",
  },
  // Beach & Coastal
  {
    name: "Coastal Paradise",
    image: heroImage,
    description: "Beach hopping from Bentota to Mirissa—whale watching, snorkeling, stilt fishing, turtle hatcheries, and exploring the colonial charm of Galle Fort.",
    duration: "6 Days",
    groupSize: "2-10",
    price: 749,
    slug: "coastal-paradise",
    category: "beach",
  },
  {
    name: "East Coast Discovery",
    image: surfingImage,
    description: "Explore pristine beaches of Pasikudah, Nilaveli, and Trincomalee. Snorkeling at Pigeon Island, ancient temples, and relaxing coastal vibes.",
    duration: "5 Days",
    groupSize: "2-8",
    price: 649,
    slug: "east-coast",
    category: "beach",
  },
  // Hill Country
  {
    name: "Hill Country Retreat",
    image: ellaImage,
    description: "Scenic train rides through tea plantations, hiking Ella Rock, Little Adam's Peak, Nine Arch Bridge, and the cool highlands of Nuwara Eliya.",
    duration: "5 Days",
    groupSize: "2-10",
    price: 599,
    slug: "hill-country",
    category: "hillcountry",
  },
  {
    name: "Tea Trail Adventure",
    image: ellaImage,
    description: "Visit working tea factories, stay in colonial tea bungalows, trek through lush plantations, and experience the charm of Hatton and Haputale.",
    duration: "4 Days",
    groupSize: "2-8",
    price: 549,
    slug: "tea-trail",
    category: "hillcountry",
  },
  // Wildlife & Safari
  {
    name: "Wildlife Safari Adventure",
    image: yalaImage,
    description: "Encounter leopards, elephants, and exotic birds in Yala and Udawalawa National Parks with expert naturalist guides.",
    duration: "5 Days",
    groupSize: "2-8",
    price: 749,
    slug: "wildlife-safari",
    category: "wildlife",
  },
  {
    name: "Whale Watching Expedition",
    image: whaleImage,
    description: "Witness blue whales, sperm whales, and dolphins off Mirissa, combined with Galle Fort and southern coastal exploration.",
    duration: "4 Days",
    groupSize: "2-12",
    price: 499,
    slug: "whale-watching",
    category: "wildlife",
  },
  {
    name: "Elephant Safari Special",
    image: yalaImage,
    description: "Visit Minneriya for the famous elephant gathering, Udawalawa for baby elephants, and Pinnawala elephant orphanage.",
    duration: "4 Days",
    groupSize: "2-10",
    price: 549,
    slug: "elephant-safari",
    category: "wildlife",
  },
  // Religious & Pilgrimage
  {
    name: "Sacred Sri Lanka",
    image: kandyImage,
    description: "Visit Temple of the Tooth in Kandy, climb Adam's Peak, explore ancient temples of Anuradhapura, and the sacred city of Kataragama.",
    duration: "7 Days",
    groupSize: "2-15",
    price: 799,
    slug: "sacred-tour",
    category: "religious",
  },
  {
    name: "Buddhist Heritage Trail",
    image: sigiriyaImage,
    description: "Explore UNESCO sites—Anuradhapura, Polonnaruwa, Dambulla Cave Temple, Mihintale, and ancient Buddhist monasteries.",
    duration: "6 Days",
    groupSize: "2-12",
    price: 699,
    slug: "buddhist-heritage",
    category: "religious",
  },
  // Adventure
  {
    name: "Surf & Sun Experience",
    image: surfingImage,
    description: "Learn to surf in Weligama, chase perfect waves in Arugam Bay, and enjoy beach life along Sri Lanka's coast.",
    duration: "8 Days",
    groupSize: "2-6",
    price: 899,
    slug: "surf-sun",
    category: "adventure",
  },
  {
    name: "Adrenaline Rush",
    image: ellaImage,
    description: "White-water rafting in Kitulgala, hiking Ella Rock, zip-lining, waterfall abseiling, and mountain biking adventures.",
    duration: "6 Days",
    groupSize: "2-8",
    price: 849,
    slug: "adrenaline-rush",
    category: "adventure",
  },
  {
    name: "Trekking Expedition",
    image: ellaImage,
    description: "Trek Knuckles Mountain Range, hike to World's End at Horton Plains, climb Adam's Peak, and explore Sinharaja Rainforest.",
    duration: "7 Days",
    groupSize: "2-10",
    price: 799,
    slug: "trekking-expedition",
    category: "adventure",
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
