import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '../../pages/Events';

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
  if (loading) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-slate-600 mt-4">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {upcomingEvents.length > 0 && (
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  {event.image_url && (
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-xl mb-6"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{event.title}</h3>
                  <p className="text-slate-600 mb-6">{event.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700">
                      <Calendar className="text-blue-600" size={20} />
                      <span className="font-medium">{formatDate(event.event_date)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="text-blue-600" size={20} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={onRegisterClick}
                    className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Register Interest
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {previousEvents.length > 0 && (
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Previous Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {previousEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  {event.image_url && (
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                  )}
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={16} />
                    <span>{formatDate(event.event_date)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {upcomingEvents.length === 0 && previousEvents.length === 0 && !loading && (
          <div className="text-center py-20">
            <Calendar className="mx-auto mb-6 text-slate-300" size={64} />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Events Coming Soon</h3>
            <p className="text-slate-600 mb-8">
              We're planning exciting events to connect founders with investors and experts.
              Register your interest to be notified when events are announced.
            </p>
            <button
              onClick={onRegisterClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Register Your Interest
            </button>
          </div>
        )}
      </div>
    </section>
  );
}


