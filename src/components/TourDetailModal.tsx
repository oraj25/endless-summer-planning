import { X, Clock, Car, Bus, MapPin, Hotel, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface DayItinerary {
  day: number;
  title: string;
  activities: string[];
}

interface TransportOption {
  type: string;
  capacity: string;
  priceMultiplier: number;
}

interface TourData {
  name: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  itinerary: DayItinerary[];
  transportOptions: TransportOption[];
  highlights: string[];
}

interface TourDetailModalProps {
  tour: TourData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TourDetailModal = ({ tour, isOpen, onClose }: TourDetailModalProps) => {
  if (!tour) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl">{tour.name}</DialogTitle>
        </DialogHeader>

        {/* Hero Image */}
        <div className="relative h-64 rounded-xl overflow-hidden -mx-2">
          <img
            src={tour.image}
            alt={tour.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-4 text-primary-foreground">
            <div className="flex items-center gap-2 bg-primary/90 px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-3 py-1.5 rounded-full">
              <DollarSign className="w-4 h-4" />
              <span className="font-medium">From ${tour.price}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground">{tour.description}</p>

        <Separator />

        {/* Day by Day Itinerary */}
        <div>
          <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Day-by-Day Itinerary
          </h3>
          <div className="space-y-4">
            {tour.itinerary.map((day) => (
              <div
                key={day.day}
                className="bg-muted/50 rounded-xl p-4 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {day.day}
                  </span>
                  <h4 className="font-semibold text-foreground">{day.title}</h4>
                </div>
                <ul className="ml-11 space-y-1">
                  {day.activities.map((activity, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Transport Options */}
        <div>
          <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <Car className="w-5 h-5 text-primary" />
            Transport Options
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {tour.transportOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-muted/50 rounded-xl p-4 border border-border/50 text-center hover:border-primary/50 transition-colors"
              >
                {option.type === "Car" && <Car className="w-8 h-8 mx-auto mb-2 text-primary" />}
                {option.type === "Van" && <Bus className="w-8 h-8 mx-auto mb-2 text-primary" />}
                {option.type === "Mini Coach" && <Bus className="w-8 h-8 mx-auto mb-2 text-primary" />}
                {option.type === "Big Bus" && <Bus className="w-8 h-8 mx-auto mb-2 text-primary" />}
                <h4 className="font-semibold text-foreground">{option.type}</h4>
                <p className="text-sm text-muted-foreground mb-2">{option.capacity}</p>
                <p className="text-primary font-bold">
                  ${Math.round(tour.price * option.priceMultiplier)}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-3 italic">
            * Prices vary based on transport type and group size
          </p>
        </div>

        <Separator />

        {/* Hotel Note */}
        <div className="bg-accent/20 rounded-xl p-4 border border-accent/30">
          <h3 className="font-display text-lg font-bold mb-2 flex items-center gap-2">
            <Hotel className="w-5 h-5 text-accent-foreground" />
            Accommodation
          </h3>
          <p className="text-muted-foreground text-sm">
            Hotels and accommodations can be customized based on your preferences and budget. 
            Choose from budget-friendly guesthouses to luxury resorts—we'll tailor the experience to your liking.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button variant="default" size="lg" className="flex-1" asChild>
            <a href="/plan-trip">Book This Tour</a>
          </Button>
          <Button variant="outline" size="lg" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};