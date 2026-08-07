"use client";

import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import LandingNavbar from "../navbar/LandingNavbar";

interface ImageBannerProps {
  title: string;
  desc: string;
  images: string[];
}
const ImageBanner: React.FC<ImageBannerProps> = ({ title, images, desc }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full  lg:rounded-b-4xl overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-center">
        <LandingNavbar />
      </div>
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={2000}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        swiperSlideClassName="relative lg:aspect-[16/7.6] aspect-[4/4.7] overflow-hidden"
        renderSlide={(image) => (
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      />
      <div className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center">
        <Container>
          <p
            className="text-white text-center uppercase lg:text-xl"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          <h1
            className="text-white text-4xl lg:text-5xl/tight lg:max-w-4xl mx-auto font-medium text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Container>
      </div>
    </Section>
  );
};

export default ImageBanner;
