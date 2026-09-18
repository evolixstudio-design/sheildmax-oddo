import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StorefrontLayout from './layouts/StorefrontLayout';
import HomePage from './pages/storefront/HomePage';
import ProductsPage from './pages/storefront/ProductsPage';
import ProductDetailPage from './pages/storefront/ProductDetailPage';
import QuoteListPage from './pages/storefront/QuoteListPage';
import RequestQuotePage from './pages/storefront/RequestQuotePage';
import QuotationViewPage from './pages/storefront/QuotationViewPage';
import QuoteSuccessPage from './pages/storefront/QuoteSuccessPage';
import BrandsPage from './pages/storefront/BrandsPage';
import IndustriesPage from './pages/storefront/IndustriesPage';
import AboutPage from './pages/storefront/AboutPage';

import AdminLayout from './layouts/AdminLayout';
import ControlCenter from './pages/admin/ControlCenter';
import QuotationsAdmin from './pages/admin/quotations/QuotationsAdmin';
import SalesAdmin from './pages/admin/sales/SalesAdmin';
import DeliveryAdmin from './pages/admin/delivery/DeliveryAdmin';
import InvoicesAdmin from './pages/admin/invoices/InvoicesAdmin';
import WebsiteAdminDashboard from './pages/admin/website/WebsiteAdminDashboard';
import WebsiteProducts from './pages/admin/website/WebsiteProducts';
import WebsiteProductEdit from './pages/admin/website/WebsiteProductEdit';

import PresenterMenu from './components/PresenterMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Storefront Routes */}
        <Route element={<StorefrontLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/quote-list" element={<QuoteListPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/quotation/:id" element={<QuotationViewPage />} />
          <Route path="/quote-success" element={<QuoteSuccessPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/control" element={<AdminLayout />}>
          <Route index element={<ControlCenter />} />
          <Route path="quotations" element={<QuotationsAdmin />} />
          <Route path="sales" element={<SalesAdmin />} />
          <Route path="delivery" element={<DeliveryAdmin />} />
          <Route path="invoices" element={<InvoicesAdmin />} />
          
          <Route path="website" element={<WebsiteAdminDashboard />} />
          <Route path="website/products" element={<WebsiteProducts />} />
          <Route path="website/products/:id" element={<WebsiteProductEdit />} />
          
          {/* Fallback for other modules to keep demo from crashing */}
          <Route path="*" element={<div className="p-8"><h2 className="text-2xl font-bold text-slate-800">Module Under Construction</h2><p className="mt-2 text-slate-600">This module is not fully interactive in the demo.</p></div>} />
        </Route>
      </Routes>
      <PresenterMenu />
    </BrowserRouter>
  );
}

export default App;
