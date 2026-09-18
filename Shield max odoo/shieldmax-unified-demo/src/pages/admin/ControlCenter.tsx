import { Link } from 'react-router-dom';
import { useDemoStore } from '../../store/useDemoStore';
import { 
  Globe, Inbox, Users, FileText, ShoppingCart, Package, 
  Boxes, CreditCard, Truck, FileOutput, DollarSign, 
  PieChart, Settings 
} from 'lucide-react';

export default function ControlCenter() {
  const rfqs = useDemoStore(state => state.rfqs);
  const quotations = useDemoStore(state => state.quotations);
  const deliveries = useDemoStore(state => state.deliveries);
  const invoices = useDemoStore(state => state.invoices);
  const products = useDemoStore(state => state.products);
  
  const newRfqs = rfqs.filter(r => r.status === 'New').length;
  const openQuotes = quotations.filter(q => q.status === 'DRAFT' || q.status === 'SENT').length;
  const pendingDeliveries = deliveries.filter(d => d.status !== 'Delivered').length;
  const lowStock = products.filter(p => p.stockQty < 50).length;
  const publishedProducts = products.filter(p => p.websitePublished).length;
  const unpaidInvoices = invoices.filter(i => i.status !== 'Paid').length;

  const apps = [
    { name: 'Website', icon: Globe, path: '/control/website', color: 'bg-indigo-500', status: 'Live', subtitle: `${publishedProducts} Published` },
    { name: 'RFQ Inbox', icon: Inbox, path: '/control/rfqs', color: 'bg-rose-500', status: newRfqs > 0 ? `${newRfqs} New` : '', highlight: newRfqs > 0 },
    { name: 'CRM', icon: Users, path: '/control/crm', color: 'bg-emerald-500', status: '' },
    { name: 'Quotations', icon: FileText, path: '/control/quotations', color: 'bg-orange-500', status: `${openQuotes} Open` },
    { name: 'Sales', icon: ShoppingCart, path: '/control/sales', color: 'bg-amber-500', status: '18 This Month' },
    { name: 'Products', icon: Package, path: '/control/website/products', color: 'bg-cyan-500', status: '' },
    { name: 'Inventory', icon: Boxes, path: '/control/inventory', color: 'bg-blue-600', status: `${lowStock} Low Stock` },
    { name: 'Purchases', icon: CreditCard, path: '/control/purchases', color: 'bg-teal-500', status: '' },
    { name: 'Delivery', icon: Truck, path: '/control/delivery', color: 'bg-purple-500', status: `${pendingDeliveries} Pending` },
    { name: 'Invoices', icon: FileOutput, path: '/control/invoices', color: 'bg-blue-400', status: `${unpaidInvoices} Unpaid` },
    { name: 'Payments', icon: DollarSign, path: '/control/payments', color: 'bg-emerald-600', status: '7 Outstanding' },
    { name: 'Finance', icon: PieChart, path: '/control/finance', color: 'bg-slate-700', status: '18,420.750 KWD' },
    { name: 'Reports', icon: PieChart, path: '/control/reports', color: 'bg-indigo-400', status: '' },
    { name: 'Settings', icon: Settings, path: '/control/settings', color: 'bg-slate-500', status: '' },
  ];

  return (
    <div className="min-h-full">
      {/* Welcome Hero */}
      <div className="bg-white border-b border-slate-200 py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Good afternoon, Admin.</h1>
            <p className="text-slate-600 text-lg">YOUR WEBSITE AND BUSINESS OPERATIONS. ONE PLATFORM.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center min-w-[120px]">
              <div className="text-2xl font-bold text-slate-900">{openQuotes}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Open Quotes</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center min-w-[120px]">
              <div className="text-2xl font-bold text-slate-900">{newRfqs}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase">New RFQs</div>
            </div>
          </div>
        </div>
      </div>

      {/* App Launcher */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {apps.map((app) => (
            <Link 
              key={app.name} 
              to={app.path}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-orange-500 transition-all flex flex-col items-center text-center relative"
            >
              {app.highlight && (
                <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                  {app.status}
                </div>
              )}
              
              <div className={`w-16 h-16 ${app.color} text-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                <app.icon size={32} />
              </div>
              
              <h3 className="font-bold text-slate-900 mb-1">{app.name}</h3>
              
              <div className="text-xs font-semibold text-slate-500 h-4">
                {!app.highlight && app.status}
                {app.subtitle && <span className="block mt-0.5 text-slate-400">{app.subtitle}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
