import { Users, Linkedin, Mail, Facebook } from 'lucide-react';

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

              {/* Social Icons - Repositioned for mobile */}
              <div
  className={`
    absolute z-30 flex gap-3 md:flex-col md:gap-4
    top-3 left-3
    md:top-1/2 md:-translate-y-1/2
    ${isEven ? 'md:right-6 md:left-auto' : 'md:left-6'}
  `}
>

                <a
                  href={member.linkedin_url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white text-[#0A66C2] p-3 rounded-full shadow-lg hover:scale-110 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>

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

              <div className="block md:hidden w-full h-48 sm:h-56 bg-gray-100 relative overflow-hidden">
  {member.image_url ? (
    <img
      src={member.image_url}
      alt={member.name}
      className="w-full h-full object-contain"  // <-- Change to object-contain
      style={{ objectPosition: 'center' }}     // Optional: centers the image
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <Users className="text-gray-400 opacity-30" size={64} />
    </div>
  )}
  {/* Gradient overlay on mobile image */}
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

                {/* Title - Moved up on mobile */}
                <p className="text-[#223258] text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4 md:mb-0 md:order-last">
                  {member.title}
                </p>

                {/* Bio */}
                {member.bio && (
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-5 line-clamp-3 md:line-clamp-4">
                    {member.bio}
                  </p>
                )}

                {/* Expertise - Show top 2 */}
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

                {/* Divider */}
                <div
                  className={`w-16 sm:w-24 md:w-32 h-1 bg-[#a8042b] mb-4 md:mb-6 rounded-full ${
                    isEven ? '' : 'md:ml-auto'
                  }`}
                />

                {/* Highlights */}
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

                {/* Credentials */}
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

        {/* Why Choose Section */}
        <div className="mt-8 md:mt-16 lg:mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#223258] mb-8 md:mb-10">
            Why Choose Aurex Ventures
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <div className="bg-[#223258] w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-4 md:mb-5 flex items-center justify-center shadow-md">
                <Users className="text-white" size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#223258] mb-2 md:mb-3">Expert Guidance</h3>
              <p className="text-sm md:text-base text-gray-700">
                Experienced professionals with deep startup and compliance knowledge
              </p>
            </div>

            <div>
              <div className="bg-[#a8042b] w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-4 md:mb-5 flex items-center justify-center shadow-md">
                <Linkedin className="text-white" size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#223258] mb-2 md:mb-3">Curated Network</h3>
              <p className="text-sm md:text-base text-gray-700">
                Access to vetted investors, mentors, and strategic partners
              </p>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <div className="bg-[#223258] w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto mb-4 md:mb-5 flex items-center justify-center shadow-md">
                <Mail className="text-white" size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#223258] mb-2 md:mb-3">End-to-End Support</h3>
              <p className="text-sm md:text-base text-gray-700">
                From incorporation to fundraising to compliance, we're with you
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TeamGridSection;