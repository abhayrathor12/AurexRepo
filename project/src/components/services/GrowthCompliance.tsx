import { CheckCircle, FileText, Shield, Award, TrendingUp } from 'lucide-react';

export function GrowthComplianceSection() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">4. Growth, Protection & Compliance</h2>
          <p className="text-xl text-slate-600 mb-8">
            Comprehensive support to scale your business while staying compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-green-100 p-4 rounded-xl mb-4 inline-block">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Startup India & MSME</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• Startup India Registration</li>
              <li>• MSME/Udyam Registration</li>
              <li>• Tax exemptions & benefits</li>
              <li>• Priority in government tenders</li>
              <li>• Access to credit support</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 p-4 rounded-xl mb-4 inline-block">
              <FileText className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">GST / ESIC / EPF / IEC</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• GST Registration & Filing</li>
              <li>• ESIC & EPF Compliance</li>
              <li>• IEC for Import/Export</li>
              <li>• Professional Tax</li>
              <li>• Ongoing compliance support</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 p-4 rounded-xl mb-4 inline-block">
              <Shield className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">IP Protection</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• Trademark Registration</li>
              <li>• Copyright Protection</li>
              <li>• Patent Filing & Support</li>
              <li>• Design Registration</li>
              <li>• IP strategy consultation</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 p-4 rounded-xl mb-4 inline-block">
              <FileText className="text-orange-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">ROC Compliance</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• Annual Return Filing</li>
              <li>• Board Meeting Minutes</li>
              <li>• Director Appointment/Removal</li>
              <li>• Share Transfer & Allotment</li>
              <li>• Statutory registers maintenance</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-red-100 p-4 rounded-xl mb-4 inline-block">
              <Award className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">FEMA Compliance</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• Foreign Investment Approval</li>
              <li>• FEMA Advisory</li>
              <li>• FDI Compliance</li>
              <li>• Overseas Investment</li>
              <li>• RBI reporting & filings</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 p-4 rounded-xl mb-4 inline-block">
              <TrendingUp className="text-teal-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Valuation Services</h3>
            <ul className="text-slate-600 space-y-2">
              <li>• Pre-money valuation</li>
              <li>• 409A valuations</li>
              <li>• Fairness opinions</li>
              <li>• M&A valuations</li>
              <li>• Regulatory compliance valuation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


