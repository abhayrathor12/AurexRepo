import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export  function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#223258] via-[#2a4070] to-[#223258] py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a8042b]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a8042b]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Mail className="absolute top-20 left-[10%] w-8 h-8 text-white/20 animate-float" />
        <MessageSquare className="absolute top-40 right-[15%] w-10 h-10 text-[#a8042b]/30 animate-float-delay-1" />
        <Phone className="absolute bottom-32 left-[20%] w-7 h-7 text-white/20 animate-float-delay-2" />
        <MapPin className="absolute bottom-20 right-[25%] w-9 h-9 text-[#a8042b]/30 animate-float" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in border border-white/20">
          <div className="w-2 h-2 bg-[#a8042b] rounded-full animate-pulse"></div>
          <span className="text-white/90 text-sm font-medium">We're Online & Ready to Help</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
          Let's Start a
          <span className="block text-[#a8042b] animate-fade-in-delay-1 drop-shadow-lg">
            Conversation
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay-1">
          Have questions? Need support? Or just want to say hello? 
          <span className="block mt-2 text-white/80">We're here and excited to hear from you.</span>
        </p>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up-delay-2">
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="bg-[#a8042b]/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-[#a8042b]" />
            </div>
            <h3 className="text-white font-semibold text-base mb-1">Call Us</h3>
            <p className="text-white/70 text-xs">Mon-Fri 9AM-6PM</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="bg-[#a8042b]/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-[#a8042b]" />
            </div>
            <h3 className="text-white font-semibold text-base mb-1">Email Us</h3>
            <p className="text-white/70 text-xs">We'll respond within 24hrs</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="bg-[#a8042b]/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-[#a8042b]" />
            </div>
            <h3 className="text-white font-semibold text-base mb-1">Visit Us</h3>
            <p className="text-white/70 text-xs">Find our location</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite 1s;
        }

        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite 2s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.3s backwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delay-1 {
          animation: slide-up 0.8s ease-out 0.2s backwards;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s backwards;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}