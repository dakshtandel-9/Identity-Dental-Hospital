"use client";
// components/DoctorSection.jsx
import Image from "next/image";
import { useRef } from "react";

const doctors = [
    {
        name: "Dr. D Lahari",
        qualification: "BDS",
        image: "/DocImage/Dr. D Lahari (BDS).jpeg"
    },
    {
        name: "Dr. V. Maneesha",
        qualification: "BDS",
        image: "/DocImage/Dr. V.Maneesha (BDS).jpeg"
    },
    {
        name: "Dr. Vishnu Reddy",
        qualification: "BDS",
        image: "/DocImage/Dr. Vishnu reddy (BDS).jpeg"
    },
    {
        name: "Dr. Mahammadi Begam",
        qualification: "BDS",
        image: "/DocImage/Dr.Mahammadi Begam (BDS).jpeg"
    },
    {
        name: "Dr. Mounica K",
        qualification: "BDS",
        image: "/DocImage/Dr.Mounica.k (BDS).jpeg"
    },
    {
        name: "Dr. Ashok Kumar Reddy",
        qualification: "Ceramist",
        image: "/DocImage/Dr. Ashok Kumar reddy ( Ceramist).jpeg"
    },
    {
        name: "Dr. Reddy Sekhar",
        qualification: "Ceramist",
        image: "/DocImage/Dr. Reddy Sekhar ( Ceramist).jpeg"
    }
];

export default function DoctorSection() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
            const gap = 24; // 6 * 4px (space-x-6)
            scrollContainerRef.current.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
            const gap = 24; // 6 * 4px (space-x-6)
            scrollContainerRef.current.scrollBy({
                left: cardWidth + gap,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="doctor" className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Meet Our Expert Doctors
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Our team of experienced dental professionals is dedicated to providing you with the highest quality care using the latest techniques and technology.
                    </p>
                </div>

                {/* Doctors Slider */}
                <div className="relative">
                    {/* Scroll Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors border border-gray-200"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors border border-gray-200"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    
                    {/* Scrollable Container */}
                    <div 
                        ref={scrollContainerRef}
                        className="flex space-x-6 overflow-x-auto scrollbar-hide px-12"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitScrollbar: { display: 'none' }
                        }}
                    >
                        <style jsx>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {doctors.map((doctor, index) => (
                            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                {/* Doctor Image */}
                                <div className="relative h-80 w-full">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Doctor Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-teal-600 font-medium mb-1">
                                        {doctor.qualification}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="bg-teal-50 rounded-xl p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Ready to Meet Our Team?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Schedule a consultation with our experienced doctors today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                            >
                                Book Appointment
                            </a>
                            <a
                                href="tel:9052877700"
                                className="px-6 py-3 border border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}