# 🚀 Build & Deploy - Interdental

> Guia completo para build, otimização e publicação do projeto Interdental em produção.

## 📦 Processo de Build

### **Build de Produção**
```bash
# Build otimizado para produção
bun run build
# ou npm run build

# Arquivos gerados em ./dist/
# ├── assets/          # JS, CSS e imagens otimizados
# ├── index.html       # HTML principal com referências aos assets
# └── vite.svg         # Favicon e outros recursos
```

### **Build de Desenvolvimento**
```bash
# Build sem minificação para debug
bun run build:dev
# ou npm run build:dev

# Útil para:
# - Debug de problemas de produção
# - Análise de bundle sem minificação  
# - Testes de performance locais
```

### **Preview Local**
```bash
# Serve o build localmente para testes
bun run preview
# ou npm run preview

# Disponível em: http://localhost:4173
# Simula ambiente de produção local
```

## ⚙️ Configurações de Build

### **Vite Build Configuration**
```typescript
// vite.config.ts - Configurações de produção
export default defineConfig({
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps para debug em produção
    sourcemap: false, // true para debug, false para produção final
    
    // Minificação agressiva
    minify: 'esbuild',
    
    // Target browsers
    target: 'es2020',
    
    // Code splitting otimizado
    rollupOptions: {
      output: {
        // Separação manual de chunks para cache otimizado
        manualChunks: {
          // Vendor libs em chunk separado (cache duradouro)
          vendor: ['react', 'react-dom', 'react-router-dom'],
          
          // UI components em chunk próprio
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-accordion'],
          
          // Utilities
          utils: ['date-fns', 'zod']
        },
        
        // Nomes de arquivos com hash para cache busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // Compression
    cssCodeSplit: true,
    reportCompressedSize: false // Performance no CI
  }
})
```

### **Otimizações de Assets**

#### **Imagens**
```typescript
// Todas as imagens já otimizadas em formato .avif
// src/assets/
// ├── ans-logo.avif          # ~8KB (vs ~25KB PNG)
// ├── ans-tarja.avif         # ~12KB (vs ~40KB PNG)  
// ├── patient-care.avif      # ~180KB (vs ~800KB JPG)
// └── partners/
//     ├── drogaraia-logo.avif    # ~6KB
//     ├── drogasil-logo.avif     # ~7KB  
//     └── invisalign-logo.avif   # ~9KB

// Fallback automático para browsers sem suporte .avif
// Via configuração do Vite + plugin de imagens
```

#### **Fontes & CSS**
```css
/* Tailwind CSS - purged para produção */
/* Apenas classes utilizadas são incluídas */
/* Build final: ~15KB (vs ~3MB completo) */

/* Web fonts otimizadas */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
/* font-display: swap para performance */
```

## 📊 Análise de Bundle

### **Bundle Analyzer**
```bash
# Instala ferramenta de análise (dev dependency)
bun add -D vite-bundle-analyzer

# Executa análise após build
npx vite-bundle-analyzer dist/

# Ou usando ferramenta online
npx serve dist/ 
# Acesse http://localhost:3000 e use devtools Network
```

### **Métricas de Performance**
```bash
# Lighthouse CI para análise automática
npx lhci autorun

# Métricas esperadas:
# Performance: >90
# Accessibility: >95  
# Best Practices: >90
# SEO: >90
```

### **Bundle Size Targets**
```typescript
const bundleSizeTargets = {
  // JavaScript
  "vendor.js": "< 150KB gzipped",    // React + deps principais
  "index.js": "< 80KB gzipped",      // Código da aplicação
  "ui.js": "< 60KB gzipped",         // Componentes UI
  
  // CSS  
  "index.css": "< 25KB gzipped",     // Tailwind purged
  
  // Total
  "total": "< 300KB gzipped"         // Aplicação completa
}
```

## 🔧 Variáveis de Ambiente

### **Configuração de Ambiente**
```bash
# .env.production (não comitar)
VITE_ENV=production
VITE_API_URL=https://api.interdental.com.br
VITE_WHATSAPP_NUMBER=5561999999999
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXX-X
VITE_HOTJAR_ID=XXXXXXX
```

### **Build com Variáveis**
```bash
# Build com arquivo específico
bun run build --mode production

# Build com variáveis inline
VITE_ENV=production bun run build

# Verificação de variáveis no código
# Todas variáveis VITE_ são expostas ao browser
# Nunca use para dados sensíveis!
```

## 🚀 Deploy Automático

### **GitHub Actions (CI/CD)**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
          
      - name: Install dependencies
        run: bun install --frozen-lockfile
        
      - name: Lint code
        run: bun run lint
        
      - name: Build project
        run: bun run build
        env:
          VITE_ENV: production
          VITE_API_URL: ${{ secrets.API_URL }}
          VITE_WHATSAPP_NUMBER: ${{ secrets.WHATSAPP_NUMBER }}
          
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### **Deploy Manual**
```bash
# Via Vercel CLI
npx vercel login
npx vercel --prod

# Via upload direto (build local)
bun run build
npx vercel --prod --prebuilt
```

## 📈 Performance Optimization

