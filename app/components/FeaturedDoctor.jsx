import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faAward, faStar } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedDoctor() {
    return (
        <section id="doctor" className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="lg:col-span-5">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
                            <Image
                                src="/DocImage/MadhusudhanReddy.jpeg"
                                alt="Dr. N. Madhusudhan Reddy"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                className="object-cover object-center"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-7">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Meet Our Lead Specialist
                        </h2>
                        <p className="mt-4 text-xl text-slate-600">
                            Dr. N. Madhusudhan Reddy, MDS
                        </p>
                        <p className="mt-4 text-lg text-slate-500">
                            A renowned root canal specialist with over 21 years of dedicated experience. Dr. Reddy is a leader in single-sitting microscopic RCTs, advanced laser treatments, dental implants, and aesthetic zirconia crowns.
                        </p>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Qualifications & Accolades</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-teal-500 mt-1 mr-4" />
                                    <div>
                                        <h4 className="font-semibold text-slate-800">BDS: S.V. University, Tirupati</h4>
                                        <p className="text-slate-500">Bachelor of Dental Surgery</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-teal-500 mt-1 mr-4" />
                                    <div>
                                        <h4 className="font-semibold text-slate-800">MDS: Narayana Dental College, Nellore</h4>
                                        <p className="text-slate-500">Master of Dental Surgery (Conservative Dentistry & Endodontics)</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faStar} className="h-6 w-6 text-teal-500 mt-1 mr-4" />
                                    <div>
                                        <h4 className="font-semibold text-slate-800">Aesthetic Fellowship Exposure, California (USA)</h4>
                                        <p className="text-slate-500">Advanced training in cosmetic dentistry</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FontAwesomeIcon icon={faAward} className="h-6 w-6 text-teal-500 mt-1 mr-4" />
                                    <div>
                                        <h4 className="font-semibold text-slate-800">Gold Medalist under NTR UHS</h4>
                                        <p className="text-slate-500">Recognized for academic excellence</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Areas of Expertise</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full">Microscopic Dentistry</span>
                                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full">Laser Dentistry</span>
                                <span className="bg-pink-100 text-pink-800 text-sm font-medium px-4 py-2 rounded-full">Dental Implants</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}