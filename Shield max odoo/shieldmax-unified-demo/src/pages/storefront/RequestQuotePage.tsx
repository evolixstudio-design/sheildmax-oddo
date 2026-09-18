import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDemoStore } from '../../store/useDemoStore';
import { FileText, Loader2, Zap } from 'lucide-react';

export default function RequestQuotePage() {
  const quoteList = useDemoStore((state) => state.quoteList);
  const products = useDemoStore((state) => state.products);
  const generateQuotation = useDemoStore((state) => state.generateQuotation);
  const submitManualRFQ = useDemoStore((state) => state.submitManualRFQ);
  const navigate = useNavigate();

  const [loadingStep, setLoadingStep] = useState(0);
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    area: '',
    project: '',
    notes: ''
  });

  // Redirect if empty
  useEffect(() => {
    if (quoteList.length === 0 && loadingStep === 0) {
      navigate('/quote-list');
    }
  }, [quoteList, navigate, loadingStep]);

  const fillDemoDetails = () => {
    setFormData({
      company: 'Kuwait Integrated Contracting W.L.L.',
      contact: 'Ahmed Al-Mutairi',
      phone: '+965 5000 2187',
      email: 'procurement@example.test',
      area: 'Ahmadi',
      project: 'Workshop PPE Replenishment',
      notes: 'Require all items with latest certification dates.'
    });
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.contact) return;

    const hasManual = quoteList.some(q => {
      const p = products.find(prod => prod.id === q.productId);
      return p && p.quotationMode === "MANUAL";
    });

    setLoadingStep(1);

    setTimeout(() => {
      setLoadingStep(2);
      
      setTimeout(() => {
        setLoadingStep(3);
        
        setTimeout(() => {
          if (hasManual) {
            const rfq = submitManualRFQ(formData);
            if (rfq) navigate('/quote-success');
          } else {
            const quotation = generateQuotation(formData);
            if (quotation) navigate(`/quotation/${quotation.id}`);
          }
        }, 300);
      }, 400);
    }, 300);
  };

  if (loadingStep > 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-32 text-center">
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <Loader2 size={40} className="text-orange-500 animate-spin absolute" />
          <Zap size={20} className="text-orange-500 relative z-10" />
        </div>
        
        <div className="space-y-4">
          <p className={`font-semibold transition-opacity duration-300 ${loadingStep >= 1 ? 'text-slate-900 opacity-100' : 'opacity-0'}`}>
            Checking product availability...
          </p>
          <p className={`font-semibold transition-opacity duration-300 ${loadingStep >= 2 ? 'text-slate-900 opacity-100' : 'opacity-0'}`}>
            Applying today's commercial pricing...
          </p>
          <p className={`font-semibold text-orange-600 transition-opacity duration-300 ${loadingStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            Generating your official quotation...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8 flex justify-between items-end border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Request Formal Quotation</h1>
          <p className="text-slate-600">Please provide your details to receive an official Shield Max quotation.</p>
        </div>
        <button 
          type="button" 
          onClick={fillDemoDetails}
          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded"
        >
          USE DEMO DETAILS
        </button>
      </div>

      <form onSubmit={handleGenerate} className="bg-white border border-slate-200 rounded-2xl p-8">
        <h2 className="text-lg font-bold text-slate-900 mb-6">Company Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company Name <span className="text-red-500">*</span></label>
            <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Contact Person <span className="text-red-500">*</span></label>
            <input required type="text" value={formData.contact} onChange={e => setFormData({...formData, contact: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Mobile / WhatsApp <span className="text-red-500">*</span></label>
            <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address <span className="text-red-500">*</span></label>
            <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          </div>
        </div>

        <h2 className="text-lg font-bold text-slate-900 mb-6">Delivery & Requirements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Delivery Area</label>
            <input type="text" value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Project Name / Reference</label>
            <input type="text" value={formData.project} onChange={e => setFormData({...formData, project: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Additional Notes</label>
            <textarea value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} rows={3} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 resize-none"></textarea>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
          <p className="text-slate-600 mb-6 font-medium">By clicking generate, an official commercial quotation will be prepared for the {quoteList.reduce((acc, curr) => acc + curr.qty, 0)} units in your Quote List.</p>
          <button type="submit" className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-xl inline-flex items-center justify-center gap-2 transition-colors shadow-lg shadow-slate-900/20">
            <FileText size={20} /> GENERATE TODAY'S QUOTATION
          </button>
        </div>
      </form>
    </div>
  );
}
