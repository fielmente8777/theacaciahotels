import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const AboutSection: React.FC<Props> = ({
  image,
  title,
  description,
  buttons,
}) => {
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
        <SectionHeading title={title} />
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
            <p key={i} className="">
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

export default AboutSection;
