import { useState } from "react";
import { Calendar, Users, Clock } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedHeading } from '../AnimtedHeading';
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
  });

  useState(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export  function EventsTypesOverview() {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <AnimatedHeading
          title="Our Events"
          subtitle="Connect with investors through carefully curated events designed to accelerate your fundraising journey"
        />
        </div>
        
        <div className="flex flex-col lg:flex-row h-fit lg:h-[400px] w-full max-w-6xl mx-auto shadow-2xl overflow-hidden rounded-xl">
          {items.map((item) => (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
              frequency={item.frequency}
              bgColor={item.bgColor}
              iconBg={item.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description, frequency, bgColor, iconBg }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-all duration-300 p-2 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-3 relative group"
        onClick={() => setOpen(id)}
        style={{
          backgroundColor: isOpen ? '#f8fafc' : 'white'
        }}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-lg font-semibold rotate-180"
        >
          <span style={{ color: '#223258' }}>{title}</span>
        </span>
        <span className="block lg:hidden text-lg font-semibold" style={{ color: '#223258' }}>
          {title}
        </span>
        <div 
          className="w-12 h-12 lg:w-full lg:aspect-square rounded-full lg:rounded-none text-white grid place-items-center transition-transform group-hover:scale-110"
          style={{ backgroundColor: iconBg }}
        >
          <Icon size={24} />
        </div>
        <span 
          className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-6 py-6 relative z-10 w-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </div>
              
              <p className="text-white text-lg mb-4 leading-relaxed">
                {description}
              </p>
              
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: bgColor }}
              >
                {frequency}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  closed: {
    width: "0%",
    height: "100%",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "280px",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  closed: {
    width: "100%",
    height: "0px",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  closed: { 
    opacity: 0, 
    y: "100%",
    transition: {
      duration: 0.2,
    }
  },
};

const items = [
  {
    id: 1,
    title: "Pitch Sessions",
    Icon: Calendar,
    imgSrc: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1740&q=80",
    description: "Present your startup to curated angel and VC audiences in a professional setting. Get real-time feedback and build relationships with potential investors.",
    frequency: "Quarterly Events",
    bgColor: "#223258",
    iconBg: "#223258"
  },
  {
    id: 2,
    title: "Networking Mixers",
    Icon: Users,
    imgSrc: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1740&q=80",
    description: "Informal meetups designed to build genuine relationships with investors in a relaxed atmosphere. Perfect for expanding your network organically.",
    frequency: "Monthly Events",
    bgColor: "#a8042b",
    iconBg: "#a8042b"
  },
  {
    id: 3,
    title: "Workshops",
    Icon: Clock,
    imgSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1740&q=80",
    description: "Learn fundraising strategies, compliance requirements, and growth tactics from industry experts. Practical knowledge to accelerate your journey.",
    frequency: "Bi-monthly Events",
    bgColor: "#223258",
    iconBg: "#223258"
  },
];