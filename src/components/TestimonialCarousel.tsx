import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "O conforto que meus pés mereciam! Nunca usei sapatos tão confortáveis.",
  },
  {
    id: 2,
    name: "João Santos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Finalmente sapatos que cuidam dos meus pés. Não consigo usar outra marca!",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Incrível como um sapato pode mudar nossa qualidade de vida. Amo Pé mudou a minha!",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-4 z-10 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div className="w-full max-w-2xl px-4">
          <div className="relative flex flex-col items-center text-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="mb-6 h-20 w-20 rounded-full object-cover"
            />
            <p className="mb-4 text-lg italic text-gray-700">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="font-semibold text-primary">
              {testimonials[currentIndex].name}
            </p>
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-4 z-10 rounded-full bg-white/80 p-2 shadow-md hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;