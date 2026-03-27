import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ramesh Singh',
      role: 'Home Owner',
      quote: 'Dubey Constructions saved us lakhs by optimizing the structural design. The regular site visits made us feel secure that our dream home was being built right.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Property Developer',
      quote: 'The accuracy in marking out the plot is unmatched. Having an engineer with 32 years of experience oversee our projects has completely changed our construction quality.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Land Owner',
      quote: 'Honest, transparent, and brilliant at what they do. I opted for the Complete Supervision plan and it was the best decision for my peace of mind.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Client Reviews</div>
          <h2 className="section-title">What Our <span className="text-secondary">Clients</span> Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" size={40} />
              
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
