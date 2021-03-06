import * as React from "react";
import styled from "styled-components";

import Link from "next/link";

import { Button, Image } from "components";
import { calculateYearSince, useInView } from "scripts";
import { BubblesBackground } from "components/BubblesBackground";

const Block = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  max-width: 1440px;

  transition: opacity 1.5s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  @media (min-width: 1020px) {
    & > .imageWrapper {
      margin-left: 10vw;
    }
  }
  @media (max-width: 1019px) {
    flex-direction: column-reverse;

    & > .imageWrapper {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6vw;

      padding: 5vw;
    }
  }

  & > .text-block {
    margin-right: 0 !important;
    max-width: 1000px;
    width: fit-content;

    & > h1 {
      white-space: nowrap;
      margin-bottom: 0.6em;

      @media (min-width: 1021px) and (max-width: 1440px) {
        font-size: 4.5vw;
      }

      @media (min-width: 800px) and (max-width: 1020px) {
        font-size: 6.5vw;
      }
    }
    & > h2 {
      margin-bottom: 1.15em;
      max-width: 14em;
    }
    & > p {
      max-width: 600px;
    }

    & > .aside {
      margin: 1.5em 0 2em;
      max-width: 360px;
    }

    & button {
      margin-top: 1.5em;
      background-color: var(--color-gray-9);
    }
  }

  & > .imageWrapper {
    max-width: 420px;
    width: 100%;
    height: 100%;
  }
`;

interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => {
  const { visible, ref } = useInView({ rootMargin: "0px" });

  return (
    <Block className="block" ref={ref} data-visible={visible}>
      <BubblesBackground/>
      <div className="text-block">
        <h1 className="montserrat">Timi Coker</h1>
        <h2 data-font-size="XL">Frontend Software Engineer</h2>
        <p>
          Hey! I am a Software Engineer from the US. I specialize in frontend engineering, and dApp development.
          I create modern and accessible websites and applications. I studied Advertising and Computer Science at Boston University.
          I am currently based in London, UK and working as a Software Engineer.
        </p>
        <p className="aside">
          Let&apos;s work together! I&apos;m always happy to provide you my professional help.
        </p>
        <Link href="/contact">
          <Button>Contact me</Button>
        </Link>
      </div>
      {/* <div className="imageWrapper">
        <Image src="about/me.jpg" alt="Me" width={575} height={690} bgColor="#1A1A1A" priority />
      </div> */}
    </Block>
  );
};
