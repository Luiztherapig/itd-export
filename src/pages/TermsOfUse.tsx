import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  FileText, 
  CheckSquare, 
  UserCheck, 
  Stethoscope, 
  ClipboardList, 
  Building2, 
  CreditCard, 
  XCircle, 
  Copyright, 
  AlertTriangle, 
  Scale, 
  Headphones,
  Check
} from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Termos de Uso" 
        subtitle="Condições gerais para utilização dos nossos serviços"
      />

      {/* Introdução */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="bg-muted/30 rounded-xl p-6 md:p-8 border border-border">
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">INTERDENTAL – CLÍNICA ODONTOLÓGICA LTDA.</strong>, pessoa 
                jurídica de direito privado, inscrita no CNPJ sob o nº 37.161.015/0001-41, com sede na SRTVS – 
                Setor de Rádio e Televisão Sul – Edifício Palácio do Rádio II – Salas 207 e 209, Brasília/DF, 
                CEP 70.340-902, doravante denominada simplesmente "INTERDENTAL", apresenta os presentes Termos 
                de Uso que regulam a utilização dos seus serviços e canais digitais.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Última atualização:</strong> Janeiro de 2025
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 1. Objeto */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Objeto</h2>
                <p className="text-muted-foreground">
                  Os presentes Termos de Uso têm por objeto estabelecer as condições gerais de acesso e 
                  utilização dos serviços prestados pela INTERDENTAL, incluindo:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Planos de assistência odontológica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Serviços de saúde bucal prestados por rede credenciada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Website, aplicativos móveis e demais canais digitais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Atendimento ao cliente e canais de suporte</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Aceitação dos Termos */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-trust/10 p-3 rounded-lg shrink-0">
                <CheckSquare className="h-6 w-6 text-trust" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Aceitação dos Termos</h2>
                <p className="text-muted-foreground mb-4">
                  Ao acessar e utilizar os serviços da INTERDENTAL, você declara ter lido, compreendido e 
                  concordado integralmente com estes Termos de Uso. A utilização dos nossos serviços implica 
                  na aceitação automática destas condições.
                </p>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <strong>Importante:</strong> Caso não concorde com qualquer disposição destes Termos, 
                    você deverá cessar imediatamente o uso dos nossos serviços e canais digitais.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Elegibilidade e Cadastro */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-action/10 p-3 rounded-lg shrink-0">
                <UserCheck className="h-6 w-6 text-action" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Elegibilidade e Cadastro</h2>
                <p className="text-muted-foreground mb-4">
                  Para contratar um plano odontológico da INTERDENTAL, o usuário deve:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Possuir capacidade civil plena ou estar devidamente representado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Fornecer dados pessoais verdadeiros, completos e atualizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Residir em área de abrangência geográfica do plano contratado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Apresentar documentação válida conforme exigido no momento da contratação</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  O cadastro é pessoal e intransferível. O usuário é responsável pela confidencialidade de 
                  suas credenciais de acesso.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Descrição dos Serviços */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">4. Descrição dos Serviços</h2>
                <p className="text-muted-foreground mb-4">
                  A INTERDENTAL oferece os seguintes serviços:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Planos Odontológicos</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Standard</li>
                      <li>• Master Orto</li>
                      <li>• VIP</li>
                      <li>• Empresarial</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Canais de Atendimento</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Site institucional</li>
                      <li>• Aplicativo móvel</li>
                      <li>• Central telefônica</li>
                      <li>• WhatsApp</li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground mt-4">
                  As coberturas, carências e exclusões de cada plano estão detalhadas no Contrato Individual 
                  ou Coletivo firmado entre o beneficiário e a INTERDENTAL, bem como no Rol de Procedimentos 
                  da ANS.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Obrigações do Usuário */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-trust/10 p-3 rounded-lg shrink-0">
                <ClipboardList className="h-6 w-6 text-trust" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">5. Obrigações do Usuário</h2>
                <p className="text-muted-foreground mb-4">
                  Ao utilizar os serviços da INTERDENTAL, o usuário compromete-se a:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Fornecer informações verdadeiras e atualizadas no cadastro e durante todo o período de vigência do plano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Manter o pagamento das mensalidades em dia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Seguir as orientações dos profissionais de saúde da rede credenciada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Utilizar os serviços de forma ética e de boa-fé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Não compartilhar credenciais de acesso com terceiros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Comunicar imediatamente qualquer alteração cadastral</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Obrigações da Interdental */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-action/10 p-3 rounded-lg shrink-0">
                <Building2 className="h-6 w-6 text-action" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">6. Obrigações da Interdental</h2>
                <p className="text-muted-foreground mb-4">
                  A INTERDENTAL compromete-se a:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Garantir o acesso à rede credenciada de profissionais e clínicas odontológicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Prestar atendimento de qualidade conforme padrões estabelecidos pela ANS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Cumprir todas as coberturas contratadas, respeitando carências e exclusões previstas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Manter canais de atendimento ao cliente funcionais e acessíveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Respeitar as normas da Agência Nacional de Saúde Suplementar (ANS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-action shrink-0 mt-0.5" />
                    <span>Proteger os dados pessoais dos beneficiários conforme a LGPD</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. Pagamentos e Cobranças */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">7. Pagamentos e Cobranças</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Mensalidades</h3>
                    <p className="text-muted-foreground">
                      As mensalidades são devidas antecipadamente, conforme data de vencimento estabelecida no 
                      contrato. O valor é atualizado anualmente de acordo com as regras da ANS.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Formas de Pagamento</h3>
                    <p className="text-muted-foreground">
                      Boleto bancário, débito automático, cartão de crédito ou outras formas disponibilizadas 
                      pela INTERDENTAL.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Inadimplência</h3>
                    <p className="text-muted-foreground">
                      O atraso no pagamento superior a 60 (sessenta) dias, consecutivos ou não, nos últimos 
                      doze meses de vigência do contrato, poderá acarretar a suspensão ou cancelamento do 
                      plano, desde que o beneficiário seja comprovadamente notificado até o quinquagésimo 
                      dia de inadimplência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. Cancelamento e Rescisão */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-destructive/10 p-3 rounded-lg shrink-0">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">8. Cancelamento e Rescisão</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Direito de Arrependimento</h3>
                    <p className="text-muted-foreground">
                      O beneficiário pode desistir do contrato no prazo de 7 (sete) dias corridos contados da 
                      assinatura ou do recebimento do contrato, conforme art. 49 do Código de Defesa do Consumidor, 
                      quando a contratação ocorrer fora do estabelecimento comercial.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Cancelamento por Solicitação</h3>
                    <p className="text-muted-foreground">
                      O beneficiário pode solicitar o cancelamento do plano a qualquer momento, mediante comunicação 
                      por escrito à INTERDENTAL, com antecedência mínima de 30 (trinta) dias.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Rescisão por Inadimplência</h3>
                    <p className="text-muted-foreground">
                      A INTERDENTAL poderá rescindir o contrato em caso de inadimplência superior a 60 dias, 
                      fraude ou má-fé comprovadas, conforme legislação vigente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. Propriedade Intelectual */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-trust/10 p-3 rounded-lg shrink-0">
                <Copyright className="h-6 w-6 text-trust" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">9. Propriedade Intelectual</h2>
                <p className="text-muted-foreground mb-4">
                  Todos os direitos de propriedade intelectual relativos ao site, aplicativos, conteúdos, 
                  textos, imagens, logotipos, marcas, designs e demais elementos são de titularidade exclusiva 
                  da INTERDENTAL ou de terceiros que tenham licenciado seu uso.
                </p>
                <p className="text-muted-foreground">
                  É expressamente proibida a reprodução, distribuição, modificação ou qualquer outra forma de 
                  utilização dos elementos protegidos sem a prévia e expressa autorização por escrito da 
                  INTERDENTAL.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 10. Limitação de Responsabilidade */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-amber-500/10 p-3 rounded-lg shrink-0">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">10. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground mb-4">
                  A INTERDENTAL não se responsabiliza por:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 shrink-0">•</span>
                    <span>Danos decorrentes de caso fortuito ou força maior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 shrink-0">•</span>
                    <span>Atos praticados por terceiros, incluindo profissionais da rede credenciada que atuem em desconformidade com os padrões estabelecidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 shrink-0">•</span>
                    <span>Interrupções ou falhas em serviços de telecomunicações ou internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 shrink-0">•</span>
                    <span>Uso indevido das credenciais de acesso pelo beneficiário ou por terceiros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 shrink-0">•</span>
                    <span>Informações falsas ou incompletas fornecidas pelo usuário</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 11. Disposições Gerais */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-action/10 p-3 rounded-lg shrink-0">
                <Scale className="h-6 w-6 text-action" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">11. Disposições Gerais</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Legislação Aplicável</h3>
                    <p className="text-muted-foreground">
                      Estes Termos de Uso são regidos pela legislação brasileira, em especial pela Lei nº 9.656/1998 
                      (Planos de Saúde), Código de Defesa do Consumidor e normas da ANS.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Foro</h3>
                    <p className="text-muted-foreground">
                      Fica eleito o foro da Comarca de Brasília/DF para dirimir quaisquer controvérsias oriundas 
                      destes Termos de Uso, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Alterações</h3>
                    <p className="text-muted-foreground">
                      A INTERDENTAL reserva-se o direito de modificar estes Termos de Uso a qualquer momento. 
                      As alterações entrarão em vigor na data de sua publicação no site, cabendo ao usuário 
                      verificar periodicamente seu conteúdo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 12. Contato */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">12. Contato</h2>
                <p className="text-muted-foreground mb-6">
                  Para dúvidas, sugestões ou reclamações sobre estes Termos de Uso, entre em contato conosco:
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 via-background to-trust/5 rounded-xl p-6 md:p-8 border border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Central de Atendimento</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong>Telefone:</strong>{" "}
                      <a href="tel:+556133212221" className="text-primary hover:underline">
                        (61) 3321-2221
                      </a>
                    </li>
                    <li>
                      <strong>E-mail:</strong>{" "}
                      <a href="mailto:atendimento@interdentaldf.com.br" className="text-primary hover:underline">
                        atendimento@interdentaldf.com.br
                      </a>
                    </li>
                    <li>
                      <strong>Horário:</strong> Segunda a sexta, das 8h às 18h
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Endereço</h3>
                  <address className="text-muted-foreground not-italic">
                    SRTVS – Setor de Rádio e Televisão Sul<br />
                    Edifício Palácio do Rádio II<br />
                    Salas 207 e 209<br />
                    Brasília/DF – CEP 70.340-902
                  </address>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
