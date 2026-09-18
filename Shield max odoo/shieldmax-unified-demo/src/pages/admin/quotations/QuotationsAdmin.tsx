import { useDemoStore } from '../../../store/useDemoStore';
import { Search, Filter, Plus, ChevronRight } from 'lucide-react';

export default function QuotationsAdmin() {
  const quotations = useDemoStore(state => state.quotations);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'DRAFT': return 'bg-slate-100 text-slate-700';
      case 'SENT': return 'bg-amber-100 text-amber-800';
      case 'ACCEPTED': return 'bg-green-100 text-green-800';
      case 'REJECTED': return 'bg-rose-100 text-rose-800';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getSourceBadge = (source: string) => {
    switch(source) {
      case 'Website Auto': return <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{source}</span>;
      case 'RFQ': return <span className="bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{source}</span>;
      default: return <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{source}</span>;
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Quotations</h1>
          <p className="text-slate-600 mt-1">Manage official commercial quotations sent to customers.</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={18} /> NEW QUOTATION
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[calc(100vh-200px)]">
        <div className="p-4 border-b border-slate-200 flex items-center gap-4 bg-slate-50">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by quotation number, customer..." 
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
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Number</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Source</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Total (KWD)</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                <th className="py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {quotations.map(q => (
                <tr key={q.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-900 font-mono">{q.quotationNo}</div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">{q.date}</td>
                  <td className="py-4 px-6">
                    <div className="font-semibold text-slate-900">{q.customerInfo.company}</div>
                    <div className="text-xs text-slate-500">{q.customerInfo.contact}</div>
                  </td>
                  <td className="py-4 px-6">
                    {getSourceBadge(q.source)}
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-slate-900">
                    {q.subtotal.toFixed(3)}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold tracking-wider ${getStatusColor(q.status)}`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-slate-400 hover:text-slate-900 p-1">
                      <ChevronRight size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {quotations.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">No quotations found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
