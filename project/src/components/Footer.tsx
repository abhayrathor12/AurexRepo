import aurexLogo from '../public/aurex2.png';
export default function Footer() {
  return (
    <footer className="relative bg-[#223258] text-white mt-16 overflow-hidden">
      {/* Accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a8042b] via-[#a8042b] to-transparent"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
  <img
    src={aurexLogo}  // or /logo.png
    alt="Aurex Ventures Logo"
    className="h-14 w-auto object-contain"
  />
</div>
            <p className="text-[#a8042b] font-semibold mb-3 tracking-wide">
              Capital • Compliance • Growth
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              A startup-focused advisory and facilitation platform providing end-to-end business consulting to help your venture thrive.
            </p>
            
            {/* Social links placeholder */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#a8042b] transition-colors duration-300 flex items-center justify-center group">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#a8042b] transition-colors duration-300 flex items-center justify-center group">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#a8042b] transition-colors duration-300 flex items-center justify-center group">
                <span className="text-sm">✉</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold mb-5 text-white text-lg relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#a8042b] -mb-2"></span>
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-slate-300 hover:text-[#a8042b] text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Home
              </a>
              <a href="#services" className="text-slate-300 hover:text-[#a8042b] text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Services
              </a>
              <a href="#team" className="text-slate-300 hover:text-[#a8042b] text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Team
              </a>
              <a href="#events" className="text-slate-300 hover:text-[#a8042b] text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Events
              </a>
              <a href="#contact" className="text-slate-300 hover:text-[#a8042b] text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="font-bold mb-5 text-white text-lg relative inline-block">
              Get Started
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#a8042b] -mb-2"></span>
            </h4>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Ready to accelerate your startup journey?
              </p>
              <a 
                href="#services" 
                className="inline-block bg-[#a8042b] hover:bg-[#8a0323] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#a8042b]/30"
              >
                Register Now
              </a>
              <div className="pt-2">
                <a href="#contact" className="text-slate-300 hover:text-white text-sm flex items-center gap-2 transition-colors">
                  <span>📧</span>
                  <span>contact@aurexventures.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="space-y-4">
          <p className="text-slate-400 text-xs text-center max-w-3xl mx-auto leading-relaxed">
            Disclaimer: Aurex Ventures does not guarantee funding outcomes. All services are subject to eligibility and regulatory approvals. Please consult with appropriate advisors for your specific situation.
          </p>
          <p className="text-slate-400 text-sm text-center font-medium">
            © {new Date().getFullYear()} Aurex Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}