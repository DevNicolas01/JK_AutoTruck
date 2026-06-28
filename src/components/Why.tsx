const reasons = [
  { icon: '⚡', title: 'Atendimento ágil', desc: 'Orçamento rápido e prazo cumprido sem enrolação.' },
  { icon: '🏆', title: 'Qualidade garantida', desc: 'Mais de 10 anos de experiência com resultado de alto nível.' },
  { icon: '🤝', title: 'Atendimento pessoal', desc: 'Fale direto com o Kleiton — sem intermediários.' },
  { icon: '🚛', title: 'Todos os veículos', desc: 'Carros, caminhões, motos e implementos agrícolas.' },
  { icon: '🎯', title: 'Match de cor perfeito', desc: 'Tecnologia de combinação de cor para resultado impecável.' },
  { icon: '📍', title: 'Referência na região', desc: 'Reconhecido em Jacinto Machado e toda a região sul catarinense.' },
]

export default function Why() {
  return (
    <section id="porque" className="py-20 bg-[#111] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">Diferenciais</span>
          <h2 className="text-3xl font-black text-white mt-2 mb-3 tracking-tight">Por que a JK Auto Truck?</h2>
          <p className="text-white/40 text-base max-w-lg">
            Qualidade comprovada em cada serviço, do carro popular ao caminhão pesado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 p-5 rounded-2xl hover:bg-white/3 transition-colors">
              <div className="w-10 h-10 bg-red-950/50 border border-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-sm mb-1">{r.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
