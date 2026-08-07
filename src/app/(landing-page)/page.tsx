import ImageBanner from "@/components/banners/ImageBanner";
import LandingFooter from "@/components/footer/LandingFooter";
import AboutSection from "./components/AboutSection";
import Amenities from "./components/Amenities";
import ExploreRooms from "./components/ExploreRooms";
import FormSection from "./components/FormSection";
import Gallery from "./components/Gallery";
import GuestExperiences from "./components/GuestExperiences";
import LuxuryCottages from "./components/LuxuryCottages";
import NearbyAttraction from "./components/NearbyAttraction";
import Spa from "./components/Spa";
import { landingPageData } from "./components/pageData";

export default function LandingPage() {
  return (
    <main>
      <ImageBanner {...landingPageData.bannerSection} />
      <FormSection {...landingPageData.formSection} />
      <AboutSection {...landingPageData.about} />
      <ExploreRooms {...landingPageData.rooms} />
      <LuxuryCottages {...landingPageData.luxuryCottages} />
      <Amenities {...landingPageData.amenities} />
      <Gallery {...landingPageData.gallery} />
      <Spa {...landingPageData.spa} />
      <NearbyAttraction {...landingPageData.attractions} />
      <GuestExperiences {...landingPageData.testimonials} />
      <LandingFooter />
    </main>
  );
}
