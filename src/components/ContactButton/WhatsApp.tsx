"use client";
import { useWebContext } from "@/context-api/WebContext";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp({ whatsAppNumber }: { whatsAppNumber: string }) {
  const pathName = usePathname();
  const { WhatsAppClick } = useWebContext();

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <div className={`fixed bottom-24 lg:left-3 left-4 z-20 cursor-pointer`}>
      <button
        onClick={WhatsAppClick}
        // href={`https://wa.me/${whatsAppNumber.replace(/\s+/g, "")}?text=${enCodeText}`}
        // target="_blank"
        // rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">WhatsApp</span>
      </button>
    </div>
  );
}

export default Whatsapp;
