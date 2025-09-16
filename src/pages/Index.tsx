import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutBenefits from "@/components/sections/AboutBenefits";
import QuickCheck from "@/components/sections/QuickCheck";
import OutboundSystems from "@/components/sections/OutboundSystems";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutBenefits />
      <QuickCheck />
      <OutboundSystems />
      <Services />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;