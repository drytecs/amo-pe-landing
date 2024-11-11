import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  id: string;
}

const ProductCard = ({ image, name, description, price, id }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{name}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">{price}</span>
          <Link
            to={`/produto/${id}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Mais detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;