import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";

import {
  SiteHeaderBase,
  SiteHeaderLinks,
  SiteHeaderMenu,
  SiteHeaderTitle,
} from "components/SiteHeader";

interface SiteHeaderProps {}

export const SiteHeader: React.FC<SiteHeaderProps> = () => {
  const isMobile = useMediaQuery("(max-width: 720px)");

return(

  <SiteHeaderBase>
    <SiteHeaderTitle />
    <RightPart>
      {!isMobile ? <SiteHeaderLinks /> :<SiteHeaderMenu />}
    </RightPart>
  </SiteHeaderBase>
)};

const RightPart = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
  height: 100%;
`;
