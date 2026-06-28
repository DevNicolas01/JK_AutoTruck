export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-6 px-6 text-center">
      <p className="text-white/20 text-sm">
        © {new Date().getFullYear()} JK Auto Truck — Jacinto Machado, SC. Todos os direitos reservados.
      </p>
      <p className="text-white/10 text-xs mt-1">
        Desenvolvido por Nicolas Souza
      </p>
    </footer>
  )
}
