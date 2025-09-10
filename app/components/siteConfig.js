// components/siteConfig.js
export const SITE = {
    clinicName: "Identity Dental Hospital",
    phone: "9052877700",
    whatsapp: "9177881973",
    mapsUrl: "https://maps.app.goo.gl/JvfVkXKbuWEHB3uS7?g_st=aw",
    email: "care@identitydental.in",
    addressLine1: "Kadapa, Andhra Pradesh",
    addressLine2: "Identity dental hospital and research center, near ramesh theatre, 12/263-6, Andhra Pradesh 516001",
    hours: {
        monSat1: "10:00 AM – 2:30 PM",
        monSat2: "5:30 PM – 9:30 PM",
        sun: "10:00 AM – 2:30 PM",
    },
    waMessage: "Hi, I’d like to book an appointment.",
};
export const telHref = (p = SITE.phone) => `tel:${p}`;
export const waHref = (n = SITE.whatsapp, m = SITE.waMessage) =>
    `https://wa.me/${n}?text=${encodeURIComponent(m)}`;