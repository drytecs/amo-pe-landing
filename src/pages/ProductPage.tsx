import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
  details: string;
  sizes: string[];
}

const products: Record<string, Product> = {
  "comfort-plus-masculino": {
    id: "comfort-plus-masculino",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    name: "Comfort Plus Masculino",
    description: "Sapato casual com tecnologia de amortecimento avançado",
    price: "R$ 299,90",
    details: "O Comfort Plus Masculino é desenvolvido com tecnologia exclusiva de amortecimento, proporcionando conforto excepcional durante todo o dia. Seu design versátil combina com diversas ocasiões, enquanto os materiais premium garantem durabilidade e respirabilidade.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"]
  },
  "elegance-feminino": {
    id: "elegance-feminino",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    name: "Elegance Feminino",
    description: "Scarpin confortável para o dia a dia no trabalho",
    price: "R$ 259,90",
    details: "O Elegance Feminino une sofisticação e conforto em um scarpin pensado para o dia a dia profissional. Com palmilha anatômica e salto ergonômico, permite que você mantenha a elegância sem abrir mão do bem-estar dos seus pés.",
    sizes: ["34", "35", "36", "37", "38", "39"]
  },
  "sport-comfort": {
    id: "sport-comfort",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    name: "Sport Comfort",
    description: "Tênis esportivo com suporte anatômico",
    price: "R$ 329,90",
    details: "O Sport Comfort é o tênis ideal para quem busca performance e conforto. Com tecnologia de amortecimento avançada e suporte anatômico, proporciona estabilidade e conforto durante as atividades físicas.",
    sizes: ["38", "39", "40", "41", "42", "43"]
  },
  "classic-comfort": {
    id: "classic-comfort",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
    name: "Classic Comfort",
    description: "Mocassim com palmilha memory foam",
    price: "R$ 279,90",
    details: "O Classic Comfort é um mocassim que combina estilo atemporal com tecnologia moderna. Sua palmilha memory foam se adapta ao formato do seu pé, proporcionando conforto personalizado ao longo do dia.",
    sizes: ["38", "39", "40", "41", "42"]
  }
};

const ProductPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  
  const product = products[productId as string];
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Produto não encontrado</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado ao carrinho",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold text-primary">{product.price}</p>
            <p className="text-gray-600">{product.details}</p>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Tamanhos disponíveis</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-md hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="w-full md:w-auto"
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;