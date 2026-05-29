import { GuestExperiencesProps } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import ReviewsSection from "@/components/sliders/ReviewsSection";
import { SectionHeading } from "@/components/typography";

const GuestExperiences: React.FC<GuestExperiencesProps> = ({
  title,
  reviews,
}) => {
  return (
    <SectionWithContainer>
      <SectionHeading title={title} textCenter />
      <ReviewsSection reviews={reviews} />
    </SectionWithContainer>
  );
};

export default GuestExperiences;
