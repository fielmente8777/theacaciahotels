"use client";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, CallIcon } from "../buttons/LinkButton";
import { navData } from "./navData";
import { useWebContext } from "@/context-api/WebContext";

const LandingNavbar = () => {
  const { WhatsAppClick } = useWebContext();
  return (
    <header className="max_screen_width w-full">
      {/* TOP BAR */}
      <nav className="max_width">
        <div className="flex py-4 w-full items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <div className="relative aspect-4/1.25 w-32 md:w-44">
              <Image
                src={navData.logo}
                alt="The Acacia Hotel Logo"
                fill
                priority
                className="object-cover rounded-md"
              />
            </div>
          </Link>

          {/* BUTTON */}
          <ul className="flex items-center gap-2">
            {navData.buttons.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                <button
                  onClick={WhatsAppClick}
                  // href={link.href}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-sm bg-primary px-2 md:px-6 py-2 md:py-3  text-white transition-all hover:opacity-90"
                >
                  <span className="">
                    {index === 0 ? <CallIcon /> : <CalendarIcon />}
                  </span>
                  <span className="lg:block text-base hidden">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
