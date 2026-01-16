import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactInfoAndFormSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">Phone</h3>
                  <p className="text-slate-600">+91 96259 15947</p>
                  <p className="text-slate-600">+91 99997 65380</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-xl">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">Email</h3>
                  <a
                    href="mailto:aurexventures@zohomail.in"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    aurexventures@zohomail.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-4 rounded-xl">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">Address</h3>
                  <p className="text-slate-600">
                    311, Third Floor
                    <br />
                    Paras Trade Centre
                    <br />
                    Gawal Pahari Sector 3
                    <br />
                    Gurgaon, Haryana
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Office Hours</h3>
              <div className="space-y-2 text-slate-700">
                <p>
                  <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM
                </p>
                <p>
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  I am a
                </label>
                <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                  <option>Startup Founder</option>
                  <option>Investor</option>
                  <option>Service Provider</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                onClick={() => {
                  alert(
                    'For direct inquiries, please email us at aurexventures@zohomail.in or call us at the provided numbers.'
                  );
                }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


