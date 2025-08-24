import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTooth,
    faFaceSmile,
    faCrown,
    faWandMagicSparkles,
    faShieldHeart,
    faHeartPulse,
    faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

const SERVICES = [
    { title: "Root Canal (Single‑Visit)", desc: "Microscopic precision, comfortable recovery.", icon: faTooth },
    { title: "Dental Implants", desc: "Single, multiple, or full‑arch solutions.", icon: faTooth },
    { title: "Aligners / Braces", desc: "Clear aligners, ceramic and metal braces.", icon: faFaceSmile },
    { title: "Crowns & Bridges (Zirconia)", desc: "Natural look, metal‑free durability.", icon: faCrown },
    { title: "Cosmetic Dentistry", desc: "Whitening, veneers, smile design.", icon: faWandMagicSparkles },
    { title: "Cleaning & Preventive", desc: "Scaling, polishing, fluoride, sealants.", icon: faShieldHeart },
    { title: "Gum Treatments", desc: "Laser‑assisted periodontal care.", icon: faHeartPulse },
    { title: "Wisdom Tooth / Surgery", desc: "Planned, safe extractions.", icon: faUserDoctor },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Our Dental Services
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        We offer a wide range of dental services to meet your needs. Our team of experts is dedicated to providing you with the highest quality care in a comfortable and welcoming environment.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center"
                        >
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 text-white">
                                    <FontAwesomeIcon icon={service.icon} className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-base text-slate-500">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}