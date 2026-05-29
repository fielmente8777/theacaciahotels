import { ExploreRoomsProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import AmenityPopUpButton from "@/components/pop-up/AmenityPopUpButton";
import Image from "next/image";

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
      <div className="w-full relative aspect-4/3 border-x-[0.5px] border-primary rounded-tr-4xl">
        <Image
          src={images[0]}
          alt="Image"
          fill
          className="object-cover rounded-bl-4xl rounded-tr-4xl"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
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
        <div className="flex justify-between items-center">
          <p className="font-bold lg:text-lg">{price}</p>
          <AmenityPopUpButton
            amenities={amenitiesPopup}
            label="Room Amenities"
          />
        </div>
        <ul className="grid lg:grid-cols-2 gap-4">
          {buttons.map((button, i) => (
            <li key={i}>
              <LinkButton
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary border-none rounded-sm w-full justify-center"
                whatsAppIcon={i === 0}
                calendarIcon={i === 1}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomCard;
