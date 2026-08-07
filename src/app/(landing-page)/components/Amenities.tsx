import { AmenitiesProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AmenityCard from "./cards/AmenityCard";

const Amenities: React.FC<AmenitiesProps> = ({ title, cards, buttons }) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-6">
      <SectionHeading title={title} textCenter />
      <div className="md:space-y-12 space-y-6">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-y-10">
          {cards.map((card, index) => (
            <AmenityCard key={index} {...card} />
          ))}
        </div>
        <ul className="flex flex-wrap lg:gap-4 gap-2 items-center  justify-center">
          {buttons.map((button, i) => (
            <li key={i} className="max-md:w-full">
              <LinkButton
                {...button}
                target={i !== 2 ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="bg-primary text-white border-none rounded-sm max-md:w-full justify-center"
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

export default Amenities;
