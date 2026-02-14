
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'contact' | 'apply') => void;
  currentView: 'home' | 'contact' | 'apply';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 py-4 md:py-5 grid grid-cols-3 items-center">
        
        {/* LEFT: HOVER MENU */}
        <div className="relative group flex items-center h-full">
          <button className="flex items-center space-x-2 md:space-x-3 cursor-pointer group-hover:text-uf-orange transition-colors py-2">
            <div className="flex flex-col space-y-1 md:space-y-1.5 w-5 md:w-6">
              <span className="block h-[2px] w-full bg-white group-hover:bg-uf-orange transition-all duration-300"></span>
              <span className="block h-[2px] w-full bg-white group-hover:bg-uf-orange transition-all duration-300"></span>
              <span className="block h-[2px] w-2/3 bg-white group-hover:bg-uf-orange transition-all duration-300"></span>
            </div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70 group-hover:text-white transition-colors hidden xs:block">Menu</span>
          </button>

          {/* DROPDOWN OVERLAY */}
          <div className="absolute top-[100%] left-0 pt-2 w-[calc(100vw-2rem)] sm:w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
            <div className="glass-dark border-t-2 border-uf-orange p-1 md:p-2 flex flex-col shadow-2xl menu-bridge">
              <button 
                onClick={() => onNavigate('home')}
                className={`text-left px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all flex justify-between items-center group/item ${currentView === 'home' ? 'text-uf-orange' : 'text-white/70'}`}
              >
                <span>Overview</span>
                <span className="font-mono opacity-30 group-hover/item:opacity-100">01</span>
              </button>
              <button 
                onClick={() => onNavigate('apply')}
                className={`text-left px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all flex justify-between items-center group/item ${currentView === 'apply' ? 'text-uf-orange' : 'text-white/70'}`}
              >
                <span>Apply</span>
                <span className="font-mono opacity-30 group-hover/item:opacity-100">02</span>
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className={`text-left px-4 md:px-6 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all flex justify-between items-center group/item ${currentView === 'contact' ? 'text-uf-orange' : 'text-white/70'}`}
              >
                <span>Contact</span>
                <span className="font-mono opacity-30 group-hover/item:opacity-100">03</span>
              </button>
            </div>
          </div>
        </div>

        {/* CENTER: LOGO */}
        <div className="flex justify-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 md:space-x-4 group cursor-pointer"
          >
            <div className="w-8 h-5 md:w-10 md:h-6 bg-uf-orange skew-x-[-15deg] flex items-center justify-center transition-all group-hover:brightness-110">
               <span className="text-white font-black text-[8px] md:text-[10px] skew-x-[15deg] tracking-tighter">SR-26</span>
            </div>
            <span className="font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm text-white group-hover:text-uf-orange transition-colors hidden xs:block">Swamp Racing</span>
          </button>
        </div>

        {/* RIGHT: DECORATIVE ELEMENT */}
        <div className="flex justify-end">
           <div className="h-[2px] w-8 md:w-16 bg-white/10"></div>
        </div>
        
      </div>
    </nav>
  );
};
