import { colors } from 'config/colors';

import { Icon } from './Icon';
import { StyledButton, StyledText } from './styles';

export type TileProps = {
  type: JSX.Element;
  tileText: string;
  link?: string;
  color?: string;
};

export const HomePageTile = ({
  type,
  tileText,
  link = "https://www.finder.com.au/",
  color = colors.blue,
}: TileProps) => {
  return (
    <StyledButton type="default" href={link}>
      <Icon type={type} color={color} size={40} />
      <div>
        <StyledText level={3}>{tileText}</StyledText>
      </div>
    </StyledButton>
  );
};
