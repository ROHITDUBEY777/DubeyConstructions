import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919448109495?text=Hi%2C%20I%20would%20like%20to%20consult%20about%20my%20building%20project." 
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center no-underline shadow-[0_4px_10px_rgba(37,211,102,0.4)] z-[1000] transition-all duration-300 animate-bounce-slow hover:animate-none hover:scale-110 hover:bg-[#128C7E] group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-20 bg-white text-dark py-2 px-4 rounded-md shadow-md text-sm font-semibold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap after:content-[''] after:absolute after:top-1/2 after:-right-2 after:-translate-y-1/2 after:border-y-8 after:border-y-transparent after:border-l-8 after:border-l-white md:block hidden">
        Chat with us!
      </span>
    </a>
  );
}
