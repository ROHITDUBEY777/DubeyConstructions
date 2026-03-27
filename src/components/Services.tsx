import { PenTool, Eye, Map } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <PenTool size={32} />,
      title: 'Building Planning',
      desc: 'Expert 2D & 3D planning, practical layout designs, and strategic cost optimization to bring your vision to life within budget.',
    },
    {
      icon: <Eye size={32} />,
      title: 'Site Supervision',
      desc: 'Rigorous quality control through visit-based supervision. We ensure materials and labor strictly adhere to the engineering plans.',
    },
    {
      icon: <Map size={32} />,
      title: 'Marking Out',
      desc: 'Highly accurate plot marking and layout execution before construction begins, preventing critical structural errors.',
    }
  ];

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4 leading-tight">
            Comprehensive <span className="text-secondary">Civil Engineering</span> Services
          </h2>
          <p className="text-[1.15rem] text-muted max-w-[600px] mx-auto">
            From the first blueprint to the final brick, we provide expert guidance at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col h-full bg-white p-10 rounded-xl shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl hover:border-secondary/30">
              <div className="w-[4.5rem] h-[4.5rem] bg-primary text-white rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-primary text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted mb-6 grow">{service.desc}</p>
              <a href="#contact" className="inline-flex items-center text-primary font-semibold no-underline text-base transition-colors duration-200 hover:text-secondary group-hover:text-secondary">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
