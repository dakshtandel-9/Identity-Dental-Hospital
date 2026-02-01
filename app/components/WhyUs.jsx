"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faMicroscope,
    faGem,
    faComments,
    faShieldVirus,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";

const FEATURES = [
    {
        icon: faBolt,
        title: "Painless Single-Visit RCT",
        description: "Experience comfortable and efficient root canal treatments with our advanced single-sitting procedure.",
    },
    {
        icon: faMicroscope,
        title: "Microscopic Precision",
        description: "We use high-magnification microscopes and apex locators for unmatched accuracy in every treatment.",
    },
    {
        icon: faGem,
        title: "Premium Imported Materials",
        description: "Only the best, globally-sourced materials and high-quality zirconia crowns for durable, natural-looking results.",
    },
    {
        icon: faComments,
        title: "Transparent Communication",
        description: "We believe in clear, honest communication. You'll receive a transparent treatment plan with no hidden costs.",
    },
    {
        icon: faShieldVirus,
        title: "Advanced Sterilization",
        description: "Your safety is our priority. We follow a strict 4-step sterilization protocol and ensure radiation safety.",
    },
    {
        icon: faUsers,
        title: "Family-Friendly Care",
        description: "We provide a warm, welcoming environment and gentle care for patients of all ages, from children to seniors.",
    },
];

export default function WhyUs() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 200);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="why-us" className="py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Why Choose Identity Dental Hospital?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        We combine advanced technology with a patient-first approach to deliver the best dental care in Kadapa, Andhra Pradesh.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                                <FontAwesomeIcon icon={feature.icon} className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}