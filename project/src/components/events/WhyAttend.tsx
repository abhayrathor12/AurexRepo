import { Rocket, TrendingUp, Users, Lightbulb, Target, IndianRupee, Network, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from "../../components/Router";
export function EventsWhyAttendSection() {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#223258' }}>
            Why Attend Our Events?
          </h2>
          <div className="h-1 w-24 rounded-full mx-auto" style={{ backgroundColor: '#a8042b' }}></div>
          <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
            Join a curated community where meaningful connections turn into successful partnerships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Startups Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: '#223258' }}
            ></div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: '#223258' }}
                >
                  <Rocket className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#223258' }}>
                  For Startups
                </h3>
              </div>

              <div className="space-y-4">
                <BenefitItem 
                  icon={<Target size={20} />}
                  text="Direct access to investors actively looking to fund"
                  color="#223258"
                />
                <BenefitItem 
                  icon={<Lightbulb size={20} />}
                  text="Feedback on your pitch and business model"
                  color="#223258"
                />
                <BenefitItem 
                  icon={<Users size={20} />}
                  text="Network with fellow founders and mentors"
                  color="#223258"
                />
                <BenefitItem 
                  icon={<TrendingUp size={20} />}
                  text="Learn from successful entrepreneurs"
                  color="#223258"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <button 
                  className="w-full text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#223258' }}
                  onClick={() => navigate("/startup-registration")}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a8042b'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#223258'}
                >
                  <Rocket size={18} />
                  Register as Startup
                </button>
              </div>
            </div>

            <div 
              className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-5"
              style={{ backgroundColor: '#223258' }}
            ></div>
          </motion.div>

          {/* For Investors Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: '#a8042b' }}
            ></div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: '#a8042b' }}
                >
                  <IndianRupee className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#223258' }}>
                  For Investors
                </h3>
              </div>

              <div className="space-y-4">
                <BenefitItem 
                  icon={<Target size={20} />}
                  text="Pre-screened startups with real potential"
                  color="#a8042b"
                />
                <BenefitItem 
                  icon={<Zap size={20} />}
                  text="Efficient deal flow in one place"
                  color="#a8042b"
                />
                <BenefitItem 
                  icon={<Network size={20} />}
                  text="Connect with co-investors and syndicate"
                  color="#a8042b"
                />
                <BenefitItem 
                  icon={<TrendingUp size={20} />}
                  text="Early access to promising opportunities"
                  color="#a8042b"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <button 
                  className="w-full text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#a8042b' }}
                  onClick={() => navigate("/investor-registration")}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#223258'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#a8042b'}
                >
                  <IndianRupee size={18} />
                  Register as Investor
                </button>
              </div>
            </div>

            <div 
              className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-5"
              style={{ backgroundColor: '#a8042b' }}
            ></div>
          </motion.div>
        </div>

        {/* Bottom CTA – Minimal */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-10 flex items-center justify-center"
>
  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200">
    <Users size={18} style={{ color: '#a8042b' }} />
    <p className="text-sm text-slate-700">
      A focused space for founders and investors to connect meaningfully
    </p>
  </div>
</motion.div>
      </div>
    </section>
  );
}

const BenefitItem = ({ icon, text, color }) => (
  <div className="flex items-start gap-3 group/item">
    <div 
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform"
      style={{ backgroundColor: color }}
    >
      <div className="text-white">{icon}</div>
    </div>
    <p className="text-slate-700 leading-relaxed pt-1">{text}</p>
  </div>
);