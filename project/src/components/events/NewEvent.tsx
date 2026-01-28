import { ArrowRight, Calendar, MapPin, Clock, Users, CheckCircle, Rocket, Sparkles } from 'lucide-react';
import { useState } from 'react';
import brochurePdf from "../../pdfs/Event Brochure.pdf";
import { AnimatedHeading } from '../AnimtedHeading'; // Fixed typo in comment
import eventimage from "../../public/eventpic1.jpeg";

export default function UpcomingEventSection() {
  const [hoveredAgenda, setHoveredAgenda] = useState<number | null>(null);

  const openRegister = () => {
    const event = new CustomEvent('openRegisterModal');
    window.dispatchEvent(event);
  };

  const agendaItems = [
    { time: "09:00", title: "Filling the crowd" },
    { time: "10:00", title: "Welcome note by organizer" },
    { time: "10:30", title: "Breakfast" },
    { time: "11:00", title: "Pitching" },
    { time: "02:00", title: "Panel Discussion" },
    { time: "02:30", title: "Official launch of Aurex Ventures and Lunch" },
    { time: "03:00", title: "Open Networking" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedHeading
          title="Upcoming Event: Exclusive Fundraising Pitch"
          subtitle="Join our invite-only event limited to 10 high-potential startups pitching to 10 active angel investors"
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Column - Event Details & Agenda */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Event Details Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-[#223258] p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#a8042b] p-2.5 rounded-xl shadow-md">
                  <Rocket className="text-white" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-[#223258]">
                  Pitch Directly to Investors
                </h3>
              </div>

              <p className="text-base text-slate-700 mb-6 leading-relaxed">
                An outcome-driven fundraising forum with near-term capital deployment intent. Curated 1:1 founder-investor ratio for maximum impact.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <Calendar className="text-[#a8042b] flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Date</p>
                    <p className="text-[#223258] font-semibold text-sm">30th Jan 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <MapPin className="text-[#a8042b] flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Venue</p>
                    <p className="text-[#223258] font-semibold text-sm">​HARTRON | IAMAI | NASSCOM</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <Clock className="text-[#a8042b] flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Duration</p>
                    <p className="text-[#223258] font-semibold text-sm">9:00 AM - 3:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <Users className="text-[#a8042b] flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Capacity</p>
                    <p className="text-[#223258] font-semibold text-sm">10 + 10 Limited</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  
                  {/* Register Button */}
                  <button
                    type="button"
                    onClick={() => window.open("https://lu.ma/ij3hs4uq", "_blank", "noopener,noreferrer")}
                    className="group bg-[#a8042b] text-white px-6 py-3 rounded-xl hover:bg-[#8a0323] transition-all font-semibold text-base shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Register Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>

                  {/* Download Brochure Button */}
                  <a
                    href={brochurePdf}
                    download
                    className="group border-2 border-aurex-primary text-aurex-primary px-6 py-3 rounded-xl hover:bg-aurex-primary hover:text-white transition-all font-semibold text-base shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Download Brochure
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>

                </div>
            </div>

            {/* Agenda Card - CHANGED: 2 columns on md+ screens */}
            <div className="bg-[#223258] rounded-2xl shadow-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-5 flex items-center gap-2">
                <CheckCircle className="text-[#a8042b]" size={24} />
                Event Agenda
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {agendaItems.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredAgenda(idx)}
                    onMouseLeave={() => setHoveredAgenda(null)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                      hoveredAgenda === idx
                        ? 'bg-white/10 translate-x-2 shadow-md'
                        : 'bg-white/5'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-16 text-center py-1.5 rounded-md font-bold text-sm transition-colors ${
                      hoveredAgenda === idx
                        ? 'bg-[#a8042b] text-white'
                        : 'bg-white/10 text-white/80'
                    }`}>
                      {item.time}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-sm line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                    <ArrowRight 
                      className={`flex-shrink-0 transition-all text-[#a8042b] ${
                        hoveredAgenda === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`} 
                      size={16} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Event Image (unchanged) */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl  group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#223258]/80 via-[#223258]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={eventimage}
                  alt="Aurex Ventures Event"
                  className="w-full h-[500px] object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-[#223258] to-transparent">
                    <div className="flex items-center gap-2 text-white mb-2 justify-end">
                      <Sparkles className="text-[#a8042b]" size={20} />
                      <span className="font-bold text-lg">​HARTRON | IAMAI | NASSCOM</span>
                    </div>
                    <p className="text-white/90 text-sm text-right">
                      Exclusive invite-only pitching event
                    </p>
                  </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[#223258] font-semibold text-lg">Event Highlights</p>
                <p className="text-slate-600 text-sm mt-1">January 30, 2026 • Nasscom Gurgaon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
