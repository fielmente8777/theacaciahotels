import { AmenitiesProps } from "@/@types/type";

const AmenityCard: React.FC<AmenitiesProps["cards"][0]> = ({
    Icon,
    amenityName
}) => {
    return (
        <div className="py-6 flex flex-col max-w-[300px] w-full items-center gap-2">
            <div>
                {Icon}
            </div>
            <p className="text-center">
                {amenityName}
            </p>
        </div>
    );
}

export default AmenityCard;