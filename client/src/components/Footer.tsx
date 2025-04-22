interface FooterProps {
  categories: string[];
}

export default function Footer({ categories }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Footer main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 text-secondary">Artisan Adornments</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">Celebrating the richness of traditional craftsmanship and spiritual artifacts with premium quality products.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground hover:text-secondary transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition duration-300">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Home</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">About Us</a></li>
              <li><a href="#products" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Products</a></li>
              <li><a href="#featured" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Featured Items</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 text-secondary">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <li key={category}>
                    <a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">
                      {category}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Saree</a></li>
                  <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Jewellery</a></li>
                  <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">God Veshbusha</a></li>
                  <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Spiritual Cloth</a></li>
                </>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 text-secondary">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">FAQs</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Shipping Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Returns & Exchanges</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition duration-300">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        {/* Payment methods */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60 mb-4 md:mb-0">© {new Date().getFullYear()} Artisan Adornments. All rights reserved.</p>
          <div className="flex space-x-4 text-primary-foreground/60 text-lg">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-google-pay"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
