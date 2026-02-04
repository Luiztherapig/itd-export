import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

const Business = () => {
  return (
    <div className="w-full">
      <PageHero
        title="Planos Odontológicos para sua Empresa"
        subtitle="Cuide da saúde bucal dos seus colaboradores"
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

export default Business;
