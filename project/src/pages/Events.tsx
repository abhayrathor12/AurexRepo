import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { EventsHero } from '../components/events/Hero';
import { EventsTypesOverview } from '../components/events/TypesOverview';
import { EventsListsSection } from '../components/events/Lists';
import { EventsWhyAttendSection } from '../components/events/WhyAttend';

export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  event_type: string;
  image_url: string | null;
}

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [previousEvents, setPreviousEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false });

      if (error) throw error;

      const upcoming = data?.filter(e => e.event_type === 'upcoming') || [];
      const previous = data?.filter(e => e.event_type === 'previous') || [];

      setUpcomingEvents(upcoming);
      setPreviousEvents(previous);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  };

  const openRegister = () => {
    const event = new CustomEvent('openRegisterModal');
    window.dispatchEvent(event);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <EventsHero />
      <EventsTypesOverview />
      <EventsListsSection
        loading={loading}
        upcomingEvents={upcomingEvents}
        previousEvents={previousEvents}
        formatDate={formatDate}
        onRegisterClick={openRegister}
      />
      <EventsWhyAttendSection />
    </div>
  );
}
