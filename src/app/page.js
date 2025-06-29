import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Fee from "@/components/Fee";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Services />
      </div>
      <div id="fee">
        {" "}
        <Fee />
      </div>

      <Faq />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
