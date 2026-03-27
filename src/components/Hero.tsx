import { ArrowRight, Ruler, HardHat } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex  items-center justify-center bg-[url('https://images.unsplash.com/photo-1541888086925-ebca89547dcd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed overflow-hidden">
      <div className="absolute inset-0  bg-gradient-overlay z-10"></div>
      
      <div className="relative z-20 w-full pt-20   container px-6 mx-auto animate-[fadeIn_0.8s_ease-out_forwards]">
        <div className="max-w-3xl text-white">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 mt-10 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm">Trusted by 4000+ Families</span>
          </div>
          <h1 className="text-4xl md:text-[3rem] font-bold mb-6 leading-[1.2]">
            Build Your Dream Home with <span className="text-secondary">Expert Civil Engineering</span> Guidance
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl">
            Premium building planning, layout design, and regular site supervision to ensure your construction is flawless from ground up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-white bg-secondary hover:bg-[#E0851A] hover:-translate-y-0.5 shadow-md transition-all text-lg">
              Get Consultation <ArrowRight size={20} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-white bg-transparent border-2 border-white hover:bg-white hover:text-primary transition-all text-lg">
              Explore Services
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex items-center gap-4 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
                <Ruler className="text-secondary" size={24} />
              </div>
              <span className="font-semibold text-base">2D Planning</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
                <HardHat className="text-secondary" size={24} />
              </div>
              <span className="font-semibold text-base">Quality Supervision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
