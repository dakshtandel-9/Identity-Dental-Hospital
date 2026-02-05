"use client";
import Image from "next/image";
import { useState } from "react";

const GALLERY_IMAGES = [
  { src: "/GalImages/01.jpg", alt: "Modern dental clinic interior", label: "Clinic Interior" },
  { src: "/GalImages/02.jpg", alt: "State-of-the-art dental equipment", label: "Advanced Equipment" },
  { src: "/GalImages/03.jpg", alt: "Professional dental treatment room", label: "Treatment Room" },
  { src: "/GalImages/04.jpg", alt: "Dental consultation area", label: "Consultation Area" },
  { src: "/GalImages/05.jpg", alt: "Modern dental facility", label: "Our Facility" },
  { src: "/GalImages/06.jpg", alt: "Dental care environment", label: "Care Environment" },
  { src: "/GalImages/07.jpg", alt: "Professional dental workspace", label: "Workspace" },
  { src: "/GalImages/08.jpg", alt: "Dental clinic atmosphere", label: "Clinic Atmosphere" },
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 6);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Clinic & Results
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A glimpse into our state-of-the-art facility and the beautiful smiles we create.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayedImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={1200}
                quality={95}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {!showAll && GALLERY_IMAGES.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              View More
            </button>
          </div>
        )}
        {showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}