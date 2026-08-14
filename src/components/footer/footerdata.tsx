import { contact } from "@/utils/constent";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";
import {
  FillFaceBookIcon,
  OutLineInstagramIcon,
  YouTube,
} from "@/utils/SocialIcon";
import { JSX } from "react";

interface FooterData {
  logo: string;
  cta: {
    label: string;
    href: string;
  }[];
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

interface WebsiteFooterData {
  logo: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      icon?: JSX.Element;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const socialData = [
  {
    icon: <FillFaceBookIcon />,
    href: contact.socialMedia.facebook,
    label: "Facebook",
  },
  {
    icon: <OutLineInstagramIcon />,
    href: contact.socialMedia.instagram,
    label: "Instagram",
  },
  {
    icon: <YouTube />,
    href: contact.socialMedia.youtube,
    label: "YouTube",
  },
];

export const footerData: FooterData = {
  logo: "/bg.jpg",
  cta: [
    {
      label: "call now",
      href: `tel:${contact.phone[0]}`,
    },
    {
      label: "Book your stay",
      href:  "whatsapp",
    },
  ],
  lists: [
    {
      title: "Contact",
      links: [
        {
          icon: <FillLocationIcon />,
          label: "Address: " + contact.address,
          href: contact.addressLink,
        },
        {
          icon: <FillCallIcon />,
          label: "Call Us: " + contact.phone[0],
          href: "tel:" + contact.phone[0],
        },
        {
          icon: <FillMailIcon />,
          label: "Email: " + contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};

export const websiteFooterData: WebsiteFooterData = {
  logo: "/footerlogo2.png",
  description: "Reserve Himalayan escape!",
  cta: {
    label: "Book stay",
    href: contact.WhatsappCta,
  },
  lists: [
    {
      title: "QUICK LINKS",
      links: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about-us" },
        { label: "Accommodations", href: "/refined-living-spaces" },
        { label: "Experiences", href: "/experiences" },
        { label: "Contact us", href: "/contact-us" },
      ],
    },
    {
      title: "EXPLORE",
      links: [
        { label: "Wellness", href: "/holistic-wellness" },
        { label: "Dining", href: "/farm-to-table" },
        { label: "Host your retreat", href: "/host-your-retreat" },
        { label: "Blogs", href: "/blogs" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & conditions", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "Address: " + contact.address,
          href: contact.addressLink,
          icon: <FillLocationIcon />,
        },
        {
          label: "Call Us: " + contact.phone[0],
          href: "tel:" + contact.phone[0],
          icon: <FillCallIcon />,
        },
        {
          label: "Email: " + contact.email,
          href: "mailto:" + contact.email,
          icon: <FillMailIcon />,
        },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          label: "Facebook",
          href: contact.socialMedia.facebook,
          icon: <FillFaceBookIcon />,
        },
        {
          label: "instagram",
          href: contact.socialMedia.instagram,
          icon: <OutLineInstagramIcon />,
        },
      ],
    },
  ],
};
