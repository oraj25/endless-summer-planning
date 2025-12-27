import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { TourCard } from "@/components/cards/TourCard";
import { TourDetailModal } from "@/components/TourDetailModal";
import { Layout } from "@/components/layout/Layout";
import { tours, tourCategories, TourData } from "@/data/toursData";

import ellaImage from "@/assets/ella.jpg";

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTour, setSelectedTour] = useState<TourData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTours = selectedCategory === "all" 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const handleViewDetails = (tour: TourData) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

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
              variant={selectedCategory === category.slug ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.slug)}
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
          {filteredTours.map((tour) => (
            <TourCard 
              key={tour.slug} 
              name={tour.name}
              image={tour.image}
              description={tour.description}
              duration={tour.duration}
              price={tour.price}
              onViewDetails={() => handleViewDetails(tour)}
            />
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
            Can't find the perfect tour? Contact us directly and we'll create a personalized itinerary tailored to your interests, budget, and travel style.
          </p>
          <Button variant="sunset" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Tour Detail Modal */}
      <TourDetailModal 
        tour={selectedTour}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Layout>
  );
};

export default Tours;