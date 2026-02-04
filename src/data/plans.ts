export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  target: string;
  highlight: string;
  highlighted: boolean;
  registrationNumber: string;
}

export const plans: Plan[] = [
  {
    id: "standard",
    name: "Plano Standard",
    subtitle: "Essencial",
    description: "Plano completo para cuidados essenciais",
    price: "R$ 57,20",
    features: [
      "Consultas",
      "Prevenção",
      "Urgência",
      "Radiologia",
      "Odontopediatria",
      "Restauração em Resina",
      "Periodontia",
      "Extração (Cirurgia)",
      "Canal (Endodontia)",
      "Prótese (Coroa e Bloco)"
    ],
    target: "Indivíduos e famílias que buscam cuidados essenciais",
    highlight: "ROL ANS",
    highlighted: false,
    registrationNumber: "458.634/08-4"
  },
  {
    id: "master-orto",
    name: "Plano Master Orto",
    subtitle: "Completo com Ortodontia",
    description: "Inclui tratamento ortodôntico completo",
    price: "R$ 182,50",
    features: [
      "Consultas",
      "Prevenção",
      "Urgência",
      "Radiologia",
      "Odontopediatria",
      "Restauração em Resina",
      "Periodontia",
      "Extração (Cirurgia)",
      "Canal (Endodontia)",
      "Prótese (Coroa e Bloco)",
      "Ortodontia",
      "Aparelhos, Exames e Revisões"
    ],
    target: "Quem precisa de aparelho ortodôntico",
    highlight: "Aparelho Ortodôntico",
    highlighted: true,
    registrationNumber: "403.097/98-4"
  },
  {
    id: "vip",
    name: "Plano VIP",
    subtitle: "Premium",
    description: "Cobertura completa incluindo clareamento",
    price: "R$ 119,50",
    features: [
      "Consultas",
      "Prevenção",
      "Urgência",
      "Radiologia",
      "Odontopediatria",
      "Restauração em Resina",
      "Periodontia",
      "Extração (Cirurgia)",
      "Canal (Endodontia)",
      "Prótese (Coroa e Bloco)",
      "Ortodontia",
      "Aparelhos, Exames e Revisões",
      "Clareamento Dentário",
      "Placa de Bruxismo"
    ],
    target: "Quem busca cobertura completa e premium",
    highlight: "Clareamento Dentário",
    highlighted: false,
    registrationNumber: "403.098/98-2"
  }
];

export const planPJ: Plan = {
  id: "standard-pj",
  name: "Plano Standard",
  subtitle: "Empresarial",
  description: "Plano completo para empresas",
  price: "R$ 34,50",
  features: [
    "Consultas",
    "Prevenção",
    "Urgência",
    "Radiologia",
    "Odontopediatria",
    "Restauração em Resina",
    "Periodontia",
    "Extração (Cirurgia)",
    "Canal (Endodontia)",
    "Prótese (Coroa e Bloco)"
  ],
  target: "Empresas de todos os portes",
  highlight: "Para Empresas",
  highlighted: false,
  registrationNumber: "458.634/08-4"
};
