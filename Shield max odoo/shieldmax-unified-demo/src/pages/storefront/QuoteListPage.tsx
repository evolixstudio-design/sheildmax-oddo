import { Link, useNavigate } from 'react-router-dom';
import { useDemoStore } from '../../store/useDemoStore';
import { Trash2, ArrowRight, FileText } from 'lucide-react';

export default function QuoteListPage() {
  const quoteList = useDemoStore((state) => state.quoteList);
  const products = useDemoStore((state) => state.products);
  const removeFromQuote = useDemoStore((state) => state.removeFromQuote);
  const updateQuoteQty = useDemoStore((state) => state.updateQuoteQty);
  const navigate = useNavigate();

  const getProduct = (id: string) => products.find(p => p.id === id);
  const totalUnits = quoteList.reduce((sum, item) => sum + item.qty, 0);

  if (quoteList.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
          <FileText size={48} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Your Quote List is empty</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Browse our catalogue and add products to request official commercial pricing for your project requirements.
        </p>
        <Link to="/products" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">
          BROWSE CATALOGUE
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Quote List</h1>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left: Selected Products */}
        <div className="flex-1 space-y-4">
          {quoteList.map(item => {
            const product = getProduct(item.productId);
            if (!product) return null;

            return (
              <div key={item.productId} className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl">
                <div className="w-24 h-24 shrink-0 bg-slate-100 rounded-lg p-2">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{product.brand}</div>
                        <Link to={`/product/${product.slug}`} className="font-bold text-slate-900 hover:text-orange-600 text-base line-clamp-2">
                          {product.websiteTitle}
                        </Link>
                      </div>
                      <button 
                        onClick={() => removeFromQuote(product.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="text-sm text-slate-500 mt-1">SKU: {product.sku}</div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border border-slate-300 rounded overflow-hidden h-9 bg-white">
                      <button onClick={() => updateQuoteQty(product.id, Math.max(1, item.qty - 1))} className="px-3 text-slate-500 font-bold bg-slate-50 border-r border-slate-300 h-full hover:bg-slate-100">-</button>
                      <input type="number" value={item.qty} onChange={(e) => updateQuoteQty(product.id, Number(e.target.value))} className="w-16 text-center font-bold text-slate-900 outline-none text-sm" />
                      <button onClick={() => updateQuoteQty(product.id, item.qty + 1)} className="px-3 text-slate-500 font-bold bg-slate-50 border-l border-slate-300 h-full hover:bg-slate-100">+</button>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{product.unit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Sticky Summary */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:sticky lg:top-28">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Order Inquiry Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-600">Total Products</span>
                <span className="font-bold text-slate-900">{quoteList.length}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-200">
                <span className="text-slate-600">Total Units</span>
                <span className="font-bold text-slate-900">{totalUnits}</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-slate-200">
                <span className="text-slate-600">Commercial Pricing</span>
                <span className="font-bold text-slate-900 text-right">Prepared on Request</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Kuwait Dispatch</span>
                <span className="font-bold text-green-600 uppercase tracking-widest text-xs">Complimentary</span>
              </div>
            </div>

            <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-lg mb-6">
              <p className="text-sm text-slate-700 font-medium leading-relaxed text-center">
                Submit this list to instantly generate your official quotation using today's Shield Max commercial pricing.
              </p>
            </div>

            <button 
              onClick={() => navigate('/request-quote')}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              CONTINUE TO RFQ <ArrowRight size={20} />
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500 font-medium">Need project quantities? Call +965 5000 0000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
