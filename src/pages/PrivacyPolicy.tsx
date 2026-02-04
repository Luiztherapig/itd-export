import { 
  BookOpen, 
  Database, 
  Workflow, 
  Target, 
  Share2, 
  Shield, 
  Clock, 
  UserCheck, 
  Cookie, 
  Globe, 
  Contact, 
  RefreshCw,
  Lock,
  FileKey,
  Activity,
  ClipboardCheck,
  CheckCircle2,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      <PageHero
        title="Política de Privacidade"
        subtitle="Como coletamos, usamos e protegemos seus dados pessoais"
      />

      {/* Introdução */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A <strong>Interdental Planos Odontológicos</strong> (CNPJ: 37.161.015/0001-41), com sede em 
                SRTVS – Setor de Rádio e Televisão Sul – Edifício Palácio do Rádio II – Salas 207 e 209, 
                Brasília/DF, está comprometida com a proteção da sua privacidade e dos seus dados pessoais, 
                em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Última atualização:</strong> Janeiro de 2025
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 1. Definições Importantes */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">1. Definições Importantes</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Para facilitar o entendimento, utilizamos os conceitos abaixo (nos termos da LGPD):
            </p>
            <div className="bg-background p-8 rounded-lg">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="titular">
                  <AccordionTrigger className="text-left font-semibold">
                    1.1. Titular
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Pessoa natural a quem os dados pessoais se referem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="dados-pessoais">
                  <AccordionTrigger className="text-left font-semibold">
                    1.2. Dados Pessoais
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Informação relacionada a pessoa natural identificada ou identificável (ex.: nome, CPF, telefone, e-mail, endereço).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="dados-sensiveis">
                  <AccordionTrigger className="text-left font-semibold">
                    1.3. Dados Pessoais Sensíveis
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dados genéticos, biométricos, dados sobre saúde ou vida sexual, entre outros.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="tratamento">
                  <AccordionTrigger className="text-left font-semibold">
                    1.4. Tratamento
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Toda operação realizada com dados pessoais (ex.: coleta, produção, recepção, classificação, uso, acesso, armazenamento, compartilhamento, eliminação).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="controlador">
                  <AccordionTrigger className="text-left font-semibold">
                    1.5. Controlador
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Quem toma as decisões sobre o tratamento de dados (na maioria dos casos, a própria Interdental).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="operador">
                  <AccordionTrigger className="text-left font-semibold">
                    1.6. Operador
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Quem realiza o tratamento em nome do controlador (ex.: fornecedores de tecnologia, sistemas, atendimento e suporte).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="dpo">
                  <AccordionTrigger className="text-left font-semibold">
                    1.7. Encarregado (DPO)
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Canal de comunicação entre a Interdental, os titulares e a Autoridade Nacional de Proteção de Dados (ANPD).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="anonimizacao">
                  <AccordionTrigger className="text-left font-semibold">
                    1.8. Anonimização
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Técnica que remove a possibilidade de associação do dado a um titular, dentro de meios técnicos razoáveis.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="eliminacao">
                  <AccordionTrigger className="text-left font-semibold">
                    1.9. Eliminação
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Exclusão do dado, observadas as obrigações legais e regulatórias aplicáveis.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 2. Quais Dados Coletamos */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Database className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">2. Quais Dados Coletamos e Tratamos</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              No âmbito de nossas atividades, podemos tratar as seguintes categorias de dados (conforme aplicável ao caso):
            </p>
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">2.1. Dados cadastrais e de contato</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Nome completo, CPF, RG, data de nascimento</li>
                  <li>Telefone/WhatsApp, e-mail, endereço</li>
                  <li>Dados de responsável legal (quando aplicável)</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-lg">2.2. Dados assistenciais e de saúde</h3>
                  <Badge variant="destructive">Sensíveis</Badge>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Anamnese, histórico odontológico, evolução clínica</li>
                  <li>Prontuário odontológico, exames, laudos, pedidos e resultados</li>
                  <li>Imagens e registros clínicos (ex.: radiografias, fotografias intraorais), quando necessários ao cuidado e documentação técnica</li>
                  <li>Informações relacionadas a procedimentos, materiais, intercorrências e orientações clínicas</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">2.3. Dados financeiros e de faturamento</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Dados para cobrança, reembolso e emissão de documentos fiscais</li>
                  <li>Histórico de pagamentos, parcelamentos, informações de transação (quando aplicável)</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">2.4. Dados de navegação e uso de canais digitais</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Endereço IP, logs de acesso, identificadores de dispositivo/navegador</li>
                  <li>Cookies e tecnologias semelhantes, conforme seção específica desta Política e configurações do usuário</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">2.5. Dados de relacionamento, suporte e qualidade</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Registros de contatos e solicitações (ex.: mensagens, e-mails)</li>
                  <li>Pesquisas de satisfação e qualidade de atendimento (quando aplicável)</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">2.6. Dados de colaboradores, candidatos e prestadores</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Dados necessários para recrutamento, contratação, gestão administrativa, segurança e cumprimento de obrigações legais</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3. Como Coletamos */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Workflow className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">3. Como Coletamos Esses Dados</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">3.1. Dados fornecidos diretamente pelo titular</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                  <li>Em atendimento presencial, ligações, WhatsApp, e-mail</li>
                  <li>Em formulários físicos/digitais, cadastros e agendamentos</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">3.2. Dados coletados automaticamente</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                  <li>Por meio do acesso ao site e demais ambientes digitais, inclusive via cookies (quando habilitados)</li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">3.3. Dados obtidos por terceiros</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                  <li>Convênios, parceiros e prestadores relacionados à execução do atendimento</li>
                  <li>Fornecedores de tecnologia e infraestrutura</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Finalidades do Tratamento */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Target className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">4. Finalidades do Tratamento e Bases Legais</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Tratamos dados pessoais com finalidades legítimas, específicas e compatíveis com a prestação de nossos serviços, respeitando os princípios da LGPD, incluindo finalidade, necessidade e segurança.
            </p>
            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">4.1. Prestação de serviços odontológicos e cuidado assistencial</h3>
                <p className="text-muted-foreground mb-3">
                  Realizar triagens, consultas, diagnósticos, procedimentos, acompanhamentos e orientações. Gerir e manter registros clínicos e prontuário.
                </p>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Tutela da saúde</Badge>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">4.2. Agendamento, comunicação operacional e continuidade do atendimento</h3>
                <p className="text-muted-foreground mb-3">
                  Confirmar consultas, orientar preparo, retornos, lembretes e informações operacionais.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Execução de contrato</Badge>
                  <Badge className="bg-trust/20 text-trust hover:bg-trust/30">Legítimo interesse</Badge>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">4.3. Faturamento, cobrança, reembolso e obrigações fiscais</h3>
                <p className="text-muted-foreground mb-3">
                  Processar pagamentos, emitir documentos fiscais e cumprir obrigações legais/regulatórias.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Obrigação legal/regulatória</Badge>
                  <Badge className="bg-trust/20 text-trust hover:bg-trust/30">Execução contratual</Badge>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">4.4. Segurança, prevenção a fraudes e proteção</h3>
                <p className="text-muted-foreground mb-3">
                  Proteger sistemas, controlar acessos, investigar incidentes e reduzir riscos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-trust/20 text-trust hover:bg-trust/30">Legítimo interesse</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Obrigação legal</Badge>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">4.5. Exercício regular de direitos</h3>
                <p className="text-muted-foreground mb-3">
                  Atender demandas administrativas, auditorias, solicitações de órgãos reguladores e defesa em processos administrativos ou judiciais.
                </p>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Exercício regular de direitos</Badge>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">4.6. Marketing e relacionamento (quando aplicável)</h3>
                <p className="text-muted-foreground mb-3">
                  Envio de comunicações institucionais, conteúdos e campanhas. Mensuração de performance e melhoria de comunicação digital.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-amber-500/20 text-amber-700 hover:bg-amber-500/30">Consentimento</Badge>
                  <Badge className="bg-trust/20 text-trust hover:bg-trust/30">Legítimo interesse</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. Compartilhamento */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Share2 className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">5. Compartilhamento de Dados</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              A Interdental pode compartilhar dados pessoais somente quando necessário para cumprir as finalidades descritas nesta Política, incluindo:
            </p>
            <div className="bg-background p-8 rounded-lg space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">5.1. Prestadores e parceiros assistenciais</h3>
                <p className="text-muted-foreground">
                  Laboratórios de prótese, serviços de imagem, fornecedores técnicos e profissionais envolvidos na execução do atendimento, quando aplicável.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">5.2. Fornecedores de tecnologia</h3>
                <p className="text-muted-foreground">
                  Sistemas de prontuário, agendamento, atendimento, hospedagem, e-mail corporativo, armazenamento e segurança, que atuam como operadores.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">5.3. Serviços administrativos e profissionais</h3>
                <p className="text-muted-foreground">
                  Contabilidade, assessoria jurídica, auditorias e consultorias, quando estritamente necessário.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">5.4. Autoridades públicas e reguladores</h3>
                <p className="text-muted-foreground">
                  Quando houver obrigação legal, determinação regulatória ou ordem de autoridade competente.
                </p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg mt-6">
                <p className="font-bold text-foreground">Importante:</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Quando houver compartilhamento, buscamos aplicar padrões contratuais e operacionais de segurança e confidencialidade compatíveis com a LGPD.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 6. Segurança */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">6. Segurança e Proteção dos Dados</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Adotamos medidas técnicas e administrativas para proteger dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <Lock className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">Controle de Acesso</h4>
                <p className="text-sm text-muted-foreground">Acesso por perfis e necessidade de uso</p>
              </div>
              <div className="bg-muted/30 p-5 rounded-lg">
                <FileKey className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">Autenticação</h4>
                <p className="text-sm text-muted-foreground">Gestão de credenciais e autenticação segura</p>
              </div>
              <div className="bg-muted/30 p-5 rounded-lg">
                <Database className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">Backup</h4>
                <p className="text-sm text-muted-foreground">Rotinas de backup e continuidade</p>
              </div>
              <div className="bg-muted/30 p-5 rounded-lg">
                <Activity className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">Monitoramento</h4>
                <p className="text-sm text-muted-foreground">Registro de logs e prevenção de incidentes</p>
              </div>
              <div className="bg-muted/30 p-5 rounded-lg">
                <ClipboardCheck className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">Políticas Internas</h4>
                <p className="text-sm text-muted-foreground">Treinamentos e orientação de equipe</p>
              </div>
              <div className="bg-muted/30 p-5 rounded-lg">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">Documentos Clínicos</h4>
                <p className="text-sm text-muted-foreground">Regras para uso e digitalização</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Essas medidas se alinham a recomendações de boas práticas e guias orientativos publicados por órgãos oficiais, inclusive ANPD e Governo Digital.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* 7. Armazenamento e Retenção */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">7. Armazenamento e Retenção</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Mantemos dados pessoais pelo tempo necessário para cumprir as finalidades informadas e obrigações legais/regulatórias.
            </p>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-lg mb-3">7.1. Prontuários e documentos assistenciais</h3>
                <p className="text-muted-foreground mb-3">
                  Prontuários de pacientes podem ser mantidos por prazo mínimo de <strong>20 anos</strong> a partir do último registro, observadas as regras legais aplicáveis.
                </p>
                <p className="text-sm text-muted-foreground">
                  A digitalização e guarda de documentos clínicos pode observar normas técnicas específicas do Conselho Federal de Odontologia, incluindo requisitos de segurança para documentos eletrônicos em saúde.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">7.2. Dados administrativos e financeiros</h3>
                <p className="text-muted-foreground mb-3">
                  Podem ser mantidos pelo tempo necessário para execução contratual, cumprimento de obrigações legais e resguardo de direitos.
                </p>
                <p className="text-sm text-muted-foreground">
                  Quando a eliminação for aplicável, ela ocorrerá com segurança. Em certos casos, os dados poderão ser preservados de forma anonimizada, quando permitido e útil dentro dos limites legais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 8. Direitos dos Titulares */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <UserCheck className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">8. Direitos dos Titulares</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              O titular pode exercer os direitos previstos na LGPD, incluindo:
            </p>
            <div className="bg-muted/30 p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Confirmação de tratamento:</strong> Saber se tratamos seus dados pessoais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Acesso:</strong> Obter cópia dos seus dados pessoais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Correção:</strong> Atualizar dados incompletos, inexatos ou desatualizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar para dados desnecessários ou excessivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Portabilidade:</strong> Transferir dados para outro fornecedor de serviço</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Informação sobre compartilhamentos:</strong> Saber com quem compartilhamos seus dados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Informação sobre não consentimento:</strong> Saber as consequências de não fornecer consentimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Revogação do consentimento:</strong> Retirar consentimento a qualquer momento</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-6">
                Para solicitar o exercício de direitos, entre em contato pelos canais indicados na seção 11 (podemos solicitar informações adicionais para validação de identidade e segurança).
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 9. Cookies */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Cookie className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">9. Cookies e Tecnologias Semelhantes</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Em nossos ambientes digitais, podemos utilizar cookies e tecnologias equivalentes para:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background p-5 rounded-lg">
                <h4 className="font-bold mb-2">Funcionalidades essenciais</h4>
                <p className="text-sm text-muted-foreground">Necessários para o funcionamento básico do site</p>
              </div>
              <div className="bg-background p-5 rounded-lg">
                <h4 className="font-bold mb-2">Segurança</h4>
                <p className="text-sm text-muted-foreground">Proteção e prevenção de fraudes</p>
              </div>
              <div className="bg-background p-5 rounded-lg">
                <h4 className="font-bold mb-2">Métricas e melhoria</h4>
                <p className="text-sm text-muted-foreground">Análise de uso e aprimoramento da experiência</p>
              </div>
              <div className="bg-background p-5 rounded-lg">
                <h4 className="font-bold mb-2">Marketing (quando habilitado)</h4>
                <p className="text-sm text-muted-foreground">Mensuração de campanhas e comunicação personalizada</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              O usuário pode gerenciar cookies no navegador e, quando houver banner/gestor de cookies, ajustar preferências por categoria. Seguimos orientações de boas práticas da ANPD sobre transparência e escolhas do titular.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* 10. Transferência Internacional */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Globe className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">10. Transferência Internacional</h2>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <p className="text-muted-foreground">
                Alguns fornecedores de tecnologia podem armazenar ou processar dados em servidores localizados fora do Brasil. 
                Nesses casos, buscamos adotar salvaguardas compatíveis com a LGPD para transferência internacional de dados pessoais.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 11. Encarregado (DPO) */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Contact className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">11. Encarregado (DPO)</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              A Interdental indica um Encarregado pelo tratamento de dados pessoais, que atua como canal de comunicação com titulares e ANPD.
            </p>
            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="font-bold text-xl mb-6">Dados do Encarregado</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <a href="mailto:lgpd@interdentaldf.com.br" className="text-primary hover:underline">
                      lgpd@interdentaldf.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <a href="tel:+556133212221" className="text-primary hover:underline">
                      (61) 3321-2221
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Horário de atendimento</p>
                    <p className="text-muted-foreground">Segunda a sexta, das 8h às 18h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">
                      SRTVS – Setor de Rádio e Televisão Sul – Edifício Palácio do Rádio II – Salas 207 e 209, Brasília/DF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 12. Alterações */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <RefreshCw className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">12. Alterações desta Política</h2>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Esta Política pode ser atualizada a qualquer momento, com efeito imediato após publicação em nossos canais oficiais. 
                Recomendamos o acompanhamento periódico.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default PrivacyPolicy;
