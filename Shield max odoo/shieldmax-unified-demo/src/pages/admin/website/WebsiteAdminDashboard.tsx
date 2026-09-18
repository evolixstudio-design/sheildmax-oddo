import { Link } from 'react-router-dom';
import { useDemoStore } from '../../../store/useDemoStore';
import { ExternalLink, LayoutTemplate, Package, Inbox, Activity, Eye, MousePointerClick } from 'lucide-react';

export default function WebsiteAdminDashboard() {
  const products = useDemoStore(state => state.products);
  const rfqs = useDemoStore(state => state.rfqs);
  
  const publishedCount = products.filter(p => p.websitePublished).length;
  const hiddenCount = products.length - publishedCount;
  const newRfqs = rfqs.filter(r => r.status === 'New').length;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Website Dashboard</h1>
          <p className="text-slate-600 mt-1">Manage your storefront, products, and incoming requests.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            LIVE
          </div>
          <Link to="/" target="_blank" className="flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-4 py-2 rounded-lg transition-colors">
            <ExternalLink size={18} /> OPEN LIVE STORE
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
              <Package size={20} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mb-1">{publishedCount}</div>
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Published Products</div>
          <div className="text-xs text-slate-400 mt-2">{hiddenCount} products hidden</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center">
              <Inbox size={20} />
            </div>
            {newRfqs > 0 && <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{newRfqs} New</span>}
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mb-1">{rfqs.length}</div>
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total RFQs</div>
          <div className="text-xs text-slate-400 mt-2">Received from website</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
              <Eye size={20} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mb-1">12,450</div>
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Store Views</div>
          <div className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">↑ 14% vs last week</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
              <MousePointerClick size={20} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mb-1">18.5%</div>
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Quote Conv. Rate</div>
          <div className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">↑ 2.1% vs last week</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex justify-between items-center">
            <h2 className="font-bold text-slate-900 flex items-center gap-2"><LayoutTemplate size={18} /> Website Studio</h2>
          </div>
          <div className="p-8 text-center bg-slate-50 flex flex-col items-center justify-center h-[300px]">
            <LayoutTemplate size={48} className="text-slate-300 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Visual Page Editor</h3>
            <p className="text-slate-600 max-w-sm mb-6">Manage your homepage sections, banners, and layout directly from the Control Center.</p>
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg">
              EDIT HOMEPAGE (DEMO)
            </button>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-200">
            <h2 className="font-bold text-slate-900 flex items-center gap-2"><Activity size={18} /> Recent Activity</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border-b border-slate-100 last:border-0">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Inbox size={14} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">New Website RFQ</div>
                  <div className="text-xs text-slate-600">Al Sabah Contracting W.L.L. submitted a request for 120 items.</div>
                  <div className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-wider">{i * 2} hours ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
