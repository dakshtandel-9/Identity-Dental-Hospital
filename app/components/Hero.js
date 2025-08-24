"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- Inline SVG Icons (black, no dependencies) ---------- */
function PeopleIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
function ToothIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M19 2c-2 0-3 .67-5 2.5C12 2.67 11 2 9 2 5.69 2 3 4.69 3 8c0 3.09 1.16 7.2 3 9 1 .99 2.5 1 3.5 0C10 16 11 14 12 14s2 2 2.5 3c1 1 2.5.99 3.5 0 1.84-1.8 3-5.91 3-9 0-3.31-2.69-6-6-6Z" />
        </svg>
    );
}
function CalendarIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    );
}
function ToolsIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M14.7 6.3a4 4 0 1 0-5.66 5.66l9.9 9.9 5.66-5.66-9.9-9.9z" />
            <path d="M8 8l-5 5" />
        </svg>
    );
}
function AwardIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="8" r="5" />
            <path d="M8.21 13.89 7 22l5-2 5 2-1.21-8.11" />
        </svg>
    );
}

/* ---------- Config ---------- */
const CONFIG = {
    clinicName: "Identity Dental Hospital",
    slides: [
        { mobile: "/image2.webp", desktop: "/image1.webp", alt: "Clinic slide 1" },
        { mobile: "/image2.webp", desktop: "/image1.webp", alt: "Clinic slide 1" },
        { mobile: "/image2.webp", desktop: "/image1.webp", alt: "Clinic slide 1" },
    ],
    autoplayMs: 6000,         // hero slider autoplay (0 to disable)
    statsAutoplayMs: 2500,    // mobile stats auto-scroll interval
    statsResumeDelayMs: 4000, // resume after user interaction

    // Swap FA classes for inline SVG icon components
    stats: [
        { icon: "people", label: "Happy Patients", value: "10K+" },
        { icon: "tooth", label: "Dentists/Staff", value: "6+" },
        { icon: "calendar", label: "7 Days Open", value: "Yes" },
        { icon: "tools", label: "Implants", value: "1K+" },
        { icon: "tooth", label: "Dentures", value: "500+" },
        { icon: "award", label: "Crowns", value: "2K+" },
    ],
};

/* Map icon key to component */
function StatIcon({ name, className = "h-5 w-5" }) {
    switch (name) {
        case "people":
            return <PeopleIcon className={className} />;
        case "tooth":
            return <ToothIcon className={className} />;
        case "calendar":
            return <CalendarIcon className={className} />;
        case "tools":
            return <ToolsIcon className={className} />;
        case "award":
            return <AwardIcon className={className} />;
        default:
            return <span className={className}>•</span>;
    }
}

