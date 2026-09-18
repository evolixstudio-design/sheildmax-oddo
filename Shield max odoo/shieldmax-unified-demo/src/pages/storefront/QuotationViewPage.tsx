import { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDemoStore } from '../../store/useDemoStore';
import { Printer, Download, CheckCircle, ArrowLeft } from 'lucide-react';

export default function QuotationViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const quotations = useDemoStore((state) => state.quotations);
  const products = useDemoStore((state) => state.products);
  const acceptQuotation = useDemoStore((state) => state.acceptQuotation);

  const quotation = useMemo(() => quotations.find(q => q.id === id), [quotations, id]);

  const [accepted, setAccepted] = useState(() => {
    return quotation?.status === 'ACCEPTED';
  });

  if (!quotation) {
    return <div className="p-20 text-center">Quotation not found.</div>;
  }

  const handleAccept = () => {
    acceptQuotation(quotation.id);
    setAccepted(true);
  };

  const getProduct = (pid: string) => products.find(p => p.id === pid);

  if (accepted) {
    // Look up the created records
    const sales = useDemoStore.getState().sales;
    const deliveries = useDemoStore.getState().deliveries;
    const invoices = useDemoStore.getState().invoices;

    const sale = sales.find(s => s.quotationId === quotation.id);
    const delivery = sale ? deliveries.find(d => d.saleId === sale.id) : null;
    const invoice = sale ? invoices.find(i => i.saleId === sale.id) : null;

    return (
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="bg-white border border-green-200 rounded-2xl p-8 md:p-12 text-center shadow-lg shadow-green-500/10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Quotation Accepted</h1>
          <p className="text-slate-600 mb-10 max-w-md mx-auto">Your acceptance has been processed and integrated into our operations system.</p>
          
          <div className="bg-slate-50 rounded-xl p-6 mb-10 text-left border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Business Workflow Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle size={16} className="text-green-500" /> Quotation</span>
                <span className="text-sm font-mono bg-slate-200 px-2 py-1 rounded text-slate-700">{quotation.quotationNo}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle size={16} className="text-green-500" /> Sales Order Created</span>
                <span className="text-sm font-mono bg-slate-200 px-2 py-1 rounded text-slate-700">{sale?.saleNo || 'SO-2026-XXXX'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle size={16} className="text-green-500" /> Delivery Order Generated</span>
                <span className="text-sm font-mono bg-slate-200 px-2 py-1 rounded text-slate-700">{delivery?.deliveryNo || 'DO-2026-XXXX'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle size={16} className="text-green-500" /> Draft Invoice Created</span>
                <span className="text-sm font-mono bg-slate-200 px-2 py-1 rounded text-slate-700">{invoice?.invoiceNo || 'INV-2026-XXXX'}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/control')} className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              OPEN CONTROL CENTER
            </button>
            <button onClick={() => navigate('/')} className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-lg transition-colors">
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden print:shadow-none print:border-none">
        {/* Quotation Header */}
        <div className="p-8 md:p-12 border-b border-slate-200">
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-12 bg-orange-500 rounded-b-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SM</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-2xl tracking-tight text-slate-900 leading-none">SHIELD MAX</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-1">Safety Kuwait</span>
                </div>
              </div>
              <div className="text-sm text-slate-500 mt-4">
                <p>Shuwaikh Industrial Area, Block 1</p>
                <p>Kuwait</p>
                <p>+965 5000 0000</p>
              </div>
            </div>
            
            <div className="text-right">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Quotation</h1>
              <div className="text-lg font-mono text-orange-600 font-bold mb-4">{quotation.quotationNo}</div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-600">
                <div className="font-semibold">Date:</div>
                <div>{quotation.date}</div>
                <div className="font-semibold">Valid Until:</div>
                <div>{quotation.validUntil}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Quotation For</h3>
              <div className="text-sm font-semibold text-slate-900">{quotation.customerInfo.company}</div>
              <div className="text-sm text-slate-600 mt-1">{quotation.customerInfo.contact}</div>
              <div className="text-sm text-slate-600">{quotation.customerInfo.phone}</div>
              <div className="text-sm text-slate-600">{quotation.customerInfo.email}</div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Project Details</h3>
              <div className="text-sm text-slate-600"><span className="font-semibold">Delivery:</span> {quotation.customerInfo.area || 'TBD'}</div>
              <div className="text-sm text-slate-600"><span className="font-semibold">Project:</span> {quotation.customerInfo.project || 'N/A'}</div>
              <div className="text-sm text-slate-600"><span className="font-semibold">Generated via:</span> Website Auto</div>
            </div>
          </div>
        </div>

        {/* Lines */}
        <div className="p-8 md:p-12 bg-slate-50/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Item / Description</th>
                  <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Qty</th>
                  <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Unit Price (KWD)</th>
                  <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Amount (KWD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {quotation.lines.map((line, idx) => {
                  const product = getProduct(line.productId);
                  if (!product) return null;
                  const lineTotal = line.qty * line.quotedUnitPrice;
                  
                  return (
                    <tr key={idx}>
                      <td className="py-4">
                        <div className="font-semibold text-slate-900">{product.name}</div>
                        <div className="text-xs text-slate-500 mt-1">SKU: {product.sku} | Brand: {product.brand}</div>
                      </td>
                      <td className="py-4 text-right font-medium text-slate-700">{line.qty} {line.unit}</td>
                      <td className="py-4 text-right font-medium text-slate-700">{line.quotedUnitPrice.toFixed(3)}</td>
                      <td className="py-4 text-right font-bold text-slate-900">{lineTotal.toFixed(3)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="w-full md:w-80">
              <div className="flex justify-between py-2 text-sm text-slate-600">
                <span>Subtotal</span>
                <span>{quotation.subtotal.toFixed(3)}</span>
              </div>
              <div className="flex justify-between py-2 text-sm text-slate-600 border-b border-slate-200">
                <span>Discount</span>
                <span>0.000</span>
              </div>
              <div className="flex justify-between py-4 text-xl font-bold text-slate-900">
                <span>TOTAL KWD</span>
                <span>{quotation.subtotal.toFixed(3)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">
        <div className="flex gap-4">
          <button onClick={() => window.print()} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold px-4 py-2 border border-slate-300 rounded-lg bg-white">
            <Printer size={18} /> Print
          </button>
          <button onClick={() => window.print()} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold px-4 py-2 border border-slate-300 rounded-lg bg-white">
            <Download size={18} /> Save PDF
          </button>
        </div>
        
        <button 
          onClick={handleAccept}
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-600/20"
        >
          <CheckCircle size={20} /> ACCEPT QUOTATION
        </button>
      </div>
    </div>
  );
}
