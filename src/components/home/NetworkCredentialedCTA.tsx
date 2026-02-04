import { ArrowRight } from "lucide-react";

export const NetworkCredentialedCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <a
          href="https://www.oazez.com.br/intranet/index2.php?pg=GEN/GENF0001.php&modelo=RedeOdontoSaude&cliente=interdental&flag=1"
          target="_blank"
          rel="noopener noreferrer"
          className="group block max-w-5xl mx-auto bg-[#e8eef2] border-2 border-[#0972b5] rounded-xl px-6 py-5 md:px-8 md:py-6 transition-all duration-300 hover:bg-white hover:border-[#0650a0] hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Ícone do Mapa DF */}
            <div className="flex-shrink-0">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 md:w-12 md:h-12"
                aria-hidden="true"
              >
                {/* Quadrado externo - limite do DF */}
                <rect x="6" y="6" width="36" height="36" fill="#0972b5" rx="2"/>
                {/* Quadrado interno - representa o Plano Piloto */}
                <rect x="12" y="12" width="24" height="24" fill="#e8eef2" rx="1"/>
                {/* Detalhes centrais */}
                <rect x="18" y="18" width="12" height="12" fill="#0972b5" rx="1"/>
                {/* Pequenos detalhes geométricos */}
                <rect x="22" y="14" width="4" height="4" fill="#0972b5"/>
                <rect x="22" y="30" width="4" height="4" fill="#0972b5"/>
                <rect x="14" y="22" width="4" height="4" fill="#0972b5"/>
                <rect x="30" y="22" width="4" height="4" fill="#0972b5"/>
              </svg>
            </div>

            {/* Texto */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold tracking-wide text-[#0972b5] uppercase">
                Acesse a Rede Credenciada
              </h3>
            </div>

            {/* Seta */}
            <div className="flex-shrink-0">
              <ArrowRight 
                className="h-6 w-6 text-[#0972b5] transition-transform duration-300 group-hover:translate-x-2" 
                aria-hidden="true"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
