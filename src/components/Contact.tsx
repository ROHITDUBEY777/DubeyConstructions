import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-light border-t border-slate-200">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4 leading-tight">
            Ready to build your <span className="text-secondary">Dream Home?</span>
          </h2>
          <p className="text-[1.15rem] text-muted max-w-[600px] mx-auto">
            Contact us today for a consultation. Let's lay the perfect foundation together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-primary text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-[200px] h-[200px] rounded-full bg-white/5"></div>
            
            <h3 className="text-2xl font-bold mb-4 z-10 relative">Contact Information</h3>
            <p className="text-[#CBD5E1] text-[1.05rem] mb-12 z-10 relative">
              Reach out to us directly or drop by our office. We are always ready to discuss your building project.
            </p>

            <div className="flex flex-col gap-8 z-10 relative">
              <div className="flex items-start gap-5">
                <div className="bg-white/10 p-3 rounded-full flex items-center justify-center shrink-0">
                  <PhoneCall size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-white text-[1.1rem] font-bold mb-1">Phone</h4>
                  <p className="text-[#CBD5E1] text-[0.95rem] m-0">+91 94481 09495</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white/10 p-3 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-white text-[1.1rem] font-bold mb-1">Email</h4>
                  <p className="text-[#CBD5E1] text-[0.95rem] m-0">dubeyconstructions@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white/10 p-3 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-white text-[1.1rem] font-bold mb-1">Location</h4>
                  <p className="text-[#CBD5E1] text-[0.95rem] m-0">Basavakalyan Bidar Karnataka India - 585327 </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white/10 p-3 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-white text-[1.1rem] font-bold mb-1">Working Hours</h4>
                  <p className="text-[#CBD5E1] text-[0.95rem] m-0">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-8 md:p-12 pl-8 lg:pl-16">
            <h3 className="text-2xl font-bold text-primary mb-8">Send us a Message</h3>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-dark text-[0.95rem]">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="p-4 border border-slate-200 rounded-md font-sans text-base bg-light transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" 
                  placeholder="John Doe" 
                  required 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold text-dark text-[0.95rem]">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="p-4 border border-slate-200 rounded-md font-sans text-base bg-light transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" 
                  placeholder="+91 XXXXX XXXXX" 
                  required 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-semibold text-dark text-[0.95rem]">Service Interested In</label>
                <select 
                  id="service" 
                  className="p-4 border border-slate-200 rounded-md font-sans text-base bg-light transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" 
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="planning">Building Planning (₹10000)</option>
                  <option value="supervision-3">Standard Supervision (₹12000)</option>
                  <option value="supervision-full">Complete Supervision (₹15000)</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold text-dark text-[0.95rem]">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="p-4 border border-slate-200 rounded-md font-sans text-base bg-light transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 resize-y" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="inline-flex items-center justify-center w-full py-4 mt-2 bg-secondary text-white rounded-md font-semibold text-[1.1rem] transition-all hover:bg-[#E0851A] hover:-translate-y-0.5 shadow-md border-none cursor-pointer"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
