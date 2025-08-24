import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SITE } from "./siteConfig";

export default function LocationHours() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Visit Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We are conveniently located and ready to welcome you.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                        <div className="flex items-start mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6 text-teal-500 mt-1" />
                            <div className="ml-4">
                                <p className="text-lg font-semibold text-gray-800">{SITE.addressLine1}</p>
                                <p className="text-gray-600">{SITE.addressLine2}</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-teal-500" />
                            <a href={`tel:${SITE.phone}`} className="ml-4 text-gray-600 hover:text-teal-500">{SITE.phone}</a>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-teal-500" />
                            <a href={`mailto:${SITE.email}`} className="ml-4 text-gray-600 hover:text-teal-500">{SITE.email}</a>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Clinic Hours</h3>
                        <div className="flex items-start">
                            <FontAwesomeIcon icon={faClock} className="h-6 w-6 text-teal-500 mt-1" />
                            <div className="ml-4">
                                <p className="text-lg font-semibold text-gray-800">Monday – Saturday</p>
                                <p className="text-gray-600">{SITE.hours.monSat1} & {SITE.hours.monSat2}</p>
                                <p className="text-lg font-semibold text-gray-800 mt-2">Sunday</p>
                                <p className="text-gray-600">{SITE.hours.sun}</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            title="Clinic Location Map"
                            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(SITE.addressLine1 + ", " + SITE.addressLine2)}`}
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}