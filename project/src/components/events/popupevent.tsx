import { useState } from "react";
import {
    Rocket, IndianRupee, Users, Target, ChevronRight, ChevronLeft,
    Upload, Link, CheckCircle, AlertCircle, Zap, Building2,
    MapPin, Phone, Mail, User, FileText, TrendingUp, Briefcase,
    CalendarDays, ArrowRight, Sparkles, Star, Globe, X,
    Award, Eye, Handshake, Coffee, Network, MessageSquare, Shield,
    Download
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import logo from "../../public/aurex2.png";
// Import your other 2 logos — replace these paths with your actual logo paths
import logo1 from "../../public/aurex.png";
import logo2 from "../../public/vastav.png";
import logo3 from "../../public/logo1.png";
import brochure from "../../public/posters/aurexpdf.pdf";

// ─── Types ─────────────────────────────────────────────────────────────────────
type FormData = {
    name: string;
    email: string;
    contact_number: string;
    organization_name: string;
    city: string;
    registering_as: string;
    startup_stage: string;
    industry: string;
    startup_brief: string;
    bootstrapped: string;
    total_capital_invested: string;
    monthly_revenue: string;
    monthly_burn_rate: string;
    amount_to_raise: string;
    funding_stage: string;
    interested_in_pitching: string;
    pitch_deck_link: string;
    pitch_deck_file: File | null;
    pass_type: string;
};

// ─── Constants ─────────────────────────────────────────────────────────────────
const NAVY = "#203f78";
const CRIMSON = "#c0032f";
const GOLD = "#e8a020";

const REGISTERING_AS = [
    { value: "founder", label: "Startup Founder" },
    { value: "cofounder", label: "Co-founder" },
    { value: "attendee", label: "General Attendee" },
];

const STARTUP_STAGES = [
    { value: "idea", label: "Idea Stage" },
    { value: "mvp", label: "MVP Stage" },
    { value: "early", label: "Early Revenue" },
    { value: "growth", label: "Growth Stage" },
];

const FUNDING_STAGES = [
    { value: "pre_seed", label: "Pre-Seed" },
    { value: "seed", label: "Seed" },
    { value: "bridge", label: "Bridge" },
    { value: "pre_series_a", label: "Pre-Series A" },
    { value: "series_a", label: "Series A" },
    { value: "series_b", label: "Series B+" },
];

const PASS_TYPES = [
    {
        value: "event",
        label: "Event Pass",
        price: "₹699",
        perks: ["Full event access", "Networking sessions", "Investor interactions", "Panel discussions"],
        icon: <Users size={16} />,
        accent: NAVY,
    },
    {
        value: "pitch",
        label: "Pitching Pass",
        price: "₹1,499",
        perks: ["Everything in Event Pass", "Apply for pitch slot", "Screened startup showcase", "Investor face-time"],
        icon: <Rocket size={16} />,
        accent: CRIMSON,
    },
];

const EVENT_FEATURES = [
    { icon: <Rocket size={14} />, label: "Startup Pitch Slot" },
    { icon: <Star size={14} />, label: "Pitch Stage Access" },
    { icon: <Eye size={14} />, label: "Startup Visibility" },
    { icon: <IndianRupee size={14} />, label: "Investor Presence at Event" },
    { icon: <Handshake size={14} />, label: "Direct Interaction With Investors" },
    { icon: <Coffee size={14} />, label: "High Tea Networking Session" },
    { icon: <Network size={14} />, label: "Founder Networking" },
    { icon: <MessageSquare size={14} />, label: "Opportunity for Future Conversations" },
    { icon: <Award size={14} />, label: "Event Participation Certificate" },
];

const STEPS = [
    { id: 1, label: "Personal", icon: <User size={14} /> },
    { id: 2, label: "Organization", icon: <Briefcase size={14} /> },
    { id: 3, label: "Startup", icon: <Rocket size={14} /> },
    { id: 4, label: "Financials", icon: <TrendingUp size={14} /> },
    { id: 5, label: "Pitch", icon: <Star size={14} /> },
    { id: 6, label: "Pass & Pay", icon: <Award size={14} /> },
];

// ─── Shared Field Primitives ───────────────────────────────────────────────────
const inputCls = "w-full px-3.5 py-2.5 rounded-lg border bg-white/80 text-slate-800 placeholder-slate-400 text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-offset-0";
const inputStyle = { borderColor: "#dde3ef" };
const focusStyle = { borderColor: NAVY, boxShadow: `0 0 0 3px rgba(32,63,120,0.10)` };

const Label = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#6b7a99" }}>
        {children}{required && <span style={{ color: CRIMSON }} className="ml-1">*</span>}
    </label>
);

