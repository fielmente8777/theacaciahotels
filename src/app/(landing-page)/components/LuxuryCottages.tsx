import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface LuxuryCottagesProps {
  title: string;
  description: string;
  images: string[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const LuxuryCottages: React.FC<LuxuryCottagesProps> = ({
  title,
  description,
  images,
  buttons,
}) => {
  return (
    <SectionWithContainer>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8">
        <div className="space-y-4">
          <SectionHeading title={title} titleClassName="md:text-3xl!" />
          <p>{description}</p>
          <div className="w-full relative aspect-[4/2.65]">
            <Image
              src={images[0]}
              alt="Image"
              fill
              sizes="100vw"
              className="object-cover rounded-tr-4xl rounded-bl-4xl"
            />
          </div>
        </div>
        {images.slice(1).map((image, i) => (
          <div key={i} className="w-full relative aspect-4/3.75">
            <Image
              src={image}
              alt="Image"
              fill
              sizes="100vw"
              className="object-cover rounded-tr-4xl rounded-bl-4xl"
            />
          </div>
        ))}
      </div>
      <ul className="grid lg:grid-cols-2 gap-4 max-w-sm mt-8 mx-auto">
        {buttons.map((button, i) => (
          <li key={i}>
            <LinkButton
              {...button}
              target={i !== 1 ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-primary border-none rounded-sm w-full justify-center"
              whatsAppIcon={i === 0}
              calendarIcon={i === 1}
            />
          </li>
        ))}
      </ul>
    </SectionWithContainer>
  );
};

export default LuxuryCottages;
