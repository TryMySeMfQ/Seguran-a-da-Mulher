export default function DemoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-2xl">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Página em Construção</h1>
        <p className="text-lg text-gray-600 mb-6">
          Estamos preparando algo incrível para você! Volte em breve para conferir a demonstração.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Voltar para Home
        </a>
      </div>
    </main>
  )
}