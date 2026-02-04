import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

const Careers = () => {
  return (
    <div className="w-full">
      <PageHero
        title="Faça parte do time Interdental"
        subtitle="Venha transformar sorrisos com a gente"
      />
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">Conteúdo em breve</p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Careers;
