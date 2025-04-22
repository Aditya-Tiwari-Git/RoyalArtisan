import { Product } from '@/types/products';
import ProductCard from './ProductCard';
import { AlertCircle } from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
}

export default function ProductsSection({ products, isLoading, error }: ProductsSectionProps) {
  return (
    <section id="products" className="py-8 container mx-auto px-4 md:px-8">
      <div className="flex items-center mb-6">
        <div className="h-px bg-secondary flex-grow"></div>
        <h2 className="text-2xl md:text-3xl text-primary mx-4">Our Collection</h2>
        <div className="h-px bg-secondary flex-grow"></div>
      </div>
      
      {/* Error state */}
      {error && (
        <div className="col-span-full text-center py-12">
          <div className="text-6xl text-secondary/50 mb-4 flex justify-center">
            <AlertCircle size={64} />
          </div>
          <h3 className="text-2xl text-primary mb-2">Failed to load products</h3>
          <p className="text-gray-600">Please refresh the page or try again later.</p>
        </div>
      )}
      
      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <div className="bg-gray-200 h-6 rounded w-3/4 mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      )}
      
      {/* No results state */}
      {!isLoading && !error && products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl text-secondary/50 mb-4">
            <i className="fas fa-search"></i>
          </div>
          <h3 className="text-2xl text-primary mb-2">No items found</h3>
          <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      )}
      
      {/* Products grid */}
      {!isLoading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
