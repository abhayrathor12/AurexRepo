import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Building2, Shield, FileText } from 'lucide-react';
import { AnimatedHeading } from '../AnimtedHeading';
import { useNavigate } from 'react-router-dom';

import funding from '../../public/funding.jpg';
import grow from '../../public/Grow Business.jpg';
import business from '../../public/Start Businesses.jpg';
import protect from '../../public/Protect and Comply (1).jpg';

export function HomeWhatWeEnable() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    {
      id: 0,
      name: "Funding",
      icon: TrendingUp,
      image: funding,
      title: "Access Multiple Funding Options",
      subtitle: "Financial support tailored for your growth",
      description: "Debt financing, equity, government schemes & more.",
      services: ["Debt Funding", "Equity Funding", "Govt Schemes", "Angel Investment", "Venture Capital"],
      buttonText: "Explore Funding",
    },
    {
      id: 1,
      name: "Start Business",
      icon: Building2,
      image: business,
      title: "Register Your Business Seamlessly",
      subtitle: "Choose the right legal structure",
      description: "OPC, LLP, Pvt Ltd, Section 8 & Partnership setups.",
      services: ["One Person Company", "LLP", "Private Limited", "Section 8 Company", "Partnership Firm"],
      buttonText: "Start Your Business",
    },
    {
      id: 2,
      name: "Grow Business",
      icon: Shield,
      image: grow,
      title: "Scale with Certifications",
      subtitle: "Unlock schemes and essential registrations",
      description: "Get Startup India, MSME, GST, IEC & ISO certifications.",
      services: ["Startup India", "MSME (Udyam)", "GST Registration", "IEC Code", "ISO Certifications"],
      buttonText: "Explore Growth",
    },
    {
      id: 3,
      name: "Protect & Comply",
      icon: FileText,
      image: protect,
      title: "Protect Assets & Stay Compliant",
      subtitle: "Secure IP and ensure regulatory compliance",
      description: "Trademark, Patent, ROC, FEMA & Business Valuation.",
      services: ["Trademark", "Patent Filing", "ROC Compliance", "FEMA Compliance", "Business Valuation"],
      buttonText: "Secure Your Business",
    },
  ];

  const active = tabs[activeTab];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <AnimatedHeading
          title="What We Enable"
          subtitle="Comprehensive solutions for every stage of your startup journey"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeTab === tab.id
                  ? "bg-[#223258] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                <TabIcon size={18} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Card - Fixed height to prevent layout shift */}
        <div
          className="bg-gradient-to-br from-[#223258] to-[#223258]/95 rounded-3xl shadow-2xl overflow-hidden relative min-h-[380px] md:min-h-[360px]"
        >
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#a8042b]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 p-6 md:p-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

              {/* Left Content */}
              <div className="flex-1 text-white">
                <div className="inline-block bg-[#a8042b] px-4 py-1 rounded-full text-xs font-semibold tracking-widest mb-4">
                  {active.name.toUpperCase()}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                  {active.title}
                </h3>

                <p className="text-white/90 text-base mb-2">{active.subtitle}</p>
                <p className="text-white/75 text-[15px] leading-relaxed mb-6">
                  {active.description}
                </p>

                {/* Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-8 mb-7">
                  {active.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#a8042b] flex-shrink-0 mt-1.5" />
                      <span className="text-white/85 text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 bg-[#a8042b] hover:bg-[#a8042b]/90 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all active:scale-95 shadow-lg"
                >
                  {active.buttonText}
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Right Image - Fixed dimensions to prevent shift */}
              <div className="lg:w-5/12 w-full flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ height: '260px' }}   // Fixed height prevents jumping
                  >
                    <img
                      key={active.id} // forces re-render with transition
                      src={active.image}
                      alt={active.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-[#a8042b] hover:text-[#a8042b]/80 font-semibold text-base group"
          >
            View All Services
            <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}