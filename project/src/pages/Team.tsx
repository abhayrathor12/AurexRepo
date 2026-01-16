import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { TeamHero } from '../components/team/Hero';
import { TeamGridSection, TeamGridMember } from '../components/team/Grid';
import { TeamCommitmentSection } from '../components/team/Commitment';

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamGridMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Static / local team data
  useEffect(() => {
    const defaultTeam: TeamGridMember[] = [
      {
        name: 'CS Prerna Jain',
        title: 'Founder & Head – P.A.J & Co.',
        bio: 'Company Secretary & Compliance Expert with extensive experience in corporate governance and regulatory frameworks.',
      },
      {
        name: 'Kapil Sir',
        title: 'Senior Advisor & Mentor',
        bio: 'Guiding business strategy and operational excellence with years of industry leadership.',
      },
    ];

    setTeamMembers(defaultTeam);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <TeamHero />
      <TeamGridSection loading={loading} members={teamMembers} />
      <TeamCommitmentSection />
    </div>
  );
}
