import React, { useState } from 'react';
import { MapPin, Anchor, MessageCircle, Share2, Heart, CheckCircle2 } from 'lucide-react';

const ListingDemo: React.FC = () => {
  const [mode, setMode] = useState<'standard' | 'enhanced'>('enhanced');

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <div className="inline-block px-3 py-1 bg-neon/20 text-dark text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm">
              Live Preview
           </div>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-6">
              The Platform Effect
           </h2>
           <p className="text-gray-500 text-lg">
              See exactly how MVS transforms a dormant listing into a viral asset on platforms like YachtWorld.
           </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-full border border-gray-200 shadow-sm flex relative cursor-pointer">
                <button 
                    onClick={() => setMode('standard')}
                    className={`relative z-10 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${mode === 'standard' ? 'text-dark' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    Standard Listing
                </button>
                <button 
                    onClick={() => setMode('enhanced')}
                    className={`relative z-10 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${mode === 'enhanced' ? 'text-dark' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    MVS Enhanced
                </button>
                
                {/* Sliding Background */}
                <div className={`absolute top-1 bottom-1 w-[165px] bg-neon rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${mode === 'standard' ? 'left-1' : 'left-[170px]'}`}></div>
            </div>
        </div>

        {/* Browser Mockup */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl shadow-gray-200/50 border border-gray-200 overflow-hidden relative transition-all duration-500">
            {/* Browser Header */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-md h-7 mx-4 flex items-center px-3 shadow-sm">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-2 opacity-50"></div>
                    <span className="text-[10px] text-gray-400 font-sans tracking-wide">yachtworld.com/boats-for-sale/2026-marex-310-sun-cruiser</span>
                </div>
            </div>

            {/* Listing Content */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans text-left">
                
                {/* Image Column (Left - 8 cols) */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                    {/* Main Image Container */}
                    <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-gray-100 group">
                         <img 
                            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070"
                            alt="Yacht Listing Main"
                            className={`w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
                                mode === 'standard' 
                                ? 'grayscale-[0.3] contrast-75 brightness-95' 
                                : 'contrast-110 saturate-110 brightness-105 scale-105'
                            }`}
                        />
                        
                        {/* Overlay Controls */}
                        <div className="absolute top-4 right-4 flex gap-2">
                             <div className="bg-white/90 p-2 rounded-full hover:bg-white cursor-pointer transition-colors shadow-sm">
                                 <Heart className="w-4 h-4 text-gray-600" />
                             </div>
                             <div className="bg-white/90 p-2 rounded-full hover:bg-white cursor-pointer transition-colors shadow-sm">
                                 <Share2 className="w-4 h-4 text-gray-600" />
                             </div>
                        </div>

                         {/* Badges */}
                         {mode === 'enhanced' && (
                            <div className="absolute top-4 left-4 bg-neon text-dark text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-lg animate-fade-in-up">
                                Hot Listing
                            </div>
                         )}
                    </div>

                    {/* Thumbnails Row */}
                    <div className="grid grid-cols-5 gap-2">
                        {[1,2,3,4,5].map(i => (
                             <div key={i} className={`aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden cursor-pointer border-2 ${i === 1 ? 'border-blue-900' : 'border-transparent'}`}>
                                <img 
                                    src={`https://images.unsplash.com/photo-1605218427306-022ba801c178?q=80&w=500&auto=format&fit=crop`} 
                                    className={`w-full h-full object-cover transition-all duration-500 ${mode === 'standard' ? 'grayscale-[0.5] contrast-75' : 'contrast-110'}`}
                                />
                             </div>
                        ))}
                    </div>
                </div>

                {/* Info Column (Right - 4 cols) */}
                <div className="lg:col-span-4 flex flex-col space-y-6">
                    
                    {/* Header Info */}
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-2">
                            2026 Marex 310 Sun Cruiser | 33ft
                        </h1>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            Ouistreham, 14 - Calvados
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-1">
                            €385,000 
                            <span className="text-lg text-gray-500 font-normal ml-2">(US$453,318)</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-4 font-medium">
                            Tax not paid
                        </div>
                        <div className="text-xs text-blue-600 hover:underline cursor-pointer font-medium">
                            Own this boat for $3,377/month
                        </div>
                    </div>

                    {/* Broker Box */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-start gap-4 mb-6">
                            {/* Fake Logo */}
                            <div className="w-12 h-12 bg-blue-900 text-white flex items-center justify-center rounded-sm shrink-0">
                                <Anchor className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 mb-1">Listed by</div>
                                <div className="font-bold text-slate-900 text-sm">Snip Yachting</div>
                                <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1 font-medium">View phone number</div>
                            </div>
                        </div>
                        
                        <button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white py-3 rounded-md font-bold text-sm transition-colors mb-3">
                            Contact Broker
                        </button>
                        <button className="w-full bg-white border border-[#0f172a] text-[#0f172a] hover:bg-gray-50 py-3 rounded-md font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" /> Message
                        </button>
                    </div>

                    {/* Financing / Trust Box */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 text-sm mb-3">Personalized yacht financing</h3>
                        <div className="space-y-3">
                            {[
                                "Customized financing to meet your needs",
                                "Over 25 years of marine lending experience",
                                "Experts compare 15+ lenders"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                                    <span className="text-xs text-gray-600 leading-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 bg-white border border-gray-300 text-gray-700 py-2 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
                            Get Pre-Qualified
                        </button>
                    </div>

                    {/* MVS Uplift Stats (Only in Enhanced Mode) */}
                    <div className={`transition-all duration-500 overflow-hidden ${mode === 'enhanced' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                         <div className="bg-neon/10 border border-neon/30 rounded-lg p-4 mt-2">
                             <div className="flex items-center gap-2 mb-2">
                                 <div className="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
                                 <span className="text-xs font-bold uppercase tracking-widest text-dark">MVS Uplift Detected</span>
                             </div>
                             <div className="flex justify-between items-end">
                                 <div>
                                     <div className="text-2xl font-bold text-dark">+420%</div>
                                     <div className="text-[10px] text-gray-500 uppercase">Search Impressions</div>
                                 </div>
                                 <div>
                                     <div className="text-2xl font-bold text-dark">3.5x</div>
                                     <div className="text-[10px] text-gray-500 uppercase">Lead Velocity</div>
                                 </div>
                             </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDemo;