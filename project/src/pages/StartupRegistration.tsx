import { useState } from "react";

export default function StartupRegistration() {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 
            mt-16 sm:mt-10 p-4 sm:p-8">
      <div className="w-full bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#223258] mb-8">
          🚀 Startup Registration Form
        </h1>

        {/* BASIC INFO */}
        <Section title="Basic Startup Information">
          <Input label="Startup Name" name="startupName" onChange={handleChange} />
          <Select
            label="Company Incorporation Status"
            name="incorporationStatus"
            options={["Incorporated", "Not Incorporated"]}
            onChange={handleChange}
          />
          <Select
            label="Type of Entity"
            name="entityType"
            options={[
              "Private Limited",
              "LLP",
              "Partnership",
              "Sole Proprietorship",
              "Other",
            ]}
            onChange={handleChange}
          />
          <Input
            label="Date of Incorporation"
            type="date"
            name="incorporationDate"
            onChange={handleChange}
          />
          <Input label="Website" name="website" onChange={handleChange} />
          <Input
            label="Startup Description (One Line)"
            name="description"
            onChange={handleChange}
          />
          <Textarea
            label="Registered Office Address"
            name="address"
            onChange={handleChange}
          />
          <Select
            label="Sector / Industry"
            name="sector"
            options={[
              "SaaS",
              "Fintech",
              "Healthtech",
              "D2C",
              "AI / Deeptech",
              "Climate / CleanTech",
              "EdTech",
              "Web3 / Blockchain",
              "Other",
            ]}
            onChange={handleChange}
          />
        </Section>

        {/* FOUNDERS */}
        <Section title="Founder Details">
          <Input label="Founder Name(s)" name="founders" onChange={handleChange} />
          <Input
            label="Designation(s)"
            name="designations"
            onChange={handleChange}
          />
          <Select
            label="All founders working full-time?"
            name="fullTime"
            options={["Yes", "No"]}
            onChange={handleChange}
          />
          <Textarea
            label="LinkedIn Profile(s)"
            name="linkedin"
            onChange={handleChange}
          />
          <Textarea
            label="Prior Startup / Domain Experience (Optional)"
            name="experience"
            onChange={handleChange}
          />
        </Section>

        {/* CONTACT */}
        <Section title="Contact Information">
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
        </Section>

        {/* STAGE */}
        <Section title="Business Stage & Traction">
          <Select
            label="Current Startup Stage"
            name="stage"
            options={["Idea", "MVP", "Early Revenue", "Growth", "Scale"]}
            onChange={handleChange}
          />
          <Select
            label="Bootstrapped?"
            name="bootstrapped"
            options={["Yes", "No"]}
            onChange={handleChange}
          />
          <Input
            label="Total Capital Invested (₹)"
            name="capital"
            onChange={handleChange}
          />
          <Input
            label="Monthly Revenue (₹)"
            name="revenue"
            onChange={handleChange}
          />
          <Input
            label="Monthly Burn Rate (₹)"
            name="burn"
            onChange={handleChange}
          />
          <Textarea
            label="Key Traction Metrics (Optional)"
            name="traction"
            onChange={handleChange}
          />
        </Section>

        {/* FUNDING */}
        <Section title="Fundraising Requirement">
          <Input
            label="Amount to Raise (₹)"
            name="raiseAmount"
            onChange={handleChange}
          />
          <Select
            label="Funding Stage"
            name="fundingStage"
            options={[
              "Pre-Seed",
              "Seed",
              "Bridge",
              "Pre-Series A",
              "Series A",
              "Series B+",
            ]}
            onChange={handleChange}
          />
          <Textarea
            label="Purpose of Fundraising"
            name="purpose"
            onChange={handleChange}
          />
          <Input type="file" label="Upload Pitch Deck" name="pitchDeck" />
        </Section>

        {/* DECLARATION */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 text-sm text-slate-700">
          <p>
            By submitting this form, you acknowledge that Aurex Ventures provides
            fundraising advisory services only and does not guarantee funding.
          </p>
        </div>

        <button className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#a8042b] to-[#d11c4a] text-white font-semibold text-lg hover:scale-[1.01] transition">
          Submit Application
        </button>
      </div>
    </div>
  );
}

/* ---------------- Reusable Components ---------------- */

const Section = ({ title, children }: any) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold text-[#223258] mb-5 border-l-4 border-[#a8042b] pl-3">
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
      className="border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#223258]"
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
      className="border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#223258]"
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
      className="border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#223258]"
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
