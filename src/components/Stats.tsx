const stats = [
  { value: ' -- Anos ', label: 'de experiência' },
  { value: 'JM/SC', label: 'e região' },
  { value: 'Todos', label: 'tipos de veículos' },
  { value: 'Kleiton', label: 'atendimento direto' },
]

export default function Stats() {
  return (
    <div className="bg-[#111] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-white font-bold text-xl">{s.value}</div>
            <div className="text-white/35 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
