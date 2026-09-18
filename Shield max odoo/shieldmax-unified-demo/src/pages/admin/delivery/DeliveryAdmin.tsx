import { useDemoStore } from '../../../store/useDemoStore';
import { Truck, Search, Filter, ChevronRight, ShoppingCart } from 'lucide-react';

export default function DeliveryAdmin() {
  const deliveries = useDemoStore(state => state.deliveries);
  const sales = useDemoStore(state => state.sales);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Preparing': return 'bg-amber-100 text-amber-800';
      case 'Ready': return 'bg-blue-100 text-blue-800';
      case 'Out for Delivery': return 'bg-indigo-100 text-indigo-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Delivery Orders</h1>
          <p className="text-slate-600 mt-1">Manage dispatch and fulfillment.</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[calc(100vh-200px)]">
        <div className="p-4 border-b border-slate-200 flex items-center gap-4 bg-slate-50">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search delivery orders..." 
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
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">DO Number</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Area</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Source Sale</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {deliveries.map(delivery => {
                const sale = sales.find(s => s.id === delivery.saleId);
                
                return (
                  <tr key={delivery.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900 font-mono flex items-center gap-2">
                        <Truck size={16} className="text-slate-400" /> {delivery.deliveryNo}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600">{delivery.date}</td>
                    <td className="py-4 px-6">
                      <div className="font-semibold text-slate-900">{delivery.customerName}</div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600">
                      {delivery.area || 'TBD'}
                    </td>
                    <td className="py-4 px-6">
                      {sale && (
                        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                          <ShoppingCart size={14} /> {sale.saleNo}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex px-2.5 py-1 rounded text-xs font-bold tracking-wider ${getStatusColor(delivery.status)}`}>
                        {delivery.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-slate-400 hover:text-slate-900 p-1">
                        <ChevronRight size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {deliveries.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">No delivery orders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
