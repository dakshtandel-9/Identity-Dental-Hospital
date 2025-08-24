import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Offers() {
    return (
        <section id="offers" className="py-20 bg-teal-500 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <FontAwesomeIcon icon={faGift} className="h-12 w-12 mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Special Offers & Financial Assistance
                    </h2>
                    <p className="mt-4 text-lg text-teal-100 max-w-3xl mx-auto">
                        We are committed to making quality dental care accessible to everyone. We offer special discounts for middle-class and economically weaker patients, as well as free consultations for those in need.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-teal-600 bg-white rounded-full shadow-lg hover:bg-teal-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
                        >
                            Check Eligibility
                            <FontAwesomeIcon icon={faArrowRight} className="ml-3 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}