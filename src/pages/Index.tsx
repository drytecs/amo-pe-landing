import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      name: "Comfort Plus Masculino",
      description: "Sapato casual com tecnologia de amortecimento avançado",
      price: "R$ 299,90",
    },
    {
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
      name: "Elegance Feminino",
      description: "Scarpin confortável para o dia a dia no trabalho",
      price: "R$ 259,90",
    },
    {
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      name: "Sport Comfort",
      description: "Tênis esportivo com suporte anatômico",
      price: "R$ 329,90",
    },
    {
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      name: "Classic Comfort",
      description: "Mocassim com palmilha memory foam",
      price: "R$ 279,90",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="início" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-800">
                Cuidando dos seus pés com muito carinho
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Sapatos feitos para cuidar do seu bem-estar, todos os dias.
              </p>
              <button className="btn-primary">
                Conheça nossa coleção
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
                alt="Sapatos confortáveis"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
                alt="Qualidade e cuidado"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Nossa Missão
              </h2>
              <p className="text-gray-600 mb-6">
                Na Amo Pé, nossa missão é proporcionar o máximo conforto e bem-estar para seus pés. 
                Acreditamos que sapatos não devem apenas parecer bonitos, mas também cuidar da sua saúde.
              </p>
              <p className="text-gray-600">
                Cada par é desenvolvido com tecnologias exclusivas e materiais de alta qualidade, 
                garantindo conforto duradouro e estilo atemporal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="section-padding bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Nossa Coleção
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            O que nossos clientes dizem
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Entre em Contato
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;