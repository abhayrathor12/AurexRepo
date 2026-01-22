import { useState } from 'react';
import { EventsHero } from '../components/events/Hero';
import { EventsTypesOverview } from '../components/events/TypesOverview';
import { EventsListsSection } from '../components/events/Lists';
import { EventsWhyAttendSection } from '../components/events/WhyAttend';
import UpcomingEventSection from '../components/events/NewEvent';
export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  event_type: 'upcoming' | 'previous';
  image_url: string | null;
}

// 🔹 Temporary static data
const EVENTS_DATA: Event[] = [
  {
    id: '1',
    title: 'Founder–Investor Meetup',
    description: 'Exclusive networking with VCs and founders.',
    event_date: '2026-01-30',
    location: 'Delhi',
    event_type: 'upcoming',
    image_url: null,
  },
  {
    id: '2',
    title: 'Startup Pitch Night',
    description: 'Pitch your startup to angel investors.',
    event_date: '2025-11-12',
    location: 'Delhi',
    event_type: 'previous',
    image_url: null,
  },
];

export default function Events() {
  const [loading] = useState(false);

  const upcomingEvents = EVENTS_DATA.filter(
    e => e.event_type === 'upcoming'
  );

  const previousEvents = EVENTS_DATA.filter(
    e => e.event_type === 'previous'
  );

  const openRegister = () => {
    window.dispatchEvent(new CustomEvent('openRegisterModal'));
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className="min-h-screen pt-6">
      <EventsHero />
      <EventsTypesOverview />
      <UpcomingEventSection />
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
