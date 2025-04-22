import { useState, useMemo } from 'react';
import { Product } from '@/types/products';

interface UseProductFilterProps {
  products: Product[];
}

interface UseProductFilterReturn {
  filteredProducts: Product[];
  featuredProducts: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
}

export function useProductFilter({ products }: UseProductFilterProps): UseProductFilterReturn {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract unique categories from products
  const categories = useMemo(() => {
    if (!products) return [];
    
    const categorySet = new Set<string>();
    products.forEach(product => {
      if (product.category) {
        categorySet.add(product.category);
      }
    });
    
    return Array.from(categorySet);
  }, [products]);

  // Filter products based on current category and search query
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    return products.filter(product => {
      // Filter by category
      const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
      
      // Filter by search query (search in name and tags)
      const searchMatch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags && product.tags.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return categoryMatch && searchMatch;
    });
  }, [products, activeCategory, searchQuery]);

  // Extract featured products from filtered products
  const featuredProducts = useMemo(() => {
    return filteredProducts.filter(product => product.featured);
  }, [filteredProducts]);

  return {
    filteredProducts,
    featuredProducts,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    categories
  };
}
