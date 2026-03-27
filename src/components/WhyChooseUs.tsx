import { UserCheck, Wallet, ShieldCheck, MapPin, Handshake } from 'lucide-react';
import './WhyChooseUs.css';

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
    <section className="section-padding bg-primary text-white why-choose-section">
      <div className="container">
        <div className="why-choose-layout">
          <div className="why-choose-content">
            <div className="badge badge-light mb-4">Why Choose Us</div>
            <h2 className="section-title text-white">
              The Foundation of our Success is <span className="text-secondary">Your Trust</span>.
            </h2>
            <p className="why-choose-desc">
              When you choose Dubey Constructions, you are partnering with an expert who knows the land, the materials, and the craft. We protect your investment by preventing costly construction errors before they happen.
            </p>
            
            <a href="#contact" className="btn btn-primary mt-8">Start Your Project</a>
          </div>

          <div className="why-choose-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-item">
                <div className="reason-icon">
                  {reason.icon}
                </div>
                <div className="reason-text">
                  <h4 className="reason-title">{reason.title}</h4>
                  <p className="reason-desc">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
