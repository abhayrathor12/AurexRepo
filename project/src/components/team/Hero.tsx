import { useState, useEffect } from 'react';
import { Users, Heart, Lightbulb, Target, TrendingUp, Award } from 'lucide-react';

export function TeamHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMember((prev) => (prev + 1) % 8);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    { name: 'Strategy', icon: Lightbulb, color: '#a8042b' },
    { name: 'Design', icon: Heart, color: '#223258' },
    { name: 'Development', icon: Target, color: '#a8042b' },
    { name: 'Marketing', icon: TrendingUp, color: '#223258' },
    { name: 'Product', icon: Award, color: '#a8042b' },
    { name: 'Sales', icon: Users, color: '#223258' },
    { name: 'Support', icon: Heart, color: '#a8042b' },
    { name: 'Analytics', icon: Target, color: '#223258' },
  ];

  return (
    <section className="relative bg-white py-12 px-4 sm:py-16 md:py-8 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 sm:-translate-x-20 opacity-0'
            }`}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight"
              style={{ color: '#223258' }}
            >
              Visionaries
              <span className="block" style={{ color: '#a8042b' }}>
                Building Dreams
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: '#223258', opacity: 0.8 }}
            >
              A collective of seasoned experts, innovative thinkers, and passionate problem-solvers committed to
              transforming your vision into reality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {[
                { icon: Users, title: 'Founder-Focused Team', desc: 'Built for early & growth-stage ventures', color: '#223258' },
                { icon: Target, title: 'Execution-Driven', desc: 'Strategy + practical implementation', color: '#a8042b' },
                { icon: Lightbulb, title: 'Expert-Led Guidance', desc: 'Insights from real advisors', color: '#223258' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `rgba(${item.color === '#223258' ? '34, 50, 88' : '168, 4, 43'}, 0.1)` }}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-semibold" style={{ color: '#223258' }}>
                      {item.title}
                    </div>
                    <div className="text-xs sm:text-sm" style={{ color: '#223258', opacity: 0.65 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Animation (smaller on mobile) */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 sm:translate-x-20 opacity-0'
            }`}
          >
            <div className="relative w-full aspect-square max-w-[380px] sm:max-w-[460px] lg:max-w-[520px] mx-auto h-auto">
              {/* Central hub */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center z-20 shadow-xl"
                style={{ backgroundColor: '#a8042b' }}
              >
                <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>

              {/* Team members */}
              {teamMembers.map((member, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                // Responsive radius
                const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 110 : 
                              window.innerWidth < 1024 ? 140 : 160;
                
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
                        style={{
                          transform: isActive ? 'scale(1.25)' : 'scale(1)',
                        }}
                      >
                        {isActive && (
                          <div
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{ backgroundColor: member.color, opacity: 0.3 }}
                          />
                        )}

                        <div
                          className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-md transition-all duration-500 relative"
                          style={{
                            backgroundColor: isActive ? member.color : 'white',
                            borderWidth: '3px',
                            borderColor: member.color,
                          }}
                        >
                          <Icon
                            className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-500"
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

              {/* Background rings - lighter on mobile */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <circle
                  cx="50%"
                  cy="50%"
                  r={typeof window !== 'undefined' && window.innerWidth < 640 ? 110 : 160}
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
                  r={typeof window !== 'undefined' && window.innerWidth < 640 ? 70 : 100}
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
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
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