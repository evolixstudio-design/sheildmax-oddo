import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useDemoStore } from '../store/useDemoStore';
import { Search, Globe, FileText, Menu } from 'lucide-react';

export default function StorefrontLayout() {
  const quoteList = useDemoStore((state) => state.quoteList);
  const quoteCount = quoteList.reduce((sum, item) => sum + item.qty, 0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      {/* Utility Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <span>Certified PPE Supplier in Kuwait</span>
          <span className="hidden sm:inline">Kuwait Delivery</span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-white">Contact</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white">
            <Globe size={12} /> EN | عربي
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/shieldmax_logo.png" alt="Shield Max Safety Kuwait" className="h-14 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <Link to="/products" className="hover:text-orange-500 transition-colors">Products</Link>
            <Link to="/brands" className="hover:text-orange-500 transition-colors">Brands</Link>
            <Link to="/industries" className="hover:text-orange-500 transition-colors">Industries</Link>
            <Link to="/about" className="hover:text-orange-500 transition-colors">About</Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input 
              type="text" 
              placeholder="Search products, brands, standards..." 
              className="w-full bg-stone-100 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-stone-400" size={18} />
          </div>

          {/* Quote List Action */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/quote-list')}
              className="relative flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              <FileText size={18} />
              <span className="text-sm font-semibold hidden sm:inline">Quote List</span>
              {quoteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {quoteCount}
                </span>
              )}
            </button>
            <button className="lg:hidden text-stone-900 p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src="/images/shieldmax_logo.png" alt="Shield Max Safety Kuwait" className="h-16 object-contain" />
            </div>
            <p className="text-sm leading-relaxed">
              Certified PPE, industrial safety equipment and project supply for contractors, facilities, oil & gas and procurement teams across Kuwait.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-orange-400">Hand Protection</Link></li>
              <li><Link to="/products" className="hover:text-orange-400">Respiratory Protection</Link></li>
              <li><Link to="/products" className="hover:text-orange-400">Protective Clothing</Link></li>
              <li><Link to="/products" className="hover:text-orange-400">Foot Protection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-orange-400">About Shield Max</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>
              <li><Link to="/industries" className="hover:text-orange-400">Project Supply</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Shuwaikh Industrial Area, Kuwait</li>
              <li>+965 5000 0000</li>
              <li>sales@shieldmax.demo</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-stone-800">
              <Link to="/control" className="text-stone-500 hover:text-white text-xs">Staff Login (Demo)</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
