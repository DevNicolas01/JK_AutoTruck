import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Por que nós', href: '#porque' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <div className="text-white font-black text-lg tracking-widest leading-none">
              JK <span className="text-red-600">AUTO TRUCK</span>
            </div>
            <div className="text-white/30 text-[10px] tracking-[3px] uppercase">Chapeação & Pintura</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-white/50 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/5548999022070?text=Olá%20Kleiton,%20gostaria%20de%20um%20orçamento!"
            target="_blank" rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Pedir orçamento
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/70 p-1">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111] border-t border-white/5 px-6 pb-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white text-sm font-medium py-1">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/5548999022070" target="_blank" rel="noopener noreferrer"
            className="bg-red-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
            Pedir orçamento
          </a>
        </div>
      )}
    </nav>
  )
}
