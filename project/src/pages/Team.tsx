import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { TeamHero } from '../components/team/Hero';
import { TeamGridSection, TeamGridMember } from '../components/team/Grid';
import { TeamCommitmentSection } from '../components/team/Commitment';
import kapilimg from '../public/kp.png';
import pr from '../public/pre.png';
export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamGridMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Static / local team data
  useEffect(() => {
    const defaultTeam: TeamGridMember[] = [


      {
        name: 'Mr. Kapil Khurana',
        title: 'Founder & Designated Partner,Aurex Ventures',
        image_url: kapilimg,

        bio: 'SIRI Certified Assessor (CSA) from IIT Delhi with expertise in Industry 4.0 and smart manufacturing. He helps organizations assess digital readiness and implement strategic transformation for sustainable industrial growth.',

        expertise: [
          'Industry 4.0',
          'Smart Manufacturing',
          'Digital Readiness Assessment',
          'Smart Industry Readiness Index (SIRI)',
        ],

        highlights: [
          'SIRI Certified Assessor (CSA) – IIT Delhi',
          'Assessor ID: 150126SN003',
          'Smart Manufacturing Strategist',
        ],
        linkedin_url: "https://www.linkedin.com/in/kapilkhuranatechnovizautomation/",
        instagram_url: "https://www.instagram.com/technovizautomation/"
      },
      {
        name: 'CS Prerna Jain',
        title: 'Founder & Designated Partner, Aurex Ventures',
        image_url: pr,

        bio: 'Practicing Company Secretary enabling startups and enterprises across incorporation, licensing, fundraising, regulatory compliance, and corporate governance.',

        expertise: [
          'Corporate Governance',
          'Startup & MSME Compliance',
        ],

        highlights: [
          'Associate Member of ICSI',
          'Startup & MSME Compliance Advisor',
          'Liaison with MCA, ROC, RBI, SEBI & NCLT',
        ],

        linkedin_url: "https://www.linkedin.com/in/pcs-prerna-jain-2890311b3/",
        instagram_url: "https://www.instagram.com/pcsprernajain/"
      },
    ];


    setTeamMembers(defaultTeam);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen ">
      <TeamHero />
      <TeamGridSection loading={loading} members={teamMembers} />
      <TeamCommitmentSection />
    </div>
  );
}
