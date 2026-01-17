import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { TeamHero } from '../components/team/Hero';
import { TeamGridSection, TeamGridMember } from '../components/team/Grid';
import { TeamCommitmentSection } from '../components/team/Commitment';
import kapilimg from '../public/kp.png';
import pr from '../public/pr1.png'
export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamGridMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Static / local team data
  useEffect(() => {
    const defaultTeam: TeamGridMember[] = [
      
    
      {
        name: 'Mr. Kapil Khurana',
        title: 'Senior Advisor & Mentor',
        image_url: kapilimg,
    
        bio: 'Senior advisor supporting founders with strategic guidance, governance insights, and long-term business planning.',
    
        expertise: [
          'Business Strategy',
          'Founder Mentorship',
        ],
    
        highlights: [
          'Mentors early-stage founders',
          'Supports scale-up & decision-making',
          'Focus on sustainable growth models',
        ],
      },
      {
        name: 'CS Prerna Jain',
        title: 'Founder & Head – P.A.J & Co.',
        image_url: pr,
    
        bio: 'Practicing Company Secretary and Founder of P.A.J & Co., advising startups and enterprises on corporate governance, regulatory compliance, and risk mitigation.',
    
        expertise: [
          'Corporate Governance',
  'Startup & MSME Compliance',
        ],
    
        highlights: [
          'Associate Member of ICSI',
          'Startup & MSME Compliance Advisor',
          'Liaison with MCA, ROC, RBI, SEBI & NCLT',
        ],
    
       
      },
    ];
    

    setTeamMembers(defaultTeam);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen pt-6">
      <TeamHero />
      <TeamGridSection loading={loading} members={teamMembers} />
      <TeamCommitmentSection />
    </div>
  );
}
