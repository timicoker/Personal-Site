import * as React from "react";
import { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";
import { Landing } from "components/Landing";
import {
  CardsCatalog,
  SiteFooter,
  SiteHeader,
  NewsLine,
} from "components";

const GlobalStyles = createGlobalStyle`div.headroom--unfixed > .headroomContainer {
  border-bottom: none;
}`;

const Main = styled.main`
  min-height: calc(100vh - 800px);
  padding: 40px 0;
`;

const IndexPage: NextPage = () => (
  <>
    <NewsLine />
    <SiteHeader />
    <Landing />
    <Main>
      <GlobalStyles />
      <CardsCatalog />
    </Main>
    <SiteFooter />
  </>
);

export default IndexPage;
