import React, { useState } from 'react';
import Button from './Button';
import { ContactStatus } from '../types';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.IDLE);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ContactStatus.SENDING);
    setTimeout(() => {
      setStatus(ContactStatus.SUCCESS);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="audit" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 shadow-2xl shadow-gray-200/50 rounded-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-2 h-full bg-neon"></div>

          <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-dark mb-4">
                Start Your Digital Refit
              </h2>
              <p className="text-gray-500">
                Upload your files. Get a quote. No commitments.
              </p>
          </div>

          <div className="max-w-md mx-auto">
              {status === ContactStatus.SUCCESS ? (
                 <div className="text-center py-12 bg-green-50 rounded-lg">
                    <span className="text-green-600 font-bold text-xl block mb-2">Received!</span>
                    <p className="text-gray-500 text-sm">We will email you a secure upload link shortly.</p>
                    <button 
                        onClick={() => setStatus(ContactStatus.IDLE)}
                        className="mt-6 text-dark font-bold underline hover:text-neon"
                    >
                        Send Another
                    </button>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Agency / Name</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="e.g. Fraser Yachts" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Work Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all" placeholder="name@company.com" required />
                    </div>
                    
                    <Button type="submit" variant="primary" disabled={status === ContactStatus.SENDING} className="w-full mt-4">
                        {status === ContactStatus.SENDING ? 'Processing...' : 'Get Access'}
                    </Button>
                </form>
              )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;