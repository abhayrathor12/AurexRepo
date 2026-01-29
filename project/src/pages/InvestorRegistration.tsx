import { useState } from "react";

export default function InvestorRegistration() {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev: any) => {
        const arr = prev[name] || [];
        return {
          ...prev,
          [name]: checked
            ? [...arr, value]
            : arr.filter((v: string) => v !== value),
        };
      });
    } else {
      setFormData({ ...formData, [name]: value });
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
          <Input label="Full Name" name="fullName" onChange={handleChange} />
          <Select
            label="Investor Category"
            name="category"
            options={[
              "Angel Investor",
              "Venture Capital Fund",
              "Family Office",
              "Corporate / Strategic Investor",
              "HNI",
            ]}
            onChange={handleChange}
          />
          <Input
            label="Entity / Fund Name (N/A if individual)"
            name="entity"
            onChange={handleChange}
          />
          <Input
            label="Designation / Role"
            name="designation"
            onChange={handleChange}
          />
          <Select
            label="Years of Investment Experience"
            name="experience"
            options={["0–2 years", "2–5 years", "5–10 years", "10+ years"]}
            onChange={handleChange}
          />
        </Section>

        {/* CONTACT */}
        <Section title="Contact Details">
          <Input
            label="Official Email Address"
            name="email"
            onChange={handleChange}
          />
          <Input
            label="Contact Number (WhatsApp preferred)"
            name="phone"
            onChange={handleChange}
          />
          <Input
            label="LinkedIn / Professional Profile"
            name="linkedin"
            onChange={handleChange}
          />
          <Input
            label="Preferred City / Geography (Optional)"
            name="city"
            onChange={handleChange}
          />
        </Section>

        {/* INVESTMENT MANDATE */}
        <Section title="Investment Mandate">
          <CheckboxGroup
            label="Preferred Investment Stages"
            name="stages"
            options={[
              "Pre-Seed",
              "Seed",
              "Pre-Series A",
              "Series A",
              "Series B",
              "Series C",
            ]}
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
            options={["India", "Global", "Specific Regions"]}
            onChange={handleChange}
          />
        </Section>

        {/* TICKET SIZE */}
        <Section title="Investment Size & Frequency">
          <Select
            label="Typical Ticket Size"
            name="ticket"
            options={[
              "₹5L – ₹25L",
              "₹25L – ₹50L",
              "₹50L – ₹1Cr",
              "₹1Cr – ₹5Cr",
              "₹5Cr+",
            ]}
            onChange={handleChange}
          />
          <Select
            label="Investment Style"
            name="style"
            options={["One-time cheque", "Tranches", "Both"]}
            onChange={handleChange}
          />
          <Select
            label="Investment Frequency"
            name="frequency"
            options={["Monthly", "Quarterly", "Yearly", "Deal-by-deal"]}
            onChange={handleChange}
          />
          <Input
            label="Capital Deployment (Per Year ₹)"
            name="deployment"
            onChange={handleChange}
          />
        </Section>

        {/* EXPERIENCE */}
        <Section title="Investment Experience">
          <Select
            label="Previously invested in startups?"
            name="previous"
            options={["Yes", "No"]}
            onChange={handleChange}
          />
          <Input
            label="Approx. Number of Investments (Optional)"
            name="count"
            onChange={handleChange}
          />
          <Textarea
            label="Notable Portfolio Companies (Optional)"
            name="portfolio"
            onChange={handleChange}
          />
        </Section>

        {/* ENGAGEMENT */}
        <Section title="Engagement & Involvement">
          <CheckboxGroup
            label="Preferred Engagement Modes"
            name="engagement"
            options={[
              "1:1 Founder Introductions",
              "Closed-door Pitch Sessions",
              "Curated Deal Reviews",
              "Demo Days / Events",
            ]}
            onChange={handleChange}
          />
          <Select
            label="Level of Involvement"
            name="involvement"
            options={[
              "Passive",
              "Strategic Guidance",
              "Active Mentor",
              "Board-level",
            ]}
            onChange={handleChange}
          />
        </Section>

        {/* MOTIVATION */}
        <Section title="Motivation for Investing">
          <CheckboxGroup
            label="Primary Motivation"
            name="motivation"
            options={[
              "Financial Returns",
              "Founder Support",
              "Strategic Synergy",
              "Innovation Exposure",
              "Impact / ESG",
            ]}
            onChange={handleChange}
          />
          <Textarea
            label="Impact / ESG Focus (Optional)"
            name="esg"
            onChange={handleChange}
          />
        </Section>

        {/* DISCLAIMER */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 text-sm text-slate-700">
          <p>
            This platform is not a SEBI-registered intermediary and does not
            solicit or advise investments. All decisions are made independently.
          </p>
        </div>

        <button className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#223258] to-[#3a4f7a] text-white font-semibold text-lg hover:scale-[1.01] transition">
          Submit Investor Application
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

const Textarea = ({ label, ...props }: any) => (
  <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-3">
    <label className="text-xs font-semibold text-slate-600 mb-1">
      {label}
    </label>
    <textarea
      {...props}
      rows={3}
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
        <option key={o}>{o}</option>
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
          <input
            type="checkbox"
            name={name}
            value={o}
            onChange={onChange}
          />
          {o}
        </label>
      ))}
    </div>
  </div>
);
