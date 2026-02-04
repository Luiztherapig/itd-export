import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building2, Users, Heart, DollarSign, Shield, Check, Phone, Mail, Send, Briefcase, TrendingUp, Award, Clock } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { planPJ } from "@/data/plans";

const quotationSchema = z.object({
  companyName: z.string().min(2, "Nome da empresa é obrigatório").max(100),
  cnpj: z.string().min(14, "CNPJ inválido").max(18),
  responsibleName: z.string().min(2, "Nome do responsável é obrigatório").max(100),
  email: z.string().email("E-mail inválido").max(255),
  phone: z.string().min(10, "Telefone inválido").max(20),
  numberOfLives: z.string().min(1, "Selecione a quantidade de vidas"),
  message: z.string().max(1000).optional(),
});

type QuotationFormData = z.infer<typeof quotationSchema>;

const benefits = [
  {
    icon: Users,
    title: "Retenção de Talentos",
    description: "Benefício valorizado que ajuda a atrair e reter os melhores profissionais do mercado.",
  },
  {
    icon: TrendingUp,
    title: "Aumento de Produtividade",
    description: "Colaboradores saudáveis faltam menos e produzem mais, impactando positivamente os resultados.",
  },
  {
    icon: Heart,
    title: "Saúde Integral",
    description: "A saúde bucal está diretamente ligada à saúde geral, prevenindo diversas doenças.",
  },
  {
    icon: DollarSign,
    title: "Custo Acessível",
    description: "Investimento baixo com alto retorno em satisfação e bem-estar da equipe.",
  },
];

const pricingTiers = [
  { range: "2 a 10 vidas", pricePerLife: "R$ 34,50", estimate: "R$ 69,00 - R$ 345,00", highlight: false },
  { range: "11 a 30 vidas", pricePerLife: "R$ 34,50", estimate: "R$ 379,50 - R$ 1.035,00", highlight: true },
  { range: "31 a 50 vidas", pricePerLife: "Sob consulta", estimate: "Personalizado", highlight: false },
  { range: "Acima de 50 vidas", pricePerLife: "Sob consulta", estimate: "Personalizado", highlight: false },
];

const faqItems = [
  {
    question: "Qual o prazo de carência para os planos empresariais?",
    answer: "Para grupos a partir de 10 vidas, oferecemos carências reduzidas ou até isenção total de carência. Consulte nosso comercial para condições específicas para sua empresa.",
  },
  {
    question: "Como funciona a inclusão de dependentes?",
    answer: "Os colaboradores podem incluir cônjuges e filhos como dependentes, com as mesmas condições do plano empresarial. A inclusão pode ser feita a qualquer momento durante a vigência do contrato.",
  },
  {
    question: "Posso incluir novos colaboradores depois da contratação?",
    answer: "Sim! Novos colaboradores podem ser incluídos a qualquer momento. Basta entrar em contato com nosso setor comercial para realizar a inclusão.",
  },
  {
    question: "Quais documentos são necessários para a contratação?",
    answer: "Para contratação, são necessários: Contrato Social ou documento equivalente, CNPJ, lista de beneficiários com CPF e data de nascimento, e documentos do responsável pela contratação.",
  },
  {
    question: "Existe fidelidade no contrato empresarial?",
    answer: "Nossos contratos empresariais têm vigência mínima de 12 meses, podendo ser renovados automaticamente. Consulte nosso comercial para mais detalhes.",
  },
];

