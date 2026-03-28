import { CheckCircle2, Award, Briefcase } from 'lucide-react';
import Founder from "../assets/Founder.jpeg"
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative inline-block w-[100%] mx-auto lg:w-full">
          <img 
            src={Founder} 
            alt="Experienced Civil Engineer on Site" 
            className="w-full h-[550px] rounded-2xl shadow-xl object-cover"
          />
          <div className="absolute -bottom-6 left-0 right-0 mx-auto w-[80%] md:right-[-2rem] md:left-auto md:w-auto bg-primary text-white p-6 md:px-8 md:py-6 rounded-xl shadow-lg flex justify-center items-center gap-4 border-4 border-white">
            <div className="text-[3.5rem] font-bold leading-none text-secondary">38+</div>
            <div className="font-semibold leading-tight text-[1.1rem]">Years of<br/>Experience</div>
          </div>
        </div>
        
        <div>
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            About the Founder
          </div>
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-6 leading-tight">
            Over three decades of <span className="text-secondary">Building Trust</span> and strong foundations.
          </h2>
          <p className="text-lg text-muted mb-4">
            Led by a highly experienced Civil Engineer with a lifetime dedicated to perfection in structural integrity and aesthetic design. With over 38 years of hands-on site experience, our founder has successfully overseen the completion of more than 4,000 buildings across the region.
          </p>
          <p className="text-lg text-muted mb-8">
            We don't just build houses; we build homes with precise planning, rigorous site supervision, and an unwavering commitment to quality.
          </p>
          
          <div className="flex flex-col gap-6 mt-8 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 p-2.5 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-0.5">4000+</h4>
                <p className="text-[0.95rem] text-muted m-0">Buildings Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 p-2.5 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-0.5">100%</h4>
                <p className="text-[0.95rem] text-muted m-0">Quality Assurance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 p-2.5 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-0.5">38+ Years</h4>
                <p className="text-[0.95rem] text-muted m-0">Core Site Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
