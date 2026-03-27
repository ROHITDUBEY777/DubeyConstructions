import { PenTool, Eye, Map } from 'lucide-react';
import './Services.css';

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
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Our Expertise</div>
          <h2 className="section-title">Comprehensive <span className="text-secondary">Civil Engineering</span> Services</h2>
          <p className="section-subtitle">
            From the first blueprint to the final brick, we provide expert guidance at every step.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a href="#contact" className="service-link">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
