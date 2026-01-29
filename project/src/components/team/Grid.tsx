import { Users, Linkedin, Facebook, Target, TrendingUp, Shield } from 'lucide-react';

export interface TeamGridMember {
  id?: string;
  name: string;
  title: string;
  bio: string | null;
  highlights?: string[];
  expertise?: string[];
  credentials?: string[];
  image_url?: string | null;
  linkedin_url?: string | null;
  facebook_url?: string | null;
}

interface TeamGridProps {
  loading: boolean;
  members: TeamGridMember[];
}

export function TeamGridSection({ loading, members }: TeamGridProps) {
  if (loading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            <p className="text-slate-600 mt-3">Loading team members...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16 lg:space-y-20">

        {members.map((member, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={member.id ?? idx}
              className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image - Hidden on mobile, visible on tablet+ */}
              <div className="absolute inset-0 hidden md:block">
                {member.image_url ? (
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-full object-contain md:object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <Users className="text-gray-400 opacity-30" size={100} />
                  </div>
                )}
              </div>

              {/* Gradient Overlay - Only on tablet+ */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-r hidden md:block
                  ${isEven
                    ? 'from-white/95 via-white/30 via-40% to-[#a8042b]/70'
                    : 'from-[#a8042b]/70 via-white/30 via-40% to-white/95'}
                `}
              />

              {/* Social Icons */}
<div
  className={`
    absolute z-30 flex gap-3 md:flex-col md:gap-4
    top-3 left-3
    md:top-1/2 md:-translate-y-1/2
    ${isEven ? 'md:right-6 md:left-auto' : 'md:left-6'}
  `}
>
  {/* LinkedIn */}
  <a
    href={member.linkedin_url ?? '#'}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/90 hover:bg-white text-[#0A66C2] p-3 rounded-full shadow-lg hover:scale-110 transition"
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </a>

  {/* Facebook */}
  <a
    href={member.facebook_url ?? '#'}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/90 hover:bg-white text-[#1877F2] p-3 rounded-full shadow-lg hover:scale-110 transition"
    aria-label="Facebook"
  >
    <Facebook size={20} />
  </a>
</div>


              {/* Mobile Image */}
              <div className="block md:hidden w-full h-48 sm:h-56 bg-gray-100 relative overflow-hidden">
                {member.image_url ? (
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-full object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="text-gray-400 opacity-30" size={64} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40"></div>
              </div>

              {/* Content */}
              <div
                className={`
                  relative z-10 p-5 sm:p-6 md:p-10 lg:p-12 
                  flex flex-col justify-center
                  bg-white md:bg-transparent
                  min-h-0 md:min-h-[420px] lg:min-h-[480px]
                  ${isEven
                    ? 'text-left md:max-w-[52%] md:pr-10 lg:max-w-[48%] lg:pr-16'
                    : 'text-left md:ml-auto md:max-w-[52%] md:pl-10 lg:max-w-[48%] lg:pl-16 md:text-right'}
                `}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#223258] mb-3 md:mb-4 pr-20 md:pr-0">
                  {member.name}
                </h3>

                <p className="text-[#223258] text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4 md:mb-0 md:order-last">
                  {member.title}
                </p>

                {member.bio && (
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-5 line-clamp-3 md:line-clamp-4">
                    {member.bio}
                  </p>
                )}

                {member.expertise && member.expertise.length > 0 && (
                  <div
                    className={`flex flex-wrap gap-2 mb-4 md:mb-6 ${
                      isEven ? 'justify-start' : 'justify-start md:justify-end'
                    }`}
                  >
                    {member.expertise.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm md:text-base bg-[#223258]/10 text-[#223258] px-2.5 py-1 md:px-3 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div
                  className={`w-16 sm:w-24 md:w-32 h-1 bg-[#a8042b] mb-4 md:mb-6 rounded-full ${
                    isEven ? '' : 'md:ml-auto'
                  }`}
                />

                {member.highlights && member.highlights.length > 0 && (
                  <ul
                    className={`text-gray-700 text-xs sm:text-sm md:text-base mb-4 md:mb-6 space-y-1 ${
                      isEven ? 'text-left' : 'text-left md:text-right'
                    }`}
                  >
                    {member.highlights.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                )}

                {member.credentials && member.credentials.length > 0 && (
                  <div
                    className={`flex flex-wrap gap-2 mb-4 md:mb-6 ${
                      isEven ? 'justify-start' : 'justify-start md:justify-end'
                    }`}
                  >
                    {member.credentials.map((cred, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm border border-[#223258]/30 text-[#223258] px-2.5 py-1 md:px-3 rounded-full"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Why Aurex Ventures Section */}
        <div className="mt-12 md:mt-20 lg:mt-24 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#223258]/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a8042b]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#a8042b]" />
                <span className="text-sm font-bold text-[#a8042b] tracking-wider uppercase">About Us</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#a8042b]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#223258] mb-4">
                Why Aurex Ventures
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-[#223258] to-[#a8042b] mx-auto rounded-full" />
            </div>

            {/* Main Description */}
            <div className="mb-12 md:mb-16">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                <span className="font-bold text-[#223258]">Aurex Ventures</span> is an investment banking advisory firm specializing in capital raising and transaction support for early-stage and growth-stage startups.
              </p>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                We operate as a single-point fundraising and transaction partner, guiding founders through the complete investment lifecycle—from investor readiness and strategic positioning to deal execution and closure.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mb-12 md:mb-16">
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            {/* Value Proposition - IMPROVED VERSION */}


            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Capital */}
              <div className="group relative">
                <div className="flex items-start gap-5 mb-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#223258] to-[#223258]/70 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <Target className="text-white" size={28} strokeWidth={2} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#a8042b] rounded-lg opacity-80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#223258]">
                      Capital
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#a8042b] to-transparent rounded-full mt-2" />
                  </div>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Strategic fundraising guidance connecting startups with the right investors
                </p>
              </div>

              {/* Compliance */}
              <div className="group relative">
                <div className="flex items-start gap-5 mb-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a8042b] to-[#a8042b]/70 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <Shield className="text-white" size={28} strokeWidth={2} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#223258] rounded-lg opacity-80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#223258]">
                      Compliance
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#a8042b] to-transparent rounded-full mt-2" />
                  </div>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Ensuring regulatory adherence and structured deal execution
                </p>
              </div>

              {/* Growth */}
              <div className="group relative">
                <div className="flex items-start gap-5 mb-5">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#223258] via-[#223258] to-[#a8042b] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <TrendingUp className="text-white" size={28} strokeWidth={2} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#a8042b] rounded-lg opacity-80 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#223258]">
                      Growth
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#a8042b] to-transparent rounded-full mt-2" />
                  </div>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Building scalable businesses through strategic partnerships
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TeamGridSection;