import { ArrowRight, CheckCircle2, FileText, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#223258] mb-2">{title}</h2>
      <p className="text-slate-600">{subtitle}</p>
    </div>
  );
}

export  function HomeProcess() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Register & Submit',
      desc: 'Share basic details about your startup and funding requirements',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Internal Screening',
      desc: 'Our team evaluates readiness and verifies your documents',
      icon: CheckCircle2,
    },
    {
      step: '03',
      title: 'Investor Access',
      desc: 'Connect with curated investors & attend exclusive pitch events',
      icon: Users,
    },
    {
      step: '04',
      title: 'Ongoing Support',
      desc: 'Deal structuring, compliance help & post-funding guidance',
      icon: TrendingUp,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/40 via-white to-slate-50/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedHeading
          title="How It Works"
          subtitle="From registration to growth — clear, fast and reliable"
        />
        
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative mt-12">
          {/* Background line */}
          <div className="hidden md:block absolute top-[6.5rem] left-0 right-0 h-1 bg-slate-200 -z-10" style={{ width: 'calc(100% - 6rem)', left: '3rem' }} />

          {/* Animated progress line that moves */}
          <div 
            className="hidden md:block absolute top-[6.5rem] left-0 h-1 bg-gradient-to-r from-[#223258] via-[#a8042b] to-[#223258] -z-10 transition-all duration-1000 ease-in-out"
            style={{ 
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              left: '3rem',
              maxWidth: 'calc(100% - 6rem)'
            }}
          />

          {/* Animated ball that travels along the path */}
          <div 
            className="hidden md:block absolute top-[6.5rem] w-5 h-5 bg-[#a8042b] rounded-full shadow-lg z-20 transition-all duration-1000 ease-in-out"
            style={{ 
              left: `calc(3rem + ${(currentStep / (steps.length - 1)) * (100 - 6)}%)`,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 20px rgba(168, 4, 43, 0.6)'
            }}
          >
            <div className="absolute inset-0 bg-[#a8042b] rounded-full animate-ping opacity-75" />
          </div>

          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = idx === currentStep;
            const isPassed = idx < currentStep;
            
            return (
              <div 
                key={item.step} 
                className="relative group"
                onClick={() => setCurrentStep(idx)}
              >
                <div 
                  className={`bg-white rounded-2xl p-7 shadow-lg transition-all duration-500 border h-full cursor-pointer ${
                    isActive 
                      ? 'shadow-2xl -translate-y-3 border-[#a8042b] scale-105' 
                      : isPassed
                      ? 'border-[#223258] shadow-md'
                      : 'border-slate-100/80 hover:shadow-xl hover:-translate-y-2'
                  }`}
                >
                  {/* Active glow effect */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-red-50/60 rounded-2xl animate-pulse-glow" />
                  )}
                  
                  <div className="relative z-10">
                    {/* Step icon + number */}
                    <div className="relative mb-6">
                      <div 
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transform transition-all duration-500 shadow-md ${
                          isActive 
                            ? 'bg-[#a8042b] scale-110 rotate-6' 
                            : isPassed
                            ? 'bg-[#223258]'
                            : 'bg-[#223258] group-hover:scale-105'
                        }`}
                      >
                        <Icon 
                          className={`text-white transition-all duration-300 ${isActive ? 'scale-110' : ''}`} 
                          size={32} 
                          strokeWidth={2.2} 
                        />
                      </div>
                      <div 
                        className={`absolute -top-2 -right-2 w-9 h-9 rounded-full shadow border flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#a8042b] text-white border-[#a8042b] scale-125' 
                            : isPassed
                            ? 'bg-[#223258] text-white border-[#223258]'
                            : 'bg-white text-[#223258] border-slate-200'
                        }`}
                      >
                        {isPassed ? '✓' : item.step}
                      </div>
                    </div>

                    <h3 
                      className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${
                        isActive ? 'text-[#a8042b]' : 'text-[#223258] group-hover:text-blue-800'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">
                      {item.desc}
                    </p>

                    <div className="mt-5 flex items-center text-slate-600 group-hover:text-slate-700 transition-colors">
                      <span className="text-sm font-medium mr-1.5">Learn more</span>
                      <ArrowRight 
                        size={15} 
                        className={`transition-transform duration-300 ${
                          isActive ? 'text-[#a8042b] translate-x-1' : 'text-[#a8042b] group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow connectors */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-[6.5rem] -right-5 transform -translate-y-1/2 z-20 items-center justify-center">
                    <div 
                      className={`w-8 h-8 rounded-full shadow border flex items-center justify-center transition-all duration-500 ${
                        isPassed 
                          ? 'bg-[#223258] border-[#223258]' 
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <ArrowRight 
                        className={`transition-colors duration-500 ${
                          isPassed ? 'text-white' : 'text-slate-400'
                        }`}
                        size={18} 
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentStep 
                  ? 'w-12 h-3 bg-[#a8042b]' 
                  : idx < currentStep
                  ? 'w-3 h-3 bg-[#223258]'
                  : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button className="px-8 py-4 bg-[#a8042b] hover:bg-[#8f0324] text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg group">
            <span>Start Your Journey</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}