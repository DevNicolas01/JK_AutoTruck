import Logo from '../assets/image.png'

export default function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1)_0%,transparent_65%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-14">

        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-900/40 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Jacinto Machado — SC
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
            Chapeação e Pintura<br />
            <span className="text-red-600">com qualidade</span><br />
            <span className="text-white/50 font-normal text-3xl lg:text-4xl">de alto nível</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Especialistas em chapeação, pintura, polimento, vitrificação,
            revitalização de faróis, higienização de estofados e soldas em geral.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="https://wa.me/5548999022070?text=Olá%20Kleiton,%20gostaria%20de%20um%20orçamento!"
              target="_blank" rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm shadow-lg shadow-red-950/50">
              💬 Falar no WhatsApp
            </a>
            <a href="#servicos"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-xl transition-all text-sm">
              Ver serviços
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="bg-[#111] border border-white/8 rounded-3xl p-10 shadow-2xl text-center">
            <img src={Logo} alt="Logo" className="w-52 h-28 mx-auto mb-5" />
            <div className="text-white font-black text-xl tracking-widest">JK AUTO TRUCK</div>
            <div className="text-white/30 text-xs tracking-[4px] mt-1">CHAPEAÇÃO & PINTURA</div>
            <div className="mt-5 pt-4 border-t border-white/5 text-white/25 text-xs">
              Jacinto Machado, SC
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
