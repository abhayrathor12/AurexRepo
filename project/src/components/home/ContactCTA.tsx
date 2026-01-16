import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Settings } from 'lucide-react';
import { AnimatedHeading } from '../AnimtedHeading';
interface ContactCTAProps {
  onRegisterClick: () => void;
}

import mail from '../../public/mail.png';

export function HomeContactCTA({ onRegisterClick }: ContactCTAProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content - Compact */}
          <div>
            
<AnimatedHeading
          title="Start the Conversation"
          subtitle="Ready to grow your startup?"
        />

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="bg-[#223258] text-white p-3 rounded-lg shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-semibold text-[#223258] text-sm">
                    +91 96259 15947 • +91 99997 65380
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="bg-[#223258] text-white p-3 rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-[#223258] text-sm break-all">
                    aurexventures@zohomail.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="bg-[#223258] text-white p-3 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-semibold text-[#223258] text-sm">
                    Paras Trade Centre, Gurgaon
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onRegisterClick}
              className="bg-[#a8042b] text-white px-8 py-3.5 rounded-lg hover:bg-[#8a0323] transition-all font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register With Us
            </button>
          </div>

          {/* Right Animation - Bigger envelope */}
          <div className="relative flex items-center justify-center min-h-[420px] lg:min-h-[480px] overflow-hidden">

          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] scale-100 sm:scale-110 lg:scale-125">


              {/* Bigger base envelope */}
              <img
                src={mail}
                alt="Open Mail"
                className="w-full h-full object-contain drop-shadow-2xl"
              />

              {/* ── Floating elements (unchanged) ── */}
              <div className="absolute top-4 -left-2 animate-float">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <Mail className="w-7 h-7 text-[#223258]" />
                </div>
              </div>

              <div className="absolute top-1/2 left-2 sm:-left-6 animate-float delay-100">
                <div className="bg-[#a8042b] text-white px-4 py-2 rounded-xl shadow-xl font-bold flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  24/7
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float delay-200">
                <div className="bg-green-500 text-white rounded-full p-5 shadow-xl">
                  <Phone className="w-7 h-7" />
                </div>
              </div>

              <div className="absolute top-1/3 -right-2 animate-float delay-300">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <Settings
                    className="w-6 h-6 text-[#223258] animate-spin"
                    style={{ animationDuration: '8s' }}
                  />
                </div>
              </div>

              <div className="absolute top-16 right-10 animate-float delay-150">
                <div className="bg-blue-600 text-white rounded-2xl px-4 py-2 shadow-xl">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Animations */}
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50%      { transform: translateY(-18px); }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
              .delay-100  { animation-delay: 0.4s; }
              .delay-150  { animation-delay: 0.6s; }
              .delay-200  { animation-delay: 0.8s; }
              .delay-300  { animation-delay: 1.2s; }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}