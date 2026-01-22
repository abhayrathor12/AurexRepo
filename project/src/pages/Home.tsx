import { ArrowRight, TrendingUp, Building2, Shield, FileText, CheckCircle, Users, Calendar } from 'lucide-react';
import { HomeHero } from '../components/home/Hero';
import { HomeWhatWeEnable } from '../components/home/WhatWeEnable';
import { HomeProcess } from '../components/home/Process';
import { HomeAbout } from '../components/home/About';
import { HomeTeamPreview } from '../components/home/TeamPreview';
import { HomeEventsPreview } from '../components/home/EventsPreview';
import { HomeContactCTA } from '../components/home/ContactCTA';
import ModernJoinSection from '../components/home/Startups';
import { useEffect } from 'react';
export default function Home() {
  const openRegister = () => {
    const event = new CustomEvent('openRegisterModal');
    window.dispatchEvent(event);
  };
  useEffect(() => {
    const seen = localStorage.getItem('eventPopupSeen');
    if (seen) return;
  
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('openEventPopup'));

    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-4">
      <HomeHero onRegisterClick={openRegister} />

      <HomeWhatWeEnable />

      <HomeProcess />

      <HomeAbout />

      <HomeTeamPreview />
      <ModernJoinSection/>

      
      <HomeEventsPreview />
      <HomeContactCTA onRegisterClick={openRegister} />
    </div>
  );
}