### **Code Splitting Strategy**
```typescript
// Lazy loading de páginas para chunks menores
const Plans = lazy(() => import('@/pages/Plans'))
const Network = lazy(() => import('@/pages/Network'))
const Business = lazy(() => import('@/pages/Business'))

// Dynamic imports condicionais
const loadAnalytics = async () => {
  if (process.env.NODE_ENV === 'production') {
    const { analytics } = await import('@/lib/analytics')
    return analytics
  }
}
```

### **Prefetch & Preload Strategy**
```html
<!-- Gerado automaticamente pelo Vite -->
<link rel="modulepreload" href="/assets/vendor-[hash].js">
<link rel="stylesheet" href="/assets/index-[hash].css">

<!-- DNS prefetch para domínios externos -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//api.whatsapp.com">
```

### **Runtime Optimizations**
```typescript
// Configurações de produção no main.tsx
const router = createBrowserRouter(routes, {
  // Preload data para navegação mais rápida
  future: {
    v7_startTransition: true
  }
})

// Service Worker para cache (se implementado)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js')
}
```

## 🔍 Qualidade & Testing

### **Pre-deploy Checklist**
```bash
# 1. Linting sem erros
bun run lint

# 2. TypeScript compilation
npx tsc --noEmit

# 3. Build successful
bun run build

# 4. Bundle size check
du -sh dist/

# 5. Preview test local
bun run preview

# 6. Performance audit
npx lighthouse http://localhost:4173
```

### **Smoke Tests**
```typescript
// Testes básicos pós-deploy (manual ou automatizado)
const smokeTests = [
  "Homepage carrega em <3s",
  "Navegação entre páginas funciona", 
  "Formulários submetem corretamente",
  "WhatsApp button funciona",
  "Imagens carregam otimizadas",
  "Mobile responsive funciona",
  "SEO meta tags presentes"
]
```

## 📦 Artefatos de Build

### **Estrutura do ./dist/**
```
dist/
├── index.html                    # Entry point principal
├── assets/
│   ├── index-[hash].css         # CSS compilado e purged
│   ├── index-[hash].js          # Aplicação principal
│   ├── vendor-[hash].js         # Bibliotecas externas
│   ├── ui-[hash].js             # Componentes UI
│   ├── ans-logo-[hash].avif     # Assets otimizados
│   └── ...
├── robots.txt                   # SEO robots
└── sitemap.xml                  # SEO sitemap (se gerado)
```

### **Gzip Compression**
```bash
# Compressão automática no servidor (Vercel)
# Arquivos servidos com gzip/brotli

# Sizes aproximados:
# index.html: ~2KB → ~1KB gzipped
# index.css: ~25KB → ~6KB gzipped  
# index.js: ~80KB → ~25KB gzipped
# vendor.js: ~150KB → ~45KB gzipped
```

## 🌐 CDN & Cache Strategy

### **Vercel Edge Network**
```typescript
// Headers automáticos da Vercel
const cacheHeaders = {
  // Static assets com hash - cache longo
  'assets/*': 'public, max-age=31536000, immutable',
  
  // HTML - cache curto para atualizações  
  'index.html': 'public, max-age=0, must-revalidate',
  
  // API responses (se houver)
  'api/*': 'public, max-age=300, stale-while-revalidate=60'
}
```

### **Preload Critical Resources**
```html
<!-- Critical resources preloaded -->
<link rel="preload" href="/assets/vendor-[hash].js" as="script">
<link rel="preload" href="/assets/index-[hash].css" as="style">
<link rel="preload" href="/assets/inter-font.woff2" as="font" type="font/woff2" crossorigin>
```

## 🔧 Build Troubleshooting

### **Problemas Comuns**

#### **1. Out of Memory**
```bash
# Aumenta limite de memória do Node.js
NODE_OPTIONS="--max-old-space-size=4096" bun run build

# Ou reduz paralelização
VITE_BUILD_PARALLEL=2 bun run build
```

#### **2. Import Errors**
```bash
# Limpa cache e node_modules
rm -rf node_modules dist .vite bun.lockb
bun install
bun run build
```

#### **3. Asset Loading Issues**
```bash
# Verifica paths relativos vs absolutos
# Configuração base em vite.config.ts
base: './' // Para subdirectories
base: '/'  // Para root domain
```

#### **4. Environment Variables**
```bash
# Debug de variáveis de ambiente
echo $VITE_API_URL

# Verifica se variáveis estão sendo injetadas
grep -r "VITE_" dist/assets/
```

## 📊 Monitoring & Analytics

### **Build Performance Tracking**
```bash
# Time de build
time bun run build

# Bundle analysis report
bun run build && npx vite-bundle-analyzer dist/

# Performance budget
npx bundlesize
```

### **Post-Deploy Monitoring**
- ✅ **Vercel Analytics** - Métricas de performance real
- ✅ **Google Analytics** - Comportamento de usuários  
- ✅ **Lighthouse CI** - Auditoria contínua
- ✅ **Error tracking** - Monitoramento de erros (se implementado)

---

**🎯 Com este processo de build e deploy, o site Interdental será entregue com performance otimizada, cache inteligente e monitoramento completo para garantir a melhor experiência aos usuários!**