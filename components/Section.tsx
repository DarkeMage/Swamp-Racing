
import React, { useState, useEffect, useRef } from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ id, number, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`mb-24 md:mb-48 scroll-mt-24 md:scroll-mt-32 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col mb-8 md:mb-16">
        <div className="flex items-center space-x-3 md:space-x-6">
          {number && (
            <span className={`text-uf-orange font-black text-lg md:text-2xl italic transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              {number}.
            </span>
          )}
          <h2 className={`text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            {title}
          </h2>
          <div className="hidden xs:block w-8 md:w-12 h-[3px] md:h-1 bg-uf-orange skew-x-[-20deg]"></div>
        </div>
      </div>
      <div className={`relative transition-all duration-700 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        {children}
      </div>
    </section>
  );
};
