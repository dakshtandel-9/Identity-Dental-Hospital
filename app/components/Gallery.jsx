import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/clinic-1.jpg", alt: "Modern dental clinic reception area", label: "Reception Area" },
  { src: "/clinic-2.jpg", alt: "State-of-the-art dental treatment room", label: "Treatment Room" },
  { src: "/clinic-3.jpg", alt: "Advanced dental equipment", label: "Our Technology" },
  { src: "/smile-1.jpg", alt: "Patient with a bright, healthy smile", label: "Smile Makeover" },
  { src: "/smile-2.jpg", alt: "Close-up of a successful dental implant", label: "Dental Implants" },
  { src: "/smile-3.jpg", alt: "Patient after a cosmetic dentistry procedure", label: "Cosmetic Dentistry" },
];

export default function Gallery() {
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
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}