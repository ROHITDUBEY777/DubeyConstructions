import { Building2 } from 'lucide-react';

const FacebookIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-secondary" />
              <span className="text-xl font-bold tracking-tight text-white">Dubey Constructions</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-[400px]">
              Building trust and foundations across India. Over 32 years of rich engineering expertise helping thousands build their dream homes confidently.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-full transition-all duration-300 hover:bg-secondary hover:-translate-y-1" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-full transition-all duration-300 hover:bg-secondary hover:-translate-y-1" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-full transition-all duration-300 hover:bg-secondary hover:-translate-y-1" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-full transition-all duration-300 hover:bg-secondary hover:-translate-y-1" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-secondary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              <li><a href="#home" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">Home</a></li>
              <li><a href="#about" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">About Founder</a></li>
              <li><a href="#services" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">Our Services</a></li>
              <li><a href="#projects" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">Gallery</a></li>
              <li><a href="#contact" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-secondary">
              Our Services
            </h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              <li><a href="#pricing" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">Building Planning</a></li>
              <li><a href="#pricing" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">Site Marking Out</a></li>
              <li><a href="#pricing" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">Construction Supervision</a></li>
              <li><a href="#pricing" className="text-slate-400 no-underline transition-all duration-200 hover:text-secondary hover:pl-2">Quality Control Checks</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center md:justify-between gap-4 text-slate-500 text-sm">
          <p className="m-0">&copy; {new Date().getFullYear()} Dubey Constructions. All rights reserved.</p>
          <p className="m-0">Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
