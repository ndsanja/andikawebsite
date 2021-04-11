import BannerSection from "./BannerSection";
import CampaignSection from "./CampaignSection";
import FindmeSection from "./FindmeSection";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import NewsSection from "./NewsSection";
import Section from "./Section";
import VolunterSection from "./VolunterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <NewsSection />
      {/* <BannerSection /> */}
      <CampaignSection />
      <VolunterSection />
      <FindmeSection />
      <Footer />
    </>
  );
}
