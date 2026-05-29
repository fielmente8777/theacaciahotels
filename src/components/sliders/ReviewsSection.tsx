"use client";
import { GuestExperiencesProps } from "@/@types/type";
import SwiperCarousel from "./SwiperCarousel";
import { Autoplay } from "swiper/modules";

const ReviewsSection: React.FC<{
  reviews: GuestExperiencesProps["reviews"];
}> = ({ reviews }) => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <SwiperCarousel
        data={reviews}
        className="w-full"
        swiperSlideClassName="w-full"
        slidesPerView={1}
        spaceBetween={30}
        loop
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        renderSlide={(review, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center text-center justify-center"
          >
            <p className="">{review.review}</p>
            <p className="font-semibold text-xl">{review.name}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ReviewsSection;
