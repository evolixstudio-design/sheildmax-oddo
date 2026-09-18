import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDemoStore } from '../../../store/useDemoStore';
import { ArrowLeft, Save, Globe, Eye, Info, Package, DollarSign, Activity, EyeOff } from 'lucide-react';

export default function WebsiteProductEdit() {
  const { id } = useParams();
  const allProducts = useDemoStore(state => state.products);
  const updateProduct = useDemoStore(state => state.updateProduct);
  const product = useMemo(() => allProducts.find(p => p.id === id), [allProducts, id]);

  const [activeTab, setActiveTab] = useState('WEBSITE');
  const [formData, setFormData] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({ ...product });
    }
  }, [product]);

  if (!product || !formData) return <div className="p-20 text-center">Loading product...</div>;

  const handleSave = (preview = false) => {
    setSaving(true);
    setTimeout(() => {
      updateProduct(product.id, formData);
      setSaving(false);
      if (preview) {
        // Use window.open to simulate preview
        window.open(`/product/${formData.slug}`, '_blank');
      }
    }, 500);
  };

  const tabs = [
    { id: 'GENERAL', label: 'General Information', icon: Info },
    { id: 'INVENTORY', label: 'Inventory', icon: Package },
    { id: 'PURCHASE', label: 'Purchase', icon: DollarSign },
    { id: 'SALES', label: 'Sales', icon: DollarSign },
    { id: 'WEBSITE', label: 'Website Presentation', icon: Globe },
    { id: 'ACTIVITY', label: 'Activity Log', icon: Activity },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 p-4 px-8 sticky top-0 z-20">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/control/website/products" className="text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="text-sm font-semibold text-slate-500">Website Products / Edit</div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-extrabold text-slate-900">{product.name}</h1>
            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">{product.sku}</span>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => handleSave(false)}
              disabled={saving}
              className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              {saving ? 'SAVING...' : <><Save size={18} /> SAVE CHANGES</>}
            </button>
            <button 
              onClick={() => handleSave(true)}
              disabled={saving}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm shadow-orange-500/20 disabled:opacity-50"
            >
              {saving ? 'SAVING...' : <><Eye size={18} /> SAVE & PREVIEW</>}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Tabs */}
        <div className="w-64 bg-slate-50 border-r border-slate-200 overflow-y-auto">
          <div className="p-4 space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'text-slate-600 hover:bg-slate-200/50'
                }`}
              >
                <tab.icon size={18} className={activeTab === tab.id ? 'text-orange-500' : 'text-slate-400'} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
          <div className="max-w-4xl mx-auto">
            
            {activeTab === 'WEBSITE' && (
              <div className="space-y-8">
                {/* Visibility Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                    <Globe size={20} className="text-slate-400" /> Web Store Visibility
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative">
                          <input 
                            type="checkbox" 
                            className="sr-only" 
                            checked={formData.websitePublished}
                            onChange={(e) => setFormData({...formData, websitePublished: e.target.checked})}
                          />
                          <div className={`block w-12 h-6 rounded-full transition-colors ${formData.websitePublished ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                          <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${formData.websitePublished ? 'translate-x-6' : ''}`}></div>
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">Publish on Website</div>
                          <div className="text-xs text-slate-500">Allow customers to see this product.</div>
                        </div>
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative">
                          <input 
                            type="checkbox" 
                            className="sr-only" 
                            checked={formData.featured}
                            onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                          />
                          <div className={`block w-12 h-6 rounded-full transition-colors ${formData.featured ? 'bg-orange-500' : 'bg-slate-300'}`}></div>
                          <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${formData.featured ? 'translate-x-6' : ''}`}></div>
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">Featured Product</div>
                          <div className="text-xs text-slate-500">Display prominently on the homepage.</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Presentation Content</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Website Title</label>
                      <input 
                        type="text" 
                        value={formData.websiteTitle} 
                        onChange={(e) => setFormData({...formData, websiteTitle: e.target.value})}
                        className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" 
                      />
                      <p className="text-xs text-slate-500 mt-1">Overrides internal ERP product name ({formData.name}) for the web.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">URL Slug</label>
                        <input 
                          type="text" 
                          value={formData.slug} 
                          onChange={(e) => setFormData({...formData, slug: e.target.value})}
                          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 font-mono text-sm" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Website Category</label>
                        <select 
                          value={formData.category} 
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900"
                        >
                          <option value="Hand Protection">Hand Protection</option>
                          <option value="Respiratory Protection">Respiratory Protection</option>
                          <option value="Protective Clothing">Protective Clothing</option>
                          <option value="Foot Protection">Foot Protection</option>
                          <option value="Welding / Gas Equipment">Welding / Gas Equipment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Delivery Message</label>
                      <input 
                        type="text" 
                        value={formData.deliveryText} 
                        onChange={(e) => setFormData({...formData, deliveryText: e.target.value})}
                        className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" 
                      />
                      <p className="text-xs text-slate-500 mt-1">E.g., "Available for same-day Kuwait dispatch"</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Public Description</label>
                      <textarea 
                        value={formData.description} 
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        rows={4} 
                        className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Pricing Rules */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Quotation Rules</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">Public Pricing Display</label>
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                        <div className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                          <EyeOff size={16} className="text-slate-500" /> Hidden
                        </div>
                        <p className="text-sm text-slate-600">The public website will display <span className="font-semibold text-slate-900">PRICE ON REQUEST</span> globally based on settings.</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">Quotation Generation Mode</label>
                      <div className="space-y-3">
                        <label className={`block border rounded-lg p-3 cursor-pointer transition-colors ${formData.quotationMode === 'AUTO' ? 'border-orange-500 bg-orange-50/30' : 'border-slate-200 hover:bg-slate-50'}`}>
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="quotationMode" 
                              value="AUTO"
                              checked={formData.quotationMode === 'AUTO'}
                              onChange={() => setFormData({...formData, quotationMode: 'AUTO'})}
                              className="w-4 h-4 accent-orange-500"
                            />
                            <div>
                              <div className="font-bold text-slate-900 text-sm">Automatic (Instant Quote)</div>
                              <div className="text-xs text-slate-500">Website instantly generates quotation using internal ERP price.</div>
                            </div>
                          </div>
                        </label>
                        <label className={`block border rounded-lg p-3 cursor-pointer transition-colors ${formData.quotationMode === 'MANUAL' ? 'border-orange-500 bg-orange-50/30' : 'border-slate-200 hover:bg-slate-50'}`}>
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="quotationMode" 
                              value="MANUAL"
                              checked={formData.quotationMode === 'MANUAL'}
                              onChange={() => setFormData({...formData, quotationMode: 'MANUAL'})}
                              className="w-4 h-4 accent-orange-500"
                            />
                            <div>
                              <div className="font-bold text-slate-900 text-sm">Manual Review (RFQ)</div>
                              <div className="text-xs text-slate-500">Blocks auto-quoting. Sends to sales team for current market pricing.</div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {activeTab !== 'WEBSITE' && (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-sm">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Info size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tabs.find(t => t.id === activeTab)?.label} Data</h3>
                <p className="text-slate-500">This section contains standard Shield Max ERP fields. For this demo, please use the Website tab to test storefront changes.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
