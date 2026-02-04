# 🦷 Interdental - Planos Odontológicos

> Plataforma web moderna para apresentação e contratação de planos odontológicos regulamentados pela ANS.

## 📋 Sobre o Projeto

O **Interdental** é uma empresa de planos odontológicos com 32 anos de atuação no Distrito Federal, regulamentada pela ANS (Registro nº 416452). Este projeto é uma Single Page Application (SPA) moderna desenvolvida para:

- Apresentação de planos individuais, familiares e empresariais
- Contratação online de serviços odontológicos
- Busca e localização de rede credenciada (100+ dentistas)
- Atendimento a mais de 10.000 pacientes
- Conformidade total com LGPD e regulamentações ANS

## ✨ Features Principais

### 🏠 **Homepage & Showcase**
- Hero animado com estatísticas em tempo real
- Apresentação de 4 planos principais com preços
- Grid interativo de benefícios e diferenciais
- FAQ expansível com respostas detalhadas
- CTAs de conversão estrategicamente posicionados

### 🦷 **Sistema de Planos**
- **Standard** (R$ 57,20) - Cobertura essencial ROL ANS
- **Master Orto** (R$ 182,50) - Inclui ortodontia completa
- **VIP** (R$ 119,50) - Premium com clareamento dental
- **Empresarial** (R$ 34,50) - Planos corporativos

### 🌐 **Funcionalidades Avançadas**
- Rede credenciada com busca por especialidade
- Formulários inteligentes de credenciamento
- Integration WhatsApp para suporte
- Sistema completo de cookies e LGPD
- Design responsivo mobile-first

## 🛠 Stack Tecnológica

### **Core Framework**
- **React** 18.3.1 + **TypeScript** 5.8.3
- **Vite** 5.4.19 (build tool e dev server)
- **React Router DOM** 6.30.1

### **UI & Estilização**
- **Tailwind CSS** 3.4.17 + Tailwind Animate
- **Radix UI** (componentes primitivos)
- **Shadcn/UI** (design system)
- **Lucide React** (ícones)

### **Estado & Formulários**
- **TanStack Query** 5.83.0 (cache e servidor)
- **React Hook Form** 7.61.1 + Zod 3.25.76
- **Date-fns** para manipulação de datas

### **Ferramentas**
- **ESLint** + **TypeScript ESLint**
- **PostCSS** + **Autoprefixer**
- **Embla Carousel** para carrosséis
- **Recharts** para visualizações

## 🚀 Quick Start

### **Pré-requisitos**
- Node.js 18+ 
- Package manager: bun (recomendado) ou npm

### **Instalação**
```bash
# Clone o repositório
git clone <repository-url>
cd interdental

# Instale dependências
bun install
# ou npm install

# Inicie o servidor de desenvolvimento
bun run dev
# ou npm run dev
```

### **Scripts Disponíveis**
```bash
bun run dev          # Servidor desenvolvimento (localhost:8080)
bun run build        # Build produção otimizado
bun run build:dev    # Build modo desenvolvimento
bun run lint         # Linting do código
bun run preview      # Preview do build local
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Primitivos Shadcn/UI (30+ componentes)
│   ├── layout/          # Layout e navegação
│   ├── home/            # Componentes específicos da home
│   ├── plans/           # Componentes dos planos
│   └── cards/           # Cartões especializados
├── pages/               # 17 páginas principais + rotas de planos
├── data/                # Dados estáticos (planos, configurações)
├── hooks/               # Custom hooks (mobile, toast, cookies)
├── lib/                 # Utilitários e configurações
└── assets/              # Imagens e mídia otimizadas
```

## 🔧 Configuração

### **Ambiente de Desenvolvimento**
- Servidor local em `localhost:8080`
- Hot reload automático com Vite
- Alias `@` configurado para `./src`

### **Build & Deploy**
- Build otimizado com tree-shaking
- Minificação automática de assets
- Otimização de imagens (.avif)
- Code splitting por rotas

## 📚 Documentação Completa

Para informações detalhadas, consulte a pasta `/docs`:

- **[Setup Detalhado](docs/SETUP.md)** - Instalação, configuração e troubleshooting
- **[Arquitetura](docs/ARCHITECTURE.md)** - Estrutura técnica e padrões de código  
- **[Features](docs/FEATURES.md)** - Funcionalidades do negócio e componentes
- **[Deploy](docs/DEPLOYMENT.md)** - Build, otimização e publicação
- **[Migração Vercel](docs/VERCEL-MIGRATION.md)** - Processo de migração completo
- **[Hospedagem](docs/HOSTING.md)** - Configurações de infraestrutura

## 🌐 Hospedagem & Deploy

### **Configuração Atual**
- **Plataforma**: Vercel (migrado de Hostinger)
- **Domínio**: Personalizado com SSL automático  
- **Deploy**: Automático via GitHub integration
- **Performance**: Edge CDN global

### **Processo de Deploy**
```bash
# Build e deploy automático no push para main
git push origin main

# Preview deploy em pull requests
git checkout -b feature/nova-funcionalidade
git push origin feature/nova-funcionalidade
```

## 📞 Suporte Técnico

Para questões técnicas ou de desenvolvimento:
- Consulte a documentação na pasta `/docs`
- Verifique os issues conhecidos no repositório
- Acesse os logs de build na Vercel dashboard

## 📄 Conformidade & Regulamentação

- ✅ **ANS**: Registro nº 416452 validado
- ✅ **LGPD**: Compliance completo com banner de cookies
- ✅ **Acessibilidade**: Navegação por teclado e ARIA labels
- ✅ **SEO**: Meta tags otimizadas e sitemap

---

**Interdental** - 32 anos cuidando do seu sorriso no Distrito Federal 🦷✨