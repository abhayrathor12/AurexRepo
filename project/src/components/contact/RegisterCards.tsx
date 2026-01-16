interface ContactRegisterCardsProps {
  onRegisterClick: () => void;
}

export function ContactRegisterCardsSection({ onRegisterClick }: ContactRegisterCardsProps) {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Ready to Register?</h2>
          <p className="text-xl text-slate-600">
            Join our community of founders and investors today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-blue-600 text-2xl font-bold">S</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">For Startups</h3>
            <p className="text-slate-600 mb-6">
              Get access to funding opportunities, investor connections, and compliance support
            </p>
            <button
              onClick={onRegisterClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Register as Startup
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-green-600 text-2xl font-bold">I</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">For Investors</h3>
            <p className="text-slate-600 mb-6">
              Access curated deal flow from pre-screened startups aligned with your investment thesis
            </p>
            <button
              onClick={onRegisterClick}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Join as Investor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


