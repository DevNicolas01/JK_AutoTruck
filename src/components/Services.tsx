const services = [
  { icon: '🔨', name: 'Chapeação', desc: 'Reparos de funilaria com acabamento perfeito em qualquer tipo de veículo.' },
  { icon: '🎨', name: 'Pintura', desc: 'Pintura automotiva com match de cor preciso e acabamento profissional.' },
  { icon: '✨', name: 'Polimento', desc: 'Polimento técnico que remove riscos e devolve o brilho original da lataria.' },
  { icon: '🛡️', name: 'Vitrificação', desc: 'Proteção cerâmica que mantém a pintura nova por muito mais tempo.' },
  { icon: '💡', name: 'Revitalização de faróis', desc: 'Faróis amarelados e opacos restaurados com clareza total.' },
  { icon: '🪑', name: 'Higienização de estofados', desc: 'Limpeza profunda em bancos e tapetes — cheiro novo e aparência impecável.' },
  { icon: '⚙️', name: 'Soldas em geral', desc: 'Soldagem estrutural e de funilaria para carros, caminhões e implementos.' },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">Serviços</span>
          <h2 className="text-3xl font-black text-white mt-2 mb-3 tracking-tight">O que fazemos</h2>
          <p className="text-white/40 text-base max-w-lg">
            Atendemos carros, caminhões e motos com qualidade e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.name}
              className="group p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-red-900/50 hover:bg-red-950/20 transition-all duration-200 cursor-default">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-red-400 transition-colors">
                {s.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
