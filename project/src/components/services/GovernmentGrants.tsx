export function GovernmentGrantsSection() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">2. Government Grants & Schemes</h2>
          <p className="text-xl text-slate-600 mb-8">
            Access non-dilutive funding through government programs tailored to your sector.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-slate-800 mb-6">Sector-wise Government Grants for Startups</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h5 className="font-bold text-slate-800 mb-3">Technology & Innovation</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• SISFS (Startup India Seed Fund)</li>
                <li>• NIDHI Scheme</li>
                <li>• Technology Development Fund</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h5 className="font-bold text-slate-800 mb-3">Manufacturing</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• CLCSS Scheme</li>
                <li>• PM Mudra Yojana</li>
                <li>• Stand-Up India</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h5 className="font-bold text-slate-800 mb-3">Agriculture & Food</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• NABARD Schemes</li>
                <li>• Agri-Business Incubation</li>
                <li>• Food Processing Grants</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h5 className="font-bold text-slate-800 mb-3">Healthcare & Biotech</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• BIRAC Grants</li>
                <li>• SBIRI Scheme</li>
                <li>• Health Innovation Fund</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h5 className="font-bold text-slate-800 mb-3">Clean Energy</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• MNRE Schemes</li>
                <li>• Solar Rooftop Subsidy</li>
                <li>• Green Innovation Fund</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h5 className="font-bold text-slate-800 mb-3">Women Entrepreneurs</h5>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Mahila Udyam Nidhi</li>
                <li>• Stand-Up India</li>
                <li>• TREAD Scheme</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 italic mt-6 border-l-4 border-purple-500 pl-4">
            Disclaimer: Grant assistance is eligibility-based and subject to government approval.
          </p>
        </div>
      </div>
    </section>
  );
}


