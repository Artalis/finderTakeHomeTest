import { Col, Row } from 'antd';
import { colors } from 'config/colors';
import { gridSize, gutter, minTileWidth, tiles } from 'config/constants';
import { icons } from 'config/icons';
import { useEffect, useState } from 'react';

import { HomePageTile } from './HomePageTile';
import { Icon } from './Icon';
import { StyledExtendButton, StyledText } from './styles';

export const HomePageExpandableSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rows, setRows] = useState(gridSize.large);
  const tilesToShow = isExpanded ? tiles : tiles.slice(0, rows === gridSize.medium ? gridSize.large : gridSize.medium);

  
  const handleResize = () => {
    setRows(calculateNumberOfRows());
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const calculateNumberOfRows = () => {
    const scale = (window.innerWidth + gutter) / (minTileWidth + gutter);
    if (scale > gridSize.medium) return gridSize.large;
    if (scale < gridSize.large) return gridSize.small;
    return gridSize.medium;
  };

  return (
    <div style={{ width: "100%" }}>
      <Row gutter={[gutter, gutter]}>
        {tilesToShow.map((tile) => (
          <Col span={rows}>
            <HomePageTile tileText={tile.tileText} type={tile.type} />
          </Col>
        ))}
      </Row>
      <StyledExtendButton
        type="text"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <StyledText>
          {isExpanded ? "Show less categories" : "Show more categories"}
        </StyledText>
        <Icon
          type={isExpanded ? icons.arrowUp : icons.arrowDown}
          color={colors.blue}
          size={gutter}
        />
      </StyledExtendButton>
    </div>
  );
};