const InputField = ({ icon, label, required, ...props }: { icon?: React.ReactNode; label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div>
        <Label required={required}>{label}</Label>
        <div className="relative">
            {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>}
            <input
                className={`${inputCls} ${icon ? "pl-9" : ""}`}
                style={inputStyle}
                onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                {...props}
            />
        </div>
    </div>
);

const SelectField = ({ label, required, icon, options, ...props }: {
    label: string; required?: boolean; icon?: React.ReactNode;
    options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) => (
    <div>
        <Label required={required}>{label}</Label>
        <div className="relative">
            {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">{icon}</div>}
            <select
                className={`${inputCls} ${icon ? "pl-9" : ""} appearance-none cursor-pointer`}
                style={inputStyle}
                onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                {...props}
            >
                <option value="">Select…</option>
                {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" />
        </div>
    </div>
);

const RadioPill = ({ label, required, options, value, onChange }: {
    label: string; required?: boolean; options: { value: string; label: string }[];
    value: string; onChange: (v: string) => void;
}) => (
    <div>
        <Label required={required}>{label}</Label>
        <div className="flex flex-wrap gap-2">
            {options.map(o => {
                const active = value === o.value;
                return (
                    <button
                        key={o.value}
                        type="button"
                        onClick={() => onChange(o.value)}
                        className="flex-1 min-w-[100px] px-3 py-2 rounded-lg text-xs font-bold border-2 transition-all duration-150 text-center"
                        style={{
                            borderColor: active ? NAVY : "#dde3ef",
                            backgroundColor: active ? NAVY : "white",
                            color: active ? "white" : "#6b7a99"
                        }}
                    >
                        {o.label}
                    </button>
                );
            })}
        </div>
    </div>
);

// ─── Step Indicator ─────────────────────────────────────────────────────────────
const StepIndicator = ({ currentStep }: { currentStep: number }) => (
    <div className="mb-8">
        <div className="flex items-center justify-between relative">
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-100 z-0" />
            <div
                className="absolute top-4 left-0 h-0.5 z-0 transition-all duration-500"
                style={{
                    width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
                    background: `linear-gradient(90deg, ${NAVY}, ${CRIMSON})`
                }}
            />
            {STEPS.map(step => {
                const done = currentStep > step.id;
                const active = currentStep === step.id;
                return (
                    <div key={step.id} className="flex flex-col items-center z-10 gap-1.5">
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 border-2"
                            style={{
                                background: done ? CRIMSON : active ? NAVY : "white",
                                borderColor: done ? CRIMSON : active ? NAVY : "#dde3ef",
                                color: done || active ? "white" : "#aab0c0",
                                boxShadow: active ? `0 0 0 4px rgba(32,63,120,0.12)` : "none"
                            }}
                        >
                            {done ? <CheckCircle size={13} /> : step.icon}
                        </div>
                        <span
                            className="text-[9px] font-bold uppercase tracking-wider hidden sm:block"
                            style={{ color: active ? NAVY : done ? CRIMSON : "#aab0c0" }}
                        >
                            {step.label}
                        </span>
                    </div>
                );
            })}
        </div>
        <div className="mt-3 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: NAVY }}>
                Step {currentStep} of {STEPS.length} — {STEPS[currentStep - 1].label}
            </span>
        </div>
    </div>
);

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function StartupRegistrationPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        contact_number: "",
        organization_name: "",
        city: "",
        registering_as: "",
        startup_stage: "",
        industry: "",
        startup_brief: "",
        bootstrapped: "",
        total_capital_invested: "",
        monthly_revenue: "",
        monthly_burn_rate: "",
        amount_to_raise: "",
        funding_stage: "",
        interested_in_pitching: "",
        pitch_deck_link: "",
        pitch_deck_file: null,
        pass_type: "",
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [fileLabel, setFileLabel] = useState("Upload pitch deck (PDF, max 10 MB)");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<string | null>(null);

    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3500);
    };

    const openPayment = () => {
        const anchor = document.querySelector(
            "#razorpay-form .razorpay-payment-button a"
        ) as HTMLAnchorElement;
        if (anchor) anchor.click();
        else console.error("Razorpay not loaded yet");
    };

    const Toast = () => (
        <AnimatePresence>
            {toast && (
                <motion.div
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 60, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl"
                    style={{
                        background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a8a 100%)`,
                        border: `1px solid rgba(255,255,255,0.12)`,
                        minWidth: "280px",
                        maxWidth: "90vw",
                    }}
                >
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `rgba(192,3,47,0.25)` }}>
                        <AlertCircle size={15} style={{ color: "#fca5a5" }} />
                    </div>
                    <p className="text-white text-sm font-medium flex-1">{toast}</p>
                    <button onClick={() => setToast(null)} className="text-slate-400 hover:text-white transition-colors ml-1">
                        <X size={15} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );

    const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(f => ({ ...f, [field]: e.target.value }));

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setForm(f => ({ ...f, pitch_deck_file: file }));
        setFileLabel(file ? file.name : "Upload pitch deck (PDF, max 10 MB)");
    };

    const resetForm = () => {
        setForm({
            name: "", email: "", contact_number: "", organization_name: "", city: "",
            registering_as: "", startup_stage: "", industry: "", startup_brief: "",
            bootstrapped: "", total_capital_invested: "", monthly_revenue: "",
            monthly_burn_rate: "", amount_to_raise: "", funding_stage: "",
            interested_in_pitching: "", pitch_deck_link: "", pitch_deck_file: null, pass_type: "",
        });
        setFileLabel("Upload pitch deck (PDF, max 10 MB)");
        setCurrentStep(1);
    };

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 1:
                if (!form.name || !form.email || !form.contact_number) {
                    showToast("Please fill in all required fields.");
                    return false;
                }
                return true;
            case 2:
                if (!form.organization_name || !form.city || !form.registering_as) {
                    showToast("Please fill in all required fields.");
                    return false;
                }
                return true;
            case 3:
                if (!form.startup_stage || !form.industry || !form.startup_brief || !form.bootstrapped) {
                    showToast("Please fill in all required fields.");
                    return false;
                }
                return true;
            case 4:
                if (!form.total_capital_invested || !form.monthly_revenue || !form.monthly_burn_rate || !form.amount_to_raise || !form.funding_stage) {
                    showToast("Please fill in all required fields.");
                    return false;
                }
                return true;
            case 5:
                if (!form.interested_in_pitching) {
                    showToast("Please indicate if you're interested in pitching.");
                    return false;
                }
                return true;
            case 6:
                if (!form.pass_type) {
                    showToast("Please select a pass type.");
                    return false;
                }
                return true;
            default:
                return true;
        }
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(s => Math.min(s + 1, 6));
        }
    };

    const handleBack = () => setCurrentStep(s => Math.max(s - 1, 1));

    const handleSubmit = async () => {
        if (isSubmitting) return;
        if (!validateStep(6)) return;
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => {
                if (value !== null && value !== "") {
                    if (key !== "pitch_deck_file") formData.append(key, value as string);
                }
            });
            if (form.pitch_deck_file) formData.append("pitch_deck_file", form.pitch_deck_file);
            await api.post("/api/register/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            openPayment();
            resetForm();
            setShowSuccessModal(true);
        } catch (error) {
            console.error(error);
            showToast("Registration failed. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const SuccessModal = () => (
        <AnimatePresence>
            {showSuccessModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
                    onClick={() => setShowSuccessModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.88, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.88, opacity: 0, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors">
                            <X size={24} />
                        </button>
                        <div className="px-8 pt-10 pb-8 text-center">
                            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, ${NAVY}, ${CRIMSON})` }}>
                                <CheckCircle size={40} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-black mb-3" style={{ color: NAVY, fontFamily: "'Georgia', serif" }}>Thank You!</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Your registration for <strong>Udbhav 2026</strong> has been successfully received.<br />
                                We'll reach out soon with confirmation and further details.
                            </p>
                            <div className="bg-slate-50 rounded-xl p-5 mb-8 text-left text-sm border border-slate-200">
                                <p className="font-semibold mb-2" style={{ color: NAVY }}>Event Snapshot</p>
                                <p className="text-slate-700">📅 <strong>April 11, 2026</strong><br />📍 India</p>
                            </div>
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all"
                                style={{ background: `linear-gradient(135deg, ${NAVY}, ${CRIMSON})` }}
                            >
                                Got it
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div key="step1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                        <h3 className="text-lg font-black mb-1" style={{ color: NAVY }}>Personal Information</h3>
                        <p className="text-slate-500 text-xs mb-5">Tell us about yourself.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                                <InputField label="Full Name" required icon={<User size={14} />} placeholder="Your full name" value={form.name} onChange={set("name")} />
                            </div>
                            <InputField label="Email Address" required type="email" icon={<Mail size={14} />} placeholder="you@example.com" value={form.email} onChange={set("email")} />
                            <InputField label="Contact Number" required type="tel" icon={<Phone size={14} />} placeholder="+91 98765 43210" value={form.contact_number} onChange={set("contact_number")} />
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div key="step2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                        <h3 className="text-lg font-black mb-1" style={{ color: NAVY }}>Organization Details</h3>
                        <p className="text-slate-500 text-xs mb-5">Tell us about your company.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                                <InputField label="Organization / Startup Name" required icon={<Briefcase size={14} />} placeholder="Your company name" value={form.organization_name} onChange={set("organization_name")} />
                            </div>
                            <InputField label="City" required icon={<MapPin size={14} />} placeholder="Mumbai, Delhi…" value={form.city} onChange={set("city")} />
                            <SelectField label="Registering As" required icon={<Users size={14} />} options={REGISTERING_AS} value={form.registering_as} onChange={set("registering_as")} />
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div key="step3" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                        <h3 className="text-lg font-black mb-1" style={{ color: NAVY }}>Startup Details</h3>
                        <p className="text-slate-500 text-xs mb-5">Help us understand what you're building.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <SelectField label="Startup Stage" required icon={<TrendingUp size={14} />} options={STARTUP_STAGES} value={form.startup_stage} onChange={set("startup_stage")} />
                            <InputField label="Industry / Sector" required icon={<Target size={14} />} placeholder="Fintech, HealthTech…" value={form.industry} onChange={set("industry")} />
                            <div className="sm:col-span-2">
                                <RadioPill
                                    label="Bootstrapped?"
                                    required
                                    options={[{ value: "true", label: "Yes" }, { value: "false", label: "No" }]}
                                    value={form.bootstrapped}
                                    onChange={v => setForm(f => ({ ...f, bootstrapped: v }))}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <Label required>Brief About Your Startup</Label>
                                <textarea
                                    rows={3}
                                    placeholder="Problem you're solving, your solution, traction so far…"
                                    className="w-full px-3.5 py-2.5 rounded-lg border bg-white/80 text-slate-800 placeholder-slate-400 text-sm outline-none transition-all duration-150 resize-none"
                                    style={inputStyle}
                                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                                    onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                                    value={form.startup_brief}
                                    onChange={set("startup_brief")}
                                />
                            </div>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div key="step4" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                        <h3 className="text-lg font-black mb-1" style={{ color: NAVY }}>Financial Information</h3>
                        <p className="text-slate-500 text-xs mb-5">Share your key financial metrics.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <InputField label="Total Capital Invested (₹)" required type="number" placeholder="e.g. 5,000,000" value={form.total_capital_invested} onChange={set("total_capital_invested")} />
                            <InputField label="Monthly Revenue (₹)" required type="number" placeholder="e.g. 200,000" value={form.monthly_revenue} onChange={set("monthly_revenue")} />
                            <InputField label="Monthly Burn Rate (₹)" required type="number" placeholder="e.g. 150,000" value={form.monthly_burn_rate} onChange={set("monthly_burn_rate")} />
                            <InputField label="Amount to Raise (₹)" required type="number" placeholder="e.g. 10,000,000" value={form.amount_to_raise} onChange={set("amount_to_raise")} />
                            <div className="sm:col-span-2">
                                <SelectField label="Funding Stage" required icon={<TrendingUp size={14} />} options={FUNDING_STAGES} value={form.funding_stage} onChange={set("funding_stage")} />
                            </div>
                        </div>
                    </motion.div>
                );
            case 5:
                return (
                    <motion.div key="step5" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                        <h3 className="text-lg font-black mb-1" style={{ color: NAVY }}>Pitch Details</h3>
                        <p className="text-slate-500 text-xs mb-5">Tell us about your pitch plans.</p>
                        <div className="space-y-4">
                            <RadioPill
                                label="Interested in Pitching at the Event?"
                                required
                                options={[
                                    { value: "true", label: "Yes, I want to pitch" },
                                    { value: "false", label: "Not this time" },
                                ]}
                                value={form.interested_in_pitching}
                                onChange={v => {
                                    setForm(f => ({
                                        ...f,
                                        interested_in_pitching: v,
                                        ...(v === "false" && { pitch_deck_link: "", pitch_deck_file: null })
                                    }));
                                    if (v === "false") setFileLabel("Upload pitch deck (PDF, max 10 MB)");
                                }}
                            />
                            <AnimatePresence>
                                {form.interested_in_pitching === "true" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                    >
                                        <InputField
                                            label="Pitch Deck Link (Drive)"
                                            icon={<Link size={14} />}
                                            placeholder="https://drive.google.com/…"
                                            value={form.pitch_deck_link}
                                            onChange={set("pitch_deck_link")}
                                        />
                                        <div>
                                            <Label>Upload Pitch Deck</Label>
                                            <label className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border-2 border-dashed cursor-pointer transition-all text-sm hover:border-blue-600"
                                                style={{ borderColor: "#cbd5e1" }}>
                                                <Upload size={14} className="text-slate-400 flex-shrink-0" />
                                                <span className="text-slate-500 text-xs truncate">{fileLabel}</span>
                                                <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                                            </label>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                );
            case 6:
                return (
                    <motion.div key="step6" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                        <h3 className="text-lg font-black mb-1" style={{ color: NAVY }}>Select Your Pass</h3>
                        <p className="text-slate-500 text-xs mb-5">Choose the pass that suits you best.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {PASS_TYPES.map(pass => {
                                const active = form.pass_type === pass.value;
                                return (
                                    <button
                                        key={pass.value}
                                        type="button"
                                        onClick={() => setForm(f => ({ ...f, pass_type: pass.value }))}
                                        className="relative text-left rounded-xl border-2 p-4 transition-all duration-200 hover:shadow-md"
                                        style={{
                                            borderColor: active ? pass.accent : "#dde3ef",
                                            background: active ? (pass.accent === NAVY ? "#eef2fb" : "#fff5f7") : "white",
                                            boxShadow: active ? `0 4px 20px ${pass.accent}22` : "none"
                                        }}
                                    >
                                        {active && (
                                            <div className="absolute top-3 right-3">
                                                <CheckCircle size={15} style={{ color: pass.accent }} />
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2.5 mb-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                                                style={{ background: pass.accent }}>
                                                {pass.icon}
                                            </div>
                                            <div>
                                                <p className="font-bold text-xs uppercase tracking-wide" style={{ color: "#6b7a99" }}>{pass.label}</p>
                                                <p className="text-2xl font-black leading-tight" style={{ color: pass.accent }}>{pass.price}</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-1">
                                            {pass.perks.map(perk => (
                                                <li key={perk} className="flex items-center gap-2 text-xs text-slate-500">
                                                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: pass.accent }} />
                                                    {perk}
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-screen" style={{ background: "#ffffff", fontFamily: "'system-ui', sans-serif" }}>
            {/* LEFT PANEL — Desktop only */}
            <div className="hidden lg:flex w-1/2 flex-col flex-shrink-0 sticky top-0 h-screen overflow-y-auto hide-scrollbar"
                style={{ background: "#cce8f0", borderRight: "1px solid #b0d8e8" }}>
                <div className="flex flex-col px-3 py-3">
                    <div className="flex items-center justify-between mb-5 pb-2" style={{ borderBottom: `1px solid #b0d8e8` }}>
                        <img src={logo1} alt="Logo 1" className="w-40 h-16 object-contain" />
                        <img src={logo3} alt="Logo 2" className="w-40 h-18 object-contain " />
                        <img src={logo2} alt="Logo 3" className="w-44 h-18 object-contain" />
                    </div>
                    <div className="flex justify-center mb-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase border"
                            style={{ color: CRIMSON, borderColor: `${CRIMSON}30`, background: `${CRIMSON}08` }}>
                            <Sparkles size={9} />
                            Investor & Founder Meet · 2026
                        </div>
                    </div>
                    <div className="mb-2 text-center">
                        <h1 className="text-6xl font-black leading-none mb-2"
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                letterSpacing: "-2px",
                                color: NAVY,
                            }}>
                            Udbhav
                        </h1>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px flex-1" style={{ background: `${CRIMSON}30` }} />
                            <span className="text-xs italic font-light" style={{ color: "#4a6a80" }}>From Thought to Action</span>
                            <div className="h-px flex-1" style={{ background: `${CRIMSON}30` }} />
                        </div>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "#2a4a5a" }}>
                            A curated gathering of builders, investors, and ecosystem architects —{" "}
                            <span style={{ color: NAVY }} className="font-semibold">where real conversations meet real capital.</span>
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border"
                                style={{ background: `rgba(255,255,255,0.5)`, borderColor: `${NAVY}20`, color: NAVY }}>
                                <CalendarDays size={12} style={{ color: CRIMSON }} />
                                April 11, 2026
                            </div>
                            <div className="flex items-center gap-1.5 text-xs" style={{ color: "#4a6a80" }}>
                                <MapPin size={11} style={{ color: CRIMSON }} />
                                <span>India</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 mb-5 px-1">
                        <div
                            className="text-[9px] font-bold uppercase tracking-widest mb-2 text-center lg:text-left"
                            style={{ color: "#5a7a8a" }}
                        >
                            Available Passes
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {PASS_TYPES.map((pass) => (
                                <div
                                    key={pass.value}
                                    className="rounded-lg border p-3 bg-white/70 backdrop-blur-sm transition-all hover:shadow-md"
                                    style={{
                                        borderColor: `${pass.accent}40`,
                                        borderWidth: "1px",
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="w-8 h-8 rounded-md flex items-center justify-center text-white flex-shrink-0"
                                            style={{ background: pass.accent }}
                                        >
                                            {pass.icon}
                                        </div>

                                        <div>
                                            <p
                                                className="font-semibold text-sm tracking-tight"
                                                style={{ color: "#1e293b" }}
                                            >
                                                {pass.label}
                                            </p>

                                            <p
                                                className="text-xl font-black leading-none mt-0.5"
                                                style={{ color: pass.accent }}
                                            >
                                                {pass.price}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="space-y-1 text-xs">
                                        {pass.perks.map((perk, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-slate-600"
                                            >
                                                <CheckCircle
                                                    size={12}
                                                    className="mt-[2px] flex-shrink-0"
                                                    style={{ color: pass.accent }}
                                                />
                                                <span>{perk}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <p
                            className="mt-3 text-[10px] text-center italic opacity-80"
                            style={{ color: "#64748b" }}
                        >
                            Pitching Pass includes application screening + chance for pitch slot
                        </p>
                    </div>

                    <div className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: "#5a7a8a" }}>
                        What You Get
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                        {EVENT_FEATURES.map((f, i) => (
                            <div key={i}
                                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 border"
                                style={{ background: `rgba(255,255,255,0.45)`, borderColor: `rgba(255,255,255,0.7)` }}>
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${NAVY}18`, color: NAVY }}>
                                    {f.icon}
                                </div>
                                <p className="text-[11.5px] font-medium leading-snug" style={{ color: NAVY }}>{f.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-xl border px-3.5 py-3 flex items-start gap-2.5"
                        style={{ background: `rgba(192,3,47,0.06)`, borderColor: `${CRIMSON}25` }}>
                        <AlertCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color: CRIMSON }} />
                        <p className="text-[12px] leading-relaxed" style={{ color: CRIMSON }}>
                            Startup pitches are subject to screening. Only shortlisted startups will be invited to present.
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL — Form Area */}
            <div className="w-full lg:w-1/2 relative lg:h-screen lg:flex lg:flex-col lg:overflow-hidden">
                {/* Mobile header */}
                <div className="lg:hidden" style={{ background: "#cce8f0", borderBottom: "1px solid #b0d8e8" }}>
                    <div className="px-5 pt-6 pb-5">
                        <div className="flex items-center justify-between mb-4 pb-4" style={{ borderBottom: "1px solid #b0d8e8" }}>
                            <img src={logo1} alt="Logo 1" className="w-28 h-12 object-contain" />
                            <img src={logo3} alt="Logo 2" className="w-28 h-12 object-contain" />
                            <img src={logo2} alt="Logo 3" className="w-28 h-12 object-contain" />
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase border"
                                style={{ color: CRIMSON, borderColor: `${CRIMSON}30`, background: `${CRIMSON}08` }}>
                                <Sparkles size={9} />
                                Investor & Founder Meet · 2026
                            </div>
                        </div>
                        <div className="text-center mb-4">
                            <h1 className="text-5xl font-black leading-none mb-2"
                                style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: "-2px", color: NAVY }}>
                                Udbhav
                            </h1>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-px flex-1" style={{ background: `${CRIMSON}30` }} />
                                <span className="text-xs italic font-light" style={{ color: "#4a6a80" }}>From Thought to Action</span>
                                <div className="h-px flex-1" style={{ background: `${CRIMSON}30` }} />
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border"
                                    style={{ background: `rgba(255,255,255,0.5)`, borderColor: `${NAVY}20`, color: NAVY }}>
                                    <CalendarDays size={12} style={{ color: CRIMSON }} />
                                    April 11, 2026
                                </div>
                                <div className="flex items-center gap-1.5 text-xs" style={{ color: "#4a6a80" }}>
                                    <MapPin size={11} style={{ color: CRIMSON }} />
                                    <span>India</span>
                                </div>
                            </div>
                        </div>

                        {/* ─── AVAILABLE PASSES SECTION (MOBILE) ───────────────────────────────── */}
                        <div className="mt-5 mb-5 px-2">
                            <div
                                className="text-[9px] font-bold uppercase tracking-widest mb-2 text-center"
                                style={{ color: "#5a7a8a" }}
                            >
                                Available Passes
                            </div>

                            <div className="flex flex-col gap-3 max-w-md mx-auto">
                                {PASS_TYPES.map((pass) => (
                                    <div
                                        key={pass.value}
                                        className="rounded-lg border p-3 bg-white/80 shadow-sm"
                                        style={{
                                            borderColor: `${pass.accent}40`,
                                            borderWidth: "1px",
                                        }}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div
                                                className="w-8 h-8 rounded-md flex items-center justify-center text-white"
                                                style={{ background: pass.accent }}
                                            >
                                                {pass.icon}
                                            </div>

                                            <div>
                                                <p
                                                    className="font-semibold text-sm"
                                                    style={{ color: "#1e293b" }}
                                                >
                                                    {pass.label}
                                                </p>

                                                <p
                                                    className="text-xl font-black mt-0.5"
                                                    style={{ color: pass.accent }}
                                                >
                                                    {pass.price}
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="space-y-1 text-xs text-slate-600">
                                            {pass.perks.map((perk, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircle
                                                        size={12}
                                                        className="mt-[2px] flex-shrink-0"
                                                        style={{ color: pass.accent }}
                                                    />
                                                    <span>{perk}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-[9px] font-bold uppercase tracking-widest mb-2.5" style={{ color: "#5a7a8a" }}>
                            What You Get
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            {EVENT_FEATURES.slice(0, 7).map((f, i) => (
                                <div key={i}
                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 border"
                                    style={{ background: `rgba(255,255,255,0.45)`, borderColor: `rgba(255,255,255,0.7)` }}>
                                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ background: `${NAVY}18`, color: NAVY }}>
                                        {f.icon}
                                    </div>
                                    <p className="text-[11px] font-medium leading-snug" style={{ color: NAVY }}>{f.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="rounded-xl border px-3.5 py-3 flex items-start gap-2.5"
                            style={{ background: `rgba(192,3,47,0.06)`, borderColor: `${CRIMSON}25` }}>
                            <AlertCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color: CRIMSON }} />
                            <p className="text-[11px] leading-relaxed" style={{ color: CRIMSON }}>
                                Startup pitches are subject to screening. Only shortlisted startups will be invited to present.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Content */}
                <div className="px-4 sm:px-6 md:px-10 xl:px-14 py-5 sm:py-7 max-w-2xl mx-auto w-full lg:flex-1 lg:flex lg:flex-col lg:overflow-hidden">
                    <div className="mb-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: CRIMSON }}>
                                Register Now
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-black mb-1" style={{ color: NAVY, fontFamily: "'Georgia', serif" }}>
                                Secure Your Spot
                            </h2>
                            <p className="text-slate-500 text-xs">All fields marked with * are required.</p>
                        </div>

                        <a
                            href={brochure}
                            download="Udbhav_2026_Event_Poster.pdf"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm border-2 transition-all hover:shadow-md whitespace-nowrap hover:bg-red-50 active:bg-red-100"
                            style={{
                                borderColor: CRIMSON,
                                color: CRIMSON,
                                backgroundColor: "white",
                            }}
                        >
                            <Download size={16} />
                            Download Event brochure
                        </a>
                    </div>

                    <StepIndicator currentStep={currentStep} />

                    <div className="lg:flex-1 lg:overflow-y-auto lg:pr-1" style={{ minHeight: "200px" }}>
                        <AnimatePresence mode="wait">
                            {renderStep()}
                        </AnimatePresence>
                    </div>

                    <div className="mt-5 flex justify-between items-center lg:flex-shrink-0">
                        <div>
                            {currentStep > 1 && (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    onClick={handleBack}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all"
                                    style={{ borderColor: NAVY, color: NAVY, background: "white" }}
                                >
                                    <ChevronLeft size={16} />
                                    Back
                                </motion.button>
                            )}
                        </div>
                        <div className="flex-1 flex justify-end">
                            {currentStep < 6 ? (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    onClick={handleNext}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all"
                                    style={{
                                        background: NAVY,
                                        boxShadow: `0 4px 14px rgba(32,63,120,0.30)`
                                    }}
                                >
                                    Next
                                    <ChevronRight size={16} />
                                </motion.button>
                            ) : (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                    className="flex items-center gap-1.5 px-3 sm:px-6 py-3 rounded-xl text-white font-bold text-xs sm:text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed max-w-[200px] sm:max-w-xs justify-center"
                                    style={{
                                        background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a8a 40%, ${CRIMSON} 100%)`,
                                        boxShadow: `0 8px 32px rgba(32,63,120,0.25)`
                                    }}
                                >
                                    <Rocket size={16} />
                                    {isSubmitting ? "Submitting…" : "Register for Udbhav 2026"}
                                    {!isSubmitting && <ArrowRight size={15} />}
                                </motion.button>
                            )}
                        </div>
                    </div>

                    <p className="text-[11px] text-center text-slate-400 mt-3 pb-4 lg:flex-shrink-0">
                        By registering, you agree to our terms. Pitching spots are limited and subject to screening.
                    </p>
                </div>

                <SuccessModal />
                <Toast />
            </div>
        </div>
    );
}