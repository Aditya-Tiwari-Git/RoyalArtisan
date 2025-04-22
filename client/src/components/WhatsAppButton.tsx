export default function WhatsAppButton() {
  const WHATSAPP_NUMBER = '918619999198';
  
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 h-14 w-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-3xl"></i>
    </a>
  );
}
