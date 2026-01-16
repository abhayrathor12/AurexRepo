import { Calendar, Users, Clock } from 'lucide-react';

export function EventsTypesOverview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Calendar className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Pitch Sessions</h3>
            <p className="text-slate-600 mb-4">
              Present your startup to curated angel and VC audiences
            </p>
            <span className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
              Quarterly Events
            </span>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Networking Mixers</h3>
            <p className="text-slate-600 mb-4">
              Informal meetups to build relationships with investors
            </p>
            <span className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
              Monthly Events
            </span>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-purple-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Workshops</h3>
            <p className="text-slate-600 mb-4">
              Learn fundraising strategies, compliance, and growth tactics
            </p>
            <span className="inline-block bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold">
              Bi-monthly Events
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


