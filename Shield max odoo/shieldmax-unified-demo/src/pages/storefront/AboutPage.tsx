import { ShieldCheck, Truck, Clock, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Kuwait's Premier Industrial Safety Supplier</h1>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Shield Max Safety Kuwait has been at the forefront of industrial protection, delivering certified Personal Protective Equipment (PPE) to major contractors, oil & gas facilities, and procurement teams across the region.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We believe that safety should never be compromised. That's why we partner exclusively with globally recognized brands to ensure every product meets strict international safety standards (ANSI, CE, EN).
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="text-3xl font-extrabold text-slate-900 mb-1">5,000+</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Products in Stock</div>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="text-3xl font-extrabold text-slate-900 mb-1">250+</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Corporate Clients</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-slate-900 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-40 bg-[url('https://placehold.co/800x800/0f172a/1e293b?text=Warehouse')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
              <div className="w-16 h-20 bg-orange-500 rounded-b-xl relative flex items-center justify-center mb-6">
                <div className="absolute top-0 w-full h-2 bg-amber-400" />
                <span className="text-white font-bold text-3xl leading-none">SM</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-widest uppercase">Shield Max</h2>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-orange-100 rounded-full -z-10 blur-3xl opacity-50"></div>
        </div>
      </div>

      {/* Value Props */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <ShieldCheck size={32} className="text-orange-500 mb-4" />
          <h3 className="font-bold text-lg text-slate-900 mb-2">Certified Quality</h3>
          <p className="text-slate-600 text-sm">All products strictly adhere to OSHA, ANSI, and European CE safety standards.</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <Truck size={32} className="text-orange-500 mb-4" />
          <h3 className="font-bold text-lg text-slate-900 mb-2">Fast Logistics</h3>
          <p className="text-slate-600 text-sm">Next-day delivery available across all governorates in Kuwait.</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <Clock size={32} className="text-orange-500 mb-4" />
          <h3 className="font-bold text-lg text-slate-900 mb-2">24/7 Support</h3>
          <p className="text-slate-600 text-sm">Dedicated account managers for large-scale enterprise procurement.</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <Award size={32} className="text-orange-500 mb-4" />
          <h3 className="font-bold text-lg text-slate-900 mb-2">Authorized Dealer</h3>
          <p className="text-slate-600 text-sm">Direct partnerships with global manufacturers for authentic products.</p>
        </div>
      </div>
    </div>
  );
}
