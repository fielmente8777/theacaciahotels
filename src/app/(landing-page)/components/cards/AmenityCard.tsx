import { AmenitiesProps } from "@/@types/type";

const AmenityCard: React.FC<AmenitiesProps["cards"][0]> = ({
    Icon,
    amenityName
}) => {
    return (
        <div className="flex flex-col items-center gap-2">
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