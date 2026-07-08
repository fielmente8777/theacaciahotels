"use client";

import { ExploreRoomsProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import AmenityPopUpButton from "@/components/pop-up/AmenityPopUpButton";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const RoomCard: React.FC<ExploreRoomsProps["cards"][0]> = ({
  amenities,
  buttons,
  description,
  images,
  price,
  title,
  amenitiesPopup,
}) => {
  return (
    <div>
      <div className="w-full border-x-[0.5px] border-primary rounded-tr-4xl overflow-hidden">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={700}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: false,
          }}
          swiperSlideClassName="relative aspect-[4/3]"
          renderSlide={(image) => (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-bl-4xl rounded-tr-4xl"
            />
          )}
        />
      </div>
      <div className="py-5 px-3.5 border-x-[0.5px] border-b-[0.5px] border-primary rounded-bl-4xl flex flex-col gap-5">
        <h3 className="text-2xl lg:text-3xl font-semibold">{title}</h3>
        <ul className="flex flex-wrap items-center lg:justify-between justify-center gap-4 gap-x-6 border-[0.5px] border-primary p-2 rounded-lg">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center gap-2">
              {" "}
              <span>{amenity.icon}</span> {amenity.text}
            </li>
          ))}
        </ul>
        <p>{description}</p>
        <div className="flex flex-col gap-4 justify-between items-center">
          {/* <p className="font-bold lg:text-lg">{price}</p> */}

          <AmenityPopUpButton
            amenities={amenitiesPopup}
            label="Room Amenities"
          />
          <ul className="w-full gap-4">
            {buttons.map((button, i) => (
              <li key={i}>
                <LinkButton
                  {...button}
                  target={i !== 1 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="bg-primary  text-nowrap border-none rounded-sm w-full justify-center"
                  callIcon={i === 0}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
