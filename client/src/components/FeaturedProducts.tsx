import { Product } from '@/types/products';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  isLoading: boolean;
}

export default function FeaturedProducts({ products, isLoading }: FeaturedProductsProps) {
  // Don't show the section if there are no featured products and not loading
  if (products.length === 0 && !isLoading) {
    return null;
  }
  
  return (
    <section id="featured" className="py-8 container mx-auto px-4 md:px-8">
      <div className="flex items-center mb-6">
        <div className="h-px bg-secondary flex-grow"></div>
        <h2 className="text-2xl md:text-3xl text-primary mx-4">Featured Treasures</h2>
        <div className="h-px bg-secondary flex-grow"></div>
      </div>
      
      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <div className="bg-gray-200 h-6 rounded w-3/4 mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      )}
      
      {/* Featured products grid */}
      {!isLoading && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
