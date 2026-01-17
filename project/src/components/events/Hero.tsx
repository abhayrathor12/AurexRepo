import { useState, useEffect } from 'react';

export  function EventsHero() {
  const [time, setTime] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particle positions
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
      size: 2 + Math.random() * 3,
    }));
    setParticles(newParticles);

    // Animate time for continuous effects
    const timeInterval = setInterval(() => {
      setTime(t => (t + 1) % 360);
    }, 50);

    // Cycle through events
    const eventInterval = setInterval(() => {
      setActiveEvent(prev => (prev + 1) % 4);
    }, 3500);

    return () => {
      clearInterval(timeInterval);
      clearInterval(eventInterval);
    };
  }, []);

  const events = [
    { 
      icon: '📊', 
      title: 'Pitch Sessions', 
      desc: 'Present to investors',
      color: 'from-[#223258] via-[#2c406e] to-[#223258]',
      glow: '#223258'
    },
    { 
      icon: '🤝', 
      title: 'Network Mixers', 
      desc: 'Connect with peers',
      color: 'from-[#a8042b] via-[#c00530] to-[#a8042b]',
      glow: '#a8042b'
    },
    { 
      icon: '💡', 
      title: 'Innovation Labs', 
      desc: 'Hands-on workshops',
      color: 'from-[#223258] via-[#4a66aa] to-[#223258]',
      glow: '#4a66aa'
    },
    { 
      icon: '🎯', 
      title: 'Expert Talks', 
      desc: 'Industry insights',
      color: 'from-[#a8042b] via-[#8a0325] to-[#a8042b]',
      glow: '#8a0325'
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen flex items-center px-4 py-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${events[activeEvent].glow}33 0%, transparent 70%)`,
            transform: `scale(${1 + Math.sin(time * 0.05) * 0.1})`,
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${events[(activeEvent + 2) % 4].glow}33 0%, transparent 70%)`,
            transform: `scale(${1 + Math.cos(time * 0.05) * 0.1})`,
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#223258]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: 0.15,
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #223258 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-[#223258]">Events That</span>
                <br />
                <span className="bg-[#a8042b] bg-clip-text text-transparent">
                  Transform Ideas
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#223258]/70 leading-relaxed max-w-xl">
                Connect with investors, learn from industry experts, and grow your network at our exclusive events designed for innovators and entrepreneurs
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-6 max-w-xl">
              <div className="p-4 rounded-xl bg-white/70 border border-[#223258]/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold text-[#a8042b] mb-1">Curated Events</h4>
                <p className="text-sm text-[#223258]/70">
                  Carefully designed sessions focused on real startup challenges
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#223258]/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold text-[#a8042b] mb-1">Expert-Led</h4>
                <p className="text-sm text-[#223258]/70">
                  Learn directly from industry professionals and advisors
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#223258]/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold text-[#a8042b] mb-1">Founder-Focused</h4>
                <p className="text-sm text-[#223258]/70">
                  Practical insights, networking, and growth-oriented discussions
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Event Calendar Animation */}
          <div className="relative h-[420px] lg:h-[520px]">
            {/* Main Event Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Stage */}
              <div className="relative w-72 h-96">
                {/* Rotating Event Cards */}
                {events.map((event, index) => {
                  const isActive = index === activeEvent;
                  const isPrev = index === (activeEvent - 1 + 4) % 4;
                  const isNext = index === (activeEvent + 1) % 4;
                  
                  let transform = 'translateX(0) translateY(0) scale(0.7) rotateY(0deg)';
                  let opacity = 0;
                  let zIndex = 0;
                  
                  if (isActive) {
                    transform = 'translateX(0) translateY(0) scale(1) rotateY(0deg)';
                    opacity = 1;
                    zIndex = 3;
                  } else if (isPrev) {
                    transform = 'translateX(-60px) translateY(20px) scale(0.8) rotateY(25deg)';
                    opacity = 0.4;
                    zIndex = 2;
                  } else if (isNext) {
                    transform = 'translateX(60px) translateY(20px) scale(0.8) rotateY(-25deg)';
                    opacity = 0.4;
                    zIndex = 1;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-700 ease-out"
                      style={{
                        transform,
                        opacity,
                        zIndex,
                      }}
                    >
                      <div 
                        className={`w-full h-full rounded-2xl bg-gradient-to-br ${event.color} p-8 shadow-2xl backdrop-blur-sm flex flex-col items-center justify-center text-white relative overflow-hidden`}
                        style={{
                          boxShadow: isActive ? `0 20px 60px ${event.glow}40` : 'none',
                        }}
                      >
                        {/* Card Shine Effect */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{
                            transform: `translateX(${time % 100}%)`,
                          }}
                        />
                        
                        {/* Event Icon */}
                        <div 
                          className="text-7xl mb-4 transition-transform duration-500"
                          style={{
                            transform: isActive ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                          }}
                        >
                          {event.icon}
                        </div>
                        
                        {/* Event Title */}
                        <h3 className="text-2xl font-bold text-center mb-2">{event.title}</h3>
                        <p className="text-sm opacity-90 text-center">{event.desc}</p>
                        
                        {/* Date Badge */}
                        {/* {isActive && (
                          <div className="mt-6 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm text-xs font-semibold">
                            Next Event
                          </div>
                        )} */}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Orbiting Attendance Indicators */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 + time * 2) * (Math.PI / 180);
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={i}
                    className="absolute rounded-full transition-all duration-300"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      width: i % 3 === 0 ? '12px' : '8px',
                      height: i % 3 === 0 ? '12px' : '8px',
                      backgroundColor: i % 2 === 0 ? '#223258' : '#a8042b',
                      opacity: i % 3 === 0 ? 0.6 : 0.3,
                      boxShadow: i % 3 === 0 ? '0 0 20px currentColor' : 'none',
                    }}
                  />
                );
              })}

              {/* Connection Network */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
                <defs>
                  <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#223258" />
                    <stop offset="50%" stopColor="#a8042b" />
                    <stop offset="100%" stopColor="#223258" />
                  </linearGradient>
                </defs>
                {[...Array(8)].map((_, i) => {
                  const x1 = 50 + Math.cos((i * 45 + time) * Math.PI / 180) * 30;
                  const y1 = 50 + Math.sin((i * 45 + time) * Math.PI / 180) * 30;
                  const x2 = 50 + Math.cos((i * 45 + 180 + time) * Math.PI / 180) * 30;
                  const y2 = 50 + Math.sin((i * 45 + 180 + time) * Math.PI / 180) * 30;
                  
                  return (
                    <line
                      key={i}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#networkGradient)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      style={{
                        animation: `dashMove 2s linear infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Event Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveEvent(index)}
                  className="transition-all duration-300"
                  style={{
                    width: index === activeEvent ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: index === activeEvent ? '#a8042b' : '#223258',
                    opacity: index === activeEvent ? 1 : 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) translateX(10px) rotate(5deg); 
          }
          66% { 
            transform: translateY(-10px) translateX(-10px) rotate(-5deg); 
          }
        }
        @keyframes dashMove {
          to {
            stroke-dashoffset: 8;
          }
        }
      `}</style>
    </section>
  );
}