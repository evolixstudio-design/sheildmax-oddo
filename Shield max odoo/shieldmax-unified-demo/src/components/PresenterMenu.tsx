import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDemoStore } from '../store/useDemoStore';
import { Settings, RefreshCw, ShoppingCart, LayoutDashboard, FileText, Edit } from 'lucide-react';

export default function PresenterMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const resetDemo = useDemoStore((state) => state.resetDemo);
  const quotations = useDemoStore((state) => state.quotations);

  const handleReset = () => {
    resetDemo();
  };

  const menuClasses = `fixed bottom-4 right-4 z-[9999] bg-slate-900 text-white rounded-lg shadow-2xl transition-all duration-300 ${
    open ? 'w-64 opacity-100 p-2' : 'w-12 h-12 rounded-full overflow-hidden opacity-50 hover:opacity-100 flex items-center justify-center cursor-pointer'
  }`;

  return (
    <div className={menuClasses} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {!open && <Settings size={20} />}
      
      {open && (
        <div className="flex flex-col gap-1 p-2">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 px-2">
            Demo Presenter Menu
          </div>
          <button onClick={() => navigate('/')} className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-800 rounded text-sm text-left">
            <ShoppingCart size={16} /> Storefront
          </button>
          <button onClick={() => navigate('/quote-list')} className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-800 rounded text-sm text-left">
            <FileText size={16} /> Quote List
          </button>
          <button onClick={() => navigate('/control')} className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-800 rounded text-sm text-left">
            <LayoutDashboard size={16} /> Control Center
          </button>
          <button 
            onClick={() => {
              if (quotations.length > 0) navigate(`/quotation/${quotations[0].id}`);
            }} 
            className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-800 rounded text-sm text-left"
          >
            <FileText size={16} /> Latest Quotation
          </button>
          <button onClick={() => navigate('/control/website/products/p3')} className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-800 rounded text-sm text-left">
            <Edit size={16} /> Edit Safety Jogger (Demo)
          </button>
          <div className="h-px bg-slate-700 my-1 mx-2" />
          <button onClick={handleReset} className="flex items-center gap-2 px-2 py-1.5 hover:bg-red-900/50 text-red-400 rounded text-sm text-left">
            <RefreshCw size={16} /> Reset Demo Data
          </button>
        </div>
      )}
    </div>
  );
}
