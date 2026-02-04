import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./components/layout/MainLayout";
import LoadingSpinner from "./components/ui/loading-spinner";

// Lazy load all pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Plans = lazy(() => import("./pages/Plans"));
const PlanStandard = lazy(() => import("./pages/plans/PlanStandard"));
const PlanMasterOrto = lazy(() => import("./pages/plans/PlanMasterOrto"));
const PlanVip = lazy(() => import("./pages/plans/PlanVip"));
const PlanEmpresarial = lazy(() => import("./pages/plans/PlanEmpresarial"));
const Network = lazy(() => import("./pages/Network"));
const Beneficiary = lazy(() => import("./pages/Beneficiary"));
const ContactSupport = lazy(() => import("./pages/ContactSupport"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Business = lazy(() => import("./pages/Business"));
const Careers = lazy(() => import("./pages/Careers"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Contact = lazy(() => import("./pages/Contact"));
const Transparency = lazy(() => import("./pages/Transparency"));
const CredentialForm = lazy(() => import("./pages/CredentialForm"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/planos" element={<Plans />} />
                <Route path="/planos/standard" element={<PlanStandard />} />
                <Route path="/planos/master-orto" element={<PlanMasterOrto />} />
                <Route path="/planos/vip" element={<PlanVip />} />
                <Route path="/planos/empresarial" element={<PlanEmpresarial />} />
                <Route path="/rede-credenciada" element={<Network />} />
                <Route path="/beneficiario" element={<Beneficiary />} />
                <Route path="/atendimento" element={<ContactSupport />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/empresas" element={<Business />} />
                <Route path="/trabalhe-conosco" element={<Careers />} />
                <Route path="/contrate" element={<Checkout />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/transparencia" element={<Transparency />} />
                <Route path="/credenciamento" element={<CredentialForm />} />
                <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
                <Route path="/termos-de-uso" element={<TermsOfUse />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
