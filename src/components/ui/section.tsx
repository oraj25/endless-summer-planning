import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 lg:py-28", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 lg:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
