import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-display font-bold mb-8">Termos de Uso</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            Bem-vindo aos Termos de Uso da Amo Pé Brasil. Ao acessar e utilizar nosso site, você concorda com os termos e condições descritos abaixo.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">1. Uso do Site</h2>
          <p className="mb-4">
            O conteúdo deste site é apenas para fins informativos. A Amo Pé Brasil reserva-se o direito de modificar, suspender ou descontinuar qualquer aspecto do site a qualquer momento.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">2. Produtos e Preços</h2>
          <p className="mb-4">
            Todos os produtos e preços exibidos estão sujeitos à disponibilidade e podem ser alterados sem aviso prévio. As imagens são meramente ilustrativas.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Privacidade</h2>
          <p className="mb-4">
            Sua privacidade é importante para nós. Consulte nossa Política de Privacidade para entender como coletamos e utilizamos suas informações.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">4. Proteção de E-mails</h2>
          <p className="mb-4">
            Ao fornecer seu endereço de e-mail em nosso site, você concorda com nossa política de uso de e-mails. Seus dados serão protegidos e utilizados apenas para:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Envio de confirmações de pedidos e atualizações de status</li>
            <li>Comunicações sobre produtos e promoções (mediante seu consentimento)</li>
            <li>Respostas a suas solicitações e dúvidas</li>
          </ul>
          <p className="mb-4">
            Você pode optar por não receber comunicações promocionais a qualquer momento através do link de descadastramento presente em nossos e-mails ou entrando em contato conosco.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;