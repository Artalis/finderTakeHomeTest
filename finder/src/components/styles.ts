import { Button, Typography } from 'antd';
import { colors } from 'config/colors';
import { minTileWidth } from 'config/constants';

import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;

export const StyledCard = styled("div")(() => ({
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "1120px",
  marginTop: 64,
  width: "100%",
}));

export const StyledTextPart = styled("div")(() => ({
  justifyContent: "left",
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  width: "100%",
}));

export const StyledButton = styled(Button)(() => ({
  fontSize: "18px",
  borderRadius: "16px",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  border: `1px solid ${colors.lightGrey}`,
  minWidth: `${minTileWidth}px`,
  maxWidth: "260px",
  height: 106,
  a: {
    textDecoration: "none",
  },
}));

export const StyledExtendButton = styled(Button)(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "24px",
  "&:hover": {
    backgroundColor: "transparent !important",
    color: "initial !important",
  },
}));

export const StyledText = styled(Title)(() => ({
  color: `${colors.blue} !important`,
  fontSize: "16px !important",
  lineHeight: "24px !important",
  fontWeight: 500,
  margin: "0px 2px 0px 2px !important",
  fontFamily: "Roboto, Arial, sans-serif",
  whiteSpace: "normal",
}));

export const StyledTitle = styled(Title)(() => ({
  color: `${colors.darkGrey} !important`,
  fontSize: "30px !important",
  lineHeight: "38.4px !important",
  fontWeight: 700,
  marginBottom: "8px !important",
  marginTop: 0,
  fontFamily: "Roboto, Arial, sans-serif",
}));

export const StyledParagraph = styled(Paragraph)(() => ({
  color: colors.grey,
  fontSize: "20px",
  lineHeight: "30px",
  fontWeight: 400,
  marginTop: 0,
  marginBottom: "16px !important",
  fontFamily: "Roboto, Arial, sans-serif",
}));
