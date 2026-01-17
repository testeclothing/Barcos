import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const plans = [
  {
    name: 'Single Refit',
    price: '$450',
    unit: 'per hull',
    desc: 'Complete environmental transformation for a single listing.',
    features: ['5 Interior Retouches', '1 Exterior Ocean Placement', '24h Turnaround', 'Web Resolution'],
    highlight: false,
    cta: 'Book Refit'
  },
  {
    name: 'Fleet Retainer',
    price: '$2,400',
    unit: 'monthly cap',
    desc: 'Priority access to the engine for active brokerages.',
    features: ['Up to 10 Hulls / Month', 'Dedicated Creative Director', '4K Print Ready Files', 'Custom Branding'],
    highlight: true,
    cta: 'Secure Retainer'
  },
  {
    name: 'Shipyard',
    price: 'Custom',
    unit: 'project',
    desc: 'Pre-launch visualization for manufacturers.',
    features: ['3D Model Ingestion', 'Video Motion Generation', 'Marketing Suite', 'White Label Portal'],
    highlight: false,
    cta: 'Contact Studio'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-dark text-white relative overflow-hidden">
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon opacity-5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 blur-[80px] rounded-full"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Studio Commissions</h2>
            <p className="text-gray-400">Stop paying for fuel and crew days. Pay for results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
                <div 
                    key={index} 
                    className={`p-8 rounded-2xl border transition-all duration-300 ${
                        plan.highlight 
                        ? 'bg-white text-dark border-white transform md:-translate-y-4 shadow-2xl shadow-neon/20' 
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                >
                    {plan.highlight && (
                        <div className="inline-block bg-neon text-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                            Most Popular
                        </div>
                    )}
                    
                    <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-dark' : 'text-white'}`}>{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                        <span className={`text-5xl font-display font-bold ${plan.highlight ? 'text-dark' : 'text-white'}`}>{plan.price}</span>
                        <span className="text-sm text-gray-400 ml-2">{plan.unit}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-8 border-b border-gray-100/10 pb-8">
                        {plan.desc}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        {plan.features.map((feat, i) => (
                            <li key={i} className="flex items-center text-sm">
                                <CheckCircle2 className={`w-5 h-5 mr-3 ${plan.highlight ? 'text-neon fill-dark' : 'text-gray-500'}`} />
                                <span className={plan.highlight ? 'text-gray-700' : 'text-gray-300'}>{feat}</span>
                            </li>
                        ))}
                    </ul>

                    <button className={`w-full py-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors ${
                        plan.highlight 
                        ? 'bg-dark text-white hover:bg-neon hover:text-dark' 
                        : 'bg-white/10 text-white hover:bg-white hover:text-dark'
                    }`}>
                        {plan.cta}
                    </button>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;