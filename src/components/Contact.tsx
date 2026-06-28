export default function Contact() {
  return (
    <section id="contato" className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08)_0%,transparent_65%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-red-600 text-xs font-semibold tracking-widest uppercase">Contato</span>
        <h2 className="text-3xl font-black text-white mt-2 mb-3 tracking-tight">
          Solicite seu orçamento
        </h2>
        <p className="text-white/40 text-base mb-10 max-w-lg mx-auto">
          Atendemos Jacinto Machado e toda a região sul catarinense.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'WhatsApp', value: '(48) 99902-2070' },
            { label: 'Responsável', value: 'Kleiton' },
            { label: 'Localização', value: 'Jacinto Machado, SC' },
          ].map((c) => (
            <div key={c.label}
              className="bg-white/3 border border-white/7 rounded-2xl p-5">
              <div className="text-white/30 text-xs uppercase tracking-widest mb-2">{c.label}</div>
              <div className="text-white font-bold text-base">{c.value}</div>
            </div>
          ))}
        </div>

        <a href="https://wa.me/5548999022070?text=Olá%20Kleiton,%20gostaria%20de%20um%20orçamento!"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black px-10 py-4 rounded-2xl text-base transition-all shadow-lg shadow-green-950/50 hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
          Chamar no WhatsApp agora
        </a>
      </div>
    </section>
  )
}
