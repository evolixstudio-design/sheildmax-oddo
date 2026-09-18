import { Link } from 'react-router-dom';
import { useDemoStore } from '../../store/useDemoStore';
import { CheckCircle2, Clock } from 'lucide-react';

export default function QuoteSuccessPage() {
  const rfqs = useDemoStore((state) => state.rfqs);
  const latestRfq = rfqs[0];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center shadow-sm">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
          <CheckCircle2 size={40} />
        </div>
        
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Quotation Request Received</h1>
        
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 inline-block mb-8">
          <p className="text-slate-600 font-medium flex items-center gap-2 justify-center">
            <Clock size={18} className="text-orange-500" />
            One or more selected products require current market pricing.
          </p>
          <p className="text-slate-600 mt-2">Our sales team will review your request and send an official quotation shortly.</p>
        </div>

        <div className="mb-10">
          <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">Reference Number</p>
          <p className="text-2xl font-mono text-slate-900 font-bold">{latestRfq?.rfqNo || 'RFQ-2026-XXXX'}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-lg transition-colors">
            CONTINUE SHOPPING
          </Link>
          <Link to="/control" className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-8 py-3 rounded-lg transition-colors border border-slate-300">
            OPEN CONTROL CENTER
          </Link>
        </div>
      </div>
    </div>
  );
}
