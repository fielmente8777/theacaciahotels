import Image from "next/image";
import { Container, Section } from "../sectionComponants";

interface ImageBannerProps {
  title: string;
  image: string;
}
const ImageBanner: React.FC<ImageBannerProps> = ({ title, image }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-16/7.5 aspect-video"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center">
        <Container>
          <h1 className="text-white text-4xl font-semibold uppercase text-center">
            {title}
          </h1>
        </Container>
      </div>
    </Section>
  );
};

export default ImageBanner;
