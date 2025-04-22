import { useState } from 'react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedProducts from '@/components/FeaturedProducts';
import ProductsSection from '@/components/ProductsSection';
import InstagramFeed from '@/components/InstagramFeed';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useProducts } from '@/hooks/useProducts';
import { useProductFilter } from '@/hooks/useProductFilter';

export default function Home() {
  const { data: products, isLoading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  
  const {
    filteredProducts,
    featuredProducts,
    activeCategory,
    setActiveCategory,
    categories,
    setSearchQuery: updateSearchQuery
  } = useProductFilter({ products: products || [] });

  // Update search filter when search input changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    updateSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/95 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1607875144068-62d363d98084?q=80&w=2080')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elegance in <span className="text-secondary">Traditional</span> Craftsmanship
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Discover our exquisite collection of premium spiritual adornments, handcrafted with devotion and tradition.
            </p>
            <a href="#products" className="inline-block px-8 py-3 bg-secondary text-primary font-medium rounded-full hover:bg-secondary/90 transition duration-300 shadow-md">
              Explore Collection
            </a>
          </div>
        </div>
      </section>
      
      <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <FeaturedProducts 
        products={featuredProducts} 
        isLoading={isLoading} 
      />
      
      <ProductsSection 
        products={filteredProducts} 
        isLoading={isLoading} 
        error={error} 
      />
      
      <InstagramFeed />
      
      <ContactSection />
      
      <Footer categories={categories} />
    </div>
  );
}
