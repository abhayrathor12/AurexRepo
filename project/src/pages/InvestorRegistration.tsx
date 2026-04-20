import { useState } from "react";
import api from "../services/api";

/* ---------------- Toast Notification System ---------------- */
type ToastType = "success" | "error";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

let toastId = 0;

function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, showToast, removeToast };
}

function ToastContainer({
  toasts,
  onRemove,
}: {
  toasts: Toast[];
  onRemove: (id: number) => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        pointerEvents: "none",
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          onClick={() => onRemove(toast.id)}
          style={{
            pointerEvents: "auto",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 18px",
            borderRadius: "14px",
            minWidth: "280px",
            maxWidth: "380px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)",
            background: "#ffffff",
            borderLeft: `4px solid ${toast.type === "success" ? "#16a34a" : "#dc2626"}`,
            animation: "slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <span style={{ fontSize: "20px", flexShrink: 0 }}>
            {toast.type === "success" ? "✅" : "❌"}
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1e293b",
              lineHeight: 1.4,
              flex: 1,
            }}
          >
            {toast.message}
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#94a3b8",
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            ×
          </span>
        </div>
      ))}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Main Component ---------------- */
export default function InvestorRegistration() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const { toasts, showToast, removeToast } = useToast();

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const arr = prev[name] || [];
        return {
          ...prev,
          [name]: checked
            ? [...arr, value]
            : arr.filter((v: string) => v !== value),
        };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await api.post("/api/investors/", formData);
      showToast("Investor application submitted successfully.", "success");
      setFormData({}); // Clear form
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        showToast("⚠️ Please fill all required fields.", "error");
      } else {
        showToast("Something went wrong.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 mt-16 sm:mt-10 p-4 sm:p-8">
        <div className="w-full bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#223258] mb-8">
            💼 Investor Registration Form
          </h1>

          {/* INVESTOR INFO */}
          <Section title="Investor Information">
            <Input label="Full Name" name="full_name" value={formData.full_name || ""} onChange={handleChange} />
            <Select
              label="Investor Category"
              name="category"
              value={formData.category || ""}
              options={["Angel Investor", "Venture Capital Fund", "Family Office", "Corporate / Strategic Investor", "HNI"]}
              onChange={handleChange}
            />
            <Input label="Entity / Fund Name" name="entity" value={formData.entity || ""} onChange={handleChange} />
            <Input label="Designation / Role" name="designation" value={formData.designation || ""} onChange={handleChange} />
            <Select
              label="Have you invested before?"
              name="previous"
              value={formData.previous || ""}
              options={["Yes", "No"]}
              onChange={handleChange}
            />
            <Select
              label="Years of Investment Experience"
              name="experience"
              value={formData.experience || ""}
              options={["0–2 years", "2–5 years", "5–10 years", "10+ years"]}
              onChange={handleChange}
            />
            <Select
              label="Preferred Involvement Level"
              name="involvement"
              value={formData.involvement || ""}
              options={["Passive", "Advisory", "Hands-on"]}
              onChange={handleChange}
            />
          </Section>

          {/* CONTACT */}
          <Section title="Contact Details">
            <Input label="Official Email Address" name="email" value={formData.email || ""} onChange={handleChange} />
            <Input label="Contact Number" name="phone" value={formData.phone || ""} onChange={handleChange} />
            <Input label="LinkedIn / Profile" name="linkedin" value={formData.linkedin || ""} onChange={handleChange} />
            <Input label="City / Geography" name="city" value={formData.city || ""} onChange={handleChange} />
          </Section>

          {/* INVESTMENT MANDATE */}
          <Section title="Investment Mandate">
            <CheckboxGroup
              label="Preferred Investment Stages"
              name="stages"
              options={["Pre-Seed", "Seed", "Pre-Series A", "Series A", "Series B", "Series C"]}
              value={formData.stages || []}
              onChange={handleChange}
            />
            <CheckboxGroup
              label="Preferred Sectors"
              name="sectors"
              options={[
                "SaaS", "Fintech", "Healthtech", "D2C / Consumer", "AI / DeepTech",
                "Climate / Sustainability", "EdTech", "Web3 / Blockchain", "Other"
              ]}
              value={formData.sectors || []}
              onChange={handleChange}
            />
            <Select
              label="Preferred Geography"
              name="geography"
              value={formData.geography || ""}
              options={["India", "Global", "Specific Regions"]}
              onChange={handleChange}
            />
          </Section>

          {/* ENGAGEMENT PREFERENCES */}
          <Section title="Engagement Preferences">
            <CheckboxGroup
              label="Engagement Preferences"
              name="engagement"
              options={["Mentorship", "Board Participation", "Networking", "Strategic Guidance"]}
              value={formData.engagement || []}
              onChange={handleChange}
            />
          </Section>

          {/* TICKET SIZE */}
          <Section title="Investment Size & Frequency">
            <Select
              label="Typical Ticket Size"
              name="ticket"
              value={formData.ticket || ""}
              options={["₹5L – ₹25L", "₹25L – ₹50L", "₹50L – ₹1Cr", "₹1Cr – ₹5Cr", "₹5Cr+"]}
              onChange={handleChange}
            />
            <Select
              label="Investment Style"
              name="style"
              value={formData.style || ""}
              options={["One-time cheque", "Tranches", "Both"]}
              onChange={handleChange}
            />
            <Select
              label="Investment Frequency"
              name="frequency"
              value={formData.frequency || ""}
              options={["Monthly", "Quarterly", "Yearly", "Deal-by-deal"]}
              onChange={handleChange}
            />
            <Input label="Capital Deployment (Per Year ₹)" name="deployment" value={formData.deployment || ""} onChange={handleChange} />
          </Section>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#223258] to-[#3a4f7a] text-white font-semibold text-lg hover:scale-[1.01] transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Investor Application"}
          </button>
        </div>
      </div>
    </>
  );
}

/* ---------------- Reusable Components ---------------- */
const Section = ({ title, children }: any) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold text-[#223258] mb-5 border-l-4 border-[#3a4f7a] pl-3">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </div>
);

const Input = ({ label, ...props }: any) => (
  <div className="flex flex-col">
    <label className="text-xs font-semibold text-slate-600 mb-1">{label}</label>
    <input
      {...props}
      className="border rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#223258]"
    />
  </div>
);

const Select = ({ label, options, ...props }: any) => (
  <div className="flex flex-col">
    <label className="text-xs font-semibold text-slate-600 mb-1">{label}</label>
    <select
      {...props}
      className="border rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#223258]"
    >
      <option value="">Select</option>
      {options.map((o: string) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

/* ✅ Updated CheckboxGroup with controlled value */
const CheckboxGroup = ({ label, name, options, value = [], onChange }: any) => (
  <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-3">
    <label className="text-xs font-semibold text-slate-600 mb-2">{label}</label>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {options.map((o: string) => (
        <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            name={name}
            value={o}
            checked={value.includes(o)}
            onChange={onChange}
          />
          {o}
        </label>
      ))}
    </div>
  </div>
);