const PlanEmpresarial = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      companyName: "",
      cnpj: "",
      responsibleName: "",
      email: "",
      phone: "",
      numberOfLives: "",
      message: "",
    },
  });

  const onSubmit = async (data: QuotationFormData) => {
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Cotação Plano Empresarial - ${data.companyName}`);
    const body = encodeURIComponent(
      `Nome da Empresa: ${data.companyName}\n` +
      `CNPJ: ${data.cnpj}\n` +
      `Responsável: ${data.responsibleName}\n` +
      `E-mail: ${data.email}\n` +
      `Telefone: ${data.phone}\n` +
      `Quantidade de Vidas: ${data.numberOfLives}\n` +
      `Mensagem: ${data.message || "Não informada"}`
    );
    
    window.location.href = `mailto:comercial@interdentaldf.com.br?subject=${subject}&body=${body}`;
    
    toast({
      title: "Solicitação enviada!",
      description: "Seu cliente de e-mail foi aberto. Envie a mensagem para concluir a solicitação.",
    });
    
    setIsSubmitting(false);
  };

  const formatCNPJ = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 18);
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Planos Empresariais"
        subtitle="Cuide da saúde bucal dos seus colaboradores com condições exclusivas para empresas"
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que oferecer plano odontológico na sua empresa?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um investimento que traz retorno em satisfação, produtividade e retenção de talentos
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-trust/20 flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tabela de Preços por Quantidade de Vidas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quanto mais colaboradores, melhores condições. Consulte-nos para planos personalizados.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-trust text-primary-foreground">
                      <th className="px-6 py-4 text-left font-semibold">Quantidade de Vidas</th>
                      <th className="px-6 py-4 text-center font-semibold">Valor por Vida</th>
                      <th className="px-6 py-4 text-center font-semibold">Valor Mensal Estimado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTiers.map((tier, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border transition-colors hover:bg-muted/50 ${
                          tier.highlight ? "bg-primary/5" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="font-medium">{tier.range}</span>
                            {tier.highlight && (
                              <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="font-semibold text-primary">{tier.pricePerLife}</span>
                        </td>
                        <td className="px-6 py-4 text-center text-muted-foreground">
                          {tier.estimate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coberturas do Plano Empresarial
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todas as coberturas que seus colaboradores precisam em um único plano
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {planPJ.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 inline-block mr-1" />
                    Registro ANS nº {planPJ.registrationNumber}
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Quotation Form Section */}
      <section id="cotacao" className="py-20 bg-gradient-to-br from-primary/5 via-background to-trust/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in-left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Solicite uma Cotação
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário e nossa equipe comercial entrará em contato com uma proposta personalizada para sua empresa.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Resposta Rápida</p>
                      <p className="text-sm text-muted-foreground">Retornamos em até 24 horas úteis</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Proposta Personalizada</p>
                      <p className="text-sm text-muted-foreground">Condições especiais para sua empresa</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Atendimento Dedicado</p>
                      <p className="text-sm text-muted-foreground">Suporte exclusivo para clientes empresariais</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Ou entre em contato diretamente:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <a
                      href="mailto:comercial@interdentaldf.com.br"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      comercial@interdentaldf.com.br
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <Card className="shadow-xl border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" />
                    Formulário de Cotação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome da Empresa *</FormLabel>
                            <FormControl>
                              <Input placeholder="Empresa Exemplo LTDA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="cnpj"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CNPJ *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="00.000.000/0000-00"
                                {...field}
                                onChange={(e) => field.onChange(formatCNPJ(e.target.value))}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="responsibleName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome do Responsável *</FormLabel>
                            <FormControl>
                              <Input placeholder="João Silva" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-mail *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="contato@empresa.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefone *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="(00) 00000-0000"
                                  {...field}
                                  onChange={(e) => field.onChange(formatPhone(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="numberOfLives"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantidade de Vidas *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione a quantidade" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="2-10">2 a 10 vidas</SelectItem>
                                <SelectItem value="11-30">11 a 30 vidas</SelectItem>
                                <SelectItem value="31-50">31 a 50 vidas</SelectItem>
                                <SelectItem value="50+">Acima de 50 vidas</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem (opcional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Informações adicionais sobre sua empresa ou necessidades específicas..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Solicitar Cotação"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre os planos empresariais
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PlanEmpresarial;
