import { X, Building2, TrendingUp } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-aurex-primary bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-aurex-background rounded-2xl max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-aurex-primary"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-aurex-primary mb-2">Join Aurex Ventures</h2>
        <p className="text-slate-600 mb-8">Choose how you'd like to register with us</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-slate-200 rounded-xl p-6 hover:border-aurex-primary hover:shadow-lg transition-all cursor-pointer">
            <div className="bg-aurex-primaryLight bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="text-aurex-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-aurex-primary mb-2">Register as Startup</h3>
            <p className="text-slate-600 mb-4">
              Get access to fundraising support, curated investor connections, and compliance guidance.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-slate-600">
              <li>✓ Pitch deck review</li>
              <li>✓ Investor readiness assessment</li>
              <li>✓ Curated investor access</li>
              <li>✓ Compliance support</li>
            </ul>
            <a
              href="mailto:aurexventures@zohomail.in?subject=Startup Registration Interest"
              className="block w-full bg-aurex-primary text-white text-center px-6 py-3 rounded-lg hover:bg-aurex-primarySoft transition-colors font-medium"
            >
              Apply Now
            </a>
          </div>

          <div className="border-2 border-slate-200 rounded-xl p-6 hover:border-aurex-accent hover:shadow-lg transition-all cursor-pointer">
            <div className="bg-aurex-accentLight w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-aurex-accent" size={24} />
            </div>
            <h3 className="text-xl font-bold text-aurex-primary mb-2">Join as Investor</h3>
            <p className="text-slate-600 mb-4">
              Access curated deal flow from vetted startups aligned with your investment thesis.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-slate-600">
              <li>✓ Pre-screened startups</li>
              <li>✓ Curated deal flow</li>
              <li>✓ Exclusive pitch events</li>
              <li>✓ Confidential process</li>
            </ul>
            <a
              href="mailto:aurexventures@zohomail.in?subject=Investor Registration Interest"
              className="block w-full bg-aurex-accent text-white text-center px-6 py-3 rounded-lg hover:bg-aurex-accentSoft transition-colors font-medium"
            >
              Join Network
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-500 text-center mt-6">
          By registering, you agree to be contacted by Aurex Ventures regarding your application.
        </p>
      </div>
    </div>
  );
}
