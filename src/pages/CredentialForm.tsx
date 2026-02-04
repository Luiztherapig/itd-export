import { useState } from "react";
import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";

// Estados brasileiros
const brazilianStates = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" }
];

// Bancos
const banks = [
  "Banco do Brasil", "Caixa Econômica", "Bradesco", "Itaú", "Santander",
  "Nubank", "Inter", "C6 Bank", "Sicoob", "Sicredi", "Outros"
];

// Especialidades (2 colunas)
const specialtiesColumn1 = [
  "Alinhador Ortodôntico",
  "Auditoria",
  "Avaliação Ortodôntica",
  "Cirurgião Buco Maxilo Facial",
  "Clareamento",
  "Diagnóstico Inicial",
  "Endodontia até Pré-Molar (Canal)",
  "Exodontia 3º Molar",
  "Extrações Simples",
  "Implantodontia",
  "Master",
  "Odontopediatria",
  "Pacientes Especiais",
  "Prevenção (Consulta, Limpeza)",
  "Radiologia (Raio X, Documentação Ortodôntica)",
  "Urgência Diurna",
  "VIP"
];

const specialtiesColumn2 = [
  "Aparelho Estético (Fixo em Cerâmica)",
  "Avaliação Cirúrgica",
  "Cirurgia",
  "Cirurgião Dentista em Geral",
  "Dentística (Restaurações)",
  "Endodontia (Canal)",
  "Endodontia de Molar (Canal)",
  "Extrações de Incluso e Semi-Incluso (Siso)",
  "Harmonização Orofacial",
  "Laboratório",
  "Não Especificado",
  "Ortodontia",
  "Periodontia",
  "Prótese (Bloco, Coroa, Pino)",
  "Retratamento de Canal",
  "Urgência Noturna"
];

