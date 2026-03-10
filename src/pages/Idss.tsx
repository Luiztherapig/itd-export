import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

const Idss = () => {
  return (
    <div className="w-full">
      <PageHero
        title="IDSS da Operadora 2025 (Ano-base 2024)"
        subtitle="Informações de desempenho da operadora"
      />

      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-background p-8 rounded-lg border space-y-6">
              <div>
                <p><strong>Operadora:</strong> Centro Odontologico Integrado Ltda</p>
                <p><strong>Nome fantasia:</strong> Interdental</p>
                <p><strong>Registro ANS:</strong> 314757</p>
                <p><strong>Ano de referência:</strong> 2024</p>
                <p><strong>Atualizado em:</strong> 10/03/2026</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Nota geral</h2>
                <p><strong>IDSS:</strong> 0,2941</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Notas por dimensão</h2>
                <p><strong>IDQS:</strong> 0,0000</p>
                <p><strong>IDGA:</strong> 0,0000</p>
                <p><strong>IDSM:</strong> 0,8571</p>
                <p><strong>IDGR:</strong> 0,3698</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Consulta oficial na ANS</h2>
                <a
                  href="https://www.ans.gov.br/qualificacao_consumidor/informacoes_operadora.asp?co_operadora_param=314757&cd_processamento_param=20250102#consulta_idss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline break-all"
                >
                  https://www.ans.gov.br/qualificacao_consumidor/informacoes_operadora.asp?co_operadora_param=314757&cd_processamento_param=20250102#consulta_idss
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Idss;
