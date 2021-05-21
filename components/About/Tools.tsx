import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts";
import { Tool } from "./Tool";

const Wrapper = styled.div`
  margin: 10vw 0;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Text = styled.div`
  text-align: center;
  margin-bottom: 2em;

  & > .text-block {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0em;
    & > h4 {
      margin-bottom: 0.75em;
    }

    & > p {
      max-width: 500px;
      margin: auto;
      line-height: 1.5;
    }

    @media (max-width: 1020px) {
      text-align: left;
    }
  }
`;

const Container = styled.div`
  -webkit-overflow-scrolling: touch;
`;

const Grid = styled.ul`
    display: grid;
    margin: 48px auto;

    @media (min-width: 940px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    @media (max-width: 939px) {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    background-color: var(--color-gray-1);
    background-color: #f8f8fa;
    border-radius: 64px;
    padding: 19px 135px;
    @media (max-width: 1020px) {
      gap: 64px;
  }
`;

const technologies = [
  "JS",
  "HTML",
  "CSS",
  "Git",
  "React",  
  "Redux",
  "Typescript",
  "Solidity",
  "Next",
  "Webpack",
  "Postgresql",
  "MySql",
  "NodeJS",
  "GraphQL",
  "Express",
  "MaterialUI",
  "Angular",
  "Bootstrap",
  "JQuery",
  "Python",
  "D3"
];

interface ToolsProps {}

export const Tools: React.FC<ToolsProps> = () => {
  const { ref, visible } = useInView();

  return (
    <Wrapper ref={ref} data-visible={visible}>
      <Text data-fix-width>
        <div className="text-block">
          <h4 data-font-size="XL" className="montserrat">
            Experienced in...
          </h4>
          <p data-font-size="Focus">
            Frameworks, languages and libraries I have learned and used through my development work.
          </p>
        </div>
      </Text>

      <Container>
        <div>
          <Grid>
          {technologies.map((technology) => (
            <Tool src={`/images/technologies/${technology}.svg`} alt={technology} title={technology} key={technology} />
          ))}
          </Grid>
        </div>
      </Container>
    </Wrapper>
  );
};
