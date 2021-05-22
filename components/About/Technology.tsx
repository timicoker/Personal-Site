import * as React from "react";
import styled from "styled-components";


const Wrapper = styled.li`
  display: inline-block;
  margin: 20px;

  & > img {
    --size: 100px;
    border-radius: 4px;
    cursor: pointer;

    transition: var(--transition-ease);
    width: var(--size);
    height: var(--size);
    user-select: none;
    overflow: hidden;

    &[data-highlighted="false"],
    &:not(:hover) {
      filter: grayscale(100%);
      opacity: 0.6;
    }

    &[data-highlighted="true"] {
      filter: none;
      opacity: 1;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

interface TechnologyProps {
  src: string;
  big?: boolean;
}
export const Technology: React.FC<TechnologyProps> = ({ src }) => {
  const [highlighted, setHighlighted] = React.useState(false);


  return (
    <Wrapper className={`technologie ${highlighted ? "highlighted" : "gray"}`}>
      <img
        src={`images/technologies/${src}.svg`}
        draggable="false"
        aria-label={src}
        data-highlighted={highlighted}
      />
    </Wrapper>
  );
};
