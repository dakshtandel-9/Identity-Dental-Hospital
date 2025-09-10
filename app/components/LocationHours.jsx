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
                        <a 
                            href="https://www.google.com/maps/place/Identity+dental+hospital/@14.4777074,78.823917,17.57z/data=!4m15!1m8!3m7!1s0x3bb3721b45e1a723:0x16eb88b32c80e7fc!2sIdentity+dental+hospital!8m2!3d14.4774997!4d78.8263749!10e1!16s%2Fg%2F11cn92cclt!3m5!1s0x3bb3721b45e1a723:0x16eb88b32c80e7fc!8m2!3d14.4774997!4d78.8263749!16s%2Fg%2F11cn92cclt?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full relative group cursor-pointer"
                        >
                            <img
                      src="/MapImage/MapImange.png?v=1"
    alt="Identity Dental Hospital Location Map"
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
/>
<div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                <div className="bg-white bg-opacity-0 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm font-semibold text-gray-800">Click to open in Google Maps</p>
                                </div>
                            </div>
</a>
</div>
                </div>
            </div>
        </section>
    );
}