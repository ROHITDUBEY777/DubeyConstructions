import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: ' Planning + Markout-onsite',
      price: '10000',
      description: 'Essential accurate site marking and layout plan.',
      features: [
        'Precise Plot Marking Out',
        'Basic layout consultation',
        'Foundation alignment check',
      ],
      recommended: false,
    },
    {
      name: 'Standard Care',
      price: '12000',
      description: 'Marking out plus crucial phase site supervision.',
      features: [
        'Precise Plot Marking Out',
        '3 Dedicated Site Visits',
        'Key structural phase checks',
        'Material quality consultation',
      ],
      recommended: false,
    },
    {
      name: 'Complete Supervision',
      price: 'Total-2% of Building Cost ',
      description: 'End-to-end supervision from marking to completion.',
      features: [
        'Precise Plot Marking Out',
        '5+ Dedicated Site Visits',
        'Supervision Until Completion',
        'Full structural & quality checks',
        'Priority consultation support',
      ],
      recommended: true,
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4 leading-tight">
            Affordable & <span className="text-secondary">Value-Driven</span> Plans
          </h2>
          <p className="text-[1.15rem] text-muted max-w-[600px] mx-auto">
            Choose the level of guidance your project needs, with no hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative flex flex-col bg-white border rounded-2xl p-8 md:p-12 transition-all duration-300 shadow-sm ${plan.recommended ? 'border-2 border-secondary shadow-lg md:scale-105 hover:-translate-y-1 md:hover:scale-105 md:hover:-translate-y-1' : 'border-slate-200 hover:-translate-y-1 hover:shadow-xl'}`}>
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase shadow-md">
                  Best Value
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-xl text-dark mb-4 font-bold">{plan.name}</h3>
                <div className="flex  items-start text-primar y mb-4">
                  <span className="text-2xl font-semibold  mr-1">₹</span>
                  <span className="text-3xl py-auto  md:text-[2rem] font-extrabold leading-none tracking-tight">{plan.price}</span>
                </div>
                <p className="text-base text-muted mb-8 min-h-[3rem]">{plan.description}</p>
              </div>
              
              <div className="mb-10 grow">
                <ul className="list-none flex flex-col m-0 p-0">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 mb-4 text-dark font-medium">
                      <Check className="text-secondary shrink-0 mt-0.5" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <a href="#contact" className={`inline-flex items-center justify-center w-full py-4 rounded-md font-semibold text-lg transition-all ${plan.recommended ? 'bg-secondary text-white hover:bg-[#E0851A] hover:-translate-y-0.5 shadow-md' : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
