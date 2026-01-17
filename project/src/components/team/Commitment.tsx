import { useState, useEffect } from 'react';
import { Handshake, Shield, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export function TeamCommitmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [handshakeActive, setHandshakeActive] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setHandshakeActive(true);
      setTimeout(() => setHandshakeActive(false), 1400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const commitments = [
    { icon: Shield, text: 'Legal Expertise', color: '#223258' },
    { icon: Sparkles, text: 'Financial Acumen', color: '#a8042b' },
    { icon: CheckCircle, text: 'Startup Experience', color: '#223258' },
  ];

  // Simple responsive radius helper
  const getRadius = (base: number) => {
    if (typeof window === 'undefined') return base;
    if (window.innerWidth < 640) return Math.floor(base * 0.75);
    if (window.innerWidth < 1024) return Math.floor(base * 0.9);
    return base;
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-[#223258]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 sm:w-80 md:w-96 h-80 md:h-96 rounded-full blur-3xl -top-20 sm:-top-10 right-0 opacity-10"
          style={{ backgroundColor: '#a8042b' }}
        />
        <div
          className="absolute w-64 h-64 sm:w-80 md:w-96 h-80 md:h-96 rounded-full blur-3xl -bottom-20 sm:-bottom-10 left-0 opacity-10"
          style={{ backgroundColor: '#ffffff' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* === ANIMATION SIDE === */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } lg:translate-x-0 lg:translate-y-0`}
          >
            <div className="relative h-[340px] sm:h-[380px] lg:h-[420px] flex items-center justify-center">
              {/* Partnership rings */}
              <svg className="absolute inset-0 w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r={getRadius(110)}
                  fill="none"
                  stroke="rgba(168, 4, 43, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="10,10"
                  className={`transition-all duration-1000 ${handshakeActive ? 'opacity-60' : 'opacity-20'}`}
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r={getRadius(145)}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                  strokeDasharray="6,6"
                />
              </svg>

              {/* Central handshake + glow */}
              <div className="relative z-10">
                <div
                  className="absolute inset-0 rounded-full transition-all duration-700"
                  style={{
                    backgroundColor: '#a8042b',
                    filter: 'blur(28px)',
                    opacity: handshakeActive ? 0.45 : 0.18,
                    transform: handshakeActive ? 'scale(1.65)' : 'scale(1.1)',
                  }}
                />

                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-700 shadow-2xl"
                  style={{
                    backgroundColor: '#a8042b',
                    transform: handshakeActive ? 'scale(1.12) rotate(6deg)' : 'scale(1) rotate(0deg)',
                  }}
                >
                  <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>

                {/* Trust particles */}
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const radius = handshakeActive ? getRadius(95) : getRadius(70);
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-700"
                      style={{
                        backgroundColor: i % 2 === 0 ? '#ffffff' : '#a8042b',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        opacity: handshakeActive ? 0.8 : 0.35,
                        boxShadow: handshakeActive ? '0 0 12px rgba(168,4,43,0.5)' : 'none',
                      }}
                    />
                  );
                })}
              </div>

              {/* === Commitment badges - original style restored === */}
              {commitments.map((item, i) => {
                const angle = (i * 120 - 90) * (Math.PI / 180);
                const radius = getRadius(125);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 transition-all duration-600 z-20"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${
                        handshakeActive ? 'scale(1.12)' : 'scale(1)'
                      }`,
                      transitionDelay: `${i * 120}ms`,
                    }}
                  >
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500"
                      style={{
                        backgroundColor: 'white',
                        borderWidth: '3px',
                        borderStyle: 'solid',
                        borderColor: item.color,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500"
                        style={{ color: item.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === TEXT SIDE === */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } lg:translate-x-0 lg:translate-y-0`}
          >
            <div className="inline-block mb-5">
              <span
                className="text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full"
                style={{ backgroundColor: '#a8042b', color: 'white' }}
              >
                Our Promise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Our Commitment
              <span className="block text-lg sm:text-xl font-normal mt-2 opacity-80">
                to Your Success
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white opacity-90 leading-relaxed mb-8 max-w-xl">
              We combine legal expertise, financial acumen, and real startup experience to support founders at every stage. 
              With empaneled professionals, we handle compliance so you can focus on building your vision.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-5 sm:gap-8">
              <div className="flex flex-wrap gap-5 sm:gap-6">
                {commitments.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 transition-all duration-300 hover:translate-x-1"
                    >
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: '#a8042b' }} />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 px-7 py-3 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl bg-[#a8042b] text-white hover:bg-[#8a0323] sm:ml-4"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}