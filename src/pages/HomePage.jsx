import Hero from "../components/Hero";
import TripSection from "../components/TripSection";
import StepsSection from "../components/StepsSection";
import GroupTripsSection from "../components/GroupTripsSection";
import AssuranceSection from "../components/AssuranceSection";
import Footer from "../components/Footer";


export default function HomePage() {
  return (
    <>
      <Hero />
      <TripSection />
      <StepsSection />
      <GroupTripsSection />
      <AssuranceSection />
      <Footer />
    </>
  );
}