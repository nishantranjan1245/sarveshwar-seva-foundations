import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FocusAreasSection from "@/components/home/FocusAreasSection";
import InitiativesSection from "@/components/home/InitiativesSection";
import WhyMattersSection from "@/components/home/WhyMattersSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import TransparencySection from "@/components/home/TransparencySection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags handled in index.html */}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FocusAreasSection />
        <InitiativesSection />
        <WhyMattersSection />
        <GetInvolvedSection />
        <TransparencySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
