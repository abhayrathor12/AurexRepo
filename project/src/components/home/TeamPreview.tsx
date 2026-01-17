import { ArrowUpRight, Linkedin, Twitter, Globe } from "lucide-react";
import prernaJain from "../../public/1.png";
import kapilSir from "../../public/2.png";
import { AnimatedHeading } from '../AnimtedHeading';
import { useNavigate } from "../Router";
export function HomeTeamPreview() {
  const navigate = useNavigate();
  const teamMembers = [
    
    {id: "kapil-khurana",
      name: "Mr. Kapil Khurana",
      role: "Senior Advisor & Mentor",
      description:
        "Strategic advisor with strong expertise in business leadership and operational excellence.",
      image: kapilSir,
    },
    {
      id: "prerna-jain",
      name: "CS Prerna Jain",
      role: "Founder & Head – P.A.J & Co. | Company Secretary",
      description:
        "Practicing Company Secretary specializing in corporate compliance, governance, and regulatory advisory for startups and growing enterprises.",
      image: prernaJain,
    }
  ];
  
  

  return (
    <section className="py-10 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
      <AnimatedHeading
          title=" Meet Our Team"
          subtitle="Experienced professionals dedicated to your success"
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden">
              
              {/* IMAGE (always clean) */}
              <img
                src={member.image}
                alt={member.name}
                className="max-h-[420px] w-auto mx-auto object-contain"
              />

              {/* SLIDE-UP OVERLAY */}
              <div className="
                absolute inset-0 
                flex items-end
                translate-y-full 
                group-hover:translate-y-0
                transition-transform duration-500 ease-out
              ">
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* CONTENT */}
                <div className="relative p-6 text-white w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-sm uppercase tracking-wide opacity-90">
                        {member.role}
                      </p>
                    </div>

                    <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white flex items-center justify-center transition">
                      <ArrowUpRight  onClick={() => navigate('team')} className="w-5 h-5 text-white hover:text-slate-900" />
                    </button>
                  </div>

                  <p className="text-sm opacity-90 mb-4">
                    {member.description}
                  </p>

                  <div className="flex gap-3">
                    <a className="w-9 h-9 bg-white/20 hover:bg-white rounded-lg flex items-center justify-center transition">
                      <Twitter className="w-4 h-4 text-white hover:text-slate-900" />
                    </a>
                    <a className="w-9 h-9 bg-white/20 hover:bg-white rounded-lg flex items-center justify-center transition">
                      <Linkedin className="w-4 h-4 text-white hover:text-blue-600" />
                    </a>
                    <a className="w-9 h-9 bg-white/20 hover:bg-white rounded-lg flex items-center justify-center transition">
                      <Globe className="w-4 h-4 text-white hover:text-slate-900" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
