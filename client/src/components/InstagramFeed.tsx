export default function InstagramFeed() {
  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl text-primary mb-2">Follow Our Journey</h2>
          <p className="text-gray-600">Discover the stories behind our craftsmanship</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square overflow-hidden rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition duration-300">
            <img src="https://images.unsplash.com/photo-1583309219838-a94aa566a1d0?q=80&w=800" alt="Handcrafted jewelry" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition duration-300">
            <img src="https://images.unsplash.com/photo-1610809027249-86c649feacd5?q=80&w=800" alt="Traditional saree" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition duration-300">
            <img src="https://images.unsplash.com/photo-1598931247655-f0f497164882?q=80&w=800" alt="Spiritual items" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition duration-300">
            <img src="https://images.unsplash.com/photo-1629111069911-431934b207c7?q=80&w=800" alt="Handcrafted decorations" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-secondary transition duration-300">
            <i className="fab fa-instagram text-xl mr-2"></i> @artisanadornments
          </a>
        </div>
      </div>
    </section>
  );
}
