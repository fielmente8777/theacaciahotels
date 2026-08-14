import { contact } from "@/utils/constent";

export const navData = {
  logo: "/bg.jpg",

  buttons: [
    { label: "CALL NOW", href: contact.callCta },
    { label: "BOOK NOW", href: "whatsapp" },
  ],
};

export const WebsiteNavData = {
  logo: "/bg.png",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
    { label: "Accommodations", href: "/refined-living-spaces/" },
    { label: "Wellness", href: "/holistic-wellness/" },
    { label: "Dining", href: "/farm-to-table/" },
    { label: "Experiences", href: "/experiences/" },
    { label: "Contact", href: "/contact-us/" },
  ],
};
