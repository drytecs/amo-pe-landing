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

          <h2 className="text-xl font-semibold mt-6 mb-4">4. Política de E-mail</h2>
          <p className="mb-4">
            Nosso compromisso com a proteção de seus dados de e-mail inclui:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Criptografia de dados em nossos servidores</li>
            <li>Acesso restrito apenas a funcionários autorizados</li>
            <li>Não compartilhamento com terceiros sem seu consentimento</li>
            <li>Armazenamento seguro em servidores protegidos</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">5. Uso de E-mails</h2>
          <p className="mb-4">
            Utilizamos seu e-mail para:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Enviar confirmações de compras e atualizações de pedidos</li>
            <li>Comunicar promoções e novidades (com seu consentimento)</li>
            <li>Responder a suas solicitações de suporte</li>
            <li>Enviar newsletters (caso você tenha se inscrito)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">6. Seus Direitos</h2>
          <p className="mb-4">
            Você tem o direito de:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Solicitar acesso aos seus dados pessoais</li>
            <li>Solicitar a correção de dados incorretos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Cancelar o recebimento de e-mails promocionais</li>
            <li>Ser informado sobre como seus dados são utilizados</li>
          </ul>

          <p className="mb-4">
            Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: contato@amopebrasil.com.br
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;