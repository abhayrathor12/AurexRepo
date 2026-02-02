import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Image as ImageIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { previousEventsData } from "./previousEventsData";
import { PreviousEventDetail } from "./PreviousEventDetail";

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_date: string;
  location: string;
  image_url?: string;
  gallery?: string[]; // 👈 for previous event gallery
}

interface EventsListsProps {
  loading: boolean;
  upcomingEvents: Event[];
  previousEvents: Event[];
  formatDate: (date: string) => string;
}

export function EventsListsSection({
  loading,
  upcomingEvents,
  previousEvents,
  formatDate,
}: EventsListsProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedPreviousEvent, setSelectedPreviousEvent] = useState<Event | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  /* ✅ Auto-select nearest upcoming event */
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
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8042b]" />
        <p className="mt-4 text-slate-600">Loading events...</p>
      </section>
    );
  }

  /* ===== Calendar helpers ===== */
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
    upcomingEvents.find(e =>
      new Date(e.event_date).toDateString() === date.toDateString()
    );

  const { daysInMonth, startingDayOfWeek, year, month } =
    getDaysInMonth(currentMonth);

  const monthName = currentMonth.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* ================= UPCOMING EVENTS ================= */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#223258' }}>
              Upcoming Events
            </h2>
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#a8042b' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* ===== Calendar (UNCHANGED STYLING) ===== */}
            <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4" style={{ borderTop: '3px solid #223258' }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold" style={{ color: '#223258' }}>
                  {monthName}
                </h3>
                <div className="flex gap-1">
                  <button onClick={() => setCurrentMonth(new Date(year, month - 1))}>
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={() => setCurrentMonth(new Date(year, month + 1))}>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-0.5 max-w-[320px] mx-auto">
                {['S','M','T','W','T','F','S'].map((d, idx) => (
                  <div
                    key={`${d}-${idx}`}
                    className="text-center text-[10px] text-slate-500"
                  >
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
                        ${event ? (isSelected ? 'text-white scale-105 shadow' : 'text-white') : 'text-slate-600 hover:bg-slate-100'}
                      `}
                      style={event ? { backgroundColor: isSelected ? '#a8042b' : '#223258' } : {}}
                    >
                      {day}
                      {event && <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ===== RIGHT PANEL ===== */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <AnimatePresence mode="wait">
                {selectedEvent ? (
                  <motion.div
                    key={selectedEvent.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#223258' }}>
                      {selectedEvent.title}
                    </h3>
                    <p className="text-slate-600 mb-6">{selectedEvent.description}</p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} /> {formatDate(selectedEvent.event_date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} /> {selectedEvent.location}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div className="text-center">
                    <Calendar className="mx-auto mb-3 text-slate-300" size={44} />
                    <h3 className="font-bold" style={{ color: '#223258' }}>
                      Events Coming Soon
                    </h3>
                    <p className="text-slate-600">
                      We're planning exciting founder & investor meetups.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ================= PREVIOUS EVENTS ================= */}
        {previousEvents.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#223258' }}>
                Previous Events
              </h2>
              <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#a8042b' }} />
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
                    onClick={() =>
                      setSelectedPreviousEvent(isActive ? null : event)
                    }
                    className={`group relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                      ${isActive 
                        ? 'shadow-xl ring-2 ring-[#a8042b]' 
                        : 'shadow-md hover:shadow-xl'
                      }
                    `}
                  >
                    {/* Image or Gradient Header */}
                    <div 
                      className="h-40 relative overflow-hidden"
                      style={{
                        background: event.image_url 
                          ? `url(${event.image_url}) center/cover`
                          : 'linear-gradient(135deg, #223258 0%, #a8042b 100%)'
                      }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Gallery Badge */}
                      {hasGallery && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
                        >
                          <ImageIcon size={14} className="text-[#a8042b]" />
                          <span className="text-xs font-semibold text-[#223258]">
                           Photos
                          </span>
                        </motion.div>
                      )}

                      {/* Date Badge */}
                      <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-lg shadow-lg">
                        <p className="text-xs font-bold" style={{ color: '#223258' }}>
                          {new Date(event.event_date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>

                      {/* Pulse Animation on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-[#a8042b]/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="font-bold text-lg mb-2 group-hover:text-[#a8042b] transition-colors" style={{ color: '#223258' }}>
                        {event.title}
                      </h4>
                      
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      {event.location && (
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                          <MapPin size={12} />
                          <span>{event.location}</span>
                        </div>
                      )}

                      {/* Click to View Indicator */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <span className="text-xs font-semibold" style={{ color: '#a8042b' }}>
                          {isActive ? 'Viewing Details' : 'Click to View'}
                        </span>
                        <motion.div
                          animate={{ x: isActive ? 0 : [0, 5, 0] }}
                          transition={{ 
                            repeat: isActive ? 0 : Infinity, 
                            duration: 1.5,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight 
                            size={16} 
                            className={isActive ? 'text-[#a8042b]' : 'text-slate-400 group-hover:text-[#a8042b]'}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Active Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{ backgroundColor: '#a8042b' }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* ===== PREVIOUS EVENT DETAIL + GALLERY ===== */}
            <AnimatePresence>
              {selectedPreviousEvent &&
                previousEventsData[selectedPreviousEvent.slug] && (
                  <PreviousEventDetail
                    data={previousEventsData[selectedPreviousEvent.slug]}
                  />
                )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}