"use client";

import { createContext, useContext, useState } from "react";

interface OpenGalleryProps {
  images: string[];
  index?: number;
}
interface OpenAmenityModalArray {
  amenityType: string;
  amenities: string[];
}
interface WebContextType {
  isOpenNavBar: boolean;
  setIsOpenNavBar: (open: boolean) => void;

  openImageModal: boolean;
  setOpenImageModal: (open: boolean) => void;

  passImagesArray: string[];
  setPassImagesArray: (images: string[]) => void;

  openAmenityModal: boolean;
  setOpenAmenityModal: (open: boolean) => void;

  imageCurrentIndex: number;
  setImageCurrentIndex: (index: number) => void;

  amenityModalArray: OpenAmenityModalArray[];
  setAmenityModalArray: (array: OpenAmenityModalArray[]) => void;

  openGallery: ({ images, index }: OpenGalleryProps) => void;

  closeGallery: () => void;

  WhatsAppClick: () => Promise<void>;
}

const WebContext = createContext<WebContextType>({
  isOpenNavBar: false,
  setIsOpenNavBar: () => {},

  openImageModal: false,
  setOpenImageModal: () => {},

  passImagesArray: [],
  setPassImagesArray: () => {},

  imageCurrentIndex: 0,
  setImageCurrentIndex: () => {},

  openAmenityModal: false,
  setOpenAmenityModal: () => {},

  amenityModalArray: [],
  setAmenityModalArray: () => {},

  openGallery: () => {},

  closeGallery: () => {},

  WhatsAppClick: () => Promise.resolve(),
});

interface WebProviderProps {
  children: React.ReactNode;
}

export const WebProvider = ({ children }: WebProviderProps) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  const [openImageModal, setOpenImageModal] = useState(false);

  const [passImagesArray, setPassImagesArray] = useState<string[]>([]);

  const [imageCurrentIndex, setImageCurrentIndex] = useState(0);

  const [openAmenityModal, setOpenAmenityModal] = useState(false);
  const [amenityModalArray, setAmenityModalArray] = useState<
    OpenAmenityModalArray[]
  >([]);
  const openGallery = ({ images, index = 0 }: OpenGalleryProps) => {
    setPassImagesArray(images);

    setImageCurrentIndex(index);

    setOpenImageModal(true);
  };

  const closeGallery = () => {
    setOpenImageModal(false);

    setPassImagesArray([]);

    setImageCurrentIndex(0);
  };


   const WhatsAppClick = async () => {
    const enCodedText =
    "Hello Team, I would like to enquire about booking a stay at The Acacia Morjim Goa. Please share room availability and best offers. Thank you.";
    try {
      const payload = {
        widget: "whatsapp",
        ndid: "e50d8dc6-4cfc-4c87-b6c0-145ccdeb4121",
        hid: "56369483",
        pageUrl: window.location.href,
        websiteName: window.location.hostname,
        phoneNumber: "+917410112893",
        message: enCodedText,
      };

      const response = await fetch(
        "https://gian-1eve.onrender.com/api/v1/widget/click",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      const whatsappUrl = data?.result?.doc?.whatsappUrl;

      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank");
      }
    } catch (error) {
      console.error("WhatsApp Click Error:", error);
    }
  };

  return (
    <WebContext.Provider
      value={{
        WhatsAppClick,
        
        isOpenNavBar,
        setIsOpenNavBar,

        openImageModal,
        setOpenImageModal,

        passImagesArray,
        setPassImagesArray,

        imageCurrentIndex,
        setImageCurrentIndex,

        openAmenityModal,
        setOpenAmenityModal,

        amenityModalArray,
        setAmenityModalArray,

        openGallery,

        closeGallery,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);

  if (context === undefined) {
    throw new Error("useWebContext must be used within a WebProvider");
  }

  return context;
};
