import { Rocket, TrendingUp, Users, Target, Briefcase, DollarSign } from 'lucide-react';

export function WhoWeWorkWith() {
  const clients = [
    {
      icon: Rocket,
      title: "Early-Stage & Growth-Stage Startups",
      description: "Supporting innovative companies at critical growth inflection points, from seed to Series B and beyond",
      gradient: "from-[#223258] to-[#223258]/70",
      accentColor: "#a8042b",
      features: [
        "Pre-seed to Series B",
        "Product-market fit validation",
        "Scaling operations"
      ]
    },
    {
      icon: Target,
      title: "Fund-Ready Founders",
      description: "Partnering with ambitious entrepreneurs seeking equity or structured debt capital to accelerate their vision",
      gradient: "from-[#a8042b] to-[#a8042b]/70",
      accentColor: "#223258",
      features: [
        "Equity fundraising",
        "Structured debt solutions",
        "Strategic capital planning"
      ]
    },
    {
      icon: Briefcase,
      title: "Investors Seeking Quality Deal Flow",
      description: "Connecting institutional and angel investors with thoroughly vetted, high-potential investment opportunities",
      gradient: "from-[#223258] via-[#223258] to-[#a8042b]",
      accentColor: "#a8042b",
      features: [
        "Curated opportunities",
        "Comprehensive due diligence",
        "Sector expertise"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#223258]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a8042b]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#a8042b]" />
            <span className="text-sm font-bold text-[#a8042b] tracking-wider uppercase">Our Clients</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#a8042b]" />
          </div> */}
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[#223258] mb-6">
            Who We Work With
          </h2>
          
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#223258] to-[#a8042b] mx-auto rounded-full mb-8" />
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with visionary founders and strategic investors to create lasting value
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16">
          {clients.map((client, index) => {
            const Icon = client.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#223258]/10 via-transparent to-[#a8042b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 md:p-10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="text-white" size={36} strokeWidth={2} />
                    </div>
                    <div 
                      className="absolute -bottom-2 -right-2 w-6 h-6 rounded-lg opacity-80 group-hover:animate-pulse"
                      style={{ backgroundColor: client.accentColor }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#223258] mb-4 leading-tight">
                    {client.title}
                  </h3>

                  {/* Divider */}
                  <div 
                    className="h-1 w-16 rounded-full mb-5 group-hover:w-24 transition-all duration-300"
                    style={{ backgroundColor: client.accentColor }}
                  />

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    {client.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {client.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: client.accentColor }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent bar */}
                <div 
                  className="h-2 w-full transition-all duration-300 group-hover:h-3"
                  style={{ background: `linear-gradient(to right, ${client.accentColor}, ${client.accentColor}80)` }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}

      </div>
    </section>
  );
}

export default WhoWeWorkWith;