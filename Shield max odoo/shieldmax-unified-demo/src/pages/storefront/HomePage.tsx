import { Link } from 'react-router-dom';
import { useDemoStore } from '../../store/useDemoStore';
import { ArrowRight, ShieldCheck, Truck, PackageOpen } from 'lucide-react';

export default function HomePage() {
  const products = useDemoStore((state) => state.products);
  const featured = products.filter(p => p.websitePublished && p.featured).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20 bg-[url('https://placehold.co/1920x1080/0f172a/1e293b?text=Industrial+Worksite')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-1 bg-orange-500"></div>
            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Shield Max • Kuwait</span>
            <div className="w-10 h-1 bg-orange-500"></div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl leading-[1.1]">
            PROFESSIONAL SAFETY & PROTECTION EQUIPMENT
          </h1>
          
          <p className="text-lg lg:text-xl text-stone-300 max-w-2xl mb-10 leading-relaxed">
            Certified PPE, industrial safety equipment and project supply for contractors, facilities, oil & gas and procurement teams across Kuwait.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
              BROWSE PRODUCTS
            </Link>
            <Link to="/quote-list" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
              GET TODAY'S QUOTATION
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-stone-800 border-t border-stone-700 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-x divide-stone-700">
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="text-orange-500" size={28} />
            <span className="text-sm font-semibold text-white">Certified Products</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Truck className="text-orange-500" size={28} />
            <span className="text-sm font-semibold text-white">Kuwait Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PackageOpen className="text-orange-500" size={28} />
            <span className="text-sm font-semibold text-white">Bulk Supply</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FileTextIcon className="text-orange-500" size={28} />
            <span className="text-sm font-semibold text-white">Procurement Support</span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-stone-900">Featured Products</h2>
              <p className="text-stone-600 mt-2">Premium safety equipment available for immediate quotation.</p>
            </div>
            <Link to="/products" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(product => (
              <Link to={`/product/${product.slug}`} key={product.id} className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-orange-500 hover:shadow-xl hover:-transtone-y-1 transition-all duration-300 flex flex-col">
                <div className="aspect-square bg-stone-100 relative p-6 flex items-center justify-center">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                  {product.availability === 'IN_STOCK' && (
                    <div className="absolute top-3 left-3 bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      In Stock
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">{product.brand}</div>
                  <h3 className="text-stone-900 font-semibold text-sm mb-2 line-clamp-2 flex-1">{product.websiteTitle}</h3>
                  <div className="text-xs text-stone-500 mb-4">{product.sku}</div>
                  
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                    <span className="font-bold text-sm text-stone-900">PRICE ON REQUEST</span>
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">Industries We Supply</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Construction', 'Oil & Gas', 'Facilities', 'Warehousing', 'Road Safety', 'Industrial'].map(ind => (
              <div key={ind} className="bg-stone-50 border border-stone-200 p-6 rounded-xl text-center hover:border-orange-500 transition-colors cursor-pointer group">
                <div className="w-12 h-12 mx-auto bg-stone-200 rounded-lg mb-4 group-hover:bg-orange-100 transition-colors"></div>
                <span className="font-semibold text-sm text-stone-700 group-hover:text-orange-600">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quotation CTA */}
      <section className="bg-orange-500 py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Need a formal quotation?</h2>
        <p className="text-orange-100 mb-8 max-w-xl mx-auto">Add products to your Quote List and get a complete, officially priced quotation generated instantly.</p>
        <Link to="/products" className="inline-block bg-stone-900 text-white font-bold px-8 py-4 rounded-lg hover:bg-stone-800 transition-colors shadow-xl">
          START BROWSING
        </Link>
      </section>

    </div>
  );
}

function FileTextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}
