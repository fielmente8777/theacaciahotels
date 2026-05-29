import { NearbyAttractionProps } from "@/@types/type";
import Image from "next/image";

const NearbyAttractionCard: React.FC<NearbyAttractionProps["places"][0]> = ({
  image,
  name,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-full aspect-4/5">
        <Image
          src={image}
          alt="Image"
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 100vw"
          className="object-cover rounded-xl"
        />
      </div>
      <p className="text-2xl font-medium">{name}</p>
    </div>
  );
};

export default NearbyAttractionCard;
