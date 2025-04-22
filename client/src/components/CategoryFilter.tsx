interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <section className="py-8 container mx-auto px-4 md:px-8">
      <div className="flex justify-center mb-2">
        <h2 className="text-2xl md:text-3xl text-primary relative inline-block">
          <span className="relative z-10">Browse Categories</span>
          <span className="absolute -bottom-1 left-0 right-0 h-1 bg-secondary/40"></span>
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button 
          className={`category-btn px-5 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition duration-300 ${activeCategory === 'all' ? 'active' : ''}`} 
          onClick={() => onCategoryChange('all')}
        >
          All Items
        </button>
        
        {categories.map((category) => (
          <button 
            key={category}
            className={`category-btn px-5 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition duration-300 ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
