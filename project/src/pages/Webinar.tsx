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
        formState: { isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: "India" }),
        })
            .then((res) => res.json())
            .then((data) => {
                const cities = data.data.map((city: string) => ({
                    label: city,
                    value: city,
                }));
                setCityOptions(cities);
            })
            .catch((err) => console.error("City fetch error:", err));
    }, []);

    useEffect(() => {
        if (status === "success") {
            setCountdown(6);
            const timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        window.location.href = "https://www.aurexventures.in";
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [status]);

    const onSubmit = async (data: FormData) => {
        setStatus("submitting");
        try {
            const response = await fetch(
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

            if (!response.ok) throw new Error("Registration failed");
            setStatus("success");
        } catch (error) {
            setStatus("idle");
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            {/* ── PAGE WRAPPER: white base with crimson top band ── */}
            <div className="min-h-screen bg-[#ffffff] px-3 sm:px-4 py-5 sm:py-6 relative">

                {/* Crimson top accent band */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#a8042b]" />

                {/* Subtle background blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-[-60px] w-64 h-64 bg-[#a8042b]/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-[-60px] w-72 h-72 bg-[#223258]/8 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a8042b]/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto pt-0">

                    {/* ── LOGO ── */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-2"
                    >
                        <img
                            src={logo}
                            alt="Aurex Ventures Logo"
                            className="h-12 sm:h-16 lg:h-18 object-contain"
                        />
                    </motion.div>

                    {/* ── FREE BADGE ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex justify-center mb-1"
                    >
                        <span className="bg-[#a8042b] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow">
                            FREE Webinar
                        </span>
                    </motion.div>

                    {/* ── HEADING ── */}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-[#223258] mb-2 sm:mb-1"
                    >
                        Register for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8042b] to-[#d4215a]">
                            Fundraising 101
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center text-[#223258]/70 text-sm sm:text-base mb-6 sm:mb-2"
                    >
                        From Idea to First Investor
                    </motion.p>

                    {/* ── EVENT META PILLS ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex flex-wrap justify-center gap-3 mb-3"
                    >
                        {[
                            { icon: "📅", text: "24th April 2026" },
                            { icon: "⏰", text: "7:00 – 8:30 PM" },
                            { icon: "🎤", text: "Kailash Tulsi Gajara" },
                        ].map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-2 bg-[#223258]/8 border border-[#223258]/15 rounded-full px-4 py-1.5 text-sm font-medium text-[#223258]"
                            >
                                <span>{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── CONTENT GRID ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">

                        {/* ── LEFT: Info Panel ── */}
                        {/* ── LEFT: Info Panel ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Mentor card — navy */}
                            <div className="mb-4 bg-[#223258] rounded-2xl p-4 sm:p-5 max-w-full sm:max-w-md mx-auto lg:mx-0 shadow">
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-2 font-semibold">
                                    Your Mentor
                                </p>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-white font-bold text-base">Kailash Tulsi Gajara</p>
                                        <p className="text-white/70 text-sm mt-1">
                                            Founder &amp; CEO – Atulsia Technologies
                                        </p>
                                        <p className="text-white/70 text-sm">
                                            Founder &amp; CEO – Megastores.com
                                        </p>
                                    </div>
                                    <a
                                        href="https://www.linkedin.com/in/kailashgajara"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-3 flex-shrink-0 mt-1 w-8 h-8 bg-[#0077B5] hover:bg-[#0066a1] rounded-lg flex items-center justify-center transition-colors duration-200"
                                        title="View LinkedIn Profile"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            className="w-4 h-4"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Info card — crimson background */}
                            <div className="bg-[#a8042b] rounded-2xl p-5 sm:p-6 max-w-full sm:max-w-md mx-auto lg:mx-0 shadow-lg">
                                <h3 className="text-lg font-bold text-white mb-3">
                                    What You'll Learn
                                </h3>

                                <p className="text-sm text-white/90 mb-4 leading-relaxed">
                                    Join us for a focused and practical FREE webinar on{" "}
                                    <span className="font-semibold">
                                        Fundraising 101: From Idea to First Investor
                                    </span>
                                    , designed to help early-stage founders navigate the realities
                                    of raising capital.
                                </p>

                                <ul className="space-y-2.5">
                                    {[
                                        "Understand how to move from idea to investor readiness",
                                        "Learn what investors actually evaluate beyond the pitch deck",
                                        "Gain clarity on positioning your startup for funding",
                                        "Explore how to identify and target the right investors",
                                        "Understand the end-to-end fundraising process",
                                        "Learn common mistakes founders make during fundraising",
                                        "Get practical insights on building investor confidence",
                                    ].map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-sm text-white/90">
                                            <span className="mt-0.5 flex-shrink-0 w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-white text-[10px]">
                                                ✓
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-center lg:justify-start gap-2 mt-4 text-[#a8042b] font-semibold text-sm">
                                🚀 Limited seats available – Register now!
                            </div>
                        </motion.div>
                        {/* ── RIGHT: Registration Form ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-[#223258] text-center mb-1">
                                Reserve Your Seat
                            </h2>
                            <p className="text-center text-sm text-gray-500 mb-5">
                                It's FREE – spots are limited!
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <input
                                        {...register("firstName")}
                                        placeholder="First Name *"
                                        className="input"
                                    />
                                    <input
                                        {...register("lastName")}
                                        placeholder="Last Name *"
                                        className="input"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <input
                                        {...register("companyName")}
                                        placeholder="Startup / Company Name *"
                                        className="input"
                                    />
                                    <Controller
                                        name="city"
                                        control={control}
                                        defaultValue={undefined}
                                        render={({ field }) => (
                                            <Select
                                                options={cityOptions}
                                                placeholder="Select City"
                                                isSearchable={true}
                                                value={cityOptions.find((c) => c.value === field.value) || null}
                                                onChange={(option) => field.onChange(option?.value)}
                                                menuPlacement="bottom"
                                                menuPosition="fixed"
                                                menuPortalTarget={document.body}
                                                styles={{
                                                    control: (base) => ({
                                                        ...base,
                                                        minHeight: "40px",
                                                        borderRadius: "8px",
                                                        borderColor: "#d1d5db",
                                                        fontSize: "0.875rem",
                                                    }),
                                                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                                                }}
                                            />
                                        )}
                                    />
                                </div>

                                <input
                                    {...register("email")}
                                    placeholder="Work Email (e.g. name@company.com)"
                                    className="input"
                                />
                                <p className="text-xs text-gray-500">
                                    Please use your official / professional email if available
                                </p>

                                <input
                                    {...register("phone")}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="Phone Number *"
                                    className="input"
                                    onInput={(e) => {
                                        (e.target as HTMLInputElement).value = (
                                            e.target as HTMLInputElement
                                        ).value.replace(/[^0-9]/g, "");
                                    }}
                                />

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || status === "submitting"}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-[#a8042b] to-[#c2053a] text-white font-semibold py-3 rounded-lg shadow-md"
                                >
                                    {status === "submitting" ? "Registering..." : "Reserve My Seat →"}
                                </motion.button>
                            </form>

                            <p className="text-center text-xs text-gray-500 mt-4">
                                Your info is secure and used only for this webinar.
                            </p>

                            <div className="mt-5 pt-4 border-t flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm font-medium text-[#223258]">
                                <span>🌐 aurexventures.in</span>
                            </div>
                        </motion.div>
                    </div>
                </div >

                <style>
                    {`
            .input {
              width: 100%;
              padding: 0.65rem 0.75rem;
              font-size: 0.875rem;
              border-radius: 0.5rem;
              border: 1px solid #d1d5db;
              background: #fff;
              color: #111827;
            }
            .input:focus {
              border-color: #a8042b;
              box-shadow: 0 0 0 2px rgba(168, 4, 43, 0.15);
              outline: none;
            }
          `}
                </style>

                {/* ── FOOTER ── */}
                <footer className="relative z-10 text-center py-3 px-4 mt-8 text-sm text-gray-400 border-t border-gray-200">
                    For more information, please visit{" "}
                    <a
                        href="https://www.aurexventures.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a8042b] hover:text-[#c2053a] underline underline-offset-2 font-medium transition-colors duration-200"
                    >
                        www.aurexventures.in
                    </a>
                </footer>
            </div >

            {/* ── SUCCESS MODAL ── */}
            <AnimatePresence>
                {
                    status === "success" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    You're Registered! 🎉
                                </h3>

                                <p className="text-gray-600 mb-2">
                                    Thank you for registering for{" "}
                                    <span className="font-semibold text-[#a8042b]">
                                        Fundraising 101: From Idea to First Investor
                                    </span>
                                    .
                                </p>
                                <p className="text-gray-500 text-sm mb-6">
                                    See you on <strong>24th April 2026</strong> at <strong>7:00 PM</strong>!
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => (window.location.href = "https://www.aurexventures.in")}
                                    className="bg-gradient-to-r from-[#a8042b] to-[#c2053a] text-white font-semibold py-3 px-8 rounded-lg shadow"
                                >
                                    Continue to Website →
                                </motion.button>

                                <p className="text-xs text-gray-400 mt-4">
                                    (Auto-redirecting in {countdown} second{countdown !== 1 ? "s" : ""}...)
                                </p>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
};

export default WebinarPage;