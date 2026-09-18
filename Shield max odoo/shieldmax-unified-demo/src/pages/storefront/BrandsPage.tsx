import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useDemoStore } from '../../store/useDemoStore';

export default function BrandsPage() {
  const products = useDemoStore(state => state.products);
  const brands = Array.from(new Set(products.map(p => p.brand)));

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Trusted Brands</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We partner with the world's leading manufacturers of industrial safety equipment to bring certified protection to Kuwait.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map(brand => (
          <Link 
            key={brand} 
            to="/products"
            className="group bg-white border border-slate-200 rounded-xl p-8 text-center hover:border-orange-500 hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
              <span className="font-bold text-xl text-slate-400 group-hover:text-orange-600">{brand.charAt(0)}</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{brand}</h3>
            <div className="flex items-center justify-center gap-1 text-sm text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              View Products <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
