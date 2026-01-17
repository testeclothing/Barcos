import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    id: 1,
    client: "Fraser Yachts",
    vessel: "Benetti 45M",
    location: "Monaco",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: 2,
    client: "Burgess",
    vessel: "Sunseeker 88",
    location: "Miami",
    image: "https://images.unsplash.com/photo-1621217651084-2975949d21e3?q=80&w=1000",
    size: "col-span-1"
  },
  {
    id: 3,
    client: "Camper & Nicholsons",
    vessel: "Riva 110",
    location: "Croatia",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1000",
    size: "col-span-1"
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex justify-between items-center mb-12">
            <h2 className="font-display text-3xl font-bold text-dark">Recent Deployments</h2>
            <button className="flex items-center text-xs font-bold uppercase tracking-widest text-dark hover:text-neon transition-colors">
                View Archive <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {works.map((work) => (
                <div key={work.id} className={`${work.size} group relative aspect-[4/3] md:aspect-auto md:h-[400px] overflow-hidden rounded-lg cursor-pointer`}>
                    <img 
                        src={work.image} 
                        alt={work.vessel} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-neon text-[10px] font-bold uppercase tracking-widest mb-2 block">
                                {work.client}
                            </span>
                            <h3 className="text-white font-display text-2xl font-bold mb-1">
                                {work.vessel}
                            </h3>
                            <p className="text-gray-400 text-xs flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                Deployed to {work.location}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;