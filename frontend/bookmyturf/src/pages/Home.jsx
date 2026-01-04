import Hero from "../components/Hero";
import PresenceSection from "../components/PresenceSection";
import TurfSection from "../components/TurfSection";
import MeetSection from "../components/MeetSection";
import WhyChoose from "../components/WhyChoose";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <PresenceSection />
      <TurfSection />
      <MeetSection />
      <WhyChoose />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;
