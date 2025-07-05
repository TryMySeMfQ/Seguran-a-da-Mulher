export default function DocsPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">💜 API Segurança Feminina</h1>
          <p className="text-xl text-gray-700">
            Aplicação web para oferecer suporte à segurança da mulher
          </p>
        </header>

        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">🧩 Funcionalidades</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="mr-2">📍</span> Visualização de delegacias no mapa (foco na Bahia)
            </li>
            <li className="flex items-start">
              <span className="mr-2">📞</span> Lista de telefones de emergência
            </li>
            <li className="flex items-start">
              <span className="mr-2">💡</span> Dicas práticas de segurança
            </li>
            <li className="flex items-start">
              <span className="mr-2">🔌</span> API RESTful com rotas organizadas
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">🚀 Tecnologias Utilizadas</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full">Node.js + Express</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">JavaScript (ES Modules)</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">HTML, CSS, JS Vanilla</span>
          </div>
        </section>

        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">⚙️ Como Rodar Localmente</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">1. Clone o Repositório</h3>
              <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                <code>git clone https://github.com/TryMySeMfQ/seguranca-feminina.git<br />cd seguranca-feminina</code>
              </pre>
            </div>
            <div>
              <h3 className="font-medium mb-2">2. Instale as Dependências</h3>
              <pre className="bg-gray-100 p-3 rounded">
                <code>npm install</code>
              </pre>
            </div>
            <div>
              <h3 className="font-medium mb-2">3. Inicie o Servidor</h3>
              <pre className="bg-gray-100 p-3 rounded">
                <code>npm run dev</code>
              </pre>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-600">
          <p>👩‍💻 Desenvolvido por Julia Tito Assunção</p>
          <a 
            href="https://www.linkedin.com/in/julia-tito-b4007a226" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            LinkedIn
          </a>
        </footer>
      </div>
    </main>
  )
}