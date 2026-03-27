import { UserCheck, Wallet, ShieldCheck, MapPin, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <UserCheck size={28} />,
      title: 'Experienced Civil Engineer',
      desc: '32+ years of on-ground structural knowledge and 4000+ completed projects.',
    },
    {
      icon: <Wallet size={28} />,
      title: 'Affordable Pricing',
      desc: 'Premium consultancy services scaled efficiently to be accessible for individual home builders.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Personalized Supervision',
      desc: 'We treat every site like our own, ensuring meticulous quality checks phase-by-phase.',
    },
    {
      icon: <MapPin size={28} />,
      title: 'Local Expertise',
      desc: 'Deep understanding of local building codes, weather resilience, and structural requirements in India.',
    },
    {
      icon: <Handshake size={28} />,
      title: 'Transparent Work',
      desc: 'Clear communication, authentic estimations, and complete honesty in materials and timelines.',
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-primary text-white ">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-white/10 text-secondary border border-white/20 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 leading-tight">
              The Foundation of our Success is <span className="text-secondary">Your Trust</span>.
            </h2>
            <p className="text-[1.15rem] text-slate-300 mb-8">
              When you choose Dubey Constructions, you are partnering with an expert who knows the land, the materials, and the craft. We protect your investment by preventing costly construction errors before they happen.
            </p>
            
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-white bg-secondary hover:bg-[#E0851A] hover:-translate-y-0.5 shadow-md transition-all text-lg mt-8">
              Start Your Project
            </a>
          </div>

          <div className="flex flex-col gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-6 bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:translate-x-2.5 hover:border-secondary/30">
                <div className="bg-secondary/20 text-secondary w-14 h-14 rounded-md flex items-center justify-center shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-2">{reason.title}</h4>
                  <p className="text-slate-400 text-[0.95rem] m-0">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
