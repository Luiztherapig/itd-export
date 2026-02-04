import { Shield, FileText, Lock, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

const Transparency = () => {
  const documents = [
    { icon: Shield, title: "IDSS da operadora 2025 (Ano-base 2024)", description: "Registro ANS nº 314757", link: "https://www.ans.gov.br/qualificacao_consumidor/informacoes_operadora.asp?co_operadora_param=314757&cd_processamento_param=20250102#consulta_idss" },
    { icon: FileText, title: "Termos de Uso", description: "Leia os termos de uso do serviço", link: "#" },
    { icon: Lock, title: "Política de Privacidade", description: "Como tratamos seus dados", link: "#" },
    { icon: Award, title: "Código de Ética", description: "Nossos compromissos", link: "#" }
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Transparência e Conformidade"
        subtitle="Informações regulatórias e legais"
      />

      {/* Cards de Acesso Rápido */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Documentos e Certificações</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <doc.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline" asChild>
                      <a href={doc.link} target="_blank" rel="noopener noreferrer">
                        Acessar
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* LGPD */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">LGPD - Lei Geral de Proteção de Dados</h2>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Como tratamos seus dados</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Interdental está em total conformidade com a Lei Geral de Proteção de Dados (LGPD). 
                  Seus dados pessoais são coletados e tratados com transparência, segurança e respeito.
                </p>
                <h4 className="font-bold text-foreground mt-6 mb-2">Direitos do Titular:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Confirmação da existência de tratamento</li>
                  <li>Acesso aos dados</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                  <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Portabilidade dos dados</li>
                  <li>Informação sobre compartilhamento de dados</li>
                  <li>Revogação do consentimento</li>
                </ul>
                <div className="bg-primary/10 p-4 rounded-lg mt-6">
                  <p className="font-bold text-foreground">Encarregado de Dados:</p>
                  <p>lgpd@interdentaldf.com.br</p>
                  <p className="text-sm mt-2">
                    Entre em contato conosco para exercer seus direitos ou tirar dúvidas sobre o 
                    tratamento de seus dados pessoais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Regras Contratuais */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Regras Contratuais</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Carências</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    A Interdental não aplica carência para procedimentos preventivos (consultas, limpeza, 
                    radiografias). Para outros procedimentos, seguimos as regras da ANS:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Urgência e emergência: 24 horas</li>
                    <li>Consultas e exames simples: sem carência</li>
                    <li>Procedimentos de média complexidade: conforme ANS</li>
                    <li>Próteses e implantes: conforme ANS</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Exclusões e Limitações</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Não estão cobertos pelo plano: tratamentos estéticos não funcionais, procedimentos 
                    experimentais não reconhecidos pela ANS, e tratamentos iniciados antes da contratação 
                    do plano sem a devida comunicação prévia.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Procedimentos Cobertos</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Todos os nossos planos seguem o Rol de Procedimentos e Eventos em Saúde estabelecido 
                    pela ANS. Consulte o rol completo no site da ANS ou entre em contato com nosso SAC.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Regras de Cancelamento</AccordionTrigger>
                <AccordionContent>
                  <p>
                    O cancelamento pode ser solicitado a qualquer momento através do SAC ou Ouvidoria. 
                    Não há multa rescisória para planos individuais. Para planos empresariais, consulte 
                    as condições específicas do contrato.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 text-center">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Baixar Contrato Completo (PDF)
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Código de Ética */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Código de Ética e Conduta</h2>
            <div className="bg-background p-8 rounded-lg space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Nossos Compromissos:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Respeito e dignidade no atendimento a todos os beneficiários</li>
                  <li>Transparência na comunicação e nas relações contratuais</li>
                  <li>Qualidade nos serviços prestados</li>
                  <li>Ética nas relações com profissionais credenciados</li>
                  <li>Combate rigoroso a fraudes e irregularidades</li>
                  <li>Confidencialidade e proteção dos dados pessoais</li>
                  <li>Compliance com todas as regulamentações vigentes</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold mb-2">Canal de Denúncias:</p>
                <p className="text-sm text-muted-foreground">
                  Caso tenha conhecimento de alguma irregularidade ou violação do nosso código de ética, 
                  entre em contato através da nossa Ouvidoria. Todas as denúncias são tratadas com sigilo 
                  e seriedade.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Transparency;
