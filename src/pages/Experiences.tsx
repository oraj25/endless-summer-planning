import { Section, SectionHeader } from "@/components/ui/section";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Layout } from "@/components/layout/Layout";

import surfingImage from "@/assets/surfing.jpg";
import yalaImage from "@/assets/yala-safari.jpg";
import whaleImage from "@/assets/whale-watching.jpg";
import kandyImage from "@/assets/kandy.jpg";
import ellaImage from "@/assets/ella.jpg";
import heroImage from "@/assets/hero-beach.jpg";

const experiences = [
  {
    name: "Surfing",
    image: surfingImage,
    description: "Catch world-class waves at Arugam Bay and Weligama. Perfect for beginners and pros alike, with warm waters year-round.",
    slug: "surfing",
  },
  {
    name: "Wildlife Safaris",
    image: yalaImage,
    description: "Spot leopards, elephants, and exotic birds in their natural habitat. Sri Lanka has incredible biodiversity in compact national parks.",
    slug: "wildlife-safari",
  },
  {
    name: "Whale Watching",
    image: whaleImage,
    description: "Witness majestic blue whales and playful dolphins off Mirissa's coast. Peak season from November to April.",
    slug: "whale-watching",
  },
  {
    name: "Cultural Tours",
    image: kandyImage,
    description: "Explore ancient temples, traditional dance, and living Buddhist traditions. From Kandy's sacred sites to village cooking classes.",
    slug: "cultural-tours",
  },
  {
    name: "Hiking & Trekking",
    image: ellaImage,
    description: "Trek through misty mountains, tea plantations, and cloud forests. From sunrise at Adam's Peak to Ella Rock adventures.",
    slug: "hiking",
  },
  {
    name: "Beach & Wellness",
    image: heroImage,
    description: "Relax on pristine beaches and rejuvenate with traditional Ayurveda treatments. The perfect blend of adventure and relaxation.",
    slug: "beach-wellness",
  },
];

const Experiences = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={surfingImage}
            alt="Sri Lanka experiences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 opacity-90">
            Adventures
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experiences
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Immerse yourself in unforgettable activities across the island
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <Section>
        <SectionHeader
          subtitle="What to Do"
          title="Discover Your Adventure"
          description="From adrenaline-pumping activities to serene cultural immersion, Sri Lanka offers experiences for every type of traveler."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.slug} {...experience} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Experiences;
