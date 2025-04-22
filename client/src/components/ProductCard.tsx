import { Product } from '@/types/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const WHATSAPP_NUMBER = '918619999198';
  const whatsappMessage = product.whatsAppMessage || `I'm interested in ${product.name} priced at ₹${product.price}`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative">
        <img 
          src={product.imageURL || 'https://via.placeholder.com/400x400?text=Product+Image'} 
          alt={product.name} 
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        {product.offer && (
          <div className="absolute top-2 right-2 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
            {product.offer}
          </div>
        )}
        {!product.isAvailable && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-primary text-white px-4 py-2 rounded-lg font-medium">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl text-primary font-medium mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2" title={product.description}>
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-medium text-primary">₹{product.price.toLocaleString()}</div>
          <div className="text-xs text-secondary">{product.category}</div>
        </div>
        <a 
          href={product.isAvailable ? whatsappLink : '#'} 
          className={`${product.isAvailable 
            ? 'bg-primary hover:bg-primary/90' 
            : 'bg-gray-400 cursor-not-allowed'} text-white w-full py-2 rounded-lg block text-center transition duration-300`}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!product.isAvailable}
        >
          <i className="fab fa-whatsapp mr-2"></i> Buy on WhatsApp
        </a>
      </div>
    </div>
  );
}
