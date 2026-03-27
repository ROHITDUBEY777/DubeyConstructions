import { ArrowRight, Ruler, HardHat } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge">Trusted by 4000+ Families</span>
          </div>
          <h1 className="hero-title">
            Build Your Dream Home with <span className="text-secondary">Expert Civil Engineering</span> Guidance
          </h1>
          <p className="hero-subtitle">
            Premium building planning, layout design, and regular site supervision to ensure your construction is flawless from ground up.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary hero-btn">
              Get Consultation <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-outline hero-btn-outline">
              Explore Services
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <div className="feature-icon-wrapper">
                <Ruler className="text-secondary" size={24} />
              </div>
              <span className="feature-text">2D/3D Planning</span>
            </div>
            <div className="hero-feature">
              <div className="feature-icon-wrapper">
                <HardHat className="text-secondary" size={24} />
              </div>
              <span className="feature-text">Quality Supervision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
