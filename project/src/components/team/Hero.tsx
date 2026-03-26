import { useState, useEffect } from 'react';
import { Users, Heart, Lightbulb, Target, Zap, DollarSign, TrendingUp, Award } from 'lucide-react';

export function TeamHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMember((prev) => (prev + 1) % 8);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    { name: 'Due Diligence', icon: Lightbulb, color: '#a8042b' },
    { name: 'Execution', icon: Zap, color: '#223258' },
    { name: 'Strategy', icon: Target, color: '#a8042b' },
    { name: 'Valuation', icon: TrendingUp, color: '#223258' },
    { name: 'Capital Access', icon: Award, color: '#a8042b' },
    { name: 'Investor Alignment', icon: Users, color: '#223258' },
    { name: 'Fundrasing', icon: DollarSign, color: '#a8042b' },
    { name: 'Deal Structuring', icon: Target, color: '#223258' },
  ];

  const radius = isMobile ? 95 : 120;

  return (
    <section className="relative bg-white py-4 px-4 sm:py-6 md:py-4 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl -top-32 -left-32 animate-pulse"
          style={{ backgroundColor: 'rgba(34, 50, 88, 0.05)' }}
        />
        <div
          className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse"
          style={{ backgroundColor: 'rgba(168, 4, 43, 0.05)', animationDelay: '1.2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">

          {/* Left - Text content */}
          <div
            className={`w-full transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 sm:-translate-x-20 opacity-0'
              }`}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 lg:mb-4 leading-tight"
              style={{ color: '#223258' }}
            >
              Visionaries
              <span className="block" style={{ color: '#a8042b' }}>
                Building Dreams
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl mb-4 leading-relaxed"
              style={{ color: '#223258', opacity: 0.8 }}
            >
              A collective of seasoned experts, innovative thinkers, and passionate problem-solvers committed to
              transforming your vision into reality.
            </p>

            {/* Tag line - wraps gracefully on mobile, single line on desktop */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2">
              {[
                { icon: Users, title: 'Founder-Focused Team', color: '#223258' },
                { icon: Target, title: 'Execution-Driven', color: '#a8042b' },
                { icon: Lightbulb, title: 'Expert-Led Guidance', color: '#223258' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `rgba(${item.color === '#223258' ? '34, 50, 88' : '168, 4, 43'}, 0.1)` }}
                  >
                    <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold whitespace-nowrap" style={{ color: '#223258' }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Animation */}
          <div
            className={`w-full transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 sm:translate-x-20 opacity-0'
              }`}
          >
            <div
              className="relative mx-auto"
              style={
                isMobile
                  ? { width: '260px', height: '260px' }
                  : { width: '100%', aspectRatio: '1 / 1', maxWidth: '320px' }
              }
            >
              {/* Central hub */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center z-20 shadow-xl"
                style={{ backgroundColor: '#a8042b' }}
              >
                <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>

              {/* Team members */}
              {teamMembers.map((member, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isActive = i === activeMember;
                const Icon = member.icon;

                return (
                  <div key={i}>
                    {/* Connection line */}
                    <svg
                      className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
                      style={{
                        transform: 'translate(-50%, -50%)',
                        opacity: isActive ? 0.35 : 0.12,
                      }}
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke={member.color}
                        strokeWidth={isActive ? '2.5' : '1'}
                        strokeDasharray={isActive ? '0' : '5,5'}
                        className="transition-all duration-500"
                      />
                    </svg>

                    {/* Member node */}
                    <div
                      className="absolute top-1/2 left-1/2 transform transition-all duration-500"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        zIndex: isActive ? 15 : 10,
                      }}
                    >
                      <div
                        className="relative transition-all duration-500"
                        style={{ transform: isActive ? 'scale(1.25)' : 'scale(1)' }}
                      >
                        {isActive && (
                          <div
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{ backgroundColor: member.color, opacity: 0.3 }}
                          />
                        )}

                        <div
                          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-500 relative"
                          style={{
                            backgroundColor: isActive ? member.color : 'white',
                            borderWidth: '3px',
                            borderColor: member.color,
                          }}
                        >
                          <Icon
                            className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500"
                            style={{ color: isActive ? 'white' : member.color }}
                          />
                        </div>

                        <div
                          className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-semibold transition-opacity duration-500"
                          style={{
                            color: member.color,
                            opacity: isActive ? 1 : 0.65,
                          }}
                        >
                          {member.name}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Background rings */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  fill="none"
                  stroke="#223258"
                  strokeWidth="1"
                  strokeDasharray="8,8"
                  opacity="0.15"
                  className="animate-spin-slow"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r={isMobile ? 50 : 70}
                  fill="none"
                  stroke="#a8042b"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity="0.12"
                  className="animate-spin-reverse"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin 36s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 24s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-ping {
            animation-duration: 1.8s;
          }
        }
      `}</style>
    </section>
  );
}