const CredentialForm = () => {
  const [step, setStep] = useState(1);
  const [tipoCadastro, setTipoCadastro] = useState<"PF" | "PJ">("PF");
  
  const [dentistData, setDentistData] = useState({
    nome: "",
    cpf: "",
    rg: "",
    orgaoExpedidor: "",
    sexo: "",
    cro: "",
    ufCro: "",
    dataExpedicao: "",
    telefone: "",
    whatsapp: ""
  });

  const [clinicData, setClinicData] = useState({
    filial: "",
    razaoSocial: "",
    nomeFantasia: "",
    cnpj: "",
    telefone: "",
    whatsapp: ""
  });

  const [dentistAddress, setDentistAddress] = useState({
    cep: "",
    tipo: "",
    endereco: "",
    numero: "",
    complemento: "",
    pontoReferencia: "",
    bairro: "",
    municipio: "",
    uf: ""
  });

  const [clinicAddress, setClinicAddress] = useState({
    useSameAddress: false,
    cep: "",
    tipo: "",
    endereco: "",
    numero: "",
    complemento: "",
    pontoReferencia: "",
    bairro: "",
    municipio: "",
    uf: ""
  });

  const [bankData, setBankData] = useState({
    titular: "",
    banco: "",
    agencia: "",
    conta: "",
    tipoConta: ""
  });

  const [specialties, setSpecialties] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  // Máscaras de formatação
  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatCNPJ = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatCEP = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const toggleSpecialty = (specialty: string) => {
    setSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const handleSubmit = () => {
    if (!agreedToTerms) {
      toast({
        title: "Atenção",
        description: "Você precisa concordar com os termos de credenciamento",
        variant: "destructive"
      });
      return;
    }

    if (specialties.length === 0) {
      toast({
        title: "Atenção",
        description: "Selecione pelo menos uma especialidade",
        variant: "destructive"
      });
      return;
    }

    // Montar mensagem para WhatsApp
    let message = `Olá! Sou ${dentistData.nome} e gostaria de me credenciar à rede Orale.\n\n`;
    message += `*TIPO DE CADASTRO:* ${tipoCadastro}\n\n`;
    message += `*DADOS DO DENTISTA:*\n`;
    message += `Nome: ${dentistData.nome}\n`;
    message += `CPF: ${dentistData.cpf}\n`;
    message += `CRO: ${dentistData.cro} - ${dentistData.ufCro}\n`;
    message += `Telefone: ${dentistData.telefone}\n`;
    message += `WhatsApp: ${dentistData.whatsapp}\n\n`;

    if (tipoCadastro === "PJ") {
      message += `*DADOS DA CLÍNICA:*\n`;
      message += `Razão Social: ${clinicData.razaoSocial}\n`;
      message += `CNPJ: ${clinicData.cnpj}\n`;
      message += `Telefone: ${clinicData.telefone}\n\n`;
    }

    message += `*ESPECIALIDADES:*\n${specialties.join(", ")}\n\n`;
    message += `Aguardo retorno para mais informações.`;

    const whatsappUrl = `https://wa.me/556133212221?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Cadastro enviado!",
      description: "Nossa equipe de credenciamento entrará em contato em até 48 horas úteis.",
    });

    setTimeout(() => navigate("/"), 2000);
  };

  const isStep1Valid = true; // Sempre válido, pois tem valor padrão "PF"
  const isStep2Valid = dentistData.nome && dentistData.cpf && dentistData.cro && dentistData.telefone && dentistData.whatsapp;
  const isStep3Valid = tipoCadastro === "PF" || (clinicData.razaoSocial && clinicData.cnpj);
  const isStep4Valid = dentistAddress.cep && dentistAddress.endereco && dentistAddress.numero;
  const isStep5Valid = clinicAddress.useSameAddress || (clinicAddress.cep && clinicAddress.endereco && clinicAddress.numero);
  const isStep6Valid = bankData.titular && bankData.banco && bankData.agencia && bankData.conta;

  return (
    <div className="w-full">
      <PageHero
        title="Cadastro de Credenciado"
        subtitle="Faça parte da nossa rede de profissionais"
      />

      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Stepper */}
            <div className="flex justify-between mb-12 overflow-x-auto pb-4">
              {[1, 2, 3, 4, 5, 6, 7].map((s) => (
                <div key={s} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} transition-colors`}>
                      {step > s ? <Check className="h-5 w-5" /> : s}
                    </div>
                    <span className="text-xs mt-1 hidden sm:block">{
                      s === 1 ? "Tipo" :
                      s === 2 ? "Dentista" :
                      s === 3 ? "Clínica" :
                      s === 4 ? "End. Dentista" :
                      s === 5 ? "End. Clínica" :
                      s === 6 ? "Bancário" :
                      "Especialidades"
                    }</span>
                  </div>
                  {s < 7 && <div className={`flex-1 h-1 mx-1 ${step > s ? 'bg-primary' : 'bg-muted'} transition-colors min-w-4`} />}
                </div>
              ))}
            </div>

            {/* Etapa 1: Tipo de Cadastro */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <p className="text-center text-muted-foreground">
                    Agradecemos seu interesse em fazer parte da rede credenciada Orale, pedimos a gentileza que preencha o formulário abaixo.
                  </p>
                </div>
                
                <h2 className="text-2xl font-bold mb-6">Tipo de Cadastro</h2>
                <RadioGroup value={tipoCadastro} onValueChange={(value) => setTipoCadastro(value as "PF" | "PJ")}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:border-primary cursor-pointer">
                    <RadioGroupItem value="PF" id="pf" />
                    <Label htmlFor="pf" className="flex-1 cursor-pointer font-medium">
                      Pessoa Física
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:border-primary cursor-pointer">
                    <RadioGroupItem value="PJ" id="pj" />
                    <Label htmlFor="pj" className="flex-1 cursor-pointer font-medium">
                      Pessoa Jurídica
                    </Label>
                  </div>
                </RadioGroup>
                
                <Button 
                  onClick={() => setStep(2)} 
                  disabled={!isStep1Valid}
                  className="w-full"
                  size="lg"
                >
                  Continuar
                </Button>
              </div>
            )}

            {/* Etapa 2: Dados do Dentista */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Dados do Dentista</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="nome">Nome Completo <span className="text-destructive">*</span></Label>
                    <Input 
                      id="nome" 
                      value={dentistData.nome}
                      onChange={(e) => setDentistData({...dentistData, nome: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cpf">CPF <span className="text-destructive">*</span></Label>
                    <div className="flex gap-2">
                      <Input 
                        id="cpf" 
                        value={dentistData.cpf}
                        onChange={(e) => setDentistData({...dentistData, cpf: formatCPF(e.target.value)})}
                        placeholder="000.000.000-00"
                        maxLength={14}
                        required
                      />
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <a href="https://www.situacao-cadastral.com/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="rg">RG</Label>
                    <Input 
                      id="rg" 
                      value={dentistData.rg}
                      onChange={(e) => setDentistData({...dentistData, rg: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="orgaoExpedidor">Órgão Expedidor</Label>
                    <Input 
                      id="orgaoExpedidor" 
                      value={dentistData.orgaoExpedidor}
                      onChange={(e) => setDentistData({...dentistData, orgaoExpedidor: e.target.value})}
                      placeholder="SSP, IFP, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="sexo">Sexo</Label>
                    <Select value={dentistData.sexo} onValueChange={(value) => setDentistData({...dentistData, sexo: value})}>
                      <SelectTrigger id="sexo">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                        <SelectItem value="nao-informar">Prefiro não informar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="cro">CRO <span className="text-destructive">*</span></Label>
                    <Input 
                      id="cro" 
                      value={dentistData.cro}
                      onChange={(e) => setDentistData({...dentistData, cro: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="ufCro">UF do CRO <span className="text-destructive">*</span></Label>
                    <Select value={dentistData.ufCro} onValueChange={(value) => setDentistData({...dentistData, ufCro: value})}>
                      <SelectTrigger id="ufCro">
                        <SelectValue placeholder="Selecione o estado" />
                      </SelectTrigger>
                      <SelectContent>
                        {brazilianStates.map(state => (
                          <SelectItem key={state.value} value={state.value}>{state.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="dataExpedicao">Data de Expedição</Label>
                    <Input 
                      id="dataExpedicao" 
                      type="date"
                      value={dentistData.dataExpedicao}
                      onChange={(e) => setDentistData({...dentistData, dataExpedicao: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefone">Telefone <span className="text-destructive">*</span></Label>
                    <Input 
                      id="telefone" 
                      value={dentistData.telefone}
                      onChange={(e) => setDentistData({...dentistData, telefone: formatPhone(e.target.value)})}
                      placeholder="(61) 99999-9999"
                      maxLength={15}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp <span className="text-destructive">*</span></Label>
                    <Input 
                      id="whatsapp" 
                      value={dentistData.whatsapp}
                      onChange={(e) => setDentistData({...dentistData, whatsapp: formatPhone(e.target.value)})}
                      placeholder="(61) 99999-9999"
                      maxLength={15}
                      required
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

            {/* Etapa 3: Dados da Clínica */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Dados da Clínica</h2>
                
                {tipoCadastro === "PF" && (
                  <div className="bg-muted/50 p-6 rounded-lg mb-6">
                    <p className="text-center text-muted-foreground">
                      Como você selecionou Pessoa Física, esta etapa é opcional.
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="filial">Filial</Label>
                    <Input 
                      id="filial" 
                      value={clinicData.filial}
                      onChange={(e) => setClinicData({...clinicData, filial: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="razaoSocial">
                      Razão Social {tipoCadastro === "PJ" && <span className="text-destructive">*</span>}
                    </Label>
                    <Input 
                      id="razaoSocial" 
                      value={clinicData.razaoSocial}
                      onChange={(e) => setClinicData({...clinicData, razaoSocial: e.target.value})}
                      required={tipoCadastro === "PJ"}
                    />
                  </div>

                  <div>
                    <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
                    <Input 
                      id="nomeFantasia" 
                      value={clinicData.nomeFantasia}
                      onChange={(e) => setClinicData({...clinicData, nomeFantasia: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cnpj">
                      CNPJ {tipoCadastro === "PJ" && <span className="text-destructive">*</span>}
                    </Label>
                    <Input 
                      id="cnpj" 
                      value={clinicData.cnpj}
                      onChange={(e) => setClinicData({...clinicData, cnpj: formatCNPJ(e.target.value)})}
                      placeholder="00.000.000/0000-00"
                      maxLength={18}
                      required={tipoCadastro === "PJ"}
                    />
                  </div>

                  <div>
                    <Label htmlFor="clinicaTelefone">Telefone</Label>
                    <Input 
                      id="clinicaTelefone" 
                      value={clinicData.telefone}
                      onChange={(e) => setClinicData({...clinicData, telefone: formatPhone(e.target.value)})}
                      placeholder="(61) 99999-9999"
                      maxLength={15}
                    />
                  </div>

                  <div>
                    <Label htmlFor="clinicaWhatsapp">WhatsApp</Label>
                    <Input 
                      id="clinicaWhatsapp" 
                      value={clinicData.whatsapp}
                      onChange={(e) => setClinicData({...clinicData, whatsapp: formatPhone(e.target.value)})}
                      placeholder="(61) 99999-9999"
                      maxLength={15}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Voltar
                  </Button>
                  <Button 
                    onClick={() => setStep(4)} 
                    className="flex-1"
                    disabled={!isStep3Valid}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Etapa 4: Endereço do Dentista */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Endereço do Dentista</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dentistCep">CEP <span className="text-destructive">*</span></Label>
                    <div className="flex gap-2">
                      <Input 
                        id="dentistCep" 
                        value={dentistAddress.cep}
                        onChange={(e) => setDentistAddress({...dentistAddress, cep: formatCEP(e.target.value)})}
                        placeholder="00000-000"
                        maxLength={9}
                        required
                      />
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="dentistTipo">Tipo de Logradouro</Label>
                    <Select value={dentistAddress.tipo} onValueChange={(value) => setDentistAddress({...dentistAddress, tipo: value})}>
                      <SelectTrigger id="dentistTipo">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rua">Rua</SelectItem>
                        <SelectItem value="avenida">Avenida</SelectItem>
                        <SelectItem value="quadra">Quadra</SelectItem>
                        <SelectItem value="conjunto">Conjunto</SelectItem>
                        <SelectItem value="sqn">SQN</SelectItem>
                        <SelectItem value="sqs">SQS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="dentistEndereco">Endereço <span className="text-destructive">*</span></Label>
                    <Input 
                      id="dentistEndereco" 
                      value={dentistAddress.endereco}
                      onChange={(e) => setDentistAddress({...dentistAddress, endereco: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="dentistNumero">Número <span className="text-destructive">*</span></Label>
                    <Input 
                      id="dentistNumero" 
                      value={dentistAddress.numero}
                      onChange={(e) => setDentistAddress({...dentistAddress, numero: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="dentistComplemento">Complemento</Label>
                    <Input 
                      id="dentistComplemento" 
                      value={dentistAddress.complemento}
                      onChange={(e) => setDentistAddress({...dentistAddress, complemento: e.target.value})}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="dentistPontoReferencia">Ponto de Referência</Label>
                    <Input 
                      id="dentistPontoReferencia" 
                      value={dentistAddress.pontoReferencia}
                      onChange={(e) => setDentistAddress({...dentistAddress, pontoReferencia: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="dentistBairro">Bairro</Label>
                    <Input 
                      id="dentistBairro" 
                      value={dentistAddress.bairro}
                      onChange={(e) => setDentistAddress({...dentistAddress, bairro: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="dentistMunicipio">Município</Label>
                    <Input 
                      id="dentistMunicipio" 
                      value={dentistAddress.municipio}
                      onChange={(e) => setDentistAddress({...dentistAddress, municipio: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="dentistUf">UF</Label>
                    <Select value={dentistAddress.uf} onValueChange={(value) => setDentistAddress({...dentistAddress, uf: value})}>
                      <SelectTrigger id="dentistUf">
                        <SelectValue placeholder="Selecione o estado" />
                      </SelectTrigger>
                      <SelectContent>
                        {brazilianStates.map(state => (
                          <SelectItem key={state.value} value={state.value}>{state.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                    Voltar
                  </Button>
                  <Button 
                    onClick={() => setStep(5)} 
                    className="flex-1"
                    disabled={!isStep4Valid}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Etapa 5: Endereço da Clínica */}
            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Endereço da Clínica</h2>
                
                <div className="flex items-center space-x-2 p-4 border rounded-lg bg-muted/30">
                  <Checkbox 
                    id="useSameAddress" 
                    checked={clinicAddress.useSameAddress}
                    onCheckedChange={(checked) => {
                      setClinicAddress({...clinicAddress, useSameAddress: checked as boolean});
                      if (checked) {
                        setClinicAddress({
                          ...dentistAddress,
                          useSameAddress: true
                        });
                      }
                    }}
                  />
                  <Label htmlFor="useSameAddress" className="cursor-pointer">
                    Usar o mesmo endereço do dentista
                  </Label>
                </div>

                {!clinicAddress.useSameAddress && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="clinicCep">CEP <span className="text-destructive">*</span></Label>
                      <div className="flex gap-2">
                        <Input 
                          id="clinicCep" 
                          value={clinicAddress.cep}
                          onChange={(e) => setClinicAddress({...clinicAddress, cep: formatCEP(e.target.value)})}
                          placeholder="00000-000"
                          maxLength={9}
                          required
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          asChild
                        >
                          <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="clinicTipo">Tipo de Logradouro</Label>
                      <Select value={clinicAddress.tipo} onValueChange={(value) => setClinicAddress({...clinicAddress, tipo: value})}>
                        <SelectTrigger id="clinicTipo">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rua">Rua</SelectItem>
                          <SelectItem value="avenida">Avenida</SelectItem>
                          <SelectItem value="quadra">Quadra</SelectItem>
                          <SelectItem value="conjunto">Conjunto</SelectItem>
                          <SelectItem value="sqn">SQN</SelectItem>
                          <SelectItem value="sqs">SQS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="clinicEndereco">Endereço <span className="text-destructive">*</span></Label>
                      <Input 
                        id="clinicEndereco" 
                        value={clinicAddress.endereco}
                        onChange={(e) => setClinicAddress({...clinicAddress, endereco: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="clinicNumero">Número <span className="text-destructive">*</span></Label>
                      <Input 
                        id="clinicNumero" 
                        value={clinicAddress.numero}
                        onChange={(e) => setClinicAddress({...clinicAddress, numero: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="clinicComplemento">Complemento</Label>
                      <Input 
                        id="clinicComplemento" 
                        value={clinicAddress.complemento}
                        onChange={(e) => setClinicAddress({...clinicAddress, complemento: e.target.value})}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="clinicPontoReferencia">Ponto de Referência</Label>
                      <Input 
                        id="clinicPontoReferencia" 
                        value={clinicAddress.pontoReferencia}
                        onChange={(e) => setClinicAddress({...clinicAddress, pontoReferencia: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="clinicBairro">Bairro</Label>
                      <Input 
                        id="clinicBairro" 
                        value={clinicAddress.bairro}
                        onChange={(e) => setClinicAddress({...clinicAddress, bairro: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="clinicMunicipio">Município</Label>
                      <Input 
                        id="clinicMunicipio" 
                        value={clinicAddress.municipio}
                        onChange={(e) => setClinicAddress({...clinicAddress, municipio: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="clinicUf">UF</Label>
                      <Select value={clinicAddress.uf} onValueChange={(value) => setClinicAddress({...clinicAddress, uf: value})}>
                        <SelectTrigger id="clinicUf">
                          <SelectValue placeholder="Selecione o estado" />
                        </SelectTrigger>
                        <SelectContent>
                          {brazilianStates.map(state => (
                            <SelectItem key={state.value} value={state.value}>{state.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(4)} className="flex-1">
                    Voltar
                  </Button>
                  <Button 
                    onClick={() => setStep(6)} 
                    className="flex-1"
                    disabled={!isStep5Valid}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Etapa 6: Dados Bancários */}
            {step === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Dados Bancários</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="titular">Nome do Titular da Conta <span className="text-destructive">*</span></Label>
                    <Input 
                      id="titular" 
                      value={bankData.titular}
                      onChange={(e) => setBankData({...bankData, titular: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="banco">Banco <span className="text-destructive">*</span></Label>
                    <Select value={bankData.banco} onValueChange={(value) => setBankData({...bankData, banco: value})}>
                      <SelectTrigger id="banco">
                        <SelectValue placeholder="Selecione o banco" />
                      </SelectTrigger>
                      <SelectContent>
                        {banks.map(bank => (
                          <SelectItem key={bank} value={bank}>{bank}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="agencia">Agência <span className="text-destructive">*</span></Label>
                    <Input 
                      id="agencia" 
                      value={bankData.agencia}
                      onChange={(e) => setBankData({...bankData, agencia: e.target.value})}
                      placeholder="0000"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="conta">Conta <span className="text-destructive">*</span></Label>
                    <Input 
                      id="conta" 
                      value={bankData.conta}
                      onChange={(e) => setBankData({...bankData, conta: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="tipoConta">Tipo de Conta <span className="text-destructive">*</span></Label>
                    <Select value={bankData.tipoConta} onValueChange={(value) => setBankData({...bankData, tipoConta: value})}>
                      <SelectTrigger id="tipoConta">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corrente">Corrente</SelectItem>
                        <SelectItem value="poupanca">Poupança</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(5)} className="flex-1">
                    Voltar
                  </Button>
                  <Button 
                    onClick={() => setStep(7)} 
                    className="flex-1"
                    disabled={!isStep6Valid}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Etapa 7: Especialidades */}
            {step === 7 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Especialidades</h2>
                
                <p className="text-muted-foreground mb-4">
                  Selecione todas as especialidades que você oferece:
                </p>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="space-y-3">
                    {specialtiesColumn1.map(specialty => (
                      <div key={specialty} className="flex items-center space-x-2">
                        <Checkbox 
                          id={specialty}
                          checked={specialties.includes(specialty)}
                          onCheckedChange={() => toggleSpecialty(specialty)}
                        />
                        <Label htmlFor={specialty} className="cursor-pointer text-sm">
                          {specialty}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {specialtiesColumn2.map(specialty => (
                      <div key={specialty} className="flex items-center space-x-2">
                        <Checkbox 
                          id={specialty}
                          checked={specialties.includes(specialty)}
                          onCheckedChange={() => toggleSpecialty(specialty)}
                        />
                        <Label htmlFor={specialty} className="cursor-pointer text-sm">
                          {specialty}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg space-y-4 mt-8">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      Li e concordo com os termos de credenciamento
                    </Label>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Nossa equipe de credenciamento entrará em contato em até 48 horas úteis para finalizar seu cadastro.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(6)} className="flex-1">
                    Voltar
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    className="flex-1"
                    size="lg"
                  >
                    Enviar Cadastro
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

export default CredentialForm;
