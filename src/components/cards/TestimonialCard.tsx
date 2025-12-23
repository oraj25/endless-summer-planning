import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  country: string;
  quote: string;
  rating: number;
  avatar?: string;
  className?: string;
}

export const TestimonialCard = ({
  name,
  country,
  quote,
  rating,
  avatar,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl p-8 shadow-card hover:shadow-medium transition-shadow duration-300",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < rating ? "text-secondary fill-secondary" : "text-muted"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{country}</p>
        </div>
      </div>
    </div>
  );
};
