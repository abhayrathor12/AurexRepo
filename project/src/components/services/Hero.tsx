export function ServicesHero() {
    return (
      <section className="bg-white py-16 px-4 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content - more compact */}
            <div className="space-y-5">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-semibold text-[#a8042b] tracking-wider uppercase">
                  What We Offer
                </span>
              </div>
  
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#223258] leading-tight">
                Comprehensive Business Solutions
              </h1>
  
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                End-to-end services to help you start, fund, grow, and protect your business with confidence.
              </p>
  
              <div className="flex flex-wrap gap-5 pt-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#a8042b] rounded-full"></div>
                  <span className="text-[#223258] font-medium text-sm sm:text-base">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#a8042b] rounded-full"></div>
                  <span className="text-[#223258] font-medium text-sm sm:text-base">Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#a8042b] rounded-full"></div>
                  <span className="text-[#223258] font-medium text-sm sm:text-base">24/7 Support</span>
                </div>
              </div>
  
              <div className="pt-5">
                <button className="bg-[#a8042b] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#8a0323] transition-colors shadow-md text-sm sm:text-base">
                  Explore Services
                </button>
              </div>
            </div>
  
            {/* Right Animation - smaller & tighter */}
            <div className="relative h-[380px] md:h-[420px] lg:h-[460px] flex items-center justify-center">
              {/* Animated circles - smaller */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-72 h-72 sm:w-80 h-80 border-2 border-[#223258] opacity-20 rounded-full animate-ping" style={{ animationDuration: '3.2s' }}></div>
                <div className="absolute w-60 h-60 sm:w-64 h-64 border-2 border-[#a8042b] opacity-30 rounded-full animate-ping" style={{ animationDuration: '2.6s', animationDelay: '0.6s' }}></div>
                <div className="absolute w-48 h-48 border-2 border-[#223258] opacity-40 rounded-full animate-ping" style={{ animationDuration: '2.1s', animationDelay: '1.1s' }}></div>
              </div>
  
              {/* Floating service cards - smaller & better positioned */}
              <div className="relative w-full h-full">
                {[
                  { title: 'Start', icon: '🚀', delay: '0s', x: '10%', y: '15%' },
                  { title: 'Fund', icon: '💰', delay: '0.4s', x: '75%', y: '22%' },
                  { title: 'Grow', icon: '📈', delay: '0.9s', x: '12%', y: '65%' },
                  { title: 'Protect', icon: '🛡️', delay: '1.4s', x: '70%', y: '72%' }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="absolute bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 border border-slate-100"
                    style={{
                      left: service.x,
                      top: service.y,
                      animation: `float 3.5s ease-in-out infinite`,
                      animationDelay: service.delay
                    }}
                  >
                    <div className="text-3xl sm:text-4xl mb-1">{service.icon}</div>
                    <div className="text-[#223258] font-bold text-base sm:text-lg">{service.title}</div>
                  </div>
                ))}
              </div>
  
              {/* Center glow - smaller */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-28 h-28 sm:w-32 h-32 bg-gradient-to-br from-[#a8042b] to-[#223258] opacity-10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) scale(1);
            }
            50% {
              transform: translateY(-16px) scale(1.03);
            }
          }
        `}</style>
      </section>
    );
  }