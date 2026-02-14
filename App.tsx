
import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { GridItem } from './components/GridItem';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'contact' | 'apply'>('home');
  const [formState, setFormState] = useState({
    major: '',
    email: '',
    role: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Form Configuration
  const FORM_ID = "1FAIpQLSdiN4DGsgE1vjSCailp1hRkOMvKGc9oWDLXjRA38dT2uZpemA";
  const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPct = (window.scrollY / (scrollHeight || 1)) * 100;
      document.documentElement.style.setProperty('--scroll-pct', scrollPct.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmitted(false);
    setIsSubmitting(false);
  }, [view]);

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new URLSearchParams();
    formData.append('entry.603068824', formState.major);
    formData.append('entry.1991890309', formState.email);
    formData.append('entry.2046051529', formState.role);

    try {
      // Use no-cors because Google Forms does not support CORS requests.
      await fetch(FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      // Since it's no-cors, we assume success if the fetch doesn't throw.
      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderHome = () => (
    <>
      {/* HERO SECTION */}
      <header className="mb-32 md:mb-64 relative pt-12 md:pt-24 animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 md:border-b-4 border-uf-orange/20 pb-8 md:pb-16">
            <div className="w-full">
              <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-uf-orange mb-4 md:mb-6 skew-x-[-15deg]">
                 <p className="text-[8px] md:text-[10px] font-black uppercase text-white skew-x-[15deg] tracking-[0.2em] md:tracking-[0.4em]">Motorsports Team</p>
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[13rem] font-black leading-[0.9] md:leading-[0.8] text-white tracking-tighter italic">
                <span className="inline-block animate-in fade-in slide-in-from-left-6 duration-500 delay-75">SWAMP</span><br />
                <span className="text-uf-orange inline-block animate-in fade-in slide-in-from-left-6 duration-500 delay-150">RACING</span>
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 mt-8 md:mt-12 gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-300">
            <p className="md:col-span-10 lg:col-span-8 text-xl sm:text-2xl md:text-4xl font-light leading-[1.2] md:leading-[1.1] text-white/80 tracking-tight">
              An elite student-led motorsports team dedicated to the design, 
              manufacture, and deployment of competitive racing vehicles.
            </p>
          </div>
        </div>
      </header>

      {/* 01: IDENTITY */}
      <Section id="identity" number="01" title="Who We Are">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-5">
            <div className="tech-border glass bg-uf-blue/40 p-6 md:p-12 aspect-square md:aspect-[4/3] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl md:text-8xl italic">SR</div>
              <div className="relative z-10">
                <span className="text-4xl md:text-6xl font-black text-uf-orange italic group-hover:scale-110 transition-transform duration-500 block mb-4 md:mb-8">SR.</span>
                <p className="text-lg md:text-xl font-medium uppercase leading-tight text-white/90">
                  Based in Gainesville, Florida, our team operates at the intersection 
                  of academic theory and automotive reality.
                </p>
              </div>
              <div className="h-1 w-full bg-white/5 relative mt-8">
                <div className="absolute top-0 left-0 h-full bg-uf-orange w-1/3 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-white uppercase italic">Operational Excellence</h3>
            <p className="text-base md:text-xl leading-relaxed text-white/60 mb-8 md:mb-12 font-light">
              Swamp Racing is a premier student organization. 
              Our mission is to provide a platform where future engineers can apply their 
              classroom knowledge to complex, real-world mechanical problems. We bridge the 
              gap between textbook physics and track-tested performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              <div className="glass p-6 md:p-8 border-l-4 border-uf-orange relative group cursor-help transition-all hover:bg-white/5">
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-uf-orange mb-1 md:mb-2">Discipline</p>
                <p className="text-lg md:text-xl font-black uppercase">Interdisciplinary</p>
                
                <div className="absolute bottom-full left-0 mb-4 w-full sm:w-80 p-6 glass-dark rounded-none opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all z-30 shadow-2xl border-t-4 border-uf-orange">
                  <p className="text-[10px] leading-relaxed text-white/70 font-medium uppercase tracking-wider">
                    We merge <span className="text-uf-orange font-bold">Mechanical Engineering</span> and <span className="text-white font-bold">Aerodynamics</span> with <span className="text-white font-bold">Supply Chain Logistics</span> to win under a strict $2,000 cap.
                  </p>
                </div>
              </div>
              <div className="glass p-6 md:p-8 border-l-4 border-white/20">
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 md:mb-2">Location</p>
                <p className="text-lg md:text-xl font-black uppercase">Gainesville, FL</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 02: THE CHALLENGE */}
      <Section id="challenge" number="02" title="The $2,000 Constraint">
        <div className="max-w-4xl relative">
          <div className="absolute -left-6 md:-left-12 top-0 bottom-0 w-1 bg-uf-orange/20"></div>
          <p className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] md:leading-[0.9] mb-8 md:mb-12 text-white uppercase italic tracking-tighter">
            Precision performance, <br/><span className="text-uf-orange">strict financial discipline.</span>
          </p>
          <p className="text-lg md:text-2xl mb-8 md:text-16 text-white/70 leading-relaxed font-light">
            The Grassroots Motorsports $2000 Challenge is a nationally recognized 
            competition that tests the ingenuity of engineers. The core rule is simple yet 
            brutal: the total cost of the vehicle cannot exceed exactly $2,000.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="glass p-6 md:p-10 tech-border">
              <h4 className="font-black uppercase text-[10px] md:text-xs mb-3 md:mb-4 text-uf-orange tracking-[0.2em] md:tracking-[0.3em]">Budgeting Logic</h4>
              <p className="text-sm md:text-base text-white/60 leading-relaxed italic">
                Calculated based on net cost. Safety equipment is exempt to ensure driver well-being.
              </p>
            </div>
            <div className="glass p-6 md:p-10 tech-border">
              <h4 className="font-black uppercase text-[10px] md:text-xs mb-3 md:mb-4 text-uf-orange tracking-[0.2em] md:tracking-[0.3em]">Verification</h4>
              <p className="text-sm md:text-base text-white/60 leading-relaxed italic">
                Every receipt is audited. Judges look for creative sourcing and 
                documented fabrication hours.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 03: EVALUATION */}
      <Section id="evaluation" number="03" title="Evaluation Criteria">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { n: '01', t: 'Autocross', d: 'Mechanical grip and handling precision. Agility tested on a complex course.' },
            { n: '02', t: 'Drag Race', d: 'Power delivery and acceleration. Efficiency under high-stress conditions.' },
            { n: '03', t: 'Concours', d: 'Design and craftsmanship. Evaluating fabrication and creative engineering.' },
          ].map((item, i) => (
            <div key={item.n} className="glass p-8 md:p-12 hover:bg-white/5 transition-all group animate-in fade-in slide-in-from-bottom-6 duration-500 relative overflow-hidden" style={{ animationDelay: `${i * 75}ms` }}>
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-uf-orange/5 skew-x-[-45deg] translate-x-8 -translate-y-8 md:translate-x-12 md:-translate-y-12"></div>
              <span className="text-5xl md:text-7xl font-black mb-6 md:mb-10 block text-white/5 group-hover:text-uf-orange/20 transition-colors italic">{item.n}</span>
              <h4 className="text-xl md:text-3xl font-black uppercase mb-3 md:mb-4 text-white italic">{item.t}</h4>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 04: OUTCOMES */}
      <Section id="outcomes" number="04" title="Student Development">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <GridItem label="Engineering" content="FEA Analysis" delay={0} />
          <GridItem label="Technical" content="Fabrication" delay={75} />
          <GridItem label="Logistics" content="Budget Mgmt" delay={150} />
          <GridItem label="Strategic" content="Project Lead" delay={225} />
          <GridItem label="Operations" content="Data Acquisition" delay={300} />
          <GridItem label="Social" content="Leadership" delay={375} />
          <GridItem label="Industrial" content="Documentation" delay={450} />
          <GridItem label="Dynamic" content="Problem Solving" delay={525} />
        </div>
      </Section>
    </>
  );

  const renderApply = () => (
    <div className="animate-in fade-in zoom-in-95 duration-500 pt-6 md:pt-12">
      <Section id="apply-page" title="Team Application">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="glass p-12 md:p-24 text-center tech-border animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-uf-orange rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-white text-4xl">✓</span>
              </div>
              <h3 className="text-4xl font-black uppercase italic text-white mb-4 tracking-tighter">Transmission Complete</h3>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Your dossier has been logged. Our leadership team will review your qualifications <br/>
                and contact you via your UF credentials.
              </p>
              <button 
                onClick={() => setView('home')}
                className="mt-12 text-uf-orange font-black uppercase tracking-widest text-xs hover:tracking-[0.4em] transition-all"
              >
                Return to Command Center
              </button>
            </div>
          ) : (
            <div className="glass p-8 md:p-16 tech-border">
              <div className="mb-12">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-uf-orange mb-4 italic">Personnel Onboarding</p>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white italic">Candidate Dossier</h3>
              </div>
              
              <form 
                onSubmit={handleApplySubmit} 
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 group-focus-within:text-uf-orange transition-colors">UF Academic Major</label>
                    <input 
                      required
                      type="text" 
                      disabled={isSubmitting}
                      value={formState.major}
                      onChange={(e) => setFormState({...formState, major: e.target.value})}
                      placeholder="e.g. Mechanical Engineering"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-uf-orange transition-all placeholder:text-white/10 font-medium italic disabled:opacity-50"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 group-focus-within:text-uf-orange transition-colors">UF Email Address</label>
                    <input 
                      required
                      type="email" 
                      disabled={isSubmitting}
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="username@ufl.edu"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-uf-orange transition-all placeholder:text-white/10 font-medium italic disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 group-focus-within:text-uf-orange transition-colors">Desired Operational Role</label>
                  <input 
                    required
                    type="text"
                    disabled={isSubmitting}
                    value={formState.role}
                    onChange={(e) => setFormState({...formState, role: e.target.value})}
                    placeholder="e.g. Aerodynamics Specialist, Lead Fabricator"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-uf-orange transition-all placeholder:text-white/10 font-medium italic disabled:opacity-50"
                  />
                </div>

                <div className="pt-8 text-center md:text-left">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-uf-orange text-white px-12 py-5 text-sm font-black uppercase tracking-[0.3em] hover:brightness-110 transition-all skew-x-[-15deg] group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="inline-block skew-x-[15deg] group-hover:translate-x-2 transition-transform">
                      {isSubmitting ? 'Transmitting...' : 'Submit Application >>'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </Section>
    </div>
  );

  const renderContact = () => (
    <div className="animate-in fade-in zoom-in-95 duration-500 pt-6 md:pt-12">
      <Section id="contact-page" title="Leadership & Contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="p-8 md:p-12 glass relative overflow-hidden group tech-border">
            <div className="absolute inset-0 bg-uf-blue/10 pointer-events-none"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-uf-orange mb-8 md:mb-12 relative z-10 italic">Executive Office</p>
            <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white relative z-10 italic">Sarvar Yusupov</h4>
            <p className="text-lg md:text-xl font-light uppercase tracking-[0.3em] text-white/60 relative z-10">President</p>
            <div className="mt-12 md:mt-24 pt-8 border-t border-white/5 relative z-10">
              <p className="text-[10px] font-bold uppercase mb-2 text-uf-orange tracking-widest">Communications</p>
              <p className="text-[10px] md:text-xs font-medium text-white/40 uppercase tracking-widest">Strategic Organizational Partnerships</p>
            </div>
          </div>
          <div className="p-8 md:p-12 glass group tech-border">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-uf-orange mb-8 md:mb-12 italic">Operations Office</p>
            <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white italic">Akshat Rao</h4>
            <p className="text-lg md:text-xl font-light uppercase tracking-[0.3em] text-white/60">Vice President</p>
            <div className="mt-12 md:mt-24 pt-8 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase mb-2 text-uf-orange tracking-widest">Technical Oversight</p>
              <p className="text-[10px] md:text-xs font-medium text-white/40 uppercase tracking-widest">Engineering Workflows</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center glass p-8 md:p-16 tech-border">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8 text-white italic">Collaborate With Us</h3>
          <p className="text-base md:text-xl mb-8 md:mb-12 leading-relaxed text-white/50 font-light italic">
            Interested in joining the team or becoming a technical sponsor? 
            Reach out for the 2026 competition season.
          </p>
          <div className="inline-block glass-dark px-6 md:px-12 py-6 md:py-8 border border-uf-orange/20 hover:border-uf-orange transition-all cursor-pointer w-full sm:w-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-uf-orange mb-4">Direct Link</p>
            <p className="text-sm sm:text-lg md:text-2xl font-black text-white tracking-tight break-all">contact@swampracing.engineering</p>
          </div>
        </div>
      </Section>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main className="pt-32 md:pt-48 pb-32 md:pb-64 px-4 sm:px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto overflow-hidden">
        {view === 'home' ? renderHome() : view === 'contact' ? renderContact() : renderApply()}

        {/* CTA */}
        <footer className="mt-32 md:mt-64 relative">
          <div className="glass p-8 md:p-24 overflow-hidden relative tech-border">
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-uf-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 md:mb-10 uppercase tracking-tighter italic leading-none">
                  JOIN THE <br/><span className="text-uf-orange">GRID.</span>
                </h2>
                <div className="flex space-x-4 items-center">
                  <div className="h-[2px] w-8 md:w-12 bg-uf-orange"></div>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-[0.3em] md:tracking-[0.5em]">Innovation | Speed</p>
                </div>
              </div>
              <div className="flex flex-col space-y-8 md:space-y-12 items-start justify-center">
                <button 
                  onClick={() => setView('apply')}
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-white hover:text-uf-orange transition-all uppercase italic flex items-center group"
                >
                  <span className="mr-4 md:mr-6">Apply for 2026 Season</span>
                  <span className="text-uf-orange opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">>></span>
                </button>
              </div>
            </div>
            
            <div className="mt-20 md:mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center font-mono text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-white/20 text-center space-y-4 md:space-y-0">
              <span>// SWAMP RACING PADDOCK v2.6</span>
              <span className="opacity-50">Swamp Racing © 2026</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
