import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { JSX } from "react";
import RoomCard from "./cards/RoomCard";
import { ExploreRoomsProps } from "@/@types/type";

const ExploreRooms: React.FC<ExploreRoomsProps> = ({
  title,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-6">
      <div className="flex flex-col gap-6 items-center justify-center">
        <SectionHeading title={title} textCenter />
        <p className="text-center">{description}</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <RoomCard key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ExploreRooms;
