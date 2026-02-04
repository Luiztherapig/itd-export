# 🏗 Arquitetura - Interdental

> Documentação técnica da arquitetura, padrões de código e estrutura do projeto Interdental.

## 📐 Visão Geral da Arquitetura

### **Padrão Arquitetural**
- **SPA (Single Page Application)** com React + TypeScript
- **Component-Based Architecture** com composição de componentes
- **Atomic Design** para organização de componentes UI
- **Feature-Based Structure** para escalabilidade
- **Client-Side Routing** com React Router DOM

### **Stack Principal**
```
┌─────────────────────────────────────────────┐
│                Frontend SPA                 │
├─────────────────┬───────────────────────────┤
│ React 18.3.1    │ TypeScript 5.8.3         │
│ Vite 5.4.19     │ React Router 6.30.1      │
│ Tailwind CSS    │ Radix UI + Shadcn/UI     │
│ TanStack Query  │ React Hook Form + Zod    │
└─────────────────┴───────────────────────────┘
```

## 📁 Estrutura de Diretórios

### **Organização Principal**
```
src/
├── components/          # 🧩 Componentes reutilizáveis
│   ├── ui/             # 🎨 Primitivos base (Shadcn/UI)  
│   ├── layout/         # 📐 Layout e navegação
│   ├── home/           # 🏠 Componentes da home
│   ├── plans/          # 🦷 Componentes dos planos
│   └── cards/          # 🃏 Cartões especializados
├── pages/              # 📄 Páginas e rotas
├── hooks/              # 🪝 Custom hooks
├── lib/                # 🛠 Utilitários e configurações
├── data/               # 📊 Dados estáticos
└── assets/             # 🖼 Recursos estáticos
```

### **Hierarquia de Componentes**

#### **1. Componentes Base (/ui)**
```
ui/
├── button.tsx          # Botões padronizados
├── card.tsx            # Cartões base
├── dialog.tsx          # Modais e dialogs  
├── form.tsx            # Formulários
├── input.tsx           # Campos de entrada
├── navigation-menu.tsx # Navegação
├── accordion.tsx       # FAQ e expansíveis
└── ... (30+ componentes primitivos)
```
**Propósito**: Componentes primitivos baseados em Radix UI, totalmente customizáveis

#### **2. Layout (/layout)**
```
layout/
├── MainLayout.tsx      # Layout principal da aplicação
├── Navbar.tsx          # Cabeçalho e navegação
└── PageHero.tsx        # Hero genérico para páginas internas
```
**Propósito**: Estrutura base e navegação consistente

#### **3. Componentes de Negócio (/home, /plans, /cards)**
```
home/
├── HeroSection.tsx     # Hero principal com estatísticas
├── PlansShowcase.tsx   # Showcase dos 4 planos
├── BenefitsGrid.tsx    # Grid de benefícios
├── FAQSection.tsx      # Perguntas frequentes
└── ... (componentes específicos da home)

plans/
├── PlanHero.tsx        # Hero específico do plano
├── BenefitsSection.tsx # Benefícios detalhados
├── TargetAudienceSection.tsx # Público-alvo
└── ... (componentes dos planos)
```
**Propósito**: Componentes com lógica de negócio específica

## 🗂 Roteamento & Navegação

### **Estrutura de Rotas**
```typescript
// Rotas principais definidas em src/main.tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/planos", element: <Plans /> },
      { path: "/rede-credenciada", element: <Network /> },
      { path: "/contratacao", element: <Checkout /> },
      { path: "/empresarial", element: <Business /> },
      { path: "/credenciamento", element: <CredentialForm /> },
      
      // Rotas de planos específicos
      { path: "/planos/standard", element: <PlanStandard /> },
      { path: "/planos/master-orto", element: <PlanMasterOrto /> },
      { path: "/planos/vip", element: <PlanVIP /> },
      { path: "/planos/empresarial", element: <PlanBusiness /> },
      
      // Páginas institucionais
      { path: "/sobre", element: <About /> },
      { path: "/transparencia", element: <Transparency /> },
      { path: "/contato", element: <Contact /> },
      { path: "/suporte", element: <ContactSupport /> },
      { path: "/politica-privacidade", element: <PrivacyPolicy /> },
      { path: "/termos-uso", element: <TermsOfUse /> },
      
      // 404
      { path: "*", element: <NotFound /> }
    ]
  }
])
```

