import React from 'react';
import { ShieldCheck, Scale, FileCheck } from 'lucide-react';

const AccuracyGuarantee: React.FC = () => {
  return (
    <section className="py-32 bg-navy border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-champagne/30 mb-10">
            <ShieldCheck className="w-6 h-6 text-champagne" strokeWidth={1} />
        </div>

        <h2 className="font-serif text-4xl text-white mb-8 font-light">
            Accuracy is <span className="italic text-slate-400">Luxury</span>
        </h2>
        
        <p className="text-slate-400 font-sans font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            We understand that in high-ticket brokerage, truth is paramount. Our process ensures that your vessel remains 100% structurally authentic. We only refine what surrounds it: the light, the water, and the lifestyle context.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="p-8 border-t border-white/10">
                <Scale className="w-5 h-5 text-slate-400 mb-6 mx-auto opacity-70" strokeWidth={1} />
                <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-3">True-to-Scale</h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed">Furniture and hull dimensions verified against deck plans.</p>
            </div>
            <div className="p-8 border-t border-white/10">
                <ShieldCheck className="w-5 h-5 text-slate-400 mb-6 mx-auto opacity-70" strokeWidth={1} />
                <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-3">Hull Integrity</h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed">Zero digital repair of structural elements. Pure fidelity.</p>
            </div>
            <div className="p-8 border-t border-white/10">
                <FileCheck className="w-5 h-5 text-slate-400 mb-6 mx-auto opacity-70" strokeWidth={1} />
                <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-3">Broker Safe</h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed">Compliant with international brokerage listing standards.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AccuracyGuarantee;