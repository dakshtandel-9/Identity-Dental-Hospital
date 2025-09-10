// components/Footer.js

const CONFIG = {
    clinicName: "",
    phone: "9052877700",
    whatsapp: "9052877700",
    email: "care@identitydental.in", // optional
    addressLine1: "Kadapa, Andhra Pradesh",
    addressLine2: "Near (add landmark)",
    mapsUrl: "https://maps.app.goo.gl/JvfVkXKbuWEHB3uS7?g_st=aw",
    hours: {
        weekdays1: "Mon–Sat: 10:00 AM – 2:30 PM",
        weekdays2: "Mon–Sat: 5:30 PM – 9:30 PM",
        sunday: "Sun: 10:00 AM – 2:30 PM",
    },
    waMessage:
        "Hi Identity Dental Hospital, I’d like to book an appointment.",
};

const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Doctor", href: "#doctor" },
    { label: "Why Us", href: "#why-us" },
    { label: "Technology", href: "#tech" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const telHref = `tel:${CONFIG.phone}`;
    const waHref = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
        CONFIG.waMessage
    )}`;

    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Brand + NAP */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo.svg"
                                alt={CONFIG.clinicName}
                                className="h-40 w-40 shrink-0"
                            />
                            <div className="text-lg font-semibold text-slate-900">
                                {CONFIG.clinicName}
                            </div>
                        </div>

                        <div className="mt-4 space-y-3 text-sm text-slate-700">
                            <p>
                                {CONFIG.addressLine1}
                                <br />
                                {CONFIG.addressLine2}
                            </p>
                            <p>
                                <a
                                    href={CONFIG.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-700 hover:underline"
                                >
                                    Get Directions
                                </a>
                            </p>
                            <p>
                                Phone:{" "}
                                <a href={telHref} className="text-teal-700 hover:underline">
                                    {CONFIG.phone}
                                </a>
                            </p>
                            {CONFIG.email && (
                                <p>
                                    Email:{" "}
                                    <a
                                        href={`mailto:${CONFIG.email}`}
                                        className="text-teal-700 hover:underline"
                                    >
                                        {CONFIG.email}
                                    </a>
                                </p>
                            )}
                        </div>

                        <div className="mt-5 flex gap-2">
                            <a
                                href={telHref}
                                className="px-3 py-2 rounded-md text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700"
                            >
                                Call
                            </a>
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 rounded-md text-sm font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wide">
                            Working Hours
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                            <li>{CONFIG.hours.weekdays1}</li>
                            <li>{CONFIG.hours.weekdays2}</li>
                            <li>{CONFIG.hours.sunday}</li>
                        </ul>

                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-slate-900">
                                Quick Actions
                            </h4>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center px-3 py-2 rounded-md text-xs font-semibold text-slate-800 border border-slate-300 hover:bg-white"
                                >
                                    Book Appointment
                                </a>
                                <a
                                    href={CONFIG.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-2 rounded-md text-xs font-semibold text-slate-800 border border-slate-300 hover:bg-white"
                                >
                                    Directions
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                            {quickLinks.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-slate-700 hover:text-teal-700"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <p className="text-xs text-slate-500">
                                For emergencies, please call the clinic directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal bar */}
            <div className="bg-slate-100 border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} {CONFIG.clinicName}. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-600">
                        <a href="#privacy" className="hover:text-slate-900">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="hover:text-slate-900">
                            Terms of Service
                        </a>
                        <a href="#disclaimer" className="hover:text-slate-900">
                            Medical Disclaimer
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
