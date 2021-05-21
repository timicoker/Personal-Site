import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts";
import { TechnologiesCatalog } from "./";

interface TechnologiesProps {}

export const Technologies: React.FC<TechnologiesProps> = () => {
  const { visible, ref } = useInView();

  return (
    <Container className="block" ref={ref} data-visible={visible}>
      <div className="text-wrapper">
        <div className="text-block">
          <h3 data-font-size="XL" className="Montserrat" data-font-weight="600">
            Technologies?{" "}
            <span className="no-wrap">
              I know a lot!{" "}
              <span role="img" aria-label="nervous">
                😅
              </span>
            </span>
          </h3>
          <p>
            I have been busy learning new stuff in web libraries and frameworks. Whole list is huge
            and tiresome, trust me. My absolute favorite so far is{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              React
            </a>{" "}
            and{" "}
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
              Typescript
            </a>{" "}
            combo! Let&apos;s just say, whatever you need — I probably can help.
          </p>
        </div>
      </div>
      <TechnologiesCatalog />
    </Container>
  );
};

const Container = styled.div`
  width: 100% !important;

  transition: var(--transition-ease), opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & .no-wrap {
    white-space: nowrap;
  }
  & > .text-wrapper {
    width: var(--page-width);
    margin: auto;

    & > .text-block {
      margin-bottom: 48px;
      @media (min-width: 1020px) {
        margin-bottom: 64px;
      }
    }
  }
`;
