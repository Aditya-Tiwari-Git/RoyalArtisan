import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format price with currency symbol
export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

// Check if the image URL is valid or return a fallback
export function getValidImageUrl(url: string): string {
  return url || 'https://via.placeholder.com/400x400?text=Product+Image';
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Create WhatsApp message link
export function createWhatsAppLink(
  phoneNumber: string, 
  message: string, 
  productName?: string, 
  price?: number
): string {
  const defaultMessage = productName && price 
    ? `I'm interested in ${productName} priced at ₹${price}`
    : 'I would like to know more about your products';
    
  const finalMessage = message || defaultMessage;
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
}
