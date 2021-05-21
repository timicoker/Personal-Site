import * as React from "react";
import styled from "styled-components";

import { useMediaQuery } from "@material-ui/core";

import { MennuButton, MenuHeader, Modal } from "components/SiteHeader/Menu";

import { FiGithub, FiHome, FiLinkedin, FiUser, FiMail } from "react-icons/fi";

interface MenuProps {
  open: boolean;
  closeDialog: () => void;
}

export const Menu: React.FC<MenuProps> = ({ open, closeDialog }) => {
  const isMobile = useMediaQuery("(max-width: 720px)");

  return (
    <Modal
      onClose={closeDialog}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullScreen={isMobile}
      className="montserrat"
    >
      {isMobile && <MenuHeader closeDialog={closeDialog} />}
      <Grid>
        <Buttons>
          <MennuButton href="/" title="Home">
            <FiHome color="var(--color-grey-10)" />
          </MennuButton>
          <MennuButton href="/contact" title="Contact">
            <FiMail color="var(--color-magenta-500)" />
          </MennuButton>
          <MennuButton href="/about" title="About me">
            <FiUser color="var(--color-blue-500)" />
          </MennuButton>
        </Buttons>

        <hr />

        <Buttons>
          <MennuButton href="https://github.com/timicoker" title="GitHub" outside>
            <FiGithub color="var(--color-text-main)" />
          </MennuButton>
          <MennuButton href="https://www.linkedin.com/in/timi-coker-274a6b19b/" title="LinkedIn" outside>
            <FiLinkedin color="#2176A6" />
          </MennuButton>
        </Buttons>
      </Grid>
    </Modal>
  );
};

const Grid = styled.div`
  display: grid;
  grid-gap: 4px;

  margin: 4px 0;
`;
const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 4px;

  @media (min-width: 721px) {
    max-width: 360px;
  }
`;
