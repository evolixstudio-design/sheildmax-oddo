import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDemoStore } from '../../store/useDemoStore';
import { FileText, MessageCircle, Shield, Truck, CheckCircle2 } from 'lucide-react';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const allProducts = useDemoStore((state) => state.products);
  const addToQuote = useDemoStore((state) => state.addToQuote);
  const product = useMemo(() => allProducts.find(p => p.slug === slug), [allProducts, slug]);
  
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product || !product.websitePublished) {
    return <div className="text-center py-20 text-slate-500">Product not found.</div>;
  }

  const handleAdd = () => {
    addToQuote(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Image Gallery */}
        <div className="w-full md:w-[58%]">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 flex items-center justify-center aspect-square md:aspect-auto md:h-[600px] mb-4 relative">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
            {product.availability === 'IN_STOCK' && (
              <div className="absolute top-6 left-6 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-2">
                <CheckCircle2 size={16} /> In Stock
              </div>
            )}
          </div>
          {/* Thumbnail row would go here if multiple images existed */}
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-[42%] flex flex-col">
          <div className="mb-2">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{product.brand}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            {product.websiteTitle}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-slate-600 font-medium mb-6 pb-6 border-b border-slate-200">
            <span>SKU: <span className="text-slate-900">{product.sku}</span></span>
            <span>•</span>
            <span className="flex items-center gap-1"><Shield size={16} className="text-orange-500" /> Certified</span>
          </div>

          <p className="text-slate-700 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
            <div className="font-extrabold text-2xl text-slate-900 mb-2">PRICE ON REQUEST</div>
            <p className="text-sm text-slate-600 mb-6">
              Pricing is prepared according to quantity, availability and current market conditions.
            </p>
            
            <div className="flex items-end gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Quantity</label>
                <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden h-12">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 text-slate-500 hover:text-slate-900 font-bold bg-slate-50 border-r border-slate-300 h-full">-</button>
                  <input type="number" value={qty} onChange={(e) => setQty(Number(e.target.value))} className="w-full text-center font-bold text-slate-900 outline-none" />
                  <button onClick={() => setQty(qty + 1)} className="px-4 text-slate-500 hover:text-slate-900 font-bold bg-slate-50 border-l border-slate-300 h-full">+</button>
                </div>
              </div>
              <div className="w-24">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Unit</label>
                <div className="h-12 flex items-center justify-center bg-slate-100 border border-slate-300 rounded-lg font-bold text-slate-700">
                  {product.unit}
                </div>
              </div>
            </div>

            <button 
              onClick={handleAdd}
              className={`w-full h-14 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                added 
                  ? 'bg-green-500 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
              }`}
            >
              {added ? <><CheckCircle2 size={20} /> ADDED TO QUOTE LIST</> : <><FileText size={20} /> ADD TO QUOTE</>}
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Truck className="text-orange-600" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Delivery Information</h4>
                <p className="text-slate-600 text-sm">{product.deliveryText}</p>
              </div>
            </div>
            
            <button className="flex items-center justify-center gap-2 w-full h-12 border-2 border-slate-200 rounded-lg font-bold text-slate-700 hover:border-slate-300 transition-colors">
              <MessageCircle size={20} className="text-green-500" /> ASK ON WHATSAPP
            </button>
          </div>

          {/* Details Accordion style */}
          <div className="border-t border-slate-200 divide-y divide-slate-200">
            <div className="py-4">
              <h3 className="font-bold text-slate-900 mb-2">Certifications & Standards</h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                {product.certifications.map(cert => <li key={cert}>{cert}</li>)}
              </ul>
            </div>
            <div className="py-4">
              <h3 className="font-bold text-slate-900 mb-2">Applications</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.applications.map(app => (
                  <span key={app} className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
