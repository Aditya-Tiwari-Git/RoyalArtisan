import { useEffect, useState } from 'react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-primary text-primary-foreground sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top bar */}
      <div className="container mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
        <div className="hidden md:flex space-x-4 text-sm">
          <span><i className="fas fa-phone-alt mr-1"></i> +91 861 999 9198</span>
          <span><i className="fas fa-envelope mr-1"></i> support@artisanadornments.com</span>
        </div>
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-4 text-sm">
          <a href="#" className="hover:text-secondary transition duration-300"><i className="fas fa-user mr-1"></i> Account</a>
          <a href="#" className="hover:text-secondary transition duration-300"><i className="fas fa-heart mr-1"></i> Wishlist</a>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-secondary text-3xl md:text-4xl font-bold mb-4 md:mb-0">
          Artisan Adornments
        </a>
        
        {/* Search */}
        <div className="w-full md:w-2/5 relative">
          <input 
            type="text" 
            id="searchInput"
            placeholder="Search by name or tags..." 
            className="w-full py-2 px-4 pr-10 rounded-full border-2 border-secondary bg-background/10 text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-secondary"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1/2 decorative-border"></div>
      </div>
    </header>
  );
}
