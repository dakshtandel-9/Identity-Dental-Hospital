import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const TESTIMONIALS = [
    {
        name: "Ravi K.",
        text: "The single-visit root canal treatment was incredibly smooth and painless. The care I received was exceptional, and I couldn't be happier with the results.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=2521&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sana M.",
        text: "Dr. Tandel explained everything with such clarity and patience. The clinic is impeccably clean, and the entire team is professional and welcoming.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Harish P.",
        text: "I got a zirconia crown after my RCT, and it looks completely natural. The quality of work and attention to detail here is truly outstanding.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function Testimonials() {
    return (
        <section id="reviews" className="py-20 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        What Our Patients Say
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We take pride in providing exceptional care. Here’s what our patients have to say about their experiences.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                    {TESTIMONIALS.map((testimonial) => (
                        <div key={testimonial.name} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="p-8">
                                <FontAwesomeIcon icon={faQuoteLeft} className="text-teal-500 h-8 w-8 mb-4" />
                                <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Image
                                            className="h-12 w-12 rounded-full object-cover"
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-lg font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="flex items-center mt-1">
                                            {[...Array(testimonial.stars)].map((_, i) => (
                                                <FontAwesomeIcon key={i} icon={faStar} className="h-5 w-5 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}