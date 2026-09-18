import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Droplet, HardHat, Zap, Shield, Truck } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    { name: 'Oil & Gas', icon: Droplet, desc: 'Exploration, refining, and distribution safety gear.' },
    { name: 'Construction', icon: HardHat, desc: 'Heavy duty protection for large scale project sites.' },
    { name: 'Manufacturing', icon: Factory, desc: 'Assembly line and general industrial PPE.' },
    { name: 'Electrical', icon: Zap, desc: 'Arc flash and high-voltage protective clothing.' },
    { name: 'Security', icon: Shield, desc: 'Tactical and facility security personnel equipment.' },
    { name: 'Logistics', icon: Truck, desc: 'Warehousing, transport, and delivery safety solutions.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Industries We Serve</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Tailored safety solutions and specialized PPE procurement for every major sector in Kuwait.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map(ind => {
          const Icon = ind.icon;
          return (
            <div key={ind.name} className="bg-white border border-slate-200 rounded-xl p-8 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{ind.name}</h3>
              <p className="text-slate-600 mb-6">{ind.desc}</p>
              <Link to="/products" className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                View Requirements <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
