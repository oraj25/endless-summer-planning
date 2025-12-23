import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { Layout } from "@/components/layout/Layout";

import ellaImage from "@/assets/ella.jpg";
import sigiriyaImage from "@/assets/sigiriya.jpg";

const values = [
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "We believe travel should be transformative. We connect you with real people, traditions, and places.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "We minimize our environmental footprint and support conservation efforts across Sri Lanka.",
  },
  {
    icon: Users,
    title: "Local Communities",
    description: "We partner with local guides and businesses, ensuring tourism benefits the communities you visit.",
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description: "We educate travelers on local customs and ensure respectful, meaningful cultural exchanges.",
  },
];

const team = [
  {
    name: "Kasun Perera",
    role: "Founder & Lead Guide",
    bio: "Born in Kandy, Kasun has 15 years of experience guiding travelers through Sri Lanka's wonders.",
  },
  {
    name: "Dilani Fernando",
    role: "Operations Manager",
    bio: "Dilani ensures every trip runs smoothly, from airport pickup to farewell dinner.",
  },
  {
    name: "Rohan Silva",
    role: "Wildlife Expert",
    bio: "A former park ranger, Rohan's knowledge of Sri Lanka's fauna is unmatched.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ellaImage}
            alt="Beautiful Sri Lanka landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 opacity-90">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Endless Summer
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Crafting unforgettable Sri Lankan journeys since 2015
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Who We Are"
              title="Born From a Love of Travel"
              description="Endless Summer was founded by passionate Sri Lankans who wanted to share the beauty of their homeland with the world."
              align="left"
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                What started as small group tours for friends has grown into a full-service travel company, but our philosophy remains the same: travel should be personal, authentic, and transformative.
              </p>
              <p>
                We're not just tour operators—we're storytellers, cultural ambassadors, and adventure seekers. Every itinerary we create is infused with insider knowledge that only locals can provide.
              </p>
              <p>
                From the ancient ruins of Anuradhapura to the surf breaks of Arugam Bay, we've explored every corner of this island so you don't have to figure it out alone.
              </p>
            </div>
            <Button variant="default" size="lg" className="mt-8" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src={sigiriyaImage}
              alt="Sigiriya Rock Fortress"
              className="rounded-2xl shadow-glow w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-medium">
              <div className="text-4xl font-display font-bold">9+</div>
              <div className="text-sm opacity-90">Years of Experience</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section className="bg-muted">
        <SectionHeader
          subtitle="Our Values"
          title="What Drives Us"
          description="These principles guide everything we do, from planning your trip to supporting local communities."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card p-8 rounded-2xl shadow-soft text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet the Team */}
      <Section>
        <SectionHeader
          subtitle="Our Team"
          title="Meet Your Guides"
          description="The passionate people behind your unforgettable Sri Lankan experience."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl p-8 shadow-card text-center"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-display font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Sri Lanka */}
      <Section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 opacity-90">
            Why Sri Lanka
          </span>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-8">
            A Compact Wonder of the World
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Sri Lanka packs incredible diversity into a small island. Ancient temples, pristine beaches, misty mountains, incredible wildlife, and warm hospitality—all within a few hours of each other. It's no wonder Lonely Planet calls it "the best island on Earth."
          </p>
          <Button variant="sunset" size="xl" asChild>
            <Link to="/destinations">
              Explore Destinations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
