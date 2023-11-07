import { HomePageExpandableSection } from "./HomePageExpandableSection";
import {
  StyledCard,
  StyledParagraph,
  StyledTextPart,
  StyledTitle,
} from "./styles";

export const HomePageSectionCard = () => {
  return (
    <StyledCard>
      <StyledTextPart>
        <StyledTitle level={2}>
          Join 2 million+ Australians finding better
        </StyledTitle>
        <StyledParagraph>
          Finder's team of 40+ experts will help you find the right choices in
          over 100 categories.
        </StyledParagraph>
      </StyledTextPart>
      <HomePageExpandableSection />
    </StyledCard>
  );
};
