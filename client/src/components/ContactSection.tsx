import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Contact form */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 className="text-2xl md:text-3xl text-primary mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="mb-4">
                <textarea 
                  rows={4} 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Store information */}
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-2xl md:text-3xl text-primary mb-6">Visit Us</h2>
            <div className="mb-6">
              <p className="mb-2 font-medium">Store Address:</p>
              <p className="text-gray-600">123 Devotional Lane, Spiritual District<br />Karnataka, India - 560001</p>
            </div>
            <div className="mb-6">
              <p className="mb-2 font-medium">Open Hours:</p>
              <p className="text-gray-600">Monday - Saturday: 10:00 AM to 8:00 PM<br />Sunday: 11:00 AM to 6:00 PM</p>
            </div>
            <div className="mb-6">
              <p className="mb-2 font-medium">Contact:</p>
              <p className="text-gray-600">Phone: +91 861 999 9198<br />Email: support@artisanadornments.com</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition duration-300">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
