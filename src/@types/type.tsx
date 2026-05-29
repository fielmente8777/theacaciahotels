import { JSX } from "react";

export interface ExploreRoomsProps {
  title: string;
  description: string;
  cards: {
    images: string[];
    title: string;
    amenities: {
      icon: JSX.Element;
      text: string;
    }[];
    amenitiesPopup: {
      amenityType: string;
      amenities: string[];
    }[];
    description: string;
    price: string;
    buttons: {
      label: string;
      href: string;
    }[];
  }[];
}

export interface AmenitiesProps {
  title: string;
  cards: {
    amenityName: string;
    Icon: JSX.Element;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export interface NearbyAttractionProps {
  title: string;
  places: {
    image: string;
    name: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export interface GuestExperiencesProps {
  title: string;
  reviews: {
    name: string;
    review: string;
  }[];
}
