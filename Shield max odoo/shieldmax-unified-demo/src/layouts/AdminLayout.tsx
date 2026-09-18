import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useDemoStore } from '../store/useDemoStore';
import { Bell, Search, Menu, User, Globe } from 'lucide-react';

export default function AdminLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();
  const isLauncher = location.pathname === '/control';
  
  const notifications = useDemoStore(state => state.notifications);
  const unreadCount = notifications.filter(n => !n.read).length;
  const markRead = useDemoStore(state => state.markNotificationRead);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Top Header */}
      <header className="bg-slate-900 text-white h-14 flex items-center justify-between px-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-slate-800 rounded">
            <Menu size={20} />
          </button>
          <Link to="/control" className="flex items-center gap-2">
            <div className="w-6 h-8 bg-orange-500 rounded-b-sm flex items-center justify-center relative">
              <div className="absolute top-0 w-full h-[2px] bg-amber-400" />
              <span className="text-white font-bold text-xs">SM</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Shield Max</span>
          </Link>
          
          {!isLauncher && (
            <div className="hidden md:flex items-center gap-2 ml-4 px-3 py-1 bg-slate-800 rounded text-sm text-slate-300 font-medium">
              <span>{location.pathname.split('/')[2]?.toUpperCase() || 'CONTROL CENTER'}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Global Search Trigger */}
          <button 
            onClick={() => setSearchOpen(true)}
            className="hidden md:flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full text-sm text-slate-400 transition-colors w-64"
          >
            <Search size={16} />
            <span>Search apps, products, quotes...</span>
          </button>
          <button className="md:hidden p-2 hover:bg-slate-800 rounded-full" onClick={() => setSearchOpen(true)}>
            <Search size={18} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setNotifOpen(!notifOpen)}
              className="p-2 hover:bg-slate-800 rounded-full relative"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              )}
            </button>
            
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden z-50 text-slate-900">
                <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold flex justify-between items-center">
                  <span>Notifications</span>
                  {unreadCount > 0 && <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">{unreadCount} New</span>}
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-slate-500 text-sm">No notifications</div>
                  ) : (
                    notifications.map(n => (
                      <div 
                        key={n.id} 
                        className={`p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors ${!n.read ? 'bg-orange-50/30' : ''}`}
                        onClick={() => {
                          markRead(n.id);
                          setNotifOpen(false);
                        }}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-sm text-slate-900">{n.title}</span>
                          {!n.read && <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 shrink-0"></span>}
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2">{n.message}</p>
                        <span className="text-[10px] text-slate-400 mt-2 block">Just now</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="w-px h-6 bg-slate-700 mx-2"></div>
          
          <button className="p-2 hover:bg-slate-800 rounded-full text-slate-300">
            <Globe size={18} />
          </button>
          
          <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-800 p-1 pr-3 rounded-full ml-1">
            <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center overflow-hidden">
              <User size={16} className="text-slate-400" />
            </div>
            <span className="text-sm font-medium hidden sm:block">Admin</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Only show sidebar if NOT on launcher */}
        {!isLauncher && (
          <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col overflow-y-auto">
            {/* Sidebar content would be dynamically rendered based on the active module */}
            <div className="p-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">Menu</h2>
              {/* This is a simplified demo sidebar */}
              <nav className="space-y-1">
                <Link to="/control" className="block px-3 py-2 rounded text-sm text-slate-600 hover:bg-slate-50">App Launcher</Link>
                <div className="my-2 border-t border-slate-100"></div>
                <Link to="/control/website" className="block px-3 py-2 rounded text-sm text-slate-600 hover:bg-slate-50">Website Admin</Link>
                <Link to="/control/quotations" className="block px-3 py-2 rounded text-sm text-slate-600 hover:bg-slate-50">Quotations</Link>
                <Link to="/control/sales" className="block px-3 py-2 rounded text-sm text-slate-600 hover:bg-slate-50">Sales</Link>
                <Link to="/control/delivery" className="block px-3 py-2 rounded text-sm text-slate-600 hover:bg-slate-50">Delivery</Link>
                <Link to="/control/invoices" className="block px-3 py-2 rounded text-sm text-slate-600 hover:bg-slate-50">Invoices</Link>
              </nav>
            </div>
          </aside>
        )}
        
        <main className="flex-1 overflow-y-auto bg-slate-50 relative">
          <Outlet />
        </main>
      </div>

      {/* Global Search Overlay (Demo simple version) */}
      {searchOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center gap-3">
              <Search className="text-slate-400" size={20} />
              <input 
                type="text" 
                autoFocus 
                placeholder="Search anything (e.g. 95248, QT-2026)..."
                className="flex-1 text-lg outline-none"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200"
              >
                ESC
              </button>
            </div>
            <div className="p-4 text-center text-slate-500 py-12">
              <p>Type to search across Products, Customers, Quotations...</p>
              <p className="text-xs mt-2">(Global search UI mock)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
