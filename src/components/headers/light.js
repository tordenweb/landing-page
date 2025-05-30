import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo1.jpeg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { Link, NavLink as Nav } from "react-router-dom";
//import { useLocation } from "react-router-dom";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto mt-8
`;

export const NavLinks = tw.div`flex justify-between`; // a. inline-block

export const NavLink = tw(Nav)`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold text-torden-800 tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-torden-800
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-blue-500 text-gray-100
  hocus:bg-blue-800 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black  border-b-0 text-3xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between pl-2 pr-4`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-blue-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  //const location = useLocation();
  const defaultLinks = [
    <NavLinks key={1}>
      {" "}
      <NavLink to="/saibamais">Saiba mais</NavLink>
      <NavLink to={"/contato"}>Contato</NavLink>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink>
      <img src={logo} alt="logo" />
      <Link to={"/"}>Torden Web</Link>
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};

/* {location.pathname === "/" || location.pathname === "/contato" ? (
          <Link to={"/saibamais"}>Saiba mais</Link>
        ) : (
          <Link to={"/contato"}>Contato</Link>
        )}
      </NavLink>
      <NavLink>
        {location.pathname === "/" ? (
          <Link to={"/contato"}>Contato</Link>
        ) : (
          <Link to={"/"}>Home</Link>
        )} */