### **Navegação Responsiva**
- **Desktop**: Navbar horizontal com dropdowns
- **Mobile**: Sidebar com NavigationSidebar component
- **Navegação programática**: useNavigate() do React Router
- **Links ativos**: NavLink component customizado

## 🎨 Sistema de Design

### **Design Tokens (Tailwind Config)**
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      // Cores da marca Interdental
      primary: "hsl(var(--primary))",      // Azul principal
      secondary: "hsl(var(--secondary))",  // Cinza secundário
      accent: "hsl(var(--accent))",        // Destaque
      
      // Sistema de cores semânticas
      destructive: "hsl(var(--destructive))",
      success: "hsl(var(--success))",
      warning: "hsl(var(--warning))",
    },
    
    // Breakpoints responsivos
    screens: {
      'xs': '475px',
      'sm': '640px', 
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

### **Componentização Atomic Design**
```
Atoms (ui/)
├── Button, Input, Badge, Avatar
└── Componentes primitivos indivisíveis

Molecules (combinations)  
├── PlanCard (Card + Button + Badge)
├── NavigationItem (NavLink + Icon)
└── Combinações simples de atoms

Organisms (sections)
├── HeroSection, PlansShowcase, Navbar
└── Componentes complexos com estado

Templates (layouts)
├── MainLayout, PageHero
└── Estruturas de página

Pages
├── Home, Plans, Network
└── Páginas completas com dados
```

## 🔧 Gerenciamento de Estado

### **Estado Local (useState/useReducer)**
```typescript
// Para estado simples de componente
const [isOpen, setIsOpen] = useState(false)
const [formData, setFormData] = useState(initialData)
```

### **Estado Global (Context API)**
```typescript
// hooks/useCookieConsent.ts
const CookieConsentContext = createContext()

// Para estado que precisa ser compartilhado
// mas não justifica biblioteca externa
```

### **Estado de Servidor (TanStack Query)**
```typescript
// Para cache e sincronização com APIs
const { data, isLoading, error } = useQuery({
  queryKey: ['plans'],
  queryFn: fetchPlans
})
```

### **Estado de Formulários (React Hook Form)**
```typescript
// Para formulários complexos com validação
const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {...}
})
```

## 📊 Fluxo de Dados

### **Dados Estáticos**
```typescript
// src/data/plans.ts
export const plans = [
  {
    id: 'standard',
    name: 'Standard', 
    price: 57.20,
    benefits: [...],
    target: 'individual'
  },
  // ... outros planos
]
```

### **Props Flow**
```
Page Component
├── Fetch/Import dados estáticos
├── Pass props para Organisms  
└── Organisms distribuem para Molecules/Atoms

Exemplo:
Home → PlansShowcase → PlanCard → Button
 ↓       ↓             ↓         ↓
data → plansList →  planData → onClick
```

## 🪝 Custom Hooks

### **Hooks Principais**
```typescript
// hooks/use-mobile.tsx
export const useMobile = () => {
  // Detecta se está em dispositivo móvel
  return useMediaQuery("(max-width: 768px)")
}

// hooks/useIntersectionObserver.ts  
export const useIntersectionObserver = () => {
  // Para animações on scroll
  return { ref, isIntersecting }
}

// hooks/useCookieConsent.ts
export const useCookieConsent = () => {
  // Gerencia consentimento LGPD
  return { consent, updateConsent, showBanner }
}

// hooks/use-toast.ts (Shadcn)
export const useToast = () => {
  // Sistema de notificações
  return { toast, dismiss }
}
```

## 🎯 Padrões de Código

### **Convenções de Nomenclatura**
```typescript
// Componentes: PascalCase
export const PlanCard = () => {}

// Hooks: camelCase com 'use'
export const useMobile = () => {}

// Utilitários: camelCase
export const formatCurrency = () => {}

// Constantes: UPPER_SNAKE_CASE
export const MAX_PLANS_PER_PAGE = 12

// Types/Interfaces: PascalCase  
export interface PlanData {}
export type PlanType = 'individual' | 'family' | 'business'
```

### **Estrutura de Componentes**
```typescript
// Padrão para componentes funcionais
import { FC } from 'react'

interface ComponentProps {
  // Props tipadas
  title: string
  isActive?: boolean
  onAction: () => void
}

export const Component: FC<ComponentProps> = ({ 
  title, 
  isActive = false, 
  onAction 
}) => {
  // 1. Hooks no topo
  const [state, setState] = useState()
  const customHook = useCustomHook()
  
  // 2. Computações derivadas
  const computedValue = useMemo(() => {
    return heavyComputation(state)
  }, [state])
  
  // 3. Event handlers
  const handleClick = useCallback(() => {
    onAction()
  }, [onAction])
  
  // 4. Effects
  useEffect(() => {
    // Side effects
  }, [])
  
  // 5. Early returns
  if (!data) return <Loader />
  
  // 6. JSX
  return (
    <div className="component-container">
      {/* JSX */}
    </div>
  )
}
```

### **Padrões de Importação**
```typescript
// 1. React e hooks
import { FC, useState, useEffect } from 'react'

// 2. Bibliotecas externas
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

// 3. Componentes UI 
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// 4. Componentes internos
import { PlanCard } from '@/components/cards/PlanCard'

// 5. Hooks customizados
import { useMobile } from '@/hooks/use-mobile'

// 6. Utilitários e dados
import { cn } from '@/lib/utils'
import { plans } from '@/data/plans'

// 7. Types
import type { Plan } from '@/types/plan'
```

## 🔧 Configurações Técnicas

### **TypeScript Configuration**
```json
// tsconfig.json - Configuração strict
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### **Vite Configuration**
```typescript
// vite.config.ts - Otimizações
export default defineConfig({
  server: { port: 8080 },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { 
    rollupOptions: { 
      output: { manualChunks: { vendor: ['react', 'react-dom'] } }
    }
  }
})
```

### **ESLint Rules**
```json
// eslint.config.js - Rules customizadas
{
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prefer-const": "error"
  }
}
```

## 🚀 Performance & Otimizações

### **Code Splitting**
```typescript
// Lazy loading de páginas
const Plans = lazy(() => import('@/pages/Plans'))
const Network = lazy(() => import('@/pages/Network'))

