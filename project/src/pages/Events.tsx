import { useState } from 'react';
import { EventsHero } from '../components/events/Hero';
import { EventsTypesOverview } from '../components/events/TypesOverview';
import { EventsListsSection } from '../components/events/Lists';
import { EventsWhyAttendSection } from '../components/events/WhyAttend';

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_date: string;
  location: string;
  image_url: string | null;
}

const EVENTS_DATA: Event[] = [
  // ── Upcoming ──────────────────────────────────────────────────────────────
  {
    id: '2',
    slug: 'udbhav-2026',
    title: 'Udbhav – Investor & Founder Meet 2026',
    description:
      'A curated gathering of startups, investors, and ecosystem leaders built for real conversations and real opportunities. Featuring live pitch sessions, panel discussions, and focused networking.',
    event_date: '2026-04-18',
    location: 'Delhi, NCR',
    image_url: null,
  },
  {
    id: '3',
    slug: 'fundraising-webinar-2026',
    title: 'Fundraising 101: From Idea to First Investor',
    description:
      'A focused and practical free webinar designed to help early-stage founders navigate the realities of raising capital — from investor readiness to identifying the right investors and closing your first round.',
    event_date: '2026-04-24',
    location: 'Online (Zoom)',
    image_url: null,
  },
  // ── Previous ──────────────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'funding-tathastu-jan-2026',
    title: 'Founder–Investor Meetup',
    description: 'Exclusive networking with VCs and founders.',
    event_date: '2026-01-30',
    location: 'HARTRON | IAMAI | NASSCOM',
    image_url:
      'https://lh3.googleusercontent.com/pw/AP1GczPNLrZobmCthDzwG1CnCjr_yApqThBtZuhjqO6X6iqqiE77CUOfuy1fxAmJHsJ32i4hK28EpQVjmAVbqNxM6It3bZXtpzMibRSn58DLfF6L0yKSa-KCaQp1QhmXRAkbz_2DY_edpfs68ZCPYRHixkYEOQ=w1079-h607-s-no-gm?authuser=0',
  },
];

export default function Events() {
  const [loading] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = EVENTS_DATA
    .filter(e => new Date(e.event_date) >= today)
    .sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime());

  const previousEvents = EVENTS_DATA
    .filter(e => new Date(e.event_date) < today)
    .sort((a, b) => new Date(b.event_date).getTime() - new Date(a.event_date).getTime());

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
    <div className="min-h-screen">
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