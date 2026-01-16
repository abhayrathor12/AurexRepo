import { Building2 } from 'lucide-react';

export function BusinessIncorporationSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">3. Business Incorporation</h2>
          <p className="text-xl text-slate-600 mb-8">
            Choose the right legal structure for your business with expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: 'OPC',
              description:
                'One Person Company - Ideal for solo entrepreneurs with limited liability protection',
              gradient: 'from-blue-50 to-blue-100',
              badge: 'bg-blue-600',
            },
            {
              label: 'LLP',
              description:
                'Limited Liability Partnership - Perfect for professional services and partnerships',
              gradient: 'from-green-50 to-green-100',
              badge: 'bg-green-600',
            },
            {
              label: 'Private Limited',
              description:
                'Most popular for startups seeking investor funding and growth',
              gradient: 'from-purple-50 to-purple-100',
              badge: 'bg-purple-600',
            },
            {
              label: 'Section 8',
              description:
                'For NGOs and non-profit organizations with social objectives',
              gradient: 'from-orange-50 to-orange-100',
              badge: 'bg-orange-600',
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 hover:shadow-xl transition-shadow`}
            >
              <div className={`${item.badge} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Building2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.label}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.description}</p>
              <ul className="text-xs text-slate-600 space-y-1">
                {item.label === 'OPC' && (
                  <>
                    <li>✓ Single member</li>
                    <li>✓ Limited liability</li>
                    <li>✓ Easy compliance</li>
                  </>
                )}
                {item.label === 'LLP' && (
                  <>
                    <li>✓ Flexible structure</li>
                    <li>✓ Lower compliance</li>
                    <li>✓ Tax benefits</li>
                  </>
                )}
                {item.label === 'Private Limited' && (
                  <>
                    <li>✓ Investor-friendly</li>
                    <li>✓ Credibility</li>
                    <li>✓ Fundraising ready</li>
                  </>
                )}
                {item.label === 'Section 8' && (
                  <>
                    <li>✓ Tax exemptions</li>
                    <li>✓ Non-profit focus</li>
                    <li>✓ Social impact</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


