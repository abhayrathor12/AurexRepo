import { useState } from "react";
import {
    Rocket, IndianRupee, Users, Target, ChevronRight,
    Upload, Link, CheckCircle, AlertCircle, Zap, Building2,
    MapPin, Phone, Mail, User, FileText, TrendingUp, Briefcase,
    CalendarDays, ArrowRight, Sparkles, Star, Globe, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";
import logo from "../../public/aurex2.png";

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
const NAVY = "#0f1f45";
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

const EVENT_HIGHLIGHTS = [
    { icon: <Zap size={15} />, title: "Curated Pitch Sessions", desc: "Present to a room of active investors" },
    { icon: <Users size={15} />, title: "Founder Roundtables", desc: "Peer-to-peer deep dives across sectors" },
    { icon: <Star size={15} />, title: "Investor Speed Meets", desc: "Structured 1:1s with decision-makers" },
    { icon: <Globe size={15} />, title: "Ecosystem Showcase", desc: "Demos, exhibits, and product launches" },
];

// ─── Shared Field Primitives ───────────────────────────────────────────────────
const inputCls = "w-full px-3.5 py-2.5 rounded-lg border bg-white/80 text-slate-800 placeholder-slate-400 text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-offset-0";
const inputStyle = { borderColor: "#dde3ef" };
const focusStyle = { borderColor: NAVY, boxShadow: `0 0 0 3px rgba(15,31,69,0.08)` };

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

const SectionDivider = ({ label }: { label: string }) => (
    <div className="flex items-center gap-3 py-1">
        <div className="flex-1 h-px bg-slate-100" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">{label}</span>
        <div className="flex-1 h-px bg-slate-100" />
    </div>
);

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function StartupRegistrationPage() {
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
    const openPayment = () => {
        const anchor = document.querySelector(
            "#razorpay-form .razorpay-payment-button a"
        ) as HTMLAnchorElement;

        if (anchor) {
            anchor.click();
        } else {
            console.error("Razorpay not loaded yet");
        }
    };

    const [toast, setToast] = useState<string | null>(null);
    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3500);
    };

    const Toast = () => (
        <AnimatePresence>
            {toast && (
                <motion.div
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 60, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed top-6 right-6 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl"
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
        setFileLabel("Upload pitch deck (PDF, max 10 MB)");
    };

    const handleSubmit = async () => {
        if (isSubmitting) return;

        const requiredFields: (keyof FormData)[] = [
            "name", "email", "contact_number", "organization_name", "city",
            "registering_as", "startup_stage", "industry", "startup_brief",
            "bootstrapped", "total_capital_invested", "monthly_revenue",
            "monthly_burn_rate", "amount_to_raise", "funding_stage",
            "interested_in_pitching", "pass_type"
        ];

        const missing = requiredFields.filter(field => !form[field]);
        if (missing.length > 0) {
            showToast("Please fill in all required fields before submitting.");
            return;
        }

        setIsSubmitting(true);

        try {
            const formData = new FormData();

            Object.entries(form).forEach(([key, value]) => {
                if (value !== null && value !== "") {
                    if (key !== "pitch_deck_file") {
                        formData.append(key, value as string);
                    }
                }
            });

            if (form.pitch_deck_file) {
                formData.append("pitch_deck_file", form.pitch_deck_file);
            }

            await api.post("/api/register/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
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
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="px-8 pt-10 pb-8 text-center">
                            <div
                                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, ${NAVY}, ${CRIMSON})` }}
                            >
                                <CheckCircle size={40} className="text-white" />
                            </div>

                            <h3
                                className="text-3xl font-black mb-3"
                                style={{ color: NAVY, fontFamily: "'Georgia', serif" }}
                            >
                                Thank You!
                            </h3>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Your registration for <strong>Udbhav 2026</strong> has been successfully received.<br />
                                We'll reach out soon with confirmation and further details.
                            </p>

                            <div className="bg-slate-50 rounded-xl p-5 mb-8 text-left text-sm border border-slate-200">
                                <p className="font-semibold mb-2" style={{ color: NAVY }}>Event Snapshot</p>
                                <p className="text-slate-700">
                                    📅 <strong>April 11, 2026</strong><br />
                                    📍 India
                                </p>
                            </div>

                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all"
                                style={{
                                    background: `linear-gradient(135deg, ${NAVY}, ${CRIMSON})`,
                                }}
                            >
                                Got it
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <div className="flex min-h-screen" style={{ background: "#f4f6fb", fontFamily: "'system-ui', sans-serif" }}>
            {/* LEFT PANEL — desktop only */}
            <div className="hidden lg:flex w-1/2 flex-col relative overflow-hidden flex-shrink-0 sticky top-0 h-screen"
                style={{ background: `linear-gradient(160deg, ${NAVY} 0%, #18234d 55%, #2a0b1a 100%)` }}>
                {/* background effects */}
                <div className="absolute inset-0 opacity-[0.035]" style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                    backgroundSize: "28px 28px"
                }} />
                <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: CRIMSON }} />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: GOLD }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.06] blur-3xl" style={{ background: "white" }} />

                <div className="relative flex flex-col h-full px-8 py-8" style={{ gap: 0 }}>
                    <div className="flex items-center justify-between mb-4 flex-shrink-0">
                        <img src={logo} alt="Udbhav" className="w-24 h-14 object-contain" />
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 text-[10px] font-semibold tracking-widest uppercase"
                            style={{ color: "#fca5a5", background: "rgba(255,255,255,0.06)" }}>
                            <Sparkles size={9} />
                            Investor & Founder Meet · 2026
                        </div>
                    </div>

                    <div className="mb-4 flex-shrink-0">
                        <h1 className="text-6xl font-black leading-none mb-2"
                            style={{
                                fontFamily: "'Georgia', 'Times New Roman', serif",
                                letterSpacing: "-2px",
                                background: `linear-gradient(135deg, #ffffff 0%, #fca5a5 55%, ${CRIMSON} 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textAlign: "center"
                            }}>
                            Udbhav
                        </h1>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-px flex-1 opacity-20" style={{ background: CRIMSON }} />
                            <span className="text-slate-400 text-xs italic font-light">From Thought to Action</span>
                            <div className="h-px flex-1 opacity-20" style={{ background: CRIMSON }} />
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            A curated gathering of builders, investors, and ecosystem architects — where real conversations meet real capital.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mb-5 flex-shrink-0">
                        <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/12 text-xs font-semibold text-white"
                            style={{ background: "rgba(255,255,255,0.07)" }}>
                            <CalendarDays size={12} style={{ color: "#fca5a5" }} />
                            April 11, 2026
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                            <MapPin size={11} />
                            <span>India</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col min-h-0 mb-4">
                        <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-3 flex-shrink-0">What to expect</div>
                        <div className="grid grid-cols-2 gap-2.5 flex-1">
                            {EVENT_HIGHLIGHTS.map(h => (
                                <div key={h.title} className="flex flex-col gap-1.5 rounded-xl p-3 border border-white/10"
                                    style={{ background: "rgba(255,255,255,0.05)" }}>
                                    <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                                        style={{ background: "rgba(168,4,43,0.3)", color: "#fca5a5" }}>
                                        {h.icon}
                                    </div>
                                    <p className="text-white text-[14px] font-semibold leading-tight">{h.title}</p>
                                    <p className="text-slate-500 text-[12px] leading-snug">{h.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border border-amber-500/20 px-3.5 py-3 flex items-start gap-2.5 flex-shrink-0"
                        style={{ background: "rgba(232,160,32,0.08)" }}>
                        <AlertCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                        <p className="text-[13px] leading-relaxed" style={{ color: "#d4a855" }}>
                            Startup pitches are subject to screening. Only shortlisted startups will be invited to present.
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL — Form */}
            <div className="w-full lg:w-1/2 relative">
                {/* Mobile header */}
                <div className="lg:hidden" style={{ background: `linear-gradient(135deg, ${NAVY}, #2a0b1a)` }}>
                    <div className="px-4 pt-5 pb-4">
                        <div className="flex items-center justify-between mb-3">
                            <img src={logo} alt="Udbhav" className="w-16 h-10 object-contain" />
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 text-[10px] font-semibold tracking-widest uppercase"
                                style={{ color: "#fca5a5", background: "rgba(255,255,255,0.06)" }}>
                                <Sparkles size={9} />
                                Investor & Founder Meet · 2026
                            </div>
                        </div>
                        <h1 className="text-3xl font-black text-white leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                            Udbhav <span className="text-base font-normal text-slate-400 italic">2026</span>
                        </h1>
                        <div className="flex items-center gap-3 mt-1.5">
                            <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                <CalendarDays size={11} style={{ color: "#fca5a5" }} /> April 11, 2026
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                                <MapPin size={10} /> India
                            </span>
                        </div>
                    </div>

                    <div style={{ background: "rgba(0,0,0,0.25)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                        <div className="px-4 py-4 space-y-3">
                            <p className="text-slate-400 text-xs leading-relaxed">
                                A curated gathering of builders, investors, and ecosystem architects — where real conversations meet real capital.
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {EVENT_HIGHLIGHTS.map(h => (
                                    <div key={h.title} className="rounded-lg p-2.5 border border-white/10 flex gap-2 items-start"
                                        style={{ background: "rgba(255,255,255,0.04)" }}>
                                        <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                                            style={{ background: "rgba(168,4,43,0.3)", color: "#fca5a5" }}>
                                            {h.icon}
                                        </div>
                                        <div>
                                            <p className="text-white text-[11px] font-semibold leading-tight">{h.title}</p>
                                            <p className="text-slate-500 text-[10px] leading-snug mt-0.5">{h.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-lg border border-amber-500/20 px-3 py-2 flex items-start gap-2"
                                style={{ background: "rgba(232,160,32,0.08)" }}>
                                <AlertCircle size={11} className="flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                                <p className="text-[11px] leading-relaxed" style={{ color: "#d4a855" }}>
                                    Pitching spots are limited and subject to screening.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="px-4 sm:px-6 md:px-10 xl:px-14 py-6 sm:py-10 max-w-2xl mx-auto">
                    <div className="mb-6 sm:mb-8">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: CRIMSON }}>Register Now</p>
                        <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: NAVY, fontFamily: "'Georgia', serif" }}>
                            Secure Your Spot
                        </h2>
                        <p className="text-slate-500 text-sm">Fill out the form below. All fields marked with * are required.</p>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <SectionDivider label="Personal Information" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                                <div className="sm:col-span-2">
                                    <InputField label="Full Name" required icon={<User size={14} />} placeholder="Your full name" value={form.name} onChange={set("name")} />
                                </div>
                                <InputField label="Email Address" required type="email" icon={<Mail size={14} />} placeholder="you@example.com" value={form.email} onChange={set("email")} />
                                <InputField label="Contact Number" required type="tel" icon={<Phone size={14} />} placeholder="+91 98765 43210" value={form.contact_number} onChange={set("contact_number")} />
                            </div>
                        </div>

                        <div>
                            <SectionDivider label="Organization Details" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                                <div className="sm:col-span-2">
                                    <InputField label="Organization / Startup Name" required icon={<Briefcase size={14} />} placeholder="Your company name" value={form.organization_name} onChange={set("organization_name")} />
                                </div>
                                <InputField label="City" required icon={<MapPin size={14} />} placeholder="Mumbai, Delhi…" value={form.city} onChange={set("city")} />
                                <SelectField label="Registering As" required icon={<Users size={14} />} options={REGISTERING_AS} value={form.registering_as} onChange={set("registering_as")} />
                            </div>
                        </div>

                        <div>
                            <SectionDivider label="Startup Details" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
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
                        </div>

                        <div>
                            <SectionDivider label="Financial Information" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                                <InputField label="Total Capital Invested (₹)" required type="number" placeholder="e.g. 5,000,000" value={form.total_capital_invested} onChange={set("total_capital_invested")} />
                                <InputField label="Monthly Revenue (₹)" required type="number" placeholder="e.g. 200,000" value={form.monthly_revenue} onChange={set("monthly_revenue")} />
                                <InputField label="Monthly Burn Rate (₹)" required type="number" placeholder="e.g. 150,000" value={form.monthly_burn_rate} onChange={set("monthly_burn_rate")} />
                                <InputField label="Amount to Raise (₹)" required type="number" placeholder="e.g. 10,000,000" value={form.amount_to_raise} onChange={set("amount_to_raise")} />
                                <div className="sm:col-span-2">
                                    <SelectField label="Funding Stage" required icon={<TrendingUp size={14} />} options={FUNDING_STAGES} value={form.funding_stage} onChange={set("funding_stage")} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <SectionDivider label="Pitch Details" />
                            <div className="mt-4 space-y-4">
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
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
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
                                                <label
                                                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border-2 border-dashed cursor-pointer transition-all text-sm hover:border-blue-600"
                                                    style={{ borderColor: "#cbd5e1" }}
                                                >
                                                    <Upload size={14} className="text-slate-400 flex-shrink-0" />
                                                    <span className="text-slate-500 text-xs truncate">{fileLabel}</span>
                                                    <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                                                </label>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div>
                            <SectionDivider label="Select Your Pass" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
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
                                                background: active ? (pass.accent === NAVY ? "#f0f4ff" : "#fff5f7") : "white",
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
                                                    <p className="font-bold text-xs uppercase tracking-wide" style={{ color: "#6b7a99" }}>
                                                        {pass.label}
                                                    </p>
                                                    <p className="text-2xl font-black leading-tight" style={{ color: pass.accent }}>
                                                        {pass.price}
                                                    </p>
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
                        </div>

                        <div className="pt-4 pb-12">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                                className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-3 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                style={{
                                    background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a8a 40%, ${CRIMSON} 100%)`,
                                    boxShadow: `0 8px 32px rgba(15,31,69,0.25)`
                                }}
                            >
                                <Rocket size={18} />
                                {isSubmitting ? "Submitting..." : "Register for Udbhav 2026"}
                                {!isSubmitting && <ArrowRight size={16} />}
                            </motion.button>
                            <p className="text-[11px] text-center text-slate-400 mt-4">
                                By registering, you agree to our terms. Pitching spots are limited and subject to screening.
                            </p>
                        </div>
                    </div>
                </div>

                <SuccessModal />
                <Toast />
            </div>
        </div>
    );
}