"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface LuxuryCottagesProps {
  title: string;
  description: string;
  images: string[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const LuxuryCottages: React.FC<LuxuryCottagesProps> = ({
  title,
  description,
  images,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#FFFBF3] border-y border-primary  box-shadow">
      {/* <SectionHeading title={title} titleClassName="md:text-3xl!" />
          <p>{description}</p> */}
      <div className="flex flex-col gap-6 items-center justify-center">
        <SectionHeading title={title} textCenter />
        <p className="text-center">{description}</p>
      </div>

      {/* <div className="space-y-4">
          <div className="w-full relative aspect-[4/2.65]">
            <Image
              src={images[0]}
              alt="Image"
              fill
              sizes="100vw"
              className="object-cover rounded-tr-4xl rounded-bl-4xl"
            />
          </div>
        </div> */}
      <div className="mt-8">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={24}
          loop
          modules={[Autoplay]}
          //  navigation={{
          //    prevEl: ".about-prev",
          //    nextEl: ".about-next",
          //  }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          //  onSlideChange={(swiper) => {
          //    setActiveIndex(swiper.realIndex + 1);
          //  }}
          renderSlide={(image) => {
            return (
              <div className="relative w-full aspect-[4/3.75] ">
                <Image src={image} alt={title} fill className="object-cover rounded-bl-4xl rounded-tr-4xl" />
              </div>
            );
          }}
        />
      </div>

      {/* <div className="w-full relative aspect-4/3.75">
            <Image
              src={images[0]}
              alt="Image"
              fill
              sizes="100vw"
              className="object-cover rounded-tr-4xl rounded-bl-4xl"
            />
          </div> */}

      <ul className="grid lg:grid-cols-2 gap-4 max-w-sm mt-8 mx-auto">
        {buttons.map((button, i) => (
          <li key={i}>
            <LinkButton
              {...button}
              target={i !== 1 ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-primary border-none rounded-sm w-full justify-center"
              whatsAppIcon={i === 0}
              calendarIcon={i === 1}
            />
          </li>
        ))}
      </ul>
    </SectionWithContainer>
  );
};

export default LuxuryCottages;
