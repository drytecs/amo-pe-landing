import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-display font-bold mb-8">Política de Privacidade</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            A Amo Pé Brasil está comprometida em proteger sua privacidade. Esta política descreve como coletamos e utilizamos suas informações pessoais.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">1. Coleta de Informações</h2>
          <p className="mb-4">
            Coletamos informações quando você realiza uma compra, se cadastra em nossa newsletter ou preenche formulários em nosso site.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">2. Uso das Informações</h2>
          <p className="mb-4">
            As informações coletadas são utilizadas para processar pedidos, enviar atualizações sobre produtos e melhorar sua experiência em nosso site.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Proteção de Dados</h2>
          <p className="mb-4">
            Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado e uso indevido.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;