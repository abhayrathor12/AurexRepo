import { TrendingUp, Building2, DollarSign, Receipt, Wrench, Briefcase, CreditCard, Users, Lightbulb, Rocket, Building, Target } from 'lucide-react';

export  function FundingAdvisorySection() {
  const services = [
    {
      title: 'Term Loans',
      desc: 'Fixed repayment schedules with competitive rates',
      icon: CreditCard,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Working Capital',
      desc: 'Short-term financing for operations',
      icon: DollarSign,
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Invoice Financing',
      desc: 'Unlock cash from unpaid invoices',
      icon: Receipt,
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Equipment Loans',
      desc: 'Loans secured against machinery',
      icon: Wrench,
      color: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      title: 'MSME Loans',
      desc: 'Government-backed small business loans',
      icon: Briefcase,
      color: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Revenue-Based',
      desc: 'Repayment based on monthly revenue',
      icon: TrendingUp,
      color: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      title: 'Angel Investors',
      desc: 'Individual investors providing seed capital',
      icon: Users,
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      title: 'Venture Capital',
      desc: 'Professional investors for scalable startups',
      icon: Rocket,
      color: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      title: 'Private Equity',
      desc: 'Large investments for established businesses',
      icon: Building,
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Accelerators',
      desc: 'Structured programs with mentorship',
      icon: Lightbulb,
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      title: 'Corporate VCs',
      desc: 'Strategic investments from corporations',
      icon: Building2,
      color: 'bg-violet-50',
      iconColor: 'text-violet-600'
    },
    {
      title: 'Family Offices',
      desc: 'High-net-worth family investments',
      icon: Target,
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600">
            Comprehensive funding solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className={`${service.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${service.iconColor} w-8 h-8`} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-sm">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}