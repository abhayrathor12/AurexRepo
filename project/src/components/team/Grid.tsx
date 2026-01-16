import { Users, Linkedin, Mail } from 'lucide-react';

export interface TeamGridMember {
  id?: string;
  name: string;
  title: string;
  bio: string | null;
  image_url?: string | null;
}

interface TeamGridProps {
  loading: boolean;
  members: TeamGridMember[];
}

export function TeamGridSection({ loading, members }: TeamGridProps) {
  if (loading) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-slate-600 mt-4">Loading team members...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div
              key={member.id ?? idx}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                {member.image_url ? (
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <Users className="text-blue-600" size={48} />
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-center mb-4">{member.title}</p>
              {member.bio && (
                <p className="text-slate-600 text-center text-sm leading-relaxed">{member.bio}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Aurex Ventures</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div>
              <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Expert Guidance</h3>
              <p className="text-slate-600">
                Experienced professionals with deep startup and compliance knowledge
              </p>
            </div>
            <div>
              <div className="bg-green-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Linkedin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Curated Network</h3>
              <p className="text-slate-600">
                Access to vetted investors, mentors, and strategic partners
              </p>
            </div>
            <div>
              <div className="bg-purple-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">End-to-End Support</h3>
              <p className="text-slate-600">
                From incorporation to fundraising to compliance, we're with you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


