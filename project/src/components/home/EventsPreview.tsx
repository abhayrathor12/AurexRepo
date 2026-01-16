import React from 'react';
import { Calendar, Users, FileText, ArrowRight } from 'lucide-react';
import { AnimatedHeading } from '../AnimtedHeading';
export function HomeEventsPreview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
      <AnimatedHeading
          title="Exclusive Founder–Investor Events"
          subtitle="Connect with the right people at the right time"
        />
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}</style>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card
            title="Pitch Sessions"
            subtitle="Present your startup to curated angel and VC audiences"
            frequency="Quarterly Events"
            Icon={Calendar}
          />
          <Card
            title="Networking Mixers"
            subtitle="Informal meetups to build relationships with investors"
            frequency="Monthly Events"
            Icon={Users}
          />
          <Card
            title="Workshops"
            subtitle="Learn fundraising strategies, compliance, and growth tactics"
            frequency="Bi-monthly Events"
            Icon={FileText}
          />
        </div>

        <div className="text-center mt-12">
          <a
            href="#events"
            className="inline-flex items-center gap-2 text-[#a8042b] hover:text-[#223258] font-semibold text-lg transition-colors duration-300"
          >
            View Events Calendar <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  subtitle: string;
  frequency: string;
  Icon: React.ElementType;
};

const Card = ({ title, subtitle, frequency, Icon }: CardProps) => {
  return (
    <div className="relative group overflow-hidden w-full p-8 rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">

      {/* Hover background – RESTORED GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#a8042b] to-[#223258] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      {/* Decorative large icon (top-right) */}
      <Icon
        size={140}
        className="absolute -top-12 -right-12 text-slate-100 group-hover:text-[#a8042b]/40 group-hover:rotate-12 transition-all duration-300 z-10"
      />

      {/* Main icon */}
      <Icon
        size={28}
        className="relative z-10 mb-4 text-[#a8042b] group-hover:text-white transition-colors duration-300"
      />

      <h3 className="relative z-10 font-bold text-xl text-[#223258] group-hover:text-white transition-colors duration-300 mb-2">
        {title}
      </h3>

      <p className="relative z-10 text-slate-600 group-hover:text-white/90 transition-colors duration-300 mb-4">
        {subtitle}
      </p>

      <span className="relative z-10 text-sm text-slate-500 group-hover:text-white/80 transition-colors duration-300">
        {frequency}
      </span>

      {/* Accent bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#a8042b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

export default HomeEventsPreview;
