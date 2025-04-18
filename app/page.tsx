import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Formats from "../components/Formats";
import Artists from "../components/Artists";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Formats />
      <Artists />
      <Footer />
    </main>
  );
}