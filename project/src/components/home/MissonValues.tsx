import { Target, Eye, HeartHandshake, Sparkles, ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';

export function HomeMissionVisionValues() {
  return (
    <section className="py-20 md:py-10 px-5 md:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#223258]/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#a8042b]/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-[#223258]/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Header with Stagger Animation */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-down">
            <Sparkles className="text-[#a8042b] animate-pulse" size={20} />
            <span className="text-sm font-bold text-[#a8042b] tracking-[0.2em] uppercase">Foundation</span>
            <Sparkles className="text-[#a8042b] animate-pulse animation-delay-1000" size={20} />
          </div>
          <h2
            className="text-5xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 animate-fade-in-up"
            style={{ 
              color: '#223258',
              background: 'linear-gradient(135deg, #223258 0%, #a8042b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Purpose
          </h2>
          <div className="flex items-center justify-center gap-2 animate-fade-in">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#a8042b] rounded-full" />
            <div className="h-2 w-2 bg-[#a8042b] rounded-full animate-pulse" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#a8042b] rounded-full" />
          </div>
        </div>

        {/* Mission & Vision - Modern Diagonal Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24 md:mb-32">
          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#223258]/5 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#223258]/10 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#223258] to-[#223258]/80 flex items-center justify-center shadow-xl relative overflow-hidden">
                      <Target className="text-white relative z-10" size={32} strokeWidth={2.5} />
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#a8042b] rounded-md animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#223258] mb-1">
                      Mission
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-12 bg-gradient-to-r from-[#a8042b] to-transparent rounded-full" />
                      <ArrowRight className="text-[#a8042b] animate-bounce-horizontal" size={16} />
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower founders with the <span className="font-semibold text-[#223258]">clarity, strategy, structure</span>, and investor access required to raise capital efficiently and build <span className="font-semibold text-[#a8042b]">scalable, sustainable businesses</span>.
                </p>

                {/* Bottom accent */}
                <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                  <Zap size={16} className="text-[#a8042b]" />
                  <span>Empowering Founders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#a8042b]/5 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-[#a8042b]/10 to-transparent rounded-br-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a8042b] to-[#a8042b]/80 flex items-center justify-center shadow-xl relative overflow-hidden">
                      <Eye className="text-white relative z-10" size={32} strokeWidth={2.5} />
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#223258] rounded-md animate-pulse animation-delay-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#223258] mb-1">
                      Vision
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-12 bg-gradient-to-r from-[#a8042b] to-transparent rounded-full" />
                      <ArrowRight className="text-[#a8042b] animate-bounce-horizontal animation-delay-500" size={16} />
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become <span className="font-semibold text-[#a8042b]">one of India's most trusted</span> startup fundraising and investment enablement platforms—where founders access the right capital and investors discover <span className="font-semibold text-[#223258]">high-potential opportunities</span>.
                </p>

                {/* Bottom accent */}
                <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                  <TrendingUp size={16} className="text-[#a8042b]" />
                  <span>Building Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="flex items-center justify-center mb-24 md:mb-32">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#223258]/20 to-transparent" />
          <div className="mx-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-[#a8042b] rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-[#223258] rounded-full animate-pulse animation-delay-500" />
            <div className="w-2 h-2 bg-[#a8042b] rounded-full animate-pulse animation-delay-1000" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#223258]/20 to-transparent" />
        </div>

        {/* Values Section - Modern Bento Grid Style */}
        <div className="max-w-6xl mx-auto">
          {/* Values Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#223258] via-[#223258] to-[#a8042b] flex items-center justify-center shadow-2xl animate-float">
                  <HeartHandshake className="text-white" size={40} strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#a8042b] rounded-lg animate-ping" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#a8042b] rounded-lg" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#223258] mb-4">
              Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Bento Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Transparency */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#223258]/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#223258] to-[#a8042b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#223258]/10 to-[#223258]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-[#a8042b] rounded-full animate-pulse" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#223258] mb-2 flex items-center gap-2">
                    Transparency
                    <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#a8042b]" size={20} />
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ethical, honest, and founder-first advisory that builds lasting trust
              </p>
            </div>

            {/* Collaboration */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#a8042b]/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a8042b] to-[#223258] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a8042b]/10 to-[#a8042b]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users size={20} className="text-[#a8042b]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#223258] mb-2 flex items-center gap-2">
                    Collaboration
                    <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#a8042b]" size={20} />
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Long-term partnerships with founders and investors for mutual growth
              </p>
            </div>

            {/* Execution */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#223258]/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#223258] to-[#a8042b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#223258]/10 to-[#223258]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap size={20} className="text-[#a8042b]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#223258] mb-2 flex items-center gap-2">
                    Execution
                    <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#a8042b]" size={20} />
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Focused on tangible funding outcomes and measurable results
              </p>
            </div>

            {/* Impact */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#a8042b]/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a8042b] to-[#223258] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a8042b]/10 to-[#a8042b]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={20} className="text-[#a8042b]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#223258] mb-2 flex items-center gap-2">
                    Impact
                    <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#a8042b]" size={20} />
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Measured by capital raised and businesses successfully scaled
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s ease-in-out infinite;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #22325808 1px, transparent 1px),
            linear-gradient(to bottom, #22325808 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}

export default HomeMissionVisionValues;