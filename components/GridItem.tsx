
import React from 'react';
import { GridItemProps } from '../types';

interface AnimatedGridItemProps extends GridItemProps {
  delay?: number;
}

export const GridItem: React.FC<AnimatedGridItemProps> = ({ label, content, delay = 0 }) => {
  return (
    <div 
      style={{ transitionDelay: `${delay}ms` }}
      className="tech-border glass p-6 md:p-8 flex flex-col justify-between min-h-[160px] md:h-56 hover:bg-white/5 transition-all hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-6 duration-500 fill-mode-both"
    >
      <div>
        <div className="flex justify-between items-start mb-4 md:mb-6">
          <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-uf-orange transition-all group-hover:tracking-[0.4em]">{label}</span>
          <div className="w-1.5 h-1.5 bg-uf-orange/30 group-hover:bg-uf-orange rounded-full transition-colors"></div>
        </div>
        <p className="text-lg md:text-xl font-black leading-tight uppercase text-white group-hover:text-uf-orange transition-colors">{content}</p>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <div className="w-full h-[1px] bg-white/10 group-hover:bg-uf-orange/20 transition-colors"></div>
        <span className="font-mono text-[7px] md:text-[8px] text-white/20 uppercase tracking-widest whitespace-nowrap">SR_OS v2.6</span>
      </div>
    </div>
  );
};
