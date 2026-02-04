import { useState } from "react";
import { Search, MapPin, Phone, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CredentialCTA } from "@/components/CredentialCTA";

const Network = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [plan, setPlan] = useState("");

  // Mock data - em produção, seria carregado de uma API
  const dentists = [
    {
      id: 1,
      name: "Dr. João Silva",
      specialty: "Clínico Geral",
      address: "Asa Sul, SHCS 102 Bloco A",
      phone: "(61) 3321-0000",
      plans: ["Familiar", "Estético", "Ouro"],
      rating: 4.8
    },
    {
      id: 2,
      name: "Dra. Maria Santos",
      specialty: "Ortodontia",
      address: "Asa Norte, SCLN 204 Bloco B",
      phone: "(61) 3321-0001",
      plans: ["Estético", "Ouro"],
      rating: 4.9
    },
    {
      id: 3,
      name: "Dr. Carlos Oliveira",
      specialty: "Implantodontia",
      address: "Águas Claras, Rua 7 Norte",
      phone: "(61) 3321-0002",
      plans: ["Ouro"],
      rating: 5.0
    }
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Encontre dentistas perto de você"
        subtitle="Mais de 150 profissionais credenciados no Distrito Federal"
      />

      {/* CTA Credenciamento */}
      <AnimatedSection animation="fade-in-up">
        <CredentialCTA variant="hero" />
      </AnimatedSection>

      {/* Filtros de Busca */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Buscar Profissionais</CardTitle>
                <CardDescription>Encontre o dentista ideal para você</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <Input
                      placeholder="Digite seu CEP, bairro ou cidade"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Especialidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="clinico">Clínico Geral</SelectItem>
                      <SelectItem value="ortodontia">Ortodontia</SelectItem>
                      <SelectItem value="implantes">Implantodontia</SelectItem>
                      <SelectItem value="endodontia">Endodontia</SelectItem>
                      <SelectItem value="periodontia">Periodontia</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={plan} onValueChange={setPlan}>
                    <SelectTrigger>
                      <SelectValue placeholder="Plano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os Planos</SelectItem>
                      <SelectItem value="familiar">Familiar</SelectItem>
                      <SelectItem value="estetico">Estético</SelectItem>
                      <SelectItem value="ouro">Ouro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full mt-4">
                  <Search className="mr-2 h-4 w-4" />
                  Buscar
                </Button>
              </CardContent>
            </Card>

            {/* Mapa Placeholder */}
            <div className="bg-muted rounded-lg h-[400px] mb-12 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Mapa interativo em breve
                </p>
              </div>
            </div>

            {/* Lista de Resultados */}
            <h2 className="text-2xl font-bold mb-6">Profissionais Encontrados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dentists.map((dentist) => (
                <Card key={dentist.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{dentist.name}</CardTitle>
                        <CardDescription>{dentist.specialty}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warm text-warm" />
                        <span className="text-sm font-medium">{dentist.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{dentist.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{dentist.phone}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dentist.plans.map((p) => (
                        <Badge key={p} variant="secondary">{p}</Badge>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Instruções */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Como Agendar uma Consulta</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-2">Escolha o profissional</h3>
                  <p className="text-muted-foreground">
                    Use os filtros acima para encontrar um dentista próximo a você
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-2">Entre em contato direto</h3>
                  <p className="text-muted-foreground">
                    Ligue ou envie mensagem via WhatsApp para o consultório
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-background rounded-lg">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-2">Apresente sua carteirinha</h3>
                  <p className="text-muted-foreground">
                    No dia da consulta, apresente sua carteirinha física ou digital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Network;
