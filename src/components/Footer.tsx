import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Amo Pé Brasil</h3>
            <p className="text-sm">
              Cuidando dos seus pés com muito carinho e dedicação desde 2024.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Produtos", "Contato"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/termos-de-uso" className="text-sm hover:text-accent transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politicas-de-privacidade" className="text-sm hover:text-accent transition-colors">
                  Políticas de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <address className="text-sm not-italic">
              <p>Rua São José, 345</p>
              <p>Belo Horizonte - MG</p>
              <p>Tel: (32) 99875-0978</p>
              <p>Email: contato@amopebrasil.com.br</p>
            </address>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; 2024 Amo Pé Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;