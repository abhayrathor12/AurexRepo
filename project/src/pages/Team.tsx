import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { TeamHero } from '../components/team/Hero';
import { TeamGridSection, TeamGridMember } from '../components/team/Grid';
import { TeamCommitmentSection } from '../components/team/Commitment';

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamGridMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setTeamMembers(data || []);
    } catch (error) {
      console.error('Error loading team members:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultTeam: TeamGridMember[] = [
    { name: 'CS Prerna Jain', title: 'Coming Soon', bio: null },
    { name: 'Kapil Sir', title: 'Coming Soon', bio: null }
  ];

  const displayTeam = teamMembers.length > 0 ? teamMembers : defaultTeam;

  return (
    <div className="min-h-screen pt-20">
      <TeamHero />
      <TeamGridSection loading={loading} members={displayTeam} />
      <TeamCommitmentSection />
    </div>
  );
}