export default function Hero() {
    // Hero slider
    const [index, setIndex] = useState(0);
    const heroTimerRef = useRef(null);
    const total = CONFIG.slides.length;

    const next = () => setIndex((i) => (i + 1) % total);
    const prev = () => setIndex((i) => (i - 1 + total) % total);

    useEffect(() => {
        if (!CONFIG.autoplayMs) return;
        if (heroTimerRef.current) clearInterval(heroTimerRef.current);
        heroTimerRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % total);
        }, CONFIG.autoplayMs);
        return () => heroTimerRef.current && clearInterval(heroTimerRef.current);
    }, [total]);

    const srLabel = useMemo(
        () => `Slide ${index + 1} of ${total}`,
        [index, total]
    );

    return (
        <section id="hero" className="relative">
            {/* Full-bleed hero slider */}
            <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="relative h-[400px] overflow-hidden">
                    {CONFIG.slides.map((s, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                            aria-hidden={i !== index}
                        >
                            {/* Mobile (<= lg) */}
                            <div className="relative h-full lg:hidden">
                                <Image
                                    src={s.mobile}
                                    alt={s.alt}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                    priority={i === 0}
                                />
                            </div>
                            {/* Desktop (>= lg) */}
                            <div className="relative hidden lg:block h-full">
                                <Image
                                    src={s.desktop}
                                    alt={s.alt}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                    priority={i === 0}
                                />
                            </div>
                        </div>
                    ))}

                    {total > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous slide"
                                onClick={prev}
                                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-slate-200 items-center justify-center"
                            >
                                <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                aria-label="Next slide"
                                onClick={next}
                                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-slate-200 items-center justify-center"
                            >
                                <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </button>
                        </>
                    )}

                    {total > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                            {CONFIG.slides.map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Go to slide ${i + 1}`}
                                    onClick={() => setIndex(i)}
                                    className={`h-2.5 w-2.5 rounded-full transition ${i === index
                                            ? "bg-white shadow ring-1 ring-slate-300"
                                            : "bg-white/60 hover:bg-white"
                                        }`}
                                />
                            ))}
                            <span className="sr-only">{srLabel}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats bar: mobile auto-scroll carousel + desktop grid */}
            <div className="w-screen bg-[#F0FDFA] border-y border-[#CBFBF1]">
                <MobileStatsCarousel
                    stats={CONFIG.stats}
                    intervalMs={CONFIG.statsAutoplayMs}
                    resumeDelayMs={CONFIG.statsResumeDelayMs}
                />

                {/* Tablet/Desktop grid */}
                <div className="hidden sm:block px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 py-3">
                        {CONFIG.stats.map((s, i) => (
                            <div key={i} className="flex items-center justify-center gap-3 text-sm text-black">
                                <StatIcon name={s.icon} className="h-5 w-5" />
                                <div className="leading-tight">
                                    <div className="font-semibold">{s.value}</div>
                                    <div className="text-[12px] opacity-80">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ===== Mobile Stats Carousel (no external icons) ===== */
function MobileStatsCarousel({ stats, intervalMs = 2500, resumeDelayMs = 4000 }) {
    const wrapRef = useRef(null);
    const timerRef = useRef(null);
    const pausedRef = useRef(false);
    const indexRef = useRef(0);

    useEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;

        const cards = Array.from(wrap.querySelectorAll("[data-card='stat']"));
        if (cards.length === 0) return;

        const gapPx = 16; // matches Tailwind gap-4
        const cardWidth = () =>
            (cards[0]?.getBoundingClientRect().width || 220) + gapPx;

        const scrollToIndex = (idx) => {
            wrap.scrollTo({ left: idx * cardWidth(), behavior: "smooth" });
        };

        const stop = () => {
            if (timerRef.current) clearInterval(timerRef.current);
            timerRef.current = null;
        };

        const start = () => {
            stop();
            timerRef.current = setInterval(() => {
                if (pausedRef.current) return;
                indexRef.current = (indexRef.current + 1) % cards.length;
                scrollToIndex(indexRef.current);
            }, intervalMs);
        };

        const pauseThenResume = () => {
            pausedRef.current = true;
            stop();
            setTimeout(() => {
                pausedRef.current = false;
                start();
            }, resumeDelayMs);
        };

        wrap.addEventListener("pointerdown", pauseThenResume, { passive: true });
        wrap.addEventListener("touchstart", pauseThenResume, { passive: true });
        wrap.addEventListener("wheel", pauseThenResume, { passive: true });

        start();
        return () => {
            stop();
            wrap.removeEventListener("pointerdown", pauseThenResume);
            wrap.removeEventListener("touchstart", pauseThenResume);
            wrap.removeEventListener("wheel", pauseThenResume);
        };
    }, [intervalMs, resumeDelayMs]);

    return (
        <div className="sm:hidden relative px-4">
            {/* Edge fades to hint scrollability */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#F0FDFA] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#F0FDFA] to-transparent" />

            <div
                ref={wrapRef}
                className="flex gap-4 py-3 overflow-x-auto snap-x snap-mandatory scroll-px-4"
                style={{
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                {stats.map((s, i) => (
                    <div
                        key={i}
                        data-card="stat"
                        className="min-w-[220px] flex items-center gap-3 text-sm text-black snap-start bg-white/60 rounded-md px-3 py-2"
                    >
                        <StatIcon name={s.icon} className="h-5 w-5" />
                        <div className="leading-tight">
                            <div className="font-semibold">{s.value}</div>
                            <div className="text-[12px] opacity-80">{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
