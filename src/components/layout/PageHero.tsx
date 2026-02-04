import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const PageHero = ({ title, subtitle, children, className = "" }: PageHeroProps) => {
  return (
    <section className={`bg-gradient-to-br from-primary/10 via-background to-trust/10 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-trust bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
