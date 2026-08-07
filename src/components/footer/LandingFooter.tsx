import { contact } from "@/utils/constent";
import Image from "next/image";
import Link from "next/link";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { Container } from "../sectionComponants";
import { footerData, socialData } from "./footerdata";
import LinkButton from "../buttons/LinkButton";

const LandingFooter = () => {
  return (
    <footer className="max_screen_width bg-primary">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr] gap-12 md:gap-16">
          <div className=" flex flex-col gap-8 md:max-w-85">
            <div
              className={`relative 
                  w-full aspect-[4/.5] md:aspect-[4/.8]`}
            >
              <Image
                src={footerData.logo}
                alt="logo"
                fill
                sizes="340px"
                className="object-contain"
              />
            </div>
            <div className="flex max-md:flex-col md:gap-4 gap-2 items-center max-md:justify-center">
              {footerData.cta.map((item, index) => (
                <LinkButton
                  label={item.label}
                  href={item.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  callIcon={index === 0 && true}
                  calendarIcon={index === 1 && true}
                  className={`rounded-sm justify-center max-md:w-full border-none uppercase tracking-widest text-xs bg-secondary text-white`}
                />
              ))}
            </div>

            <ul className="flex items-center max-md:justify-center gap-4">
              {socialData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 aspect-square rounded-sm flex items-center justify-center bg-white text-primary transition-all hover:opacity-90"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerData.lists.map((list, index) => (
            <div
              className={`${index === 1 ? "lg:w-fit lg:ml-auto" : ""} flex flex-col gap-4 md:gap-6`}
              key={index}
            >
              <h2 className="text-[1.375rem] text-white uppercase tracking-widest">
                {list.title}
              </h2>

              <ul className={`flex flex-col md:gap-2 gap-4`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    <span
                      className={` ${
                        index === 1
                          ? "text-white flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : "text-white inline-block"
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>
                    {/* {item.title && (
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-aboreto text-2xl my-auto"
                            : " text-white inline-block"
                        }`}
                      >
                        {item.title}
                      </span>
                    )} */}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-mont text-2xl my-auto"
                            : " text-white inline-block"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="text-white -ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-0"
                      >
                        <span
                          className={`${
                            index === 1
                              ? "text-white font-aboreto text-2xl my-auto"
                              : " text-white"
                          }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full rounded-sm overflow-hidden max-md:aspect-4/3">
            <LazyLoadedMap src={contact.mapUrl} />
          </div>
        </div>
      </Container>
      <div className="bg-[#3A3939]">
        <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-between">
          <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white text-sm">
            © 2026 Acacia Resort and Spa Morjim Goa. A UNIT OF PALMYRA RESORT PVT LTD.
          </div>
          <p className="text-white!">
            Powered by{" "}
            <Link
              href="https://www.fielmente.com/"
              className="font-bold"
              target="_blank"
            >
              Fielmente
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default LandingFooter;
