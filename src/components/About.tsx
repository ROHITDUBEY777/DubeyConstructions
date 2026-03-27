import { CheckCircle2, Award, Briefcase } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop" 
            alt="Experienced Civil Engineer on Site" 
            className="about-img"
          />
          <div className="experience-badge">
            <div className="exp-number">32+</div>
            <div className="exp-text">Years of<br/>Experience</div>
          </div>
        </div>
        
        <div className="about-content">
          <div className="badge mb-4">About the Founder</div>
          <h2 className="section-title">
            Over three decades of <span className="text-secondary">Building Trust</span> and strong foundations.
          </h2>
          <p className="about-desc">
            Led by a highly experienced Civil Engineer with a lifetime dedicated to perfection in structural integrity and aesthetic design. With over 32 years of hands-on site experience, our founder has successfully overseen the completion of more than 4,000 buildings across the region.
          </p>
          <p className="about-desc mb-6">
            We don't just build houses; we build homes with precise planning, rigorous site supervision, and an unwavering commitment to quality.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <Award className="stat-icon" />
              <div>
                <h4 className="stat-title">4000+</h4>
                <p className="stat-label">Buildings Completed</p>
              </div>
            </div>
            <div className="stat-item">
              <CheckCircle2 className="stat-icon" />
              <div>
                <h4 className="stat-title">100%</h4>
                <p className="stat-label">Quality Assurance</p>
              </div>
            </div>
            <div className="stat-item">
              <Briefcase className="stat-icon" />
              <div>
                <h4 className="stat-title">32+ Years</h4>
                <p className="stat-label">Core Site Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
