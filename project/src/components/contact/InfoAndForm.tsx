import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import api from "../../services/api";

export function ContactInfoAndFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    i_am_a: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await api.post("/api/con/create/", formData);
      alert("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        i_am_a: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-14 sm:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN (UNCHANGED) */}
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#223258] mb-2">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                We're here to help
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#223258] to-[#2a4070] rounded-xl p-5 sm:p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Phone size={20} />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <a href="tel:+919625915947" className="block text-white/90 hover:text-white">
                +91 96259 15947
              </a>
              <a href="tel:+919999765380" className="block text-white/90 hover:text-white">
                +91 99997 65380
              </a>
            </div>

            <div className="bg-white border-2 border-[#a8042b] rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={20} className="text-[#a8042b]" />
                <h3 className="font-semibold text-[#223258]">Email</h3>
              </div>
              <a
                href="mailto:aurexventures@zohomail.in"
                className="text-gray-700 hover:text-[#a8042b] break-words"
              >
                aurexventures@zohomail.in
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-[#223258]" />
                <h3 className="font-semibold text-[#223258]">Address</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                311, Third Floor, Paras Trade Centre<br />
                Gawal Pahari Sector 3<br />
                Gurgaon, Haryana
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#a8042b] to-[#8a0323] rounded-xl p-5 sm:p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} />
                <h3 className="font-semibold">Office Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-white/90">9AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white/90">10AM - 4PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/90">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#a8042b] p-2.5 rounded-lg">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#223258]">
                    Send a Message
                  </h2>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-style"
                  />
                  <input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-style"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-style"
                  />
                  <select
                    name="i_am_a"
                    value={formData.i_am_a}
                    onChange={handleChange}
                    className="input-style"
                  >
                    <option value="">I am a</option>
                    <option value="Startup Founder">Startup Founder</option>
                    <option value="Investor">Investor</option>
                    <option value="Service Provider">Service Provider</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-style resize-none"
                />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#a8042b] to-[#8a0323] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition disabled:opacity-60"
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 0.65rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.95rem;
        }
        .input-style:focus {
          outline: none;
          border-color: #a8042b;
          box-shadow: 0 0 0 1px #a8042b;
        }
      `}</style>
    </section>
  );
}
