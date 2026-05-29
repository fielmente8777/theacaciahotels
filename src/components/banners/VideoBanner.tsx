import { Section } from "@/components/sectionComponants";
import { LazyLoadedVideo } from "@/components/Video";
import LandingNavbar from "../navbar/LandingNavbar";

interface VideoBannerProps {
  title: string;
  video: string;
  videoPoster: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({
  title,
  video,
  videoPoster,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-16/7.56 aspect-[4/2.7] "
    >
      <LazyLoadedVideo src={video} poster={videoPoster} />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-black/30 to-black/10" />
      <h1 className="absolute sr-only z-20 text-white text-4xl md:text-6xl tracking-widest font-primary uppercase top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </h1>
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-center">
        <LandingNavbar />
      </div>
    </Section>
  );
};

export default VideoBanner;
