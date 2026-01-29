import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Building2, Shield, FileText } from 'lucide-react';
import { AnimatedHeading } from '../AnimtedHeading';
import { useNavigate } from '../Router';
import funding from '../../public/funding.jpg';
import grow from '../../public/Grow Business.jpg';
import business from '../../public/Start Businesses.jpg';
import protect from '../../public/Protect and Comply (1).jpg';

export function HomeWhatWeEnable() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  // Auto-switch tabs every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    {
      id: 0,
      name: "Funding",
      icon: TrendingUp,
      image: funding,  // ← place downloaded PNG here
      title: "Access Multiple Funding Options",
      subtitle: "Explore financial support tailored for your business growth",
      description:
        "Get comprehensive funding solutions including debt financing, equity investments, and government-backed schemes to accelerate your startup journey.",
      services: [
        "Debt Funding",
        "Equity Funding",
        "Government Schemes",
        "Angel Investment",
        "Venture Capital",
      ],
      buttonText: "Explore Funding Options",
    },
    {
      id: 1,
      name: "Start Business",
      icon: Building2,
      image: business,  // ← downloaded transparent PNG
      title: "Register Your Business Seamlessly",
      subtitle: "Choose the right structure for your venture",
      description:
        "We help you set up your business with the most suitable legal structure, ensuring compliance and maximizing benefits from day one.",
      services: [
        "One Person Company (OPC)",
        "Limited Liability Partnership (LLP)",
        "Private Limited Company",
        "Section 8 Company",
        "Partnership Firm",
      ],
      buttonText: "Start Your Business",
    },
    {
      id: 2,
      name: "Grow Business",
      icon: Shield,
      image: grow,  // ← rocket launch / growth illustration
      title: "Scale Your Business with Certifications",
      subtitle: "Access government schemes and essential registrations",
      description:
        "Unlock growth opportunities through strategic registrations, certifications, and compliance that open doors to funding and market access.",
      services: [
        "Startup India Registration",
        "MSME (Udyam) Registration",
        "GST Registration",
        "IEC (Import Export Code)",
        "ISO Certifications",
      ],
      buttonText: "Explore Growth Services",
    },
    {
      id: 3,
      name: "Protect & Comply",
      icon: FileText,
      image: protect,  // ← shield with IP / protection theme
      title: "Protect Your Assets & Stay Compliant",
      subtitle: "Secure your intellectual property and ensure regulatory compliance",
      description:
        "Safeguard your business with comprehensive IP protection, maintain regulatory compliance, and get accurate valuations for strategic decisions.",
      services: [
        "Trademark Registration",
        "Patent Filing",
        "ROC Compliance",
        "FEMA Compliance",
        "Business Valuation",
      ],
      buttonText: "Secure Your Business",
    },
  ];

  const activeContent = tabs[activeTab];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedHeading
          title="What We Enable"
          subtitle="Comprehensive solutions for every stage of your startup journey"
        />

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 mt-12">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
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

        {/* Main Card */}
        <div className="bg-gradient-to-br from-[#223258] to-[#223258]/90 rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#a8042b]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Content Side */}
              <div className="flex-1 text-white">
                <div className="inline-block bg-[#a8042b] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {activeContent.name.toUpperCase()}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {activeContent.title}
                </h3>

                <p className="text-white/90 text-lg mb-6">
                  {activeContent.subtitle}
                </p>

                <p className="text-white/80 mb-8 leading-relaxed">
                  {activeContent.description}
                </p>

                {/* Services List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeContent.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#a8042b]"></div>
                      <span className="text-white/90">{service}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2 bg-[#a8042b] hover:bg-[#a8042b]/90 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  {activeContent.buttonText}
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Image Side */}
              <div className="lg:w-1/2">
  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20">
    <div className="rounded-2xl  p-1 flex items-center justify-center h-[360px] md:h-[320px] lg:h-[360px] overflow-hidden">
      <img
        src={activeContent.image}
        alt={`${activeContent.name} illustration`}
        className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-[#a8042b] hover:text-[#a8042b]/80 font-semibold text-lg group"
          >
            View All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}