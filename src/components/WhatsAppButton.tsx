import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20consult%20about%20my%20building%20project." 
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="whatsapp-tooltip">Chat with us!</span>
    </a>
  );
}
