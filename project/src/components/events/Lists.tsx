import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Image as ImageIcon,
  Rocket,
  Users,
  Zap,
  Mic,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { previousEventsData } from "./previousEventsData";
import { PreviousEventDetail } from "./PreviousEventDetail";
import { useNavigate } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_date: string;
  location: string;
  image_url?: string | null;
  gallery?: string[];
}

interface EventsListsProps {
  loading: boolean;
  upcomingEvents: Event[];
  previousEvents: Event[];
  formatDate: (date: string) => string;
  onRegisterClick: () => void;
}

const NAVY = '#223258';
const CRIMSON = '#a8042b';

// Highlights shown for the Udbhav event card
const UDBHAV_HIGHLIGHTS = [
  { icon: <Rocket size={13} />, label: 'Pitch Sessions' },
  { icon: <Users size={13} />, label: 'Networking' },
  { icon: <Mic size={13} />, label: 'Panel Talks' },
  { icon: <Zap size={13} />, label: 'Deal Flow' },
];

export function EventsListsSection({
  loading,
  upcomingEvents,
  previousEvents,
  formatDate,
  onRegisterClick,
}: EventsListsProps) {
  const navigate = useNavigate();

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedPreviousEvent, setSelectedPreviousEvent] = useState<Event | null>(null);

  // Default to April 2026 so Udbhav is visible immediately
  const [currentMonth, setCurrentMonth] = useState(() => {
    const hasUdbhav = upcomingEvents.some(e => e.slug === 'udbhav-2026');
    return hasUdbhav || upcomingEvents.length === 0
      ? new Date(2026, 3, 1) // April 2026
      : new Date();
  });

  // Auto-select nearest upcoming event
  useEffect(() => {
    if (upcomingEvents.length > 0) {
      setSelectedEvent(upcomingEvents[0]);
    } else {
      setSelectedEvent(null);
    }
  }, [upcomingEvents]);

  if (loading) {
    return (
      <section className="py-20 px-4 text-center">
        <div
          className="inline-block animate-spin rounded-full h-12 w-12 border-b-2"
          style={{ borderColor: CRIMSON }}
        />
        <p className="mt-4 text-slate-600">Loading events...</p>
      </section>
    );
  }

  /* ── Calendar helpers ── */
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return {
      daysInMonth: new Date(year, month + 1, 0).getDate(),
      startingDayOfWeek: new Date(year, month, 1).getDay(),
      year,
      month,
    };
  };

  const getEventForDate = (date: Date) =>
    upcomingEvents.find(
      e => new Date(e.event_date).toDateString() === date.toDateString()
    );

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);

  const monthName = currentMonth.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  const isUdbhav = selectedEvent?.slug === 'udbhav-2026';

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* ═══════════════ UPCOMING EVENTS ═══════════════ */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: NAVY }}>
              Upcoming Events
            </h2>
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: CRIMSON }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* ── Calendar ── */}
            <div
              className="bg-white rounded-xl shadow-lg p-3 sm:p-4"
              style={{ borderTop: `3px solid ${NAVY}` }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold" style={{ color: NAVY }}>{monthName}</h3>
                <div className="flex gap-1">
                  <button
                    onClick={() => setCurrentMonth(new Date(year, month - 1))}
                    className="p-1 rounded hover:bg-slate-100 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setCurrentMonth(new Date(year, month + 1))}
                    className="p-1 rounded hover:bg-slate-100 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-0.5 max-w-[320px] mx-auto">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, idx) => (
                  <div key={`${d}-${idx}`} className="text-center text-[10px] text-slate-500 py-1">
                    {d}
                  </div>
                ))}

                {Array.from({ length: startingDayOfWeek }).map((_, i) => <div key={i} />)}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const date = new Date(year, month, day);
                  const event = getEventForDate(date);
                  const isSelected =
                    selectedEvent &&
                    new Date(selectedEvent.event_date).toDateString() === date.toDateString();

                  return (
                    <button
                      key={day}
                      onClick={() => event && setSelectedEvent(event)}
                      className={`aspect-square rounded flex items-center justify-center text-xs font-medium transition-all relative
                        ${event
                          ? isSelected
                            ? 'text-white scale-105 shadow'
                            : 'text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      style={event ? { backgroundColor: isSelected ? CRIMSON : NAVY } : {}}
                    >
                      {day}
                      {event && (
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-100 max-w-[320px] mx-auto">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded" style={{ backgroundColor: NAVY }} />
                  <span className="text-[10px] text-slate-500">Event day</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded" style={{ backgroundColor: CRIMSON }} />
                  <span className="text-[10px] text-slate-500">Selected</span>
                </div>
              </div>
            </div>

            {/* ── Right Panel ── */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              style={{ borderTop: `3px solid ${CRIMSON}` }}
            >
              <AnimatePresence mode="wait">
                {selectedEvent ? (
                  <motion.div
                    key={selectedEvent.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col flex-1 h-full"
                  >
                    {/* Top dark strip */}
                    {isUdbhav && (
                      <div
                        className="px-6 py-3 flex items-center gap-2"
                        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a2844 100%)` }}
                      >
                        <Zap size={12} style={{ color: '#fca5a5' }} />
                        <span className="text-xs font-semibold tracking-wide" style={{ color: '#fca5a5' }}>
                          Investor &amp; Founder Meet · April 11, 2026
                        </span>
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold mb-2 leading-tight" style={{ color: NAVY }}>
                        {selectedEvent.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {selectedEvent.description}
                      </p>

                      {/* Meta row */}
                      <div className="space-y-2.5 mb-5">
                        <div className="flex items-center gap-2.5 text-sm text-slate-700">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${NAVY}15` }}
                          >
                            <Calendar size={13} style={{ color: NAVY }} />
                          </div>
                          <span className="font-medium">{formatDate(selectedEvent.event_date)}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-slate-700">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${CRIMSON}15` }}
                          >
                            <MapPin size={13} style={{ color: CRIMSON }} />
                          </div>
                          <span className="font-medium">{selectedEvent.location}</span>
                        </div>
                      </div>

                      {/* Udbhav highlight pills */}
                      {isUdbhav && (
                        <div className="grid grid-cols-4 gap-2 mb-6">
                          {UDBHAV_HIGHLIGHTS.map((item) => (
                            <div
                              key={item.label}
                              className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl text-center"
                              style={{ backgroundColor: `${NAVY}08`, border: `1px solid ${NAVY}15` }}
                            >
                              <span style={{ color: NAVY }}>{item.icon}</span>
                              <span className="text-[10px] font-semibold text-slate-600 leading-tight">
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Pass info strip for Udbhav */}
                      {isUdbhav && (
                        <div
                          className="flex items-center justify-between px-4 py-3 rounded-xl mb-5 text-sm"
                          style={{ backgroundColor: `${CRIMSON}08`, border: `1px solid ${CRIMSON}20` }}
                        >
                          <div>
                            <p className="font-semibold" style={{ color: NAVY }}>Event Pass</p>
                            <p className="text-xs text-slate-500">General attendance</p>
                          </div>
                          <p className="text-lg font-black" style={{ color: CRIMSON }}>₹699</p>
                          <div className="w-px h-8 bg-slate-200" />
                          <div>
                            <p className="font-semibold" style={{ color: NAVY }}>Pitch Pass</p>
                            <p className="text-xs text-slate-500">Includes pitch slot</p>
                          </div>
                          <p className="text-lg font-black" style={{ color: CRIMSON }}>₹1,499</p>
                        </div>
                      )}

                      {/* CTA */}
                      {isUdbhav && (
                        <button
                          onClick={() => navigate('event-registration')}
                          className="mt-auto flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-bold transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${CRIMSON} 100%)` }}
                        >
                          <Rocket size={15} />
                          Register for Udbhav 2026
                          <ArrowRight size={14} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6 text-center"
                  >
                    <Calendar className="mx-auto mb-3 text-slate-300" size={44} />
                    <h3 className="font-bold mb-1" style={{ color: NAVY }}>Events Coming Soon</h3>
                    <p className="text-slate-600 text-sm">
                      We're planning exciting founder &amp; investor meetups.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ═══════════════ PREVIOUS EVENTS ═══════════════ */}
        {previousEvents.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: NAVY }}>
                Previous Events
              </h2>
              <div className="h-1 w-20 rounded-full" style={{ backgroundColor: CRIMSON }} />
              <p className="mt-3 text-slate-600">
                Click on any event to view photos and highlights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {previousEvents.map((event, index) => {
                const isActive = selectedPreviousEvent?.id === event.id;
                const hasGallery = previousEventsData[event.slug]?.gallery;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedPreviousEvent(isActive ? null : event)}
                    className={`group relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                      ${isActive ? 'shadow-xl ring-2 ring-[#a8042b]' : 'shadow-md hover:shadow-xl'}`}
                  >
                    {/* Image or gradient header */}
                    <div
                      className="h-40 relative overflow-hidden"
                      style={{
                        background: event.image_url
                          ? `url(${event.image_url}) center/cover`
                          : `linear-gradient(135deg, ${NAVY} 0%, ${CRIMSON} 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {hasGallery && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
                        >
                          <ImageIcon size={14} className="text-[#a8042b]" />
                          <span className="text-xs font-semibold text-[#223258]">Photos</span>
                        </motion.div>
                      )}

                      <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-lg shadow-lg">
                        <p className="text-xs font-bold" style={{ color: NAVY }}>
                          {new Date(event.event_date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>

                      <motion.div
                        className="absolute inset-0 bg-[#a8042b]/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4
                        className="font-bold text-lg mb-2 group-hover:text-[#a8042b] transition-colors"
                        style={{ color: NAVY }}
                      >
                        {event.title}
                      </h4>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{event.description}</p>

                      {event.location && (
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                          <MapPin size={12} />
                          <span>{event.location}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <span className="text-xs font-semibold" style={{ color: CRIMSON }}>
                          {isActive ? 'Viewing Details' : 'Click to View'}
                        </span>
                        <motion.div
                          animate={{ x: isActive ? 0 : [0, 5, 0] }}
                          transition={{ repeat: isActive ? 0 : Infinity, duration: 1.5, ease: 'easeInOut' }}
                        >
                          <ArrowRight
                            size={16}
                            className={isActive ? 'text-[#a8042b]' : 'text-slate-400 group-hover:text-[#a8042b]'}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{ backgroundColor: CRIMSON }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {selectedPreviousEvent && previousEventsData[selectedPreviousEvent.slug] && (
                <PreviousEventDetail data={previousEventsData[selectedPreviousEvent.slug]} />
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}