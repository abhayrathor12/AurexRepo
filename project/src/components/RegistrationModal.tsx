import { useState } from "react";
import { useNavigate } from "./Router"; 
import {
  X,
  Building2,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/30"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl rounded-2xl shadow-2xl bg-white">
        {/* Header */}
        <div className="relative p-6 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #223258 0%, #2a4073 100%)",
            }}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-10 bg-white/10 hover:bg-[#a8042b]"
          >
            <X className="text-white" size={18} />
          </button>

          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#a8042b]/20">
              <Sparkles className="w-4 h-4 text-[#a8042b]" />
              <span className="text-xs font-semibold text-[#a8042b]">
                Join Our Ecosystem
              </span>
            </div>

            <h2 className="text-3xl font-bold text-white">
              Start Your Journey
            </h2>
            <p className="text-white/80 text-sm">
              Choose your path and unlock exclusive opportunities
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="p-6 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* STARTUP */}
            <Card
              title="Register as Startup"
              description="Get access to fundraising support, curated investor connections, and compliance guidance."
              items={[
                "Pitch deck review",
                "Investor readiness assessment",
                "Curated investor access",
                "Compliance support",
              ]}
              color="#223258"
              icon={<Building2 size={22} />}
              hovered={hoveredCard === "startup"}
              onEnter={() => setHoveredCard("startup")}
              onLeave={() => setHoveredCard(null)}
              onClick={() => {
                onClose();
                navigate("/startup-registration");
              }}
              buttonText="Apply Now"
            />

            {/* INVESTOR */}
            <Card
  title="Join as Investor"
  description="Access curated deal flow from vetted startups aligned with your investment thesis."
  items={[
    "Pre-screened startups",
    "Curated deal flow",
    "Exclusive pitch events",
    "Confidential process",
  ]}
  color="#a8042b"
  icon={<TrendingUp size={22} />}
  hovered={hoveredCard === "investor"}
  onEnter={() => setHoveredCard("investor")}
  onLeave={() => setHoveredCard(null)}
  onClick={() => {
    onClose();
    navigate("/investor-registration");
  }}
  buttonText="Join Network"
/>

          </div>
        </div>
      </div>
    </div>
  );
}

/* CARD COMPONENT */

function Card({
  title,
  description,
  items,
  color,
  icon,
  hovered,
  onEnter,
  onLeave,
  onClick,
  buttonText,
}: any) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative rounded-xl p-5 border transition-all"
      style={{
        borderColor: hovered ? color : "#e2e8f0",
        boxShadow: hovered
          ? `0 20px 40px ${color}33`
          : "0 4px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
        style={{
          backgroundColor: hovered ? color : `${color}1a`,
          color: hovered ? "#fff" : color,
        }}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#223258] mb-1">
        {title}
      </h3>

      <p className="text-sm text-slate-600 mb-3">
        {description}
      </p>

      <ul className="space-y-1.5 mb-4">
        {items.map((item: string, i: number) => (
          <li
            key={i}
            className="flex items-center gap-2 text-xs text-slate-600"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white transition"
        style={{ backgroundColor: color }}
      >
        {buttonText}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
