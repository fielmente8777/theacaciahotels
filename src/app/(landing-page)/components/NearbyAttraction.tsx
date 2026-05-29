import { NearbyAttractionProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import NearbyAttractionCard from "./cards/NearbyAttractionCard";

const NearbyAttraction: React.FC<NearbyAttractionProps> = ({
  title,
  places,
  buttons,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-6">
      <SectionHeading title={title} textCenter />
      <div className="md:space-y-12 space-y-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 max-md:gap-y-8">
          {places.map((card, index) => (
            <NearbyAttractionCard key={index} {...card} />
          ))}
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

export default NearbyAttraction;
