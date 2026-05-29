import { contact } from "@/utils/constent";
import {
  BanquetIcon,
  BedIcon,
  BreakfastIcon,
  JacuzziIcon,
  RestaurantIcon,
  RoomServiceIcon,
  SleepsIcon,
  SpaIcon,
  SQFTIcon,
  SquareIcon,
  SwimIcon,
  WifiIcon,
} from "@/utils/icons";
import { Md10K } from "react-icons/md";

export const landingPageData = {
  bannerSection: {
    video: "/Acacia-Morjim-Promo-HIGH-FHD.mp4",
    videoPoster: "/landing-page/poster.png",
    title: "The Acacia Morjim Goa",
  },
  formSection: {
    location: "Morjim, Goa",
    title: "Enjoy a 10% Discount on Direct Bookings!",
    subtitle: "Limited Rooms Available.",
  },

  about: {
    image: "/landing-page/1-IMG_7501.jpg",
    title: "The Acacia Morjim Goa",
    description: [
      "Located in the thick of nature, The Acacia Morjim Goa is a cliff-top resort with a captivating view of the cerulean waters and golden sands of the Arabian Sea.",
      "Tucked up in Goa’s Morjim area, the resort houses 32 contemporarily designed cottages, an infinity pool with a Jacuzzi, a sea view luxury spa with extensive facilities, a banquet, and a multi-cuisine restaurant with some exceptional Pan-Asian delicacies. The Acacia Morjim Goa has been designed with extreme precision & finesse to serve to warrant you a stay in clover.",
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: "#form" },
      { label: "BOOK NOW", href: contact.WhatsappCta },
    ],
  },

  rooms: {
    title: "Explore Our Rooms",
    description:
      "Experience comfort and luxury in our elegantly designed rooms and suites, blending modern amenities with coastal charm for romantic escapes and family stays alike.",

    cards: [
      {
        images: ["/landing-page/DELUXE-ROOM.jpg"],
        title: "Deluxe Room",
        amenities: [
          { icon: <BedIcon />, text: "1 KING BED" },
          { icon: <SleepsIcon />, text: "SLEEPS 2" },
          { icon: <SQFTIcon />, text: "320 SQ FT" },
        ],
        description:
          "A room of spectacular opulence with plush interiors and a balcony with abundant space. The room boasts of an independent living room with complimentary Wi-Fi, two LCD TVs, hair dryer, safe, iron, tea/coffee maker, a separate work area and bath wear essentials.",
        price: "From ₹6,800 / night",
        buttons: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },

      {
        images: ["/landing-page/SUPERIOR-CLASSIC.jpg"],

        title: "Superior Room",
        amenities: [
          { icon: <BedIcon />, text: "1 KING BED" },
          { icon: <SleepsIcon />, text: "SLEEPS 2" },
          { icon: <SQFTIcon />, text: "240 SQ FT" },
        ],
        description:
          "A room of spectacular opulence with plush interiors and a balcony with abundant space. The room boasts of an independent living room with complimentary Wi-Fi, two LCD TVs, hair dryer, safe, iron, tea/coffee maker, a separate work area and bath wear essentials.",
        price: "From ₹4,800 / night",
        buttons: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },

      {
        images: ["/landing-page/SUPERIOR-.jpg"],

        title: "Premier Room",
        amenities: [
          { icon: <BedIcon />, text: "1 KING BED" },
          { icon: <SleepsIcon />, text: "SLEEPS 2" },
          { icon: <SQFTIcon />, text: "220 SQ FT" },
        ],
        description:
          "Comfortable and spacious with a king-sized or twin bed option, the superior room features a separate work area, Wi-Fi, LCD TV, hair dryer, safe, iron and tea/coffee maker. Step onto the balcony to unwind comfortably with an evening beer or enjoy tea.",
        price: "From ₹4,600 / night",
        buttons: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
    ],
  },

  amenities: {
    title: "Acacia Amenities",
    cards: [
      { amenityName: "Buffet Breakfast", Icon: <BreakfastIcon /> },
      { amenityName: "Spa", Icon: <SpaIcon /> },
      { amenityName: "Wi Fi", Icon: <WifiIcon /> },
      { amenityName: "Multicuisine Restaurant", Icon: <RestaurantIcon /> },
      { amenityName: "24 x 7 Room Service", Icon: <RoomServiceIcon /> },
      { amenityName: "Swimming Pool", Icon: <SwimIcon /> },
      { amenityName: "Jacuzzi", Icon: <JacuzziIcon /> },
      { amenityName: "Banquet", Icon: <BanquetIcon /> },
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: "#form" },
      { label: "BOOK NOW", href: contact.WhatsappCta },
    ],
  },

  gallery: {
    title: "Gallery",
    images: [
      "/landing-page/1-IMG_7501.jpg",
      "/landing-page/23.jpg",
      "/landing-page/26-IMG_8284.jpg",
      "/landing-page/26.jpg",
      "/landing-page/BAR.jpg",
      "/landing-page/Breakfast.jpg",
      "/landing-page/COVER.jpg",
      "/landing-page/DELUXE---VIEW.jpg",
      "/landing-page/DELUXE-BATHROOM.jpg",
      "/landing-page/DELUXE-ROOM.jpg",
      "/landing-page/FACADE.jpg",
      "/landing-page/IMG_7461.jpg",
      "/landing-page/IMG_9130.jpg",
      "/landing-page/IMG_9134.jpg",
      "/landing-page/IMG_9136.jpg",
      "/landing-page/IMG_9155.jpg",
      "/landing-page/IMG_9158.jpg",
      "/landing-page/Infinity-Pool-with-a-view.jpg",
      "/landing-page/Jacuzzi.jpg",
      "/landing-page/Lobby.jpg",
      "/landing-page/Pool---Outdoor-Seating.jpg",
      "/landing-page/poster.png",
      "/landing-page/Rectangle-34.png",
      "/landing-page/Rectangle-624321.png",
      "/landing-page/Rectangle-82.png",
      "/landing-page/Restaurant-Upper-Deck-.jpg",
      "/landing-page/SPA-1.jpg",
      "/landing-page/Spa-Acacia.jpg",
      "/landing-page/Spa.jpg",
      "/landing-page/SUPERIOR-.jpg",
      "/landing-page/superior-bathroom.jpg",
      "/landing-page/SUPERIOR-CLASSIC.jpg",
      "/landing-page/Swimming-Pool.jpg",
      "/landing-page/Toast.jpg",
      "/landing-page/TWIN-ROOM.jpg",
      "/landing-page/TWIN.jpg",
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: "#form" },
      { label: "BOOK NOW", href: contact.WhatsappCta },
    ],
  },

  spa: {
    image: "/landing-page/Spa.jpg",
    logo: "/landing-page/spa-logo.png",
    description: [
      "Pamper your mind, body and soul at the Spa Acacia and choose from a diverse range of body treatments to rejuvenate.",

      "Take yourself on a mystical journey and unwind with the signature Bamboo Balinese body massage. The spa is well-equipped to offer you a synergic blend of therapeutic and rejuvenating treatments based on Asian and western spa techniques.",

      "The spa also offers state-of-the-art shower and steam facilities.",
    ],

    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: "#form" },
      { label: "BOOK NOW", href: contact.WhatsappCta },
    ],
  },

  attractions: {
    title: "Nearby Attractions",

    places: [
      { image: "/landing-page/attraction-1.png", name: "Ashwem Beach" },
      { image: "/landing-page/attraction-2.png", name: "Chapora Fort" },
      { image: "/landing-page/attraction-3.png", name: "Fort Aguada" },
      { image: "/landing-page/attraction-4.png", name: "Morjim Beach" },
    ],

    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: "#form" },
      { label: "BOOK NOW", href: contact.WhatsappCta },
    ],
  },

  testimonials: {
    title: "Guest Experiences",

    reviews: [
      {
        name: "Luke H",
        review:
          "This is a very comfortable, quiet and modern resort. Food from the restaurant was always great (I would recommend the Chicken with Red Wine Jus). The service from the staff was very good too – and one particular staff member called Williston was outstanding.",
      },

      {
        name: "Awender",
        review:
          "Stayed for 4 nights in Acacia Morjim. It was a wonderful stay overall. We would definitely be visiting again very soon.",
      },

      {
        name: "Saad",
        review:
          "All in all a good enjoyable stay. High quality of cleanliness maintained. Polite staff. Great service. Good live counter be it the waffles, the dosa, the omlette or the Bhaturas. Would definitely be back again.",
      },

      {
        name: "Aditya",
        review:
          "Excellent budget hotel. Great place to stay.Good and comfy. Neat n clean wash room. Hotel staff well in behaviour. Good ac comfortable bed. Service was good. I enjoyed my stay. Thank you Acacia!",
      },

      {
        name: "Ravi",
        review:
          "The pool is well kept, buffet are has a poolside view, ambience was amazing and the staff was very helpful and accommodating. Will visit again for sure!",
      },

      {
        name: "Ruchi Achrekar",
        review:
          "Nice resort to stay, worth for money, rooms are spacious and clean, all modern amenities inside the room, peacful arey, bilssful mornings, brekfast very lovely, good ambiennce, we will come back for sure!",
      },
    ],
  },
};
