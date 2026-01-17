import React, { useState } from 'react';
import ComparisonSlider from './ComparisonSlider';
import { Layers, Droplets, Sun } from 'lucide-react';

const modules = [
  {
    id: 'exterior',
    label: 'Weather Synthesis',
    icon: Sun,
    beforeLabel: 'Grey Sky',
    afterLabel: 'Golden Hour',
    image: 'https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=2070',
    description: 'We replace flat, grey shipyard lighting with dynamic "Golden Hour" or "High Noon" Mediterranean sun.',
  },
  {
    id: 'water',
    label: 'Digital Water',
    icon: Droplets,
    beforeLabel: 'Dry Dock',
    afterLabel: 'Deep Ocean',
    image: 'https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=2070',
    description: 'Proprietary fluid simulation places the hull in realistic motion-blurred water, removing all land elements.',
  },
  {
    id: 'refit',
    label: 'Virtual Refit',
    icon: Layers,
    beforeLabel: 'Dated',
    afterLabel: 'Modern',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070',
    description: 'Remove clutter, change upholstery colors, and stage tables with champagne and fruit digitally.',
  },
];

const DigitalStaging: React.FC = () => {
  const [activeModule, setActiveModule] = useState(modules[1]);

  return (
    <section id="core" className="py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-6">
                The <span className="text-gray-400 line-through decoration-neon decoration-4">Logistic</span> Digital Gap
            </h2>
            <p className="text-gray-500 text-lg">
                Your boat is in a warehouse. Your buyer is dreaming of the Bahamas. 
                <br/>We bridge that gap instantly.
            </p>
        </div>

        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100">
            {/* Visualizer */}
            <div className="mb-12">
                <ComparisonSlider 
                    key={activeModule.id} 
                    image={activeModule.image}
                    labelBefore={activeModule.beforeLabel}
                    labelAfter={activeModule.afterLabel}
                    aspectRatio="aspect-[16/9]"
                />
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {modules.map((mod) => (
                    <button
                        key={mod.id}
                        onClick={() => setActiveModule(mod)}
                        className={`text-left p-6 rounded-lg border transition-all duration-300 group ${
                            activeModule.id === mod.id 
                            ? 'bg-dark border-dark ring-2 ring-neon ring-offset-2' 
                            : 'bg-white border-gray-200 hover:border-neon'
                        }`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <mod.icon className={`w-6 h-6 ${activeModule.id === mod.id ? 'text-neon' : 'text-gray-400 group-hover:text-dark'}`} />
                            {activeModule.id === mod.id && <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>}
                        </div>
                        <h3 className={`font-bold text-lg mb-2 ${activeModule.id === mod.id ? 'text-white' : 'text-dark'}`}>
                            {mod.label}
                        </h3>
                        <p className={`text-xs leading-relaxed ${activeModule.id === mod.id ? 'text-gray-400' : 'text-gray-500'}`}>
                            {mod.description}
                        </p>
                    </button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalStaging;