import { ArrowRight, TrendingUp, Building2, CheckCircle, Rocket, LineChart, Users, Sparkles, Target, Zap } from 'lucide-react';
import { useState } from 'react';
import { AnimatedHeading } from '../AnimtedHeading';
export default function ModernJoinSection() {
  const [hoveredStartup, setHoveredStartup] = useState(false);
  const [hoveredInvestor, setHoveredInvestor] = useState(false);

  const openRegister = () => {
    const event = new CustomEvent('openRegisterModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="py-10 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedHeading
          title="Join the Aurex Ecosystem"
          subtitle="Whether you're building the future or investing in it, we provide the platform for success"
        />

        {/* Startup Section */}
        <div 
          className="-mb-12 relative overflow-hidden"
          onMouseEnter={() => setHoveredStartup(true)}
          onMouseLeave={() => setHoveredStartup(false)}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content - Left */}
            <div className="relative z-10 p-8">
              <div className="inline-flex items-center gap-2 bg-aurex-primary/10 text-aurex-primary px-4 py-2 rounded-full mb-6 font-semibold">
                <Building2 size={20} />
                <span>For Startups</span>
              </div>
              
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Scale Your Vision
              </h3>
              
              <p className="text-lg text-slate-600 mb-8">
                From pitch refinement to investor connections, we provide everything you need to secure funding and grow.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3 group">
                  <div className="bg-aurex-primary/10 p-2 rounded-lg group-hover:bg-aurex-primary/20 transition-colors">
                    <CheckCircle className="text-aurex-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Comprehensive Fundraising Support</h4>
                    <p className="text-slate-600 text-sm">End-to-end guidance through your funding journey</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-aurex-primary/10 p-2 rounded-lg group-hover:bg-aurex-primary/20 transition-colors">
                    <CheckCircle className="text-aurex-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Curated Investor Access</h4>
                    <p className="text-slate-600 text-sm">Connect with investors aligned to your vision</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-aurex-primary/10 p-2 rounded-lg group-hover:bg-aurex-primary/20 transition-colors">
                    <CheckCircle className="text-aurex-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Pitch Readiness & Refinement</h4>
                    <p className="text-slate-600 text-sm">Perfect your story and presentation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-aurex-primary/10 p-2 rounded-lg group-hover:bg-aurex-primary/20 transition-colors">
                    <CheckCircle className="text-aurex-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Compliance & Legal Coordination</h4>
                    <p className="text-slate-600 text-sm">Navigate regulations with confidence</p>
                  </div>
                </div>
              </div>

              <button
                onClick={openRegister}
                className="group bg-aurex-primary text-white px-8 py-4 rounded-xl hover:bg-aurex-primarySoft transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Apply as a Startup
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            {/* Animation - Right */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-aurex-primary/5 to-aurex-primary/10 rounded-3xl" />
              
              {/* Animated Elements */}
              <div className={`absolute transition-all duration-700 ${hoveredStartup ? 'scale-110' : 'scale-100'}`}>
                {/* Center Rocket */}
                <div className="relative">
                  <div className={`bg-gradient-to-br from-aurex-primary to-aurex-primarySoft w-32 h-32 rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-700 ${hoveredStartup ? 'rotate-12' : 'rotate-0'}`}>
                    <Rocket className="text-white" size={64} />
                  </div>
                  
                  {/* Orbiting Icons */}
                  <div className={`absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg transition-all duration-500 ${hoveredStartup ? 'translate-x-4 -translate-y-4' : ''}`}>
                    <Target className="text-aurex-primary" size={24} />
                  </div>
                  
                  <div className={`absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg transition-all duration-700 ${hoveredStartup ? '-translate-x-4 translate-y-4' : ''}`}>
                    <Sparkles className="text-aurex-accent" size={24} />
                  </div>
                  
                  <div className={`absolute top-1/2 -right-16 bg-white p-3 rounded-xl shadow-lg transition-all duration-500 delay-100 ${hoveredStartup ? 'translate-x-8' : ''}`}>
                    <Zap className="text-yellow-500" size={20} />
                  </div>
                  
                  <div className={`absolute top-1/2 -left-16 bg-white p-3 rounded-xl shadow-lg transition-all duration-500 delay-150 ${hoveredStartup ? '-translate-x-8' : ''}`}>
                    <Users className="text-blue-500" size={20} />
                  </div>
                </div>
              </div>

              {/* Growth Arrow */}
              <div className={`absolute bottom-8 right-8 transition-all duration-700 ${hoveredStartup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                  <TrendingUp size={20} />
                  <span>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-24 flex items-center justify-center -mb-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute bg-white px-6 py-2 rounded-full border-2 border-slate-200 text-slate-400 font-semibold">
            OR
          </div>
        </div>

        {/* Investor Section */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setHoveredInvestor(true)}
          onMouseLeave={() => setHoveredInvestor(false)}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Animation - Left */}
            <div className="relative h-96 flex items-center justify-center order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-aurex-accent/5 to-aurex-accent/10 rounded-3xl" />
              
              {/* Animated Elements */}
              <div className={`absolute transition-all duration-700 ${hoveredInvestor ? 'scale-110' : 'scale-100'}`}>
                {/* Center Chart */}
                <div className="relative">
                  <div className={`bg-gradient-to-br from-aurex-accent to-aurex-accentSoft w-32 h-32 rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-700 ${hoveredInvestor ? '-rotate-12' : 'rotate-0'}`}>
                    <LineChart className="text-white" size={64} />
                  </div>
                  
                  {/* Orbiting Icons */}
                  <div className={`absolute -top-8 -left-8 bg-white p-4 rounded-xl shadow-lg transition-all duration-500 ${hoveredInvestor ? '-translate-x-4 -translate-y-4' : ''}`}>
                    <TrendingUp className="text-green-500" size={24} />
                  </div>
                  
                  <div className={`absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg transition-all duration-700 ${hoveredInvestor ? 'translate-x-4 translate-y-4' : ''}`}>
                    <Building2 className="text-aurex-primary" size={24} />
                  </div>
                  
                  <div className={`absolute top-1/2 -left-16 bg-white p-3 rounded-xl shadow-lg transition-all duration-500 delay-100 ${hoveredInvestor ? '-translate-x-8' : ''}`}>
                    <Target className="text-purple-500" size={20} />
                  </div>
                  
                  <div className={`absolute top-1/2 -right-16 bg-white p-3 rounded-xl shadow-lg transition-all duration-500 delay-150 ${hoveredInvestor ? 'translate-x-8' : ''}`}>
                    <Sparkles className="text-yellow-500" size={20} />
                  </div>
                </div>
              </div>

              {/* ROI Badge */}
              <div className={`absolute bottom-8 left-8 transition-all duration-700 ${hoveredInvestor ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-aurex-accent text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                  <TrendingUp size={20} />
                  <span>High ROI</span>
                </div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="relative z-10 p-8 order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-aurex-accent/10 text-aurex-accent px-4 py-2 rounded-full mb-6 font-semibold">
                <TrendingUp size={20} />
                <span>For Investors</span>
              </div>
              
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Discover Tomorrow's Leaders
              </h3>
              
              <p className="text-lg text-slate-600 mb-8">
                Access pre-screened, high-potential startups and exclusive deal flow tailored to your investment thesis.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3 group">
                  <div className="bg-aurex-accent/10 p-2 rounded-lg group-hover:bg-aurex-accent/20 transition-colors">
                    <CheckCircle className="text-aurex-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Pre-Screened Deal Flow</h4>
                    <p className="text-slate-600 text-sm">Rigorously vetted, investment-ready opportunities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-aurex-accent/10 p-2 rounded-lg group-hover:bg-aurex-accent/20 transition-colors">
                    <CheckCircle className="text-aurex-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Thesis-Aligned Startups</h4>
                    <p className="text-slate-600 text-sm">Companies matching your investment criteria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-aurex-accent/10 p-2 rounded-lg group-hover:bg-aurex-accent/20 transition-colors">
                    <CheckCircle className="text-aurex-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Confidential Process</h4>
                    <p className="text-slate-600 text-sm">Professional, discreet deal management</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-aurex-accent/10 p-2 rounded-lg group-hover:bg-aurex-accent/20 transition-colors">
                    <CheckCircle className="text-aurex-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Exclusive Network Events</h4>
                    <p className="text-slate-600 text-sm">Connect with fellow investors and founders</p>
                  </div>
                </div>
              </div>

              <button
                onClick={openRegister}
                className="group bg-aurex-accent text-white px-8 py-4 rounded-xl hover:bg-aurex-accentSoft transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Join as an Investor
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}