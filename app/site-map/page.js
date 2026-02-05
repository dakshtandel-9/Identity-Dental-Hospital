import Link from 'next/link';

export const metadata = {
    title: "Sitemap | Identity Dental Hospital",
    description: "Identity Dental Hospital website sitemap. Explore our services, technology, and contact information.",
};

const SITE_STRUCTURE = [
    {
        title: "Main Sections",
        links: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Meet Our Doctors", href: "/#doctor" },
            { label: "Why Choose Us", href: "/#why-us" },
            { label: "Technology & Safety", href: "/#tech" },
            { label: "Patient Reviews", href: "/#reviews" },
            { label: "Gallery", href: "/#gallery" },
            { label: "Frequently Asked Questions", href: "/#faqs" },
            { label: "Contact Us", href: "/#contact" },
        ]
    },
    {
        title: "Services Offered",
        links: [
            { label: "Root Canal Treatment", href: "/#services" },
            { label: "Dental Implants", href: "/#services" },
            { label: "Cosmetic Dentistry", href: "/#services" },
            { label: "Aligners & Braces", href: "/#services" },
        ]
    }
];

export default function SitemapPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b pb-4">
                    Sitemap
                </h1>

                <div className="space-y-12">
                    {SITE_STRUCTURE.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
                                {section.title}
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <div className="mt-16 text-center text-slate-500 text-sm border-t pt-8">
                    <p>&copy; {new Date().getFullYear()} Identity Dental Hospital. All rights reserved.</p>
                    <p className="mt-2">Kadapa, Andhra Pradesh</p>
                </div>
            </div>
        </div>
    );
}
