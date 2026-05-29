"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";

interface Props {
  title: string;
  images: string[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const Gallery: React.FC<Props> = ({ title, images, buttons }) => {
  const { openGallery } = useWebContext();

  const gridPattern = [
    "lg:col-span-4 col-span-2 lg:row-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-6">
      <SectionHeading title={title} textCenter />

      <div className="md:space-y-12 space-y-6">
        <div className="grid relative lg:grid-cols-6 grid-cols-2 md:auto-rows-[18rem] auto-rows-[12rem] grid-flow-row gap-[.55rem]">
          {images.slice(0, 5).map((src, index) => (
            <button
              key={index}
              onClick={() =>
                openGallery({
                  images,
                  index,
                })
              }
              className={`${
                gridPattern[index % gridPattern.length]
              } overflow-hidden hover:border-4 border-white w-full h-full rounded-xl hover:shadow-3xl shadow-2xl hover:-translate-y-1 hover:shadow-gray-600 duration-1000 transition ease-in-out relative aspect-auto`}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </button>
          ))}
          <button
            onClick={() => openGallery({ images, index: 0 })}
            className="absolute bottom-4 left-4 px-4 py-2 bg-white rounded-lg gap-2 flex items-center justify-center"
          >
            <span>
              <Foo />
            </span>
            Gallery
          </button>
        </div>

        <ul className="flex flex-wrap lg:gap-4 gap-2 items-center  justify-center">
          {buttons.map((button, i) => (
            <li key={i} className="">
              <LinkButton
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary border-none rounded-sm"
                whatsAppIcon={i === 1}
                callIcon={i === 0}
                calendarIcon={i === 2}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;

export const Foo = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2087_79)">
      <path
        d="M16.875 11.5805C17.0491 11.5805 17.216 11.5118 17.339 11.3896C17.4621 11.2674 17.5313 11.1016 17.5313 10.9288V2.48261C17.5311 1.96409 17.3237 1.46684 16.9545 1.10019C16.5853 0.733534 16.0846 0.52749 15.5625 0.527352H2.43751C2.17887 0.526625 1.92265 0.576882 1.68371 0.675211C1.44477 0.773541 1.22786 0.917986 1.04554 1.10018C0.677519 1.46761 0.470264 1.96436 0.468757 2.48261V11.6072C0.469177 11.736 0.507943 11.8618 0.580175 11.9687C0.652406 12.0756 0.754876 12.1589 0.874684 12.2082C0.994491 12.2574 1.12628 12.2703 1.25347 12.2453C1.38065 12.2203 1.49755 12.1585 1.58944 12.0676L5.06251 8.6183L9.84854 13.3715C9.97231 13.4903 10.1381 13.556 10.3101 13.5545C10.4822 13.553 10.6468 13.4844 10.7685 13.3636C10.8902 13.2428 10.9592 13.0793 10.9607 12.9084C10.9622 12.7375 10.896 12.5729 10.7765 12.45L9.92801 11.6072L11.625 9.92181L16.2188 14.4842V15.5178C16.2188 15.6906 16.1496 15.8564 16.0265 15.9786C15.9035 16.1009 15.7366 16.1695 15.5625 16.1695H2.43751C2.26346 16.1695 2.09654 16.1009 1.97347 15.9786C1.8504 15.8564 1.78126 15.6906 1.78126 15.5178V14.2143C1.78126 14.0414 1.71212 13.8756 1.58905 13.7534C1.46598 13.6312 1.29906 13.5625 1.12501 13.5625C0.950959 13.5625 0.784039 13.6312 0.660968 13.7534C0.537898 13.8756 0.468757 14.0414 0.468757 14.2143V15.5178C0.468054 15.7746 0.518671 16.0291 0.617677 16.2664C0.716683 16.5037 0.86211 16.7191 1.04554 16.9002C1.4155 17.2657 1.91568 17.4715 2.43751 17.473H15.5625C16.0846 17.4729 16.5853 17.2669 16.9545 16.9002C17.3237 16.5335 17.5311 16.0363 17.5313 15.5178V14.2143C17.5303 14.0413 17.4611 13.8757 17.3385 13.7529L12.089 8.53938C12.0281 8.47883 11.9557 8.4308 11.8761 8.39803C11.7965 8.36526 11.7112 8.34839 11.625 8.34839C11.5388 8.34839 11.4535 8.36526 11.3739 8.39803C11.2943 8.4308 11.2219 8.47883 11.161 8.53938L9.00001 10.6856L5.52648 7.23587C5.46557 7.17532 5.39324 7.12729 5.31363 7.09452C5.23402 7.06175 5.14869 7.04488 5.06251 7.04488C4.97633 7.04488 4.891 7.06175 4.81139 7.09452C4.73178 7.12729 4.65945 7.17532 4.59854 7.23587L1.78126 10.0338V2.48261C1.78126 2.30976 1.8504 2.14398 1.97347 2.02175C2.09654 1.89953 2.26346 1.83086 2.43751 1.83086H15.5625C15.7366 1.83086 15.9035 1.89953 16.0265 2.02175C16.1496 2.14398 16.2188 2.30976 16.2188 2.48261V10.9288C16.2188 11.1016 16.2879 11.2674 16.411 11.3896C16.534 11.5118 16.701 11.5805 16.875 11.5805Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_2087_79">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
