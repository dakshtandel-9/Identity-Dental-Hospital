"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/* ========= Config ========= */
const CONFIG = {
    clinicName: "Identity Dental Hospital",
    phone: "9052877700",
    whatsapp: "9052877700",
    mapsUrl: "https://maps.app.goo.gl/JvfVkXKbuWEHB3uS7?g_st=aw",
    waMessage: "Hi Identity Dental Hospital, I’d like to book an appointment.",
};

const NAV = [
    { label: "Services", href: "#services" },
    { label: "Doctor", href: "#doctor" },
    { label: "Why Us", href: "#why-us" },
    { label: "Technology", href: "#tech" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
];

/* ========= Header ========= */
export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);

    const telHref = useMemo(() => `tel:${CONFIG.phone}`, []);
    const waHref = useMemo(
        () =>
            `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
                CONFIG.waMessage
            )}`,
        []
    );

    /* Sticky style on scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Smooth scroll for anchor links; close menu after navigating */
    useEffect(() => {
        const handler = (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const id = a.getAttribute("href");
            if (!id || id === "#") return;
            const el = document.querySelector(id);
            if (!el) return;
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            history.pushState(null, "", id);
            setOpen(false);
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    /* Lock body scroll when menu is open */
    useEffect(() => {
        if (!open) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [open]);

    /* Click outside to close menu */
    useEffect(() => {
        const onDocClick = (e) => {
            if (!open) return;
            const menuEl = menuRef.current;
            const toggleEl = toggleRef.current;
            if (!menuEl) return;
            if (
                !menuEl.contains(e.target) &&
                (!toggleEl || !toggleEl.contains(e.target))
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("touchstart", onDocClick, { passive: true });
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("touchstart", onDocClick);
        };
    }, [open]);

    /* Escape to close + basic focus trap */
    useEffect(() => {
        if (!open) return;
        const menuEl = menuRef.current;
        if (!menuEl) return;

        const focusable = Array.from(
            menuEl.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const onKey = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
                toggleRef.current?.focus();
            }
            if (e.key === "Tab" && focusable.length) {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener("keydown", onKey);
        first?.focus();
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header
            id="site-header"
            className={[
                "fixed top-0 inset-x-0 z-50 backdrop-saturate-150 transition",
                "bg-white/60 dark:bg-slate-900/40 backdrop-blur",
                scrolled
                    ? "bg-white/85 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800"
                    : "border-b border-transparent",
            ].join(" ")}
        >
            {/* Top row */}
            <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 h-16 flex items-center justify-between overflow-hidden">
                {/* Brand: logo only */}
                <a href="#top" className="flex items-center" aria-label="Go to top">
                    <Image
                        src="/logo1.svg"
                        alt={CONFIG.clinicName}
                        width={36}
                        height={36}
                        priority
                        className="shrink-0"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
                    {NAV.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-slate-700 hover:text-teal-700 dark:text-slate-200 dark:hover:text-teal-400 transition text-sm font-medium"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={telHref}
                        className="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 dark:text-slate-100 border border-slate-300/70 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                        aria-label="Call now"
                    >
                        Call
                    </a>
                    <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700"
                        aria-label="Chat on WhatsApp"
                    >
                        WhatsApp
                    </a>
                    <a
                        href={CONFIG.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-md text-sm font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200"
                        aria-label="Get directions"
                    >
                        Directions
                    </a>
                </div>

                {/* Mobile: Call + Menu */}
                <div className="flex lg:hidden items-center gap-2 flex-nowrap shrink-0">
                    <a
                        href={telHref}
                        className="px-3 py-2 rounded-md text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 whitespace-nowrap shrink-0"
                        aria-label="Call now"
                    >
                        Call
                    </a>
                    <button
                        ref={toggleRef}
                        onClick={() => setOpen((s) => !s)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="inline-flex items-center justify-center rounded-md p-2 w-10 h-10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            {open ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M3 6h18M3 12h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (collapsible) */}
            <div
                id="mobile-menu"
                ref={menuRef}
                aria-hidden={!open}
                className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-[480px]" : "max-h-0"
                    }`}
            >
                <div className="px-3 sm:px-4 pb-4 space-y-2">
                    {NAV.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block rounded-md px-3 py-3 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            {item.label}
                        </a>
                    ))}

                    <div className="flex gap-2 pt-2">
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-3 py-3 rounded-md text-center text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700"
                        >
                            WhatsApp
                        </a>
                        <a
                            href={CONFIG.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-3 py-3 rounded-md text-center text-sm font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200"
                        >
                            Directions
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
