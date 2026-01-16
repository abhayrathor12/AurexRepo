import { useState, useEffect } from 'react';
import { TrendingUp, Building2, Shield, FileText, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export function HomeHero({ onRegisterClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    window.location.hash = 'contact';
  };

  const features = [
    { icon: TrendingUp, label: 'Growth', color: 'from-[#a8042b] to-[#8a0323]' },
    { icon: Building2, label: 'Capital', color: 'from-[#223258] to-[#1a2743]' },
    { icon: Shield, label: 'Compliance', color: 'from-[#a8042b] to-[#8a0323]' },
    { icon: FileText, label: 'Advisory', color: 'from-[#223258] to-[#1a2743]' }
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-64 h-64 bg-[#a8042b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 -right-1/4 w-64 h-64 bg-[#223258] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-64 h-64 bg-[#a8042b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#22325808_1px,transparent_1px),linear-gradient(to_bottom,#22325808_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* <div className="inline-flex items-center gap-2 bg-[#a8042b]/5 border border-[#a8042b]/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="text-[#a8042b] w-4 h-4" />
              <span className="text-sm font-medium text-[#223258]">Trusted by 500+ Startups</span>
            </div> */}

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[#223258]">
                Curated Capital
              </span>
              <br />
              <span className="text-[#223258]">for Serious</span>
              <br />
              <span className="text-[#a8042b]">
                Founders
              </span>
            </h1>

            <p className="text-lg text-[#223258]/80 mb-8 leading-relaxed">
              Aurex Ventures is a startup-focused advisory and facilitation platform enabling structured fundraising,
              curated investor access, and compliance-backed growth support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onRegisterClick}
                className="group relative bg-[#a8042b] text-white px-7 py-3.5 rounded-lg font-semibold text-base overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#a8042b]/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Register as a Startup
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#8a0323] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={scrollToContact}
                className="group relative bg-white text-[#223258] border-2 border-[#223258] px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-[#223258] hover:text-white transition-all hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Join as an Investor
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#223258]/10">
              <div>
                <div className="text-2xl font-bold text-[#a8042b] mb-1">₹250Cr+</div>
                <div className="text-sm text-[#223258]/60">Capital Raised</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#a8042b] mb-1">500+</div>
                <div className="text-sm text-[#223258]/60">Startups</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#a8042b] mb-1">150+</div>
                <div className="text-sm text-[#223258]/60">Investors</div>
              </div>
            </div>
          </div>

          {/* Right content - animated cards */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#a8042b] to-[#223258] rounded-3xl blur-3xl opacity-20"></div>
              
              {/* Main card container */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#223258]/10 shadow-xl">
                <div className="grid grid-cols-2 gap-5">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    const isActive = activeCard === index;
                    return (
                      <div
                        key={index}
                        className={`relative group cursor-pointer transition-all duration-500 ${
                          isActive ? 'scale-105 z-10' : 'scale-100'
                        }`}
                        onMouseEnter={() => setActiveCard(index)}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${
                          isActive ? 'opacity-25' : ''
                        }`}></div>
                        
                        <div className={`relative bg-white p-6 rounded-xl border transition-all duration-500 ${
                          isActive 
                            ? 'border-[#a8042b]/30 shadow-lg' 
                            : 'border-[#223258]/10 hover:border-[#223258]/20'
                        }`}>
                          <div className={`bg-gradient-to-br ${feature.color} p-2.5 rounded-lg inline-block mb-3 transform transition-transform duration-500 ${
                            isActive ? 'scale-110 rotate-2' : 'group-hover:scale-105'
                          }`}>
                            <Icon className="text-white" size={24} />
                          </div>
                          <p className="text-base font-bold text-[#223258]">{feature.label}</p>
                          <div className={`h-0.5 bg-gradient-to-r ${feature.color} rounded-full mt-2 transition-all duration-500 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#a8042b] rounded-full opacity-20 blur-2xl animate-bounce-slow"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-[#223258] rounded-full opacity-20 blur-2xl animate-bounce-slow animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}