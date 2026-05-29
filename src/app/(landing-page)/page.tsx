import VideoBanner from "@/components/banners/VideoBanner";
import AboutSection from "./components/AboutSection";
import Amenities from "./components/Amenities";
import ExploreRooms from "./components/ExploreRooms";
import Gallery from "./components/Gallery";
import GuestExperiences from "./components/GuestExperiences";
import NearbyAttraction from "./components/NearbyAttraction";
import Spa from "./components/Spa";
import { landingPageData } from "./components/pageData";
import FormSection from "./components/FormSection";
import LandingFooter from "@/components/footer/LandingFooter";

export default function LandingPage() {
  return (
    <main>
      <VideoBanner {...landingPageData.bannerSection} />
      <FormSection {...landingPageData.formSection} />
      <AboutSection {...landingPageData.about} />
      <ExploreRooms {...landingPageData.rooms} />
      <Amenities {...landingPageData.amenities} />
      <Gallery {...landingPageData.gallery} />
      <Spa {...landingPageData.spa} />
      <NearbyAttraction {...landingPageData.attractions} />
      <GuestExperiences {...landingPageData.testimonials} />
      <LandingFooter />
    </main>
  );
}
