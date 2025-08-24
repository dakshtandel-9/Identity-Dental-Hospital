import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMicroscope,
    faLightbulb,
    faXRay,
    faShieldAlt,
    faHeadset,
    faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

const TECHNOLOGY = [
    {
        icon: faMicroscope,
        title: "Advanced Dental Microscope",
        description:
            "For high-precision treatments, ensuring accuracy and better outcomes.",
    },
    {
        icon: faLightbulb,
        title: "Digital Smile Design",
        description:
            "Visualize and co-design your new smile with our advanced software.",
    },
    {
        icon: faXRay,
        title: "Low-Radiation Digital X-Rays",
        description:
            "Safer, faster, and more detailed imaging for accurate diagnostics.",
    },
];

const SAFETY = [
    {
        icon: faShieldAlt,
        title: "4-Step Sterilization",
        description: "Our clinic adheres to a rigorous 4-step sterilization process, including autoclave and sealed pouches, to ensure a sterile environment.",
    },
    {
        icon: faHeadset,
        title: "Transparent Communication",
        description: "We believe in open and honest communication, providing clear treatment plans and answering all your questions.",
    },
    {
        icon: faHandHoldingHeart,
        title: "Patient-Centric Approach",
        description: "Your comfort and well-being are our top priorities. We provide personalized care in a calm and supportive setting.",
    },
];

export default function TechnologySafety() {
    return (
        <section id="tech" className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Advanced Technology & Uncompromising Safety
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        We invest in the latest technology to provide top-tier dental care while ensuring the highest standards of safety and comfort.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Technology Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center lg:text-left">
                            Our Technology
                        </h3>
                        <div className="space-y-10">
                            {TECHNOLOGY.map((tech) => (
                                <div key={tech.title} className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600">
                                            <FontAwesomeIcon icon={tech.icon} className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-slate-900">
                                            {tech.title}
                                        </h4>
                                        <p className="mt-1 text-slate-600">
                                            {tech.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Safety Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center lg:text-left">
                            Our Commitment to Safety
                        </h3>
                        <div className="space-y-10">
                            {SAFETY.map((safety) => (
                                <div key={safety.title} className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 text-rose-600">
                                            <FontAwesomeIcon icon={safety.icon} className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-slate-900">
                                            {safety.title}
                                        </h4>
                                        <p className="mt-1 text-slate-600">
                                            {safety.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}