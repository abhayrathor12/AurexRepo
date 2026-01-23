import { X, Calendar, MapPin, Clock, Users, IndianRupee } from 'lucide-react';

interface EventPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventPopup({ isOpen, onClose }: EventPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      
      {/* Animated Wrapper */}
      <div className="animate-popup relative w-full max-w-xl mx-4 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">

        {/* Top Accent Bar */}
        <div className="h-1 w-full bg-[#a8042b]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition"
        >
          <X size={18} />
        </button>

        <div className="p-6">
          {/* Badge */}
          <span className="inline-block rounded-full border border-[#223258]/20 bg-[#223258]/5 px-3 py-1 text-xs font-semibold text-[#223258]">
            Upcoming · Invite Only
          </span>

          {/* Title */}
          <h2 className="mt-4 text-2xl font-bold leading-snug text-[#223258]">
            Exclusive Fundraising Pitch Event
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm text-slate-600">
            Pitch to <strong>10–15 active Angel Investors</strong> in a closed-door,
            outcome-driven forum.
          </p>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-slate-200" />

          {/* Event Meta */}
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#a8042b]" />
              <span>30 Jan 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#a8042b]" />
              <span>9:30 AM – 4:30 PM</span>
            </div>

            <div className="flex items-center gap-2 col-span-2">
              <MapPin size={16} className="text-[#a8042b]" />
              <span>Nasscom, Gurgaon</span>
            </div>

            <div className="flex items-center gap-2">
              <IndianRupee size={16} className="text-[#a8042b]" />
              <span>₹1,000 Fee</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} className="text-[#a8042b]" />
              <span>15 Startups Only</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <div>🎯 Curated 2:1 Founder–Investor ratio</div>
            <div>🤝 Serious capital conversations</div>
            <div>💬 Real-time investor feedback</div>
          </div>

          {/* CTA */}
          <a
            href="https://luma.com/ij3hs4uq"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#223258] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1b2847]"
          >
            Apply for Registration
          </a>

          {/* Footer Note */}
          <p className="mt-3 text-center text-xs text-slate-500">
            Seats are extremely limited · Selection is merit-based
          </p>
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          .animate-popup {
            animation: popupFadeScale 0.35s ease-out;
          }

          @keyframes popupFadeScale {
            from {
              opacity: 0;
              transform: scale(0.92) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
