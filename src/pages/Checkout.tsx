import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { plans } from "@/data/plans";

// Máscaras de input
const formatCPF = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  return numbers
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 10) {
    return numbers
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return numbers
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};

const formatCEP = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  return numbers.replace(/(\d{5})(\d)/, "$1-$2").replace(/(-\d{3})\d+?$/, "$1");
};

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthdate: "",
    email: "",
    phone: "",
    cep: "",
    dependents: "0"
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    switch (field) {
      case "cpf":
        formattedValue = formatCPF(value);
        break;
      case "phone":
        formattedValue = formatPhone(value);
        break;
      case "cep":
        formattedValue = formatCEP(value);
        break;
      default:
        formattedValue = value;
    }
    
    setFormData({ ...formData, [field]: formattedValue });
  };

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      toast({
        title: "Atenção",
        description: "Você precisa concordar com os termos de uso",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedPlanData = plans.find(p => p.id === selectedPlan);
      const message = `Olá! Gostaria de contratar o *${selectedPlanData?.name}*\n\nDados:\nNome: ${formData.name}\nCPF: ${formData.cpf}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nDependentes: ${formData.dependents}`;
      
      const whatsappUrl = `https://wa.me/556133212221?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Proposta enviada!",
        description: "Nossa equipe entrará em contato em breve.",
      });

      setTimeout(() => navigate("/"), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStep2Valid = formData.name.trim() && 
    formData.cpf.length === 14 && 
    formData.email.includes("@") && 
    formData.phone.length >= 14;

  return (
    <div className="w-full">
      <PageHero
        title="Contrate seu plano agora"
        subtitle="Falta pouco para começar a cuidar do seu sorriso"
      />

      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Stepper */}
            <div className="flex justify-between mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= s ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                    {step > s ? <Check className="h-5 w-5" /> : s}
                  </div>
                  {s < 3 && <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
                </div>
              ))}
            </div>

            {/* Step 1: Escolha do Plano */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Escolha seu plano</h2>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                  {plans.map((plan) => (
                    <div key={plan.id} className="flex items-center space-x-2 p-4 border rounded-lg hover:border-primary cursor-pointer">
                      <RadioGroupItem value={plan.id} id={plan.id} />
                      <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                        <div className="font-bold">{plan.name}</div>
                        <div className="text-sm text-muted-foreground">{plan.description}</div>
                        <div className="text-lg font-bold text-primary mt-2">{plan.price}/mês</div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <Button 
                  onClick={() => setStep(2)} 
                  disabled={!selectedPlan}
                  className="w-full"
                  size="lg"
                >
                  Continuar
                </Button>
              </div>
            )}

            {/* Step 2: Dados Pessoais */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Seus dados</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome completo</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input 
                      id="cpf" 
                      value={formData.cpf}
                      onChange={(e) => handleInputChange("cpf", e.target.value)}
                      placeholder="000.000.000-00"
                      maxLength={14}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthdate">Data de nascimento</Label>
                    <Input 
                      id="birthdate" 
                      type="date"
                      value={formData.birthdate}
                      onChange={(e) => handleInputChange("birthdate", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp</Label>
                    <Input 
                      id="phone" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(61) 99999-9999"
                      maxLength={15}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cep">CEP</Label>
                    <Input 
                      id="cep" 
                      value={formData.cep}
                      onChange={(e) => handleInputChange("cep", e.target.value)}
                      placeholder="00000-000"
                      maxLength={9}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dependents">Número de dependentes</Label>
                    <Input 
                      id="dependents" 
                      type="number"
                      min="0"
                      value={formData.dependents}
                      onChange={(e) => handleInputChange("dependents", e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Voltar
                  </Button>
                  <Button 
                    onClick={() => setStep(3)} 
                    className="flex-1"
                    disabled={!isStep2Valid}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmação */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Confirmação</h2>
                
                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Plano Selecionado</h3>
                    <p className="text-lg">{plans.find(p => p.id === selectedPlan)?.name}</p>
                    <p className="text-2xl font-bold text-primary">{plans.find(p => p.id === selectedPlan)?.price}/mês</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-bold mb-2">Seus Dados</h3>
                    <div className="space-y-1 text-sm">
                      <p><strong>Nome:</strong> {formData.name}</p>
                      <p><strong>CPF:</strong> {formData.cpf}</p>
                      <p><strong>E-mail:</strong> {formData.email}</p>
                      <p><strong>Telefone:</strong> {formData.phone}</p>
                      <p><strong>Dependentes:</strong> {formData.dependents}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    Li e concordo com os{" "}
                    <Link 
                      to="/termos-de-uso" 
                      className="text-primary hover:underline font-medium"
                      target="_blank"
                    >
                      termos de uso
                    </Link>{" "}
                    e a{" "}
                    <Link 
                      to="/politica-de-privacidade" 
                      className="text-primary hover:underline font-medium"
                      target="_blank"
                    >
                      política de privacidade
                    </Link>
                  </Label>
                </div>

                <p className="text-sm text-muted-foreground">
                  Nossa equipe entrará em contato em até 24h para finalizar sua contratação
                </p>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1" disabled={isSubmitting}>
                    Voltar
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    className="flex-1"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Confirmar Contratação"
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Checkout;
