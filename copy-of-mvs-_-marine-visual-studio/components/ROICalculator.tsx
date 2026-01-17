import React, { useState } from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import Button from './Button';

const ROICalculator: React.FC = () => {
  const [photographerCost, setPhotographerCost] = useState(3500);
  const [logisticsCost, setLogisticsCost] = useState(1500);
  
  const nauticaCost = 850;
  const traditionalTotal = photographerCost + logisticsCost;
  const savings = traditionalTotal - nauticaCost;
  const percentSaved = Math.round((savings / traditionalTotal) * 100);

  return (
    <section id="roi" className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-900/30 -skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left: Narrative & Context */}
            <div className="lg:w-5/12 sticky top-32">
                <span className="text-champagne text-[10px] font-sans font-bold tracking-[0.3em] uppercase mb-8 block">
                    Financial Logic
                </span>
                <h2 className="font-serif text-5xl text-white mb-8 leading-[1.1]">
                    The Cost of <br/> <span className="text-white/40 italic">Obsolescence</span>
                </h2>
                <p className="text-white/60 font-sans font-light leading-relaxed mb-12 text-sm border-l border-white/10 pl-6">
                    Traditional marine photography is a capital sink of weather windows, crew scheduling, and fuel costs. 
                    We eliminate physical variables, delivering superior assets at a fraction of the expenditure.
                </p>

                <div className="space-y-8">
                    <div className="flex items-center space-x-6 opacity-60">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
                            <Clock className="w-5 h-5" strokeWidth={1} />
                        </div>
                        <div>
                            <div className="text-white text-2xl font-serif">14 Days</div>
                            <div className="text-[9px] uppercase tracking-widest text-white/50">Traditional Turnaround</div>
                        </div>
                    </div>
                     <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 rounded-full bg-champagne text-navy flex items-center justify-center shadow-[0_0_30px_rgba(212,197,169,0.2)]">
                            <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div>
                            <div className="text-white text-2xl font-serif">48 Hours</div>
                            <div className="text-[9px] uppercase tracking-widest text-champagne">Nautica Efficiency</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: The Calculator Instrument */}
            <div className="lg:w-7/12 w-full">
                <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
                    {/* Gloss effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    {/* Inputs Header */}
                    <div className="mb-12">
                        <h3 className="text-white text-xl font-serif mb-2">Estimate Your Current Spend</h3>
                        <p className="text-white/40 text-xs font-sans tracking-wide">Adjust sliders based on your typical per-vessel expenses.</p>
                    </div>

                    {/* Interactive Inputs */}
                    <div className="space-y-10 mb-16">
                        {/* Input 1 */}
                        <div className="group">
                            <div className="flex justify-between text-[10px] font-sans uppercase tracking-widest mb-4">
                                <span className="text-white/70 group-hover:text-white transition-colors">Photographer Day Rate</span>
                                <span className="text-white font-bold">${photographerCost.toLocaleString()}</span>
                            </div>
                            <input 
                                type="range" 
                                min="1500" 
                                max="10000" 
                                step="100" 
                                value={photographerCost}
                                onChange={(e) => setPhotographerCost(Number(e.target.value))}
                                className="w-full h-[1px] bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-champagne [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-150 hover:[&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(212,197,169,0.5)] transition-all"
                            />
                        </div>

                        {/* Input 2 */}
                        <div className="group">
                            <div className="flex justify-between text-[10px] font-sans uppercase tracking-widest mb-4">
                                <span className="text-white/70 group-hover:text-white transition-colors">Fuel, Crew & Logistics</span>
                                <span className="text-white font-bold">${logisticsCost.toLocaleString()}</span>
                            </div>
                            <input 
                                type="range" 
                                min="500" 
                                max="5000" 
                                step="100" 
                                value={logisticsCost}
                                onChange={(e) => setLogisticsCost(Number(e.target.value))}
                                className="w-full h-[1px] bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-champagne [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-150 hover:[&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(212,197,169,0.5)] transition-all"
                            />
                        </div>
                    </div>

                    {/* The Comparison Ledger */}
                    <div className="bg-navy/50 border border-white/5 p-8 rounded-sm mb-10">
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                            <span className="text-white/50 text-[10px] uppercase tracking-widest">Traditional Cost</span>
                            <span className="text-white/50 font-serif text-lg line-through decoration-white/30">${traditionalTotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/5">
                            <span className="text-white text-[10px] uppercase tracking-widest font-bold">Nautica Fixed Rate</span>
                            <span className="text-white font-serif text-xl">${nauticaCost}</span>
                        </div>
                        
                        <div className="flex justify-between items-end">
                             <div>
                                <span className="block text-champagne text-[10px] uppercase tracking-widest mb-1">Retained Capital</span>
                                <span className="block text-white/30 text-[9px]">Per Vessel</span>
                             </div>
                             <div className="text-right">
                                <span className="block text-4xl md:text-5xl font-serif text-white mb-1">${savings.toLocaleString()}</span>
                                <span className="inline-block bg-champagne/10 text-champagne text-[9px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                                    {percentSaved}% Efficiency
                                </span>
                             </div>
                        </div>
                    </div>

                    {/* Result Footer */}
                    <div className="text-center">
                         <Button variant="primary" icon onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })} className="w-full md:w-auto">
                            Claim Efficiency Audit
                         </Button>
                         <p className="mt-6 text-white/30 text-[9px] font-sans">
                            *Estimates based on standard market rates for high-end marine photography.
                         </p>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;