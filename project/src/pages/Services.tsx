import ScrollStackSection from "../components/ScrollStack";
import WhoWeWorkWith from "../components/services/Whoworkwith";
import {
  Cpu,
  Lightbulb,
  Factory,
  Users,
  HeartHandshake,
  User,
  ShieldCheck,
  Building2,
  Scale,
  BadgeCheck,
  Shield,
  FileLock,
  Globe,
  Landmark,
  TrendingUp,
  Briefcase,
  FileText,
} from "lucide-react";


export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white py-16 px-4 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
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

            {/* Right Animation */}
            <div className="relative h-[380px] md:h-[420px] lg:h-[460px] flex items-center justify-center">
              {/* Animated circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-72 h-72 sm:w-80 h-80 border-2 border-[#223258] opacity-20 rounded-full animate-ping" style={{ animationDuration: '3.2s' }}></div>
                <div className="absolute w-60 h-60 sm:w-64 h-64 border-2 border-[#a8042b] opacity-30 rounded-full animate-ping" style={{ animationDuration: '2.6s', animationDelay: '0.6s' }}></div>
                <div className="absolute w-48 h-48 border-2 border-[#223258] opacity-40 rounded-full animate-ping" style={{ animationDuration: '2.1s', animationDelay: '1.1s' }}></div>
              </div>

              {/* Floating cards */}
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

              {/* Center glow */}
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



      {/* ==================== 1. FUNDING ADVISORY ==================== */}
      <ScrollStackSection
  sectionNumber="01"
  heading="Funding Advisory"
  description="We help founders identify, structure, and raise the right capital at every stage of growth."
  cards={[
    {
      title: "Debt Funding",
      subtitle:
        "Non-dilutive capital solutions for operational stability and expansion.",
      points: [
        "Term loans & working capital financing",
        "Invoice & supply-chain financing",
        "MSME & government-backed debt programs",
        "Revenue-based repayment structures",
      ],
      highlight: "Preserve equity while scaling operations",
      icons: [Landmark, TrendingUp],
    },
    {
      title: "Equity Funding",
      subtitle:
        "Strategic capital partnerships to fuel long-term growth.",
      points: [
        "Angel & seed-stage investments",
        "Venture capital & growth equity",
        "Corporate VCs & family offices",
        "Pitch deck & investor targeting support",
      ],
      highlight: "Smart capital with strategic value",
      icons: [TrendingUp, Briefcase],
    },
    {
      title: "Investor Readiness",
      subtitle:
        "Preparing startups to confidently face investors.",
      points: [
        "Financial modeling & projections",
        "Startup valuation advisory",
        "Data room preparation",
        "Term-sheet & negotiation support",
      ],
      highlight: "From idea to investment-ready",
      icons: [FileText, ShieldCheck],
    },
  ]}
/>


      {/* ==================== 2. GOVERNMENT GRANTS ==================== */}
      <ScrollStackSection
  sectionNumber="02"
  heading="Government Grants & Schemes"
  description="Access non-dilutive capital through central and state government programs aligned with your sector."
  cards={[
    {
      title: "Technology & Innovation Grants",
      subtitle:
        "Funding support for startups working on innovative and scalable technologies.",
      points: [
        "Startup India Seed Fund Scheme (SISFS)",
        "NIDHI & DST innovation programs",
        "Technology Development Fund (TDF)",
        "Prototype & MVP development grants",
      ],
      highlight: "Build innovation without giving up equity",
      icons: [Cpu, Lightbulb]

    },
    {
      title: "Manufacturing & MSME Schemes",
      subtitle:
        "Government-backed financial support for production and expansion.",
      points: [
        "PM Mudra Yojana",
        "Credit Linked Capital Subsidy Scheme (CLCSS)",
        "Stand-Up India scheme",
        "Subsidies for plant & machinery",
      ],
      highlight: "Lower cost of capital for sustainable growth",
      icons: [Factory, Landmark]

    },
    {
      title: "Women & Sector-Specific Grants",
      subtitle:
        "Specialized schemes for women founders and priority sectors.",
      points: [
        "Mahila Udyam Nidhi",
        "TREAD scheme for women entrepreneurs",
        "Agri & food processing grants",
        "Healthcare & biotech funding programs",
      ],
      highlight: "Empowering founders through targeted support",
      icons: [Users, HeartHandshake]
    },
  ]}
/>


      {/* ==================== 3. BUSINESS INCORPORATION ==================== */}
      <ScrollStackSection
  sectionNumber="03"
  heading="Business Incorporation"
  description="Choose the right legal structure to match your vision, growth plans, and compliance needs."
  cards={[
    {
      title: "One Person Company (OPC)",
      subtitle:
        "Ideal for solo founders seeking limited liability and credibility.",
      points: [
        "Single promoter structure",
        "Limited personal liability",
        "Easy conversion to Private Limited",
        "Recognized legal entity",
      ],
      highlight: "Perfect starting point for solo entrepreneurs",
      icons: [User, ShieldCheck]
    },
    {
      title: "LLP & Partnership Structures",
      subtitle:
        "Flexible structures for professionals and service-based businesses.",
      points: [
        "Lower compliance burden",
        "Operational flexibility",
        "Tax-efficient structure",
        "Ideal for consulting & services",
      ],
      highlight: "Flexibility with protection",
      icons: [Users, Briefcase]
    },
    {
      title: "Private Limited & Section 8",
      subtitle:
        "Scalable structures for startups and mission-driven organizations.",
      points: [
        "Investor-friendly company format",
        "Better valuation & fundraising scope",
        "Section 8 for non-profits & NGOs",
        "Strong governance framework",
      ],
      highlight: "Built for scale and credibility",
      icons: [Building2, Scale]
    },
  ]}
/>


      {/* ==================== 4. GROWTH & COMPLIANCE ==================== */}
      <ScrollStackSection
  sectionNumber="04"
  heading="Growth, Protection & Compliance"
  description="End-to-end support to scale confidently while staying legally and financially compliant."
  cards={[
    {
      title: "Startup India, MSME & Registrations",
      subtitle:
        "Unlock government benefits, tax exemptions, and growth opportunities.",
      points: [
        "Startup India registration",
        "MSME / Udyam certification",
        "Access to government tenders",
        "Tax exemptions & incentives",
      ],
      highlight: "Maximize benefits from government recognition",
      icons: [BadgeCheck, TrendingUp]
    },
    {
      title: "IP Protection & Legal Safeguards",
      subtitle:
        "Protect your brand, innovation, and intellectual assets.",
      points: [
        "Trademark registration & monitoring",
        "Copyright & patent filing",
        "Design protection",
        "IP strategy consultation",
      ],
      highlight: "Secure what makes your business unique",
      icons: [Shield, FileLock]
    },
    {
      title: "ROC, FEMA & Ongoing Compliance",
      subtitle:
        "Stay compliant as your business grows across borders.",
      points: [
        "Annual ROC filings & board compliances",
        "FEMA & FDI advisory",
        "RBI reporting & filings",
        "Valuation & regulatory support",
      ],
      highlight: "Compliance without complexity",
      icons: [FileText, Globe]
    },
  ]}
/>
<WhoWeWorkWith />
    </div>
  );
}
