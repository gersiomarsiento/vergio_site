
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Ticker } from "@/components/ticker";
import HeroSlider from "@/components/HeroSlider";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";



export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSlider />
        <Ticker />
        <PortfolioSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
