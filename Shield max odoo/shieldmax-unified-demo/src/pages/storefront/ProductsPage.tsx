import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDemoStore } from '../../store/useDemoStore';
import { Filter, ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  const allProducts = useDemoStore((state) => state.products);
  const products = useMemo(() => allProducts.filter(p => p.websitePublished), [allProducts]);
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))), [products]);
  const brands = useMemo(() => Array.from(new Set(products.map(p => p.brand))), [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedBrand && p.brand !== selectedBrand) return false;
      return true;
    });
  }, [products, selectedCategory, selectedBrand]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8 border-b border-stone-200 pb-8">
        <h1 className="text-3xl font-extrabold text-stone-900 mb-2">Industrial Equipment Catalogue</h1>
        <p className="text-stone-600 max-w-3xl">
          Browse our complete range of certified PPE and safety equipment. Add items to your Quote List to request today's commercial pricing.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Rail */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="flex items-center gap-2 font-bold text-stone-900 mb-4 pb-4 border-b border-stone-200">
            <Filter size={20} />
            Refine Selection
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Category</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="category" 
                    className="accent-orange-500 w-4 h-4"
                    checked={selectedCategory === null}
                    onChange={() => setSelectedCategory(null)}
                  />
                  <span className={selectedCategory === null ? 'font-semibold text-stone-900' : 'text-stone-600'}>All Categories</span>
                </label>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="category" 
                      className="accent-orange-500 w-4 h-4"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    <span className={selectedCategory === cat ? 'font-semibold text-stone-900' : 'text-stone-600'}>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Brand</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="brand" 
                    className="accent-orange-500 w-4 h-4"
                    checked={selectedBrand === null}
                    onChange={() => setSelectedBrand(null)}
                  />
                  <span className={selectedBrand === null ? 'font-semibold text-stone-900' : 'text-stone-600'}>All Brands</span>
                </label>
                {brands.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="brand" 
                      className="accent-orange-500 w-4 h-4"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                    />
                    <span className={selectedBrand === brand ? 'font-semibold text-stone-900' : 'text-stone-600'}>{brand}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* NO PRICE FILTER IN DEMO AS PER REQUIREMENTS */}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-4 text-sm text-stone-500 font-semibold flex justify-between items-center">
            <span>Showing {filteredProducts.length} products</span>
            <select className="bg-transparent border border-stone-300 rounded p-1 text-sm outline-none">
              <option>Featured First</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Link to={`/product/${product.slug}`} key={product.id} className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-orange-500 hover:shadow-xl hover:-transtone-y-1 transition-all duration-300 flex flex-col">
                <div className="aspect-square bg-stone-100 relative p-6 flex items-center justify-center">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                  {product.availability === 'IN_STOCK' && (
                    <div className="absolute top-3 left-3 bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      In Stock
                    </div>
                  )}
                  {product.availability === 'LIMITED' && (
                    <div className="absolute top-3 left-3 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      Limited Stock
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">{product.brand}</div>
                  <h3 className="text-stone-900 font-semibold text-sm mb-2 line-clamp-2 flex-1">{product.websiteTitle}</h3>
                  <div className="text-xs text-stone-500 mb-2">{product.sku}</div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.certifications.slice(0, 2).map(cert => (
                      <span key={cert} className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-stone-200">{cert}</span>
                    ))}
                    {product.certifications.length > 2 && (
                      <span className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-stone-200">+{product.certifications.length - 2}</span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                    <span className="font-bold text-sm text-stone-900">PRICE ON REQUEST</span>
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-12 text-center text-stone-500">
                No products found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
