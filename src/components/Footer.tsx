import { Building2 } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-container footer-logo">
              <Building2 className="logo-icon text-secondary" />
              <span className="logo-text text-white">Dubey Constructions</span>
            </div>
            <p className="footer-desc">
              Building trust and foundations across India. Over 32 years of rich engineering expertise helping thousands build their dream homes confidently.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="social-link" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Founder</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#projects">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-list">
              <li><a href="#pricing">Building Planning</a></li>
              <li><a href="#pricing">Site Marking Out</a></li>
              <li><a href="#pricing">Construction Supervision</a></li>
              <li><a href="#pricing">Quality Control Checks</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dubey Constructions. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
