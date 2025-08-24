import AppointmentForm from "./components/AppointmentForm";
import FAQs from "./components/FAQs";
import FeaturedDoctor from "./components/FeaturedDoctor";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LocationHours from "./components/LocationHours";
import Offers from "./components/Offers";
import QuickInfoBar from "./components/QuickInfoBar";
import Services from "./components/Services";
import TechnologySafety from "./components/TechnologySafety";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";


export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedDoctor />
      <WhyUs />
      <TechnologySafety />
      <Offers />
      <Testimonials />
      <Gallery />
      <FAQs />
      <LocationHours />
      <AppointmentForm />
    </div>
  );
}