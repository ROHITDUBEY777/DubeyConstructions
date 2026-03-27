import { Star, Quote } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Client Reviews
          </div>
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4 leading-tight">
            What Our <span className="text-secondary">Clients</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light p-10 rounded-xl relative border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30 flex flex-col h-full">
              <Quote className="absolute top-6 right-6 text-primary/5" size={40} />
              
              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-[1.1rem] italic text-dark mb-8 leading-relaxed grow text-left">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-[1.1rem] font-bold text-primary mb-0.5">{testimonial.name}</h4>
                  <p className="text-sm text-muted m-0">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
