import { useState, useEffect } from 'react';
import aurexLogo from '../../public/aurexshort.png';
export function HomeAbout() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Growth', 'Funding', 'Capital', 'Compliance'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 md:py-10 px-5 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: '#223258' }}
          >
            Aurex Ventures
          </h2>
          <p
            className="mt-3 text-lg md:text-xl font-medium tracking-wide"
            style={{ color: '#a8042b' }}
          >
            Capital • Compliance • Growth
          </p>
          <div className="w-16 h-1 bg-[#a8042b] mx-auto mt-5 rounded-full opacity-90" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* LEFT - Smaller animated box */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-xl relative bg-gradient-to-br from-[#223258] to-[#1a2544] flex items-center justify-center p-8">
              {/* Central hub */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-2xl shadow-black/20 z-10 overflow-hidden border border-gray-200/70">
  <img
    src={aurexLogo}
    alt="Aurex Ventures Logo"
    className="w-full h-full object-contain p-2.5"  // ← padding prevents edge touching
  />
</div>

              {/* Orbiting elements */}
              {words.map((word, index) => {
                const angle = (index * 360) / words.length;
                const isActive = currentWord === index;
                const radius = 85; // Distance from center
                
                return (
                  <div
                    key={word}
                    className="absolute transition-all duration-700 ease-in-out"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `
                        translate(-50%, -50%) 
                        rotate(${angle + (currentWord * 90)}deg) 
                        translateY(-${radius}px) 
                        rotate(-${angle + (currentWord * 90)}deg)
                        scale(${isActive ? 1.1 : 0.85})
                      `,
                      opacity: isActive ? 1 : 0.4,
                    }}
                  >
                    <div className={`
                      px-4 py-2 md:px-6 md:py-3 rounded-full 
                      ${isActive 
                        ? 'bg-white text-[#223258] shadow-2xl' 
                        : 'bg-white/10 text-white/70 backdrop-blur-sm'
                      }
                      transition-all duration-700
                    `}>
                      <span className="text-sm md:text-base font-bold whitespace-nowrap">
                        {word}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Animated connecting lines */}
              {words.map((_, index) => {
                const angle = (index * 360) / words.length + (currentWord * 90);
                const isActive = currentWord === index;
                
                return (
                  <div
                    key={`line-${index}`}
                    className="absolute left-1/2 top-1/2 origin-left transition-all duration-700"
                    style={{
                      width: '85px',
                      height: '2px',
                      transform: `rotate(${angle}deg)`,
                      background: isActive 
                        ? 'linear-gradient(90deg, rgba(168,4,43,0.8) 0%, rgba(255,255,255,0.3) 100%)'
                        : 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                    }}
                  />
                );
              })}

              {/* Pulsing rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-white/20 animate-pulse"
                  style={{ animationDuration: '3s' }}
                />
                <div 
                  className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-white/10 animate-pulse"
                  style={{ animationDuration: '4s', animationDelay: '1s' }}
                />
              </div>

              {/* Decorative particles */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
              <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-[#a8042b]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-20 left-8 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          
        {/* RIGHT - Text content */}
        <div className="order-1 md:order-2 space-y-5 md:space-y-6">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            <span className="font-semibold text-[#223258]">Aurex Ventures</span> is a specialized{' '}
            <span className="font-semibold">Investment Banking advisory firm</span> supporting
            early-stage and growth-stage startups with{' '}
            <span className="font-semibold">capital raising and transaction execution</span>.
          </p>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            We advise founders across the complete fundraising lifecycle — investor readiness,
            financial and valuation positioning, structured investor outreach, and deal coordination —
            engaging with angels, venture capital funds, institutional lenders, and government
            grant authorities until transaction closure.
          </p>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            Beyond capital advisory, we facilitate company incorporation, statutory registrations,
            intellectual property protection, and ROC compliance through our{' '}
            <span className="font-semibold text-[#223258]">empaneled licensed professionals (CA, CS, PCS)</span>.
          </p>

          {/* Positioning line */}
          <div className="pt-3">
            <p className="font-semibold text-[#223258] text-base md:text-lg">
              A single-point Investment Banking partner — so founders can focus on building and scaling.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-50/70 rounded-lg border border-gray-100">
            <p className="text-sm text-slate-500 italic">
              <span className="font-semibold text-[#a8042b]">Important:</span> Aurex Ventures provides
              professional advisory and facilitation services only. We do not guarantee fundraising
              outcomes or regulatory approvals.
            </p>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}