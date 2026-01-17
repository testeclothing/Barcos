import React from 'react';
import Button from './Button';
import { ArrowDown, Play, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-white flex items-center pt-32 pb-20 overflow-hidden">
      
      {/* Abstract Background Elements - Refined for better framing */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-gray-50/50 -z-0 skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-neon rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Content Hierarchy */}
            <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 rounded-sm border border-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon"></span>
                    Visual Innovation Studio
                </div>
                
                {/* Headline */}
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-dark leading-[0.9] mb-8 -ml-1">
                    We Put <br/>
                    Your Fleet <br/>
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-600 pb-2">
                        In The Ocean.
                        {/* Underline Accent */}
                        <svg className="absolute bottom-0 left-0 w-full h-3 text-neon -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                             <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                        </svg>
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-10 font-medium leading-relaxed border-l-2 border-neon pl-6">
                    Stop using warehouse photos. We use advanced AI synthesis to digitally transport your listings from the dry dock to the Amalfi Coast.
                </p>

                {/* CTA Group */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                     <Button variant="primary" icon onClick={() => document.getElementById('core')?.scrollIntoView({ behavior: 'smooth' })}>
                        See The Transformation
                    </Button>
                    
                    {/* Social Proof */}
                    <div className="flex items-center gap-3 pl-2">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                     <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-0.5">
                                {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-neon rounded-full"></div>)}
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">
                                Trusted by 30+ Brokerages
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: The "Software/Tech" Visual - Improved Hierarchy */}
            <div className="relative mt-12 lg:mt-0 perspective-1000 group">
                {/* Main Card */}
                <div className="relative z-10 bg-white p-2 md:p-3 shadow-2xl shadow-gray-200/50 rounded-xl border border-gray-100 transform transition-transform duration-700 hover:rotate-0 rotate-1">
                    
                    {/* Fake Browser Header */}
                    <div className="flex items-center gap-2 mb-2 px-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                        </div>
                        <div className="h-2 w-20 bg-gray-100 rounded-full ml-2"></div>
                    </div>

                    {/* Image Area */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 group-hover:shadow-inner transition-shadow">
                        <img 
                            src="https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=2070" 
                            alt="Yacht in Ocean" 
                            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                        />
                        
                        {/* UI Overlay: Enhancement Complete (Replaced Loader) */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100 flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                 <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neon/20">
                                     <Check className="w-3 h-3 text-dark" strokeWidth={3} />
                                 </div>
                                 <div>
                                     <div className="text-[10px] font-bold uppercase tracking-widest text-dark">Studio Enhancement</div>
                                     <div className="text-[9px] text-gray-400">Lighting & Physics Applied</div>
                                 </div>
                             </div>
                             <span className="text-[10px] font-bold font-sans text-white bg-dark px-2 py-1 rounded-sm uppercase tracking-wider">Ready</span>
                        </div>
                    </div>
                </div>

                {/* Floating Stats Card - Positioned better */}
                <div className="absolute -top-6 -right-6 md:-right-12 bg-dark text-white p-6 rounded-xl shadow-2xl z-20 max-w-[180px] transform hover:-translate-y-2 transition-transform duration-300 border border-gray-800">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Play className="w-3 h-3 text-neon fill-neon" />
                        </div>
                        <span className="text-neon text-xs font-bold">+400%</span>
                    </div>
                    <p className="font-display text-xl font-bold mb-1 leading-none">Engagement</p>
                    <p className="text-gray-500 text-[10px] leading-tight">Uplift in CTR on major marketplaces.</p>
                </div>
                
                {/* Decorative dots behind */}
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-neon/20 rounded-full blur-xl -z-10"></div>
            </div>

        </div>

        {/* Scroll Indicator - Bottom center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => document.getElementById('core')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

      </div>
    </section>
  );
};

export default Hero;