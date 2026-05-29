"use client";

import { ExploreRoomsProps } from "@/@types/type";
import { useWebContext } from "@/context-api/WebContext";

interface AmenityPopUpButtonProps {
  amenities: ExploreRoomsProps["cards"][0]["amenitiesPopup"];
  label: string;
}

const AmenityPopUpButton: React.FC<AmenityPopUpButtonProps> = ({
  amenities,
  label,
}) => {
  const { setAmenityModalArray, setOpenAmenityModal } =
    useWebContext();

  const openAmenityModal = (
    amenities: ExploreRoomsProps["cards"][0]["amenitiesPopup"]
  ) => {
    setOpenAmenityModal(true);

    setAmenityModalArray(amenities);
  };

  return (
    <button
      onClick={() => openAmenityModal(amenities)}
      className="text-primary w-fit uppercase"
    >
      {label}
    </button>
  );
};

export default AmenityPopUpButton;