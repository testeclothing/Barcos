import React from 'react';
import { Layers, Zap, Shield, Maximize } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: "Liquid Dynamics",
    desc: "We utilize our engine's fluid simulation to create wake patterns and reflections that match your hull's exact velocity and drag."
  },
  {
    icon: Zap,
    title: "Solar Matching",
    desc: "Our system analyzes shadows in your source photo to reconstruct the sun's position, ensuring the new environment is physically accurate."
  },
  {
    icon: Shield,
    title: "Structure Lock™",
    desc: "A proprietary safety protocol we use to prevent AI from altering the vessel's structure. We change the world, not the boat."
  },
  {
    icon: Maximize,
    title: "8K Upscaling",
    desc: "We rebuild standard smartphone photography using generative adversarial networks to achieve 300DPI print resolution."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div className="max-w-xl">
                <span className="text-neon text-[10px] font-bold uppercase tracking-widest mb-4 block">The MVS Engine</span>
                <h2 className="font-display text-4xl font-bold text-dark">
                    Our Proprietary <br/> <span className="text-gray-400">Visualization Stack</span>
                </h2>
            </div>
            <div className="hidden md:block">
                <p className="text-right text-xs font-bold uppercase tracking-widest text-gray-400">
                    Deployed by MVS <br/> Version 2.4.0
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, index) => (
                <div key={index} className="group p-8 bg-gray-50 hover:bg-dark transition-colors duration-500 rounded-2xl border border-gray-100 hover:border-dark">
                    <div className="w-12 h-12 bg-white group-hover:bg-white/10 rounded-lg flex items-center justify-center mb-6 transition-colors duration-500 shadow-sm">
                        <feat.icon className="w-6 h-6 text-dark group-hover:text-neon transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-lg text-dark group-hover:text-white mb-4 transition-colors duration-500">
                        {feat.title}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-500">
                        {feat.desc}
                    </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Features;