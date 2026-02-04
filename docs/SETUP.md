# 🔧 Setup Detalhado - Interdental

> Guia completo para instalação, configuração e desenvolvimento local do projeto Interdental.

## 📋 Pré-requisitos

### **Sistema Operacional**
- Windows 10/11, macOS 10.15+, ou Ubuntu 18.04+
- Suporte completo para desenvolvimento em todos os sistemas

### **Node.js & Package Manager**
```bash
# Node.js versão 18.0 ou superior
node --version   # Deve retornar v18.x.x ou superior
npm --version    # Deve retornar 9.x.x ou superior

# Bun (recomendado) - mais rápido que npm
curl -fsSL https://bun.sh/install | bash
bun --version    # Deve retornar 1.x.x
```

### **Git**
```bash
git --version   # Qualquer versão recente
```

### **IDE Recomendado**
- **VS Code** com extensões:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense  
  - ES7+ React/Redux/React-Native snippets
  - Auto Rename Tag
  - Prettier - Code formatter

## 🚀 Instalação Local

### **1. Clone do Repositório**
```bash
# Clone o projeto
git clone <repository-url>
cd interdental

# Verifique a branch principal
git branch
git status
```

### **2. Instalação de Dependências**

#### **Usando Bun (Recomendado)**
```bash
# Instala todas as dependências automaticamente
bun install

# Verifica instalação
bun run --help
```

#### **Usando NPM (Alternativo)**
```bash
# Instala dependências
npm install

# Limpa cache se houver problemas
npm cache clean --force
npm install
```

### **3. Configuração do Ambiente**

#### **Arquivo .env (Se necessário)**
```bash
# Crie arquivo .env na raiz (se não existir)
touch .env

# Adicione variáveis necessárias (exemplos):
# VITE_API_URL=https://api.exemplo.com
# VITE_WHATSAPP_NUMBER=5561999999999
# VITE_ANALYTICS_ID=UA-XXXXXXXX-X
```

#### **Configuração do Editor**

**VS Code Settings (.vscode/settings.json):**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```

## ⚡ Executando o Projeto

### **Servidor de Desenvolvimento**
```bash
# Inicia servidor em localhost:8080
bun run dev
# ou npm run dev

# Servidor iniciará automaticamente com:
# - Hot reload ativado
# - Porta 8080 (configurada no vite.config.ts)
# - Proxy para APIs se configurado
```

### **Scripts Disponíveis**

| Script | Comando | Descrição |
|--------|---------|-----------|
| **dev** | `bun run dev` | Servidor desenvolvimento com hot reload |
| **build** | `bun run build` | Build otimizado para produção |
| **build:dev** | `bun run build:dev` | Build em modo desenvolvimento |
| **lint** | `bun run lint` | Análise de código com ESLint |
| **preview** | `bun run preview` | Preview local do build de produção |

### **Acesso Local**
- **Desenvolvimento**: http://localhost:8080
- **Preview Build**: http://localhost:4173 (após `bun run preview`)

## 🔍 Troubleshooting

### **Problemas Comuns**

#### **1. Porta 8080 em Uso**
```bash
# Erro: Port 8080 is already in use
# Solução: Mate processo na porta ou use outra

# Windows
netstat -ano | findstr 8080
taskkill /PID <PID> /F

# macOS/Linux  
lsof -ti:8080 | xargs kill -9

# Ou configure outra porta no vite.config.ts
```

#### **2. Dependências Incompatíveis**
```bash
# Limpe cache e node_modules
rm -rf node_modules bun.lockb package-lock.json
bun install

# Ou com npm
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### **3. Problemas de TypeScript**
```bash
# Verifique configuração do TypeScript
npx tsc --noEmit

# Reinstale types se necessário
bun add -D @types/node @types/react @types/react-dom
```

#### **4. Problemas de Build**
```bash
# Build com logs detalhados
bun run build --debug

# Verifique espaço em disco
df -h  # Linux/macOS
dir C:\ # Windows
```

### **Performance de Desenvolvimento**

#### **Otimizações Locais**
```bash
# Para máquinas mais lentas, desabilite algumas features
# No vite.config.ts temporariamente:
# - sourcemap: false
# - minify: false

# Limite workers do Vite se necessário
# build: { rollupOptions: { maxParallelFileOps: 2 } }
```

## 🔧 Configurações Avançadas

### **Alias e Paths**
```typescript
// Já configurado no vite.config.ts
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
}

// Permite importar como:
import { Button } from "@/components/ui/button"
```

### **Tailwind CSS**
```bash
# Configuração customizada em tailwind.config.ts
# - Cores da marca Interdental
# - Breakpoints responsivos  
# - Animações customizadas

# Para debug de classes Tailwind
# Adicione no componente:
# className="debug-screens"
```

### **ESLint & Prettier**
```bash
# Executar linting manual
bun run lint

# Fix automático de problemas
bun run lint --fix

# Verificar formatação Prettier
npx prettier --check src/

# Aplicar formatação
npx prettier --write src/
```

## 🧪 Testes & Debugging

### **Debug no Browser**
```bash
# Build com sourcemaps para debug
bun run build:dev

# React Developer Tools recomendado
# Vite DevTools para análise de bundle
```

### **Logs & Monitoring**
```bash
# Logs detalhados do Vite
DEBUG=vite:* bun run dev

# Análise de bundle size
npx vite-bundle-analyzer dist/
```

## 📱 Desenvolvimento Mobile

### **Testes Responsivos**
```bash
# Acesso via IP local para testar mobile
# O Vite mostra o IP automaticamente no terminal

# Network: http://192.168.1.100:8080
# Use este IP para testar em dispositivos na mesma rede
```

### **Simulação Mobile no Browser**
- Chrome DevTools → Device Toolbar (F12)
- Firefox Responsive Design Mode
- Teste em diferentes viewports
- Verifique touch interactions

## 🔒 Variáveis de Ambiente

### **Desenvolvimento vs Produção**
```bash
# .env.local (desenvolvimento)
VITE_ENV=development
VITE_API_URL=http://localhost:3000

# .env.production (produção)
VITE_ENV=production  
VITE_API_URL=https://api.production.com
```

### **Segurança**
```bash
# NUNCA commite arquivos .env com dados sensíveis
# Use VITE_ prefix para variáveis expostas ao browser
# Variáveis sem prefix não são expostas (mais seguras)
```

---

## 📞 Suporte

### **Canais de Ajuda**
- 📝 Issues no repositório GitHub
- 📚 Documentação oficial do Vite
- 💬 Stack Overflow com tags `react` `vite` `typescript`

### **Logs Importantes**
- Console do browser (F12)
- Terminal do Vite 
- Network tab para APIs
- Build logs em caso de erro

**🎯 Com este setup, você terá um ambiente de desenvolvimento completo e otimizado para o projeto Interdental!**