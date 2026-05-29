import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface SpaProps {
  image: string;
  logo: string;
  description: string[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const Spa: React.FC<SpaProps> = ({ image, logo, description, buttons }) => {
  return (
    <SectionWithContainer containerClassName="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
      <div className="w-full relative aspect-4/3 lg:block hidden">
        <Image
          src={image}
          alt="Image"
          fill
          sizes="100vw"
          className="object-cover rounded-tr-4xl rounded-bl-4xl"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="max-w-[169px] max-md:mx-auto w-full relative aspect-4/2.5">
          <Image
            src={logo}
            alt="Image"
            fill
            className="object-cover"
            sizes="169px"
          />
        </div>
        <div className="w-full relative aspect-4/3 lg:hidden">
          <Image
            src={image}
            alt="Image"
            fill
            sizes="100vw"
            className="object-cover rounded-tr-4xl rounded-bl-4xl"
          />
        </div>
        <div className="space-y-4">
          {description.map((d, i) => (
            <p key={i} className="max-md:text-center">
              {d}
            </p>
          ))}
        </div>
        <ul className="flex flex-wrap lg:gap-4 gap-2 items-center  max-md:justify-center">
          {buttons.map((button, i) => (
            <li key={i} className="">
              <LinkButton
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary border-none rounded-sm"
                whatsAppIcon={i === 1}
                callIcon={i === 0}
                calendarIcon={i === 2}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default Spa;
