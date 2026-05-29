import Link from "next/link";
import { Container } from "../sectionComponants";
import Image from "next/image";
import { websiteFooterData } from "./footerdata";
import LinkButton from "../buttons/LinkButton";

const WebsiteFooter = () => {
  return (
    <footer className="max_screen_width bg-secondary text-white">
      <Container>
        <div className="flex max-md:flex-col gap-6 items-center justify-between py-6 md:py-10 border-b border-primary">
          {/* social media links */}
          <div className="flex flex-col gap-4 items-start">
            <p className="text-xl">Follow Us</p>
            <ul className="flex items-center gap-4 max-md:order-2">
              {websiteFooterData.lists[4].links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 aspect-square rounded-sm flex items-center justify-center bg-white text-primary transition-all"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* logo */}
          <Link
            href="/"
            className="md:w-50 lg:ml-18 w-full relative max-md:order-1 md:aspect-[4/2.45] aspect-3/1.25"
          >
            <Image
              src={websiteFooterData.logo}
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
          {/* call contact */}
          <div className="flex flex-col gap-4 max-md:order-3">
            <p className="max-md:text-center">
              {websiteFooterData.description}
            </p>
            <div className="md:ml-auto max-md:mx-auto w-fit flex items-center">
              <LinkButton
                href={websiteFooterData.cta.href}
                label={websiteFooterData.cta.label}
                className="text-sm md:text-base rounded-sm uppercase"
              />
            </div>
          </div>
        </div>
        <div className="grid md:py-12 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1.1fr_1.1fr_1.4fr] gap-4 md:gap-4">
          {websiteFooterData.lists.slice(0, 4).map((list, index) => (
            <div key={index}>
              <h2 className="md:text-lg tracking-widest uppercase text-2xl mb-4">
                {list.title}
              </h2>
              <ul className={`flex flex-col gap-2`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${index === 3 && suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    {item.icon && (
                      <span
                        className={`mt-px ${
                          index === 1
                            ? "text-secondary flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                            : "inline-block"
                        }`}
                      >
                        {item.icon}
                        <span className="sr-only">{item.label}</span>
                      </span>
                    )}

                    <Link
                      target={item.href.includes("https") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span className={`  ${index === 3 ? "" : "capitalize"}`}>
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="-ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-8"
                      >
                        <span
                          className={`${
                            index === 1 ? " my-auto" : "md:text-lg text-white"
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
        </div>
      </Container>
      <div className="w-full  bg-primary">
        <Container className="py-4">
          <div className="flex max-md:flex-col items-center justify-between gap-2 text-white ">
            {" "}
            <p className="">
              © {new Date().getFullYear()} The Rudraksh Retreat. All rights
              reserved.
            </p>
            <p className="">Powered by Fielmente</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
