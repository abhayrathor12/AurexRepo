import { useState } from "react";
import api from "../services/api";

export default function InvestorRegistration() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

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
      setStatus({ type: "", message: "" });

      await api.post("/api/investors/", formData);

      setStatus({
        type: "success",
        message:
          "Investor application submitted successfully. Our team will connect with you shortly.",
      });

      // CLEAR FORM
      setFormData({});

      // Auto-hide success message
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Submission failed. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
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
            options={[
              "Angel Investor",
              "Venture Capital Fund",
              "Family Office",
              "Corporate / Strategic Investor",
              "HNI",
            ]}
            onChange={handleChange}
          />
          <Input label="Entity / Fund Name" name="entity" value={formData.entity || ""} onChange={handleChange} />
          <Input label="Designation / Role" name="designation" value={formData.designation || ""} onChange={handleChange} />
          <Select
            label="Years of Investment Experience"
            name="experience"
            value={formData.experience || ""}
            options={["0–2 years", "2–5 years", "5–10 years", "10+ years"]}
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
            onChange={handleChange}
          />
          <CheckboxGroup
            label="Preferred Sectors"
            name="sectors"
            options={[
              "SaaS",
              "Fintech",
              "Healthtech",
              "D2C / Consumer",
              "AI / DeepTech",
              "Climate / Sustainability",
              "EdTech",
              "Web3 / Blockchain",
              "Other",
            ]}
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

        {/* STATUS MESSAGE */}
        {status.message && (
          <div
            className={`mt-6 rounded-xl px-4 py-3 text-sm font-medium ${
              status.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {status.message}
          </div>
        )}

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
    <label className="text-xs font-semibold text-slate-600 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="border rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#223258]"
    />
  </div>
);

const Select = ({ label, options, ...props }: any) => (
  <div className="flex flex-col">
    <label className="text-xs font-semibold text-slate-600 mb-1">
      {label}
    </label>
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

const CheckboxGroup = ({ label, name, options, onChange }: any) => (
  <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-3">
    <label className="text-xs font-semibold text-slate-600 mb-2">
      {label}
    </label>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {options.map((o: string) => (
        <label key={o} className="flex items-center gap-2 text-sm">
          <input type="checkbox" name={name} value={o} onChange={onChange} />
          {o}
        </label>
      ))}
    </div>
  </div>
);
