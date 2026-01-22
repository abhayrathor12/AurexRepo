import { Calendar, MapPin, ArrowRight, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  image_url?: string;
}

interface EventsListsProps {
  loading: boolean;
  upcomingEvents: Event[];
  previousEvents: Event[];
  formatDate: (date: string) => string;
  onRegisterClick: () => void;
}

export function EventsListsSection({
  loading,
  upcomingEvents,
  previousEvents,
  formatDate,
  onRegisterClick,
}: EventsListsProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(
    upcomingEvents.length > 0 ? upcomingEvents[0] : null
  );
  const [currentMonth, setCurrentMonth] = useState(new Date());

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8042b]"></div>
            <p className="text-slate-600 mt-4 font-medium">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return {
      daysInMonth: lastDay.getDate(),
      startingDayOfWeek: firstDay.getDay(),
      year,
      month,
    };
  };

  const getEventForDate = (date: Date) => {
    return upcomingEvents.find((event) => {
      const eventDate = new Date(event.event_date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#223258' }}>
                Upcoming Events
              </h2>
              <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#a8042b' }}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Very Compact Calendar */}
              <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4" style={{ borderTop: '3px solid #223258' }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: '#223258' }}>
                    {monthName}
                  </h3>
                  <div className="flex gap-1">
                    <button
                      onClick={prevMonth}
                      className="w-7 h-7 rounded flex items-center justify-center hover:bg-slate-100 transition-colors"
                      style={{ color: '#223258' }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextMonth}
                      className="w-7 h-7 rounded flex items-center justify-center hover:bg-slate-100 transition-colors"
                      style={{ color: '#223258' }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-0.5 max-w-[280px] sm:max-w-[320px] mx-auto">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                    <div
                      key={day}
                      className="text-center text-[9px] sm:text-[10px] font-medium text-slate-500 py-0.5"
                    >
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: startingDayOfWeek }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square"></div>
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const date = new Date(year, month, day);
                    const event = getEventForDate(date);
                    const isToday = new Date().toDateString() === date.toDateString();
                    const isSelected =
                      selectedEvent &&
                      new Date(selectedEvent.event_date).toDateString() === date.toDateString();

                    return (
                      <button
                        key={day}
                        onClick={() => event && setSelectedEvent(event)}
                        className={`aspect-square rounded flex items-center justify-center text-xs font-medium transition-all relative
                          ${
                            event
                              ? isSelected
                                ? 'text-white shadow scale-105'
                                : 'text-white hover:scale-105 hover:shadow-sm'
                              : isToday
                              ? 'bg-slate-200 text-slate-800 font-semibold'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        style={
                          event
                            ? {
                                backgroundColor: isSelected ? '#a8042b' : '#223258',
                              }
                            : {}
                        }
                      >
                        {day}
                        {event && (
                          <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full border border-white/40"></div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 pt-2 text-[10px] text-slate-500 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded" style={{ backgroundColor: '#223258' }}></div>
                    Event
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded" style={{ backgroundColor: '#a8042b' }}></div>
                    Selected
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  {selectedEvent ? (
                    <motion.div
                      key={selectedEvent.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {selectedEvent.image_url && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={selectedEvent.image_url}
                            alt={selectedEvent.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          <div
                            className="absolute top-4 right-4 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg"
                            style={{ backgroundColor: '#a8042b' }}
                          >
                            Upcoming
                          </div>
                        </div>
                      )}

                      <div className="p-5 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#223258' }}>
                          {selectedEvent.title}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                          {selectedEvent.description}
                        </p>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: '#223258' }}
                            >
                              <Calendar className="text-white" size={16} />
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 font-medium mb-1">Date & Time</p>
                              <p className="font-bold text-sm sm:text-base" style={{ color: '#223258' }}>
                                {formatDate(selectedEvent.event_date)}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: '#a8042b' }}
                            >
                              <MapPin className="text-white" size={16} />
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 font-medium mb-1">Location</p>
                              <p className="font-bold text-sm sm:text-base text-slate-700">
                                {selectedEvent.location}
                              </p>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => window.open("https://lu.ma/ij3hs4uq", "_blank", "noopener,noreferrer")}
                          className="w-full text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                          style={{ backgroundColor: '#223258' }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a8042b')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#223258')}
                        >
                          Register Interest
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex items-center justify-center p-6 text-center"
                    >
                      <div>
                        <Calendar className="mx-auto mb-3 text-slate-300" size={40} />
                        <p className="text-slate-500 text-sm">
                          Select an event date
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {previousEvents.length > 0 && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#223258' }}>
                Previous Events
              </h2>
              <div className="h-1 w-20 rounded-full bg-slate-300"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {previousEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md"
                >
                  {event.image_url && (
                    <div className="relative h-36 sm:h-40 overflow-hidden">
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  )}

                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#223258' }}>
                      {event.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">{event.description}</p>

                    <div className="flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
                      <Calendar size={14} />
                      <span className="font-medium">{formatDate(event.event_date)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {upcomingEvents.length === 0 && previousEvents.length === 0 && !loading && (
          <div className="text-center py-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: '#223258' }}
              >
                <Calendar className="text-white" size={40} />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#223258' }}>
                No Events Yet
              </h3>
              <p className="text-slate-600 mb-8">
                Exciting events are being planned. Register your interest to get notified!
              </p>

              <button
                onClick={onRegisterClick}
                className="text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 transition-all hover:shadow-xl"
                style={{ backgroundColor: '#a8042b' }}
              >
                <Users size={20} />
                Register Interest
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}