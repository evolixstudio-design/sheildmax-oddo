import { Link } from 'react-router-dom';
import { useDemoStore } from '../../../store/useDemoStore';
import { Package, Search, Plus, Filter, Globe, EyeOff, Star } from 'lucide-react';

export default function WebsiteProducts() {
  const products = useDemoStore(state => state.products);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Website Products</h1>
          <p className="text-slate-600 mt-1">Manage product visibility and presentation on the storefront.</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={18} /> NEW PRODUCT
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[calc(100vh-200px)]">
        <div className="p-4 border-b border-slate-200 flex items-center gap-4 bg-slate-50">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products by name, SKU, or brand..." 
              className="w-full bg-white border border-slate-300 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>
          <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold px-4 py-2 border border-slate-300 rounded-lg bg-white">
            <Filter size={18} /> Filter
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 sticky top-0 z-10">
              <tr className="border-b border-slate-200">
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Product</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">SKU</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Stock</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Featured</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="py-3 px-6">
                    <Link to={`/control/website/products/${product.id}`} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded border border-slate-200 bg-white p-1 shrink-0 flex items-center justify-center overflow-hidden">
                        {product.images[0] ? (
                          <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain" />
                        ) : (
                          <Package className="text-slate-300" size={20} />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">{product.name}</div>
                        <div className="text-xs text-slate-500">{product.brand}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="py-3 px-6 text-sm text-slate-600">{product.sku}</td>
                  <td className="py-3 px-6 text-sm text-slate-600">{product.category}</td>
                  <td className="py-3 px-6 text-sm font-medium text-slate-900 text-right">{product.stockQty} {product.unit}</td>
                  <td className="py-3 px-6 text-center">
                    {product.websitePublished ? (
                      <span className="inline-flex items-center justify-center bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        <Globe size={12} className="mr-1" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        <EyeOff size={12} className="mr-1" /> Hidden
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {product.featured ? (
                      <Star size={18} className="text-amber-400 fill-amber-400 mx-auto" />
                    ) : (
                      <Star size={18} className="text-slate-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
