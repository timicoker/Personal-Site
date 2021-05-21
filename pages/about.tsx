import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import { About, NewsLine, SiteFooter, SiteHeader } from "components";

const AboutPage: NextPage = () => (
  <>
    <NextSeo
      title="Timi Coker - About me"
      description="My biography and experience."
      canonical="timicoker.github.io/personal-site/about"
      openGraph={{
        url: "timicoker.github.io/personal-site/about",
        title: "Timi Coker- About me",
        type: "profile",
        description: "Personal site and portfolio of Timi Coker.",
      }}
    />
    <NewsLine />
    <SiteHeader />
    <Main>
      <About />
    </Main>
    <SiteFooter />
  </>
);

const Main = styled.main`
  margin-top: 1.25em;
  margin-bottom: 1.25em;
`;
export default AboutPage;
