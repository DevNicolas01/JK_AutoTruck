import Logo from "../assets/image.png";

export default function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1)_0%,transparent_65%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* ESQUERDA */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-10 shadow-2xl text-center w-full max-w-sm">
            <img src={Logo} alt="Logo" className="w-48 h-28 mx-auto mb-5 object-contain" />

            <div className="text-white font-black text-xl tracking-widest">
              JK AUTO TRUCK
            </div>

            <div className="text-white/30 text-xs tracking-[4px] mt-1">
              CHAPEAÇÃO & PINTURA
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 text-white/25 text-xs">
              Jacinto Machado, SC
            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div className="w-full lg:max-w-xl text-center lg:text-left">

          <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-900/40 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Jacinto Machado — SC
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
            Chapeação e Pintura
            <br />
            <span className="text-red-600">com qualidade</span>
            <br />
            <span className="text-white/50 font-normal text-3xl lg:text-4xl">
              de alto nível
            </span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-8">
            Especialistas em chapeação, pintura, polimento, vitrificação,
            revitalização de faróis, higienização de estofados e soldas em geral.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="https://wa.me/5548999022070?text=Olá%20Kleiton,%20gostaria%20de%20um%20orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-4 rounded-xl transition-all text-sm shadow-lg shadow-red-950/50"
            >
              💬 Falar no WhatsApp
            </a>

            <a
              href="#servicos"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-7 py-4 rounded-xl transition-all text-sm"
            >
              Ver serviços
            </a>
          </div>

          {/* MAPA */}
          <a
  href="https://www.google.com/maps?q=-29.042844,-49.7987379&z=17&hl=pt"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-8 flex items-center justify-between gap-5 rounded-2xl border border-red-500/20 bg-[#111] px-5 py-4 transition-all duration-300 hover:border-red-500 hover:bg-[#151515] hover:shadow-xl hover:shadow-red-950/40 cursor-pointer hover:-translate-y-0.5"
>
  <div className="flex items-center gap-4">

    {/* ÍCONE COM PULSE (INDICA CLIQUE) */}
    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-lg shadow-md shadow-red-900/40">
      📍

      {/* PULSE ANIMATION */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-xl bg-red-500 opacity-30" />
    </div>

    <div className="leading-tight">
      <span className="text-[10px] uppercase tracking-[0.2em] text-red-400">
        Clique para abrir no mapa
      </span>

      <h3 className="text-sm font-bold text-white">
        JK Auto Truck
      </h3>

      <p className="text-xs text-white/60">
        BR-101 • Jacinto Machado, SC
      </p>
    </div>

  </div>

  {/* CTA MAIS CLARO */}
  <div className="hidden sm:flex items-center gap-2 rounded-lg border border-red-500/30 px-3 py-2 text-xs font-semibold text-white transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600">
    Abrir localização →
  </div>
</a>

        </div>
      </div>
    </section>
  );
}