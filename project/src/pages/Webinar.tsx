// src/pages/WebinarPage.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import * as z from "zod";
import { Controller } from "react-hook-form";
import logo from "../public/aurex.png";

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    companyName: z.string().min(1, "Company / Startup name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    city: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const WebinarPage: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [countdown, setCountdown] = useState(6);
    const [cityOptions, setCityOptions] = useState<{ label: string; value: string }[]>([]);

    const {
        register,
        handleSubmit,
        control,
        formState: { isSubmitting, errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: "India" }),
        })
            .then((r) => r.json())
            .then((data) =>
                setCityOptions(data.data.map((c: string) => ({ label: c, value: c })))
            )
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (status !== "success") return;
        setCountdown(6);
        const t = setInterval(() => {
            setCountdown((p) => {
                if (p <= 1) {
                    clearInterval(t);
                    window.location.href = "https://www.aurexventures.in";
                    return 0;
                }
                return p - 1;
            });
        }, 1000);
        return () => clearInterval(t);
    }, [status]);

    const onSubmit = async (data: FormData) => {
        setStatus("submitting");
        try {
            const res = await fetch(
                "https://AurexBackend.pythonanywhere.com/api/registrations/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        first_name: data.firstName,
                        last_name: data.lastName,
                        company_name: data.companyName,
                        email: data.email,
                        phone: data.phone,
                        city: data.city,
                    }),
                }
            );
            if (!res.ok) throw new Error();
            setStatus("success");
        } catch {
            setStatus("idle");
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="min-h-screen bg-white relative">
                {/* Thin top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#a8042b]" />

                {/* Background blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#a8042b]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#223258]/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-5 py-6">
                    {/* Top Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6"
                    >
                        <img src={logo} alt="Aurex Ventures" className="h-12 object-contain" />

                        <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                            <span className="bg-[#a8042b] text-white px-3 py-1 rounded-full">FREE WEBINAR</span>
                            <span className="border border-[#223258]/20 text-[#223258] px-3 py-1 rounded-full">
                                📅 24 Apr 2026
                            </span>
                            <span className="border border-[#223258]/20 text-[#223258] px-3 py-1 rounded-full">
                                ⏰ 7:00 – 8:30 PM
                            </span>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-6"
                    >
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#223258] leading-tight">
                            Fundraising 101:{" "}
                            <span className="text-[#a8042b]">From Idea to First Investor</span>
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            A free webinar for early-stage founders
                        </p>
                    </motion.div>

                    {/* Mentor Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 bg-[#223258] rounded-2xl px-6 py-3 mb-7 max-w-lg mx-auto"  // ← increased width
                    >
                        <div className="w-10 h-10 rounded-xl bg-[#a8042b] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                            KG
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-semibold">Kailash Tulsi Gajara</p>
                            <p className="text-white/70 text-xs leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                                Founder & CEO – Atulsia Technologies · Megastores.com
                            </p>
                        </div>
                        <span className="text-[10px] text-white/50 uppercase tracking-widest font-medium flex-shrink-0">MENTOR</span>
                    </motion.div>

                    {/* Main Content Grid - FIXED EQUAL HEIGHT */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                        {/* Left: Key Takeaways */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-[#a8042b] rounded-2xl p-6 text-white flex flex-col"
                        >
                            <h3 className="font-bold text-lg mb-3">What You'll Learn</h3>
                            <p className="text-white/80 text-sm mb-4 leading-relaxed">
                                Navigate the realities of raising capital — from your first idea to landing your first investor.
                            </p>

                            <ul className="space-y-2.5 text-sm flex-1">
                                {[
                                    "Understand how to move from idea to investor readiness",
                                    "Learn what investors actually evaluate beyond the pitch deck",
                                    "Gain clarity on positioning your startup for funding",
                                    "Explore how to identify and target the right investors",
                                    "Understand the end-to-end fundraising process",
                                    "Learn common mistakes founders make during fundraising",
                                    "Get practical insights on building investor confidence",
                                ].map((point) => (
                                    <li key={point} className="flex items-start gap-2">
                                        <span className="mt-0.5 text-white/50">›</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-white/70 text-xs mt-5">🚀 Limited seats — Register now</p>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col"
                        >
                            <div className="text-center mb-5">
                                <h2 className="text-xl font-bold text-[#223258]">Reserve Your Seat</h2>
                                <p className="text-xs text-gray-500 mt-1">It's FREE – spots are limited!</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-1 flex flex-col">
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        {...register("firstName")}
                                        placeholder="First Name *"
                                        className="inp"
                                    />
                                    <input
                                        {...register("lastName")}
                                        placeholder="Last Name *"
                                        className="inp"
                                    />
                                </div>

                                <input
                                    {...register("companyName")}
                                    placeholder="Startup / Company *"
                                    className="inp"
                                />

                                <div className="grid grid-cols-2 gap-3">
                                    <Controller
                                        name="city"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                options={cityOptions}
                                                placeholder="City"
                                                isSearchable
                                                value={cityOptions.find((c) => c.value === field.value) || null}
                                                onChange={(opt) => field.onChange(opt?.value)}
                                                menuPosition="fixed"
                                                menuPortalTarget={document.body}
                                                styles={{
                                                    control: (base) => ({
                                                        ...base,
                                                        minHeight: "38px",
                                                        fontSize: "13px",
                                                        borderRadius: "6px",
                                                        borderColor: "#e5e7eb",
                                                    }),

                                                    menuPortal: (base) => ({
                                                        ...base,
                                                        zIndex: 9999,   // 🔥 VERY IMPORTANT
                                                    }),

                                                    menu: (base) => ({
                                                        ...base,
                                                        zIndex: 9999,   // 🔥 VERY IMPORTANT
                                                    }),

                                                    placeholder: (base) => ({
                                                        ...base,
                                                        fontSize: "13px",
                                                        color: "#9ca3af",
                                                    }),

                                                    option: (base, state) => ({
                                                        ...base,
                                                        fontSize: "13px",
                                                        backgroundColor: state.isSelected
                                                            ? "#a8042b"
                                                            : state.isFocused
                                                                ? "#fdf2f4"
                                                                : "white",
                                                    }),
                                                }}
                                            />
                                        )}
                                    />
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="Phone Number *"
                                        className="inp"
                                        onInput={(e) => {
                                            (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/\D/g, "");
                                        }}
                                    />
                                </div>

                                <div>
                                    <input
                                        {...register("email")}
                                        placeholder="Work Email *"
                                        className="inp"
                                    />
                                    <p className="text-[10px] text-gray-400 mt-1 ml-1">
                                        Use official email if available
                                    </p>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || status === "submitting"}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#a8042b] hover:bg-[#c2053a] text-white font-semibold py-3 rounded-xl text-sm transition-colors mt-auto"
                                >
                                    {status === "submitting" ? "Registering..." : "Reserve My Seat →"}
                                </motion.button>
                            </form>

                            <p className="text-center text-[10px] text-gray-400 mt-4">
                                Your info is secure and used only for this webinar.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <footer className="text-center py-4 text-xs text-gray-400 border-t border-gray-100">
                    For more information visit{" "}
                    <a href="https://www.aurexventures.in/" target="_blank" rel="noopener noreferrer" className="text-[#a8042b] underline">
                        www.aurexventures.in
                    </a>
                </footer>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            className="bg-white rounded-2xl p-7 max-w-sm w-full text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">You're Registered! 🎉</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Thank you for joining <span className="font-semibold text-[#a8042b]">Fundraising 101</span>.
                            </p>
                            <p className="text-gray-500 text-xs mb-5">
                                See you on <strong>24th April 2026</strong> at <strong>7:00 PM</strong>!
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => (window.location.href = "https://www.aurexventures.in")}
                                className="w-full bg-[#a8042b] text-white font-semibold py-3 rounded-xl text-sm"
                            >
                                Continue to Website →
                            </motion.button>

                            <p className="text-xs text-gray-400 mt-4">Auto-redirecting in {countdown}s...</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .inp {
          width: 100%;
          padding: 10px 12px;
          font-size: 13px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          color: #111827;
          background: #fff;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .inp::placeholder { color: #9ca3af; }
        .inp:focus {
          border-color: #a8042b;
          box-shadow: 0 0 0 2px rgba(168,4,43,0.12);
        }
      `}</style>
        </>
    );
};

export default WebinarPage;