// Suspense boundaries
<Suspense fallback={<PageLoader />}>
  <Routes />
</Suspense>
```

### **Otimizações de Bundle**
- **Tree shaking** automático com Vite
- **Manual chunks** para vendors
- **Dynamic imports** para código condicional
- **Image optimization** (.avif format)

### **Runtime Optimizations**
```typescript
// Memoização de componentes pesados
const ExpensiveComponent = memo(({ data }) => {
  return <ComplexVisualization data={data} />
})

// Callbacks estáveis
const handleClick = useCallback(() => {
  onAction(id)
}, [onAction, id])

// Computações pesadas
const expensiveValue = useMemo(() => {
  return processLargeDataset(data)
}, [data])
```

## 📱 Responsividade & Acessibilidade

### **Mobile-First Approach**
```css
/* Tailwind classes mobile-first */
/* Base: mobile */
.component { @apply text-sm p-4; }

/* md: tablet */  
.component { @apply md:text-base md:p-6; }

/* lg: desktop */
.component { @apply lg:text-lg lg:p-8; }
```

### **Acessibilidade (a11y)**
```typescript
// ARIA labels e roles
<button 
  aria-label="Contratar plano Standard"
  aria-describedby="plan-details"
  role="button"
>

// Navegação por teclado
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick()
  }
}

// Focus management
const focusNextElement = () => {
  const nextElement = document.querySelector('[data-focus-next]')
  nextElement?.focus()
}
```

---

**🎯 Esta arquitetura garante escalabilidade, manutenibilidade e performance otimizada para o crescimento do projeto Interdental.**