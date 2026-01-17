import React from 'react';
import { Globe, Smartphone, FileText } from 'lucide-react';

const MarketingAssets: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-20 items-center">
            
            <div className="md:w-1/3">
                <span className="text-champagne text-[10px] font-sans font-bold tracking-[0.3em] uppercase mb-6 block">
                    Distribution
                </span>
                <h2 className="font-serif text-4xl text-white mb-6 font-light">
                    Platform Ready
                </h2>
                <p className="text-slate-400 font-sans font-light text-sm leading-relaxed mb-10">
                    We deliver assets formatted specifically for the world's leading brokerage platforms and luxury publications.
                </p>
                <ul className="space-y-6">
                    {[
                        { icon: Globe, text: "YachtWorld Formats" },
                        { icon: Smartphone, text: "Social Vertical (9:16)" },
                        { icon: FileText, text: "High-Res Print PDF" }
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-slate-300 font-sans uppercase tracking-widest text-[10px] border-b border-white/5 pb-4">
                            <item.icon className="w-4 h-4 mr-4 text-champagne opacity-70" strokeWidth={1} />
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 gap-8 relative">
                {/* Mockup 1: Website Listing */}
                <div className="col-span-2 md:col-span-1 bg-white p-2 shadow-2xl z-10">
                    <div className="h-48 bg-gray-100 overflow-hidden relative mb-4">
                         <img src="https://images.unsplash.com/photo-1544641666-41f237f3743c?q=80&w=600" className="w-full h-full object-cover grayscale-[20%]" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-gray-200"></div>
                        <div className="h-2 w-1/2 bg-gray-200"></div>
                    </div>
                </div>

                {/* Mockup 2: Mobile Story */}
                <div className="md:col-span-1 hidden md:block w-48 mx-auto bg-black border border-gray-800 p-2 shadow-2xl">
                    <div className="relative h-64 bg-gray-900 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=600" className="w-full h-full object-cover grayscale-[20%]" />
                        <div className="absolute bottom-6 left-0 w-full text-center">
                            <span className="text-white text-[8px] font-sans uppercase tracking-widest">Swipe Up</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAssets;