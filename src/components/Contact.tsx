import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Get In Touch</div>
          <h2 className="section-title">Ready to build your <span className="text-secondary">Dream Home?</span></h2>
          <p className="section-subtitle">
            Contact us today for a consultation. Let's lay the perfect foundation together.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Information */}
          <div className="contact-info-wrapper">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-info-desc">
              Reach out to us directly or drop by our office. We are always ready to discuss your building project.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <PhoneCall size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="contact-item-title">Phone</h4>
                  <p className="contact-item-value">+91 99999 99999</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="contact-item-title">Email</h4>
                  <p className="contact-item-value">info@dubeyconstructions.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="contact-item-title">Location</h4>
                  <p className="contact-item-value">City/Village, State, India - 000000</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Clock size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="contact-item-title">Working Hours</h4>
                  <p className="contact-item-value">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-heading text-dark">Send us a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" className="form-control" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" id="phone" className="form-control" placeholder="+91 XXXXX XXXXX" required />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">Service Interested In</label>
                <select id="service" className="form-control" required>
                  <option value="" disabled selected>Select a Service</option>
                  <option value="planning">Building Planning (₹6000)</option>
                  <option value="supervision-3">Standard Supervision (₹9000)</option>
                  <option value="supervision-full">Complete Supervision (₹11000)</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows={4} className="form-control" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit w-full">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
