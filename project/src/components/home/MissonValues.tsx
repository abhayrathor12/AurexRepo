import { Target, Eye, HeartHandshake, Sparkles, ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';

export function HomeMissionVisionValues() {
  return (
    <section className="py-12 md:py-16 px-5 md:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#223258]/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-[#a8042b]/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-[#223258]/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12 md:mb-10">
          <div className="inline-flex items-center gap-3 mb-3 animate-fade-in-down">
            <Sparkles className="text-[#a8042b] animate-pulse" size={18} />
            <span className="text-xs font-bold text-[#a8042b] tracking-[0.25em] uppercase">Foundation</span>
            <Sparkles className="text-[#a8042b] animate-pulse animation-delay-1000" size={18} />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-3 animate-fade-in-up"
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
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#a8042b] rounded-full" />
            <div className="h-1.5 w-1.5 bg-[#a8042b] rounded-full animate-pulse" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#a8042b] rounded-full" />
          </div>
        </div>

        {/* Mission & Vision - Compact Diagonal Split */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-12">
          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#223258]/5 to-transparent rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500" />
            <div className="relative bg-white rounded-3xl p-7 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-[#223258]/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#223258] to-[#223258]/80 flex items-center justify-center shadow-xl">
                      <Target className="text-white" size={28} strokeWidth={2.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#a8042b] rounded-md animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#223258]">Mission</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-0.5 w-10 bg-gradient-to-r from-[#a8042b] to-transparent rounded-full" />
                      <ArrowRight className="text-[#a8042b] animate-bounce-horizontal" size={15} />
                    </div>
                  </div>
                </div>

                <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
                  To empower founders with the <span className="font-semibold text-[#223258]">clarity, strategy, structure</span>, and investor access required to raise capital efficiently and build <span className="font-semibold text-[#a8042b]">scalable, sustainable businesses</span>.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
                  <Zap size={15} className="text-[#a8042b]" />
                  <span>Empowering Founders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#a8042b]/5 to-transparent rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500" />
            <div className="relative bg-white rounded-3xl p-7 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-bl from-[#a8042b]/10 to-transparent rounded-br-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#a8042b] to-[#a8042b]/80 flex items-center justify-center shadow-xl">
                      <Eye className="text-white" size={28} strokeWidth={2.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#223258] rounded-md animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#223258]">Vision</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-0.5 w-10 bg-gradient-to-r from-[#a8042b] to-transparent rounded-full" />
                      <ArrowRight className="text-[#a8042b] animate-bounce-horizontal" size={15} />
                    </div>
                  </div>
                </div>

                <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
                  To become <span className="font-semibold text-[#a8042b]">one of India's most trusted</span> startup fundraising platforms—where founders access the right capital and investors discover <span className="font-semibold text-[#223258]">high-potential opportunities</span>.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
                  <TrendingUp size={15} className="text-[#a8042b]" />
                  <span>Building Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Animated Divider */}
        <div className="flex items-center justify-center mb-12 md:mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#223258]/20 to-transparent" />
          <div className="mx-4 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-[#a8042b] rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-[#223258] rounded-full animate-pulse animation-delay-500" />
            <div className="w-1.5 h-1.5 bg-[#a8042b] rounded-full animate-pulse animation-delay-1000" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#223258]/20 to-transparent" />
        </div>

        {/* Values Section - More Compact */}
        <div className="max-w-6xl mx-auto">
          {/* Values Header - Updated with premium font feel */}
          <div className="relative mb-8">
            {/* Ghost watermark - Slightly smaller */}
            <div
              className="absolute -top-6 left-0 text-[4.5rem] md:text-[5.5rem] font-black leading-none select-none pointer-events-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(34,50,88,0.06)',
                letterSpacing: '-0.05em',
              }}
            >
              {/* VALUES */}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#223258] to-[#a8042b] flex items-center justify-center shadow-xl animate-float">
                      <HeartHandshake className="text-white" size={22} strokeWidth={2} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#a8042b] rounded-full animate-ping" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#a8042b] rounded-full" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-[#223258]/8 text-[#223258]">
                    CORE PRINCIPLES
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#223258]">
                  Core{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #a8042b 0%, #223258 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Values
                  </span>
                </h3>
              </div>
              <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                The principles that guide every decision and relationship.
              </p>
            </div>

            <div
              className="mt-5 h-px w-full"
              style={{ background: 'linear-gradient(90deg, #223258 0%, #a8042b 40%, transparent 100%)' }}
            />
          </div>

          {/* Values Grid - More Compact */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Transparency */}
            <div className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(34,50,88,0.12)]"
              style={{ border: '1.5px solid rgba(34,50,88,0.08)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#223258] to-[#223258]/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#223258]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-black leading-none select-none"
                    style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(34,50,88,0.12)', letterSpacing: '-0.05em' }}>
                    01
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#223258]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Eye size={17} className="text-[#223258]" strokeWidth={2.5} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#223258] mb-1">Transparency</h4>
                <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-2.5 py-0.5 rounded-full bg-[#223258]/8 text-[#223258]">
                  INTEGRITY FIRST
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ethical, honest, and founder-first advisory that builds lasting trust.
                </p>
              </div>
            </div>

            {/* Collaboration */}
            <div className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(168,4,43,0.12)]"
              style={{ border: '1.5px solid rgba(34,50,88,0.08)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#a8042b] to-[#a8042b]/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#a8042b]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-black leading-none select-none"
                    style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(168,4,43,0.12)', letterSpacing: '-0.05em' }}>
                    02
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#a8042b]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Users size={17} className="text-[#a8042b]" strokeWidth={2.5} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#223258] mb-1">Collaboration</h4>
                <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-2.5 py-0.5 rounded-full bg-[#a8042b]/8 text-[#a8042b]">
                  TOGETHER WE RISE
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Long-term partnerships with founders and investors for mutual growth.
                </p>
              </div>
            </div>

            {/* Execution */}
            <div className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(34,50,88,0.12)]"
              style={{ border: '1.5px solid rgba(34,50,88,0.08)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#223258] to-[#223258]/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#223258]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-black leading-none select-none"
                    style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(34,50,88,0.12)', letterSpacing: '-0.05em' }}>
                    03
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#223258]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Zap size={17} className="text-[#223258]" strokeWidth={2.5} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#223258] mb-1">Execution</h4>
                <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-2.5 py-0.5 rounded-full bg-[#223258]/8 text-[#223258]">
                  RESULTS DRIVEN
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Focused on tangible funding outcomes and measurable results.
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className="group relative bg-white rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(168,4,43,0.12)]"
              style={{ border: '1.5px solid rgba(34,50,88,0.08)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#a8042b] to-[#a8042b]/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#a8042b]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-black leading-none select-none"
                    style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(168,4,43,0.12)', letterSpacing: '-0.05em' }}>
                    04
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#a8042b]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <TrendingUp size={17} className="text-[#a8042b]" strokeWidth={2.5} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#223258] mb-1">Impact</h4>
                <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-2.5 py-0.5 rounded-full bg-[#a8042b]/8 text-[#a8042b]">
                  SCALE & GROW
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Measured by capital raised and businesses successfully scaled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, -40px) scale(1.08); }
          66% { transform: translate(-15px, 25px) scale(0.92); }
        }
       
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
       
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
       
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
       
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
       
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1.2s ease-in-out infinite;
        }
       
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, #22325808 1px, transparent 1px),
            linear-gradient(to bottom, #22325808 1px, transparent 1px);
          background-size: 35px 35px;
        }
      `}</style>
    </section>
  );
}

export default HomeMissionVisionValues;