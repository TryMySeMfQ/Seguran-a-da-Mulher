export const FooterSection = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Segurança Feminina. Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-purple-200 hover:text-white">
            Termos de Serviço
          </a>
          <a href="#" className="text-purple-200 hover:text-white">
            Política de Privacidade
          </a>
          <a href="#" className="text-purple-200 hover:text-white">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
};