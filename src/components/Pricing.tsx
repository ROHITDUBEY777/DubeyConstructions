import { Check } from 'lucide-react';
import './Pricing.css';

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
      price: '15000',
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
    <section id="pricing" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Transparent Pricing</div>
          <h2 className="section-title">Affordable & <span className="text-secondary">Value-Driven</span> Plans</h2>
          <p className="section-subtitle">
            Choose the level of guidance your project needs, with no hidden costs.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
              {plan.recommended && <div className="pricing-badge">Best Value</div>}
              
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                </div>
                <p className="pricing-desc">{plan.description}</p>
              </div>
              
              <div className="pricing-body">
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="feature-list-item">
                      <Check className="feature-check" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-footer">
                <a href="#contact" className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} w-full`}>
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
