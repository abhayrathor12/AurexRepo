export function EventsWhyAttendSection() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Attend Our Events?</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-800 mb-3">For Startups</h3>
            <ul className="text-left text-slate-600 space-y-2">
              <li>• Direct access to investors actively looking to fund</li>
              <li>• Feedback on your pitch and business model</li>
              <li>• Network with fellow founders and mentors</li>
              <li>• Learn from successful entrepreneurs</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-800 mb-3">For Investors</h3>
            <ul className="text-left text-slate-600 space-y-2">
              <li>• Pre-screened startups with real potential</li>
              <li>• Efficient deal flow in one place</li>
              <li>• Connect with co-investors and syndicate</li>
              <li>• Early access to promising opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


