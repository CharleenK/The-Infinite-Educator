import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
import Logo from "../images/homePagePics/Logo.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <Nav>
        <StyledDiv1>
          <StyledImg
            className="logo"
            src={Logo}
            alt="The Infinite Educator Logo"
          />
          <StyledDiv2>The Infinite Educator</StyledDiv2>
        </StyledDiv1>
        <StyledNavMenu>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/workshops">Workshops</StyledNavLink>
          <StyledNavLink to="/services">Services</StyledNavLink>
          <StyledNavLink to="/learning">Learning Events</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </StyledNavMenu>
        <StyledDiv4>
          <p>
            <FontAwesomeIcon icon={faFacebook} />
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} />
          </p>
          <p>
            <FontAwesomeIcon icon={faWhatsapp} />
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
          </p>
        </StyledDiv4>
      </Nav>
    </>
  );
};
const StyledDiv1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 95%;
  width: 25%;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  border: 3px solid black;
`;

const StyledNavMenu = styled.div`
  border: 3px solid red;
  display: flex;
  flex-wrap: wrap;
  font-size: 25px;
  gap: 5px;
  margin-left: 13%;
  margin-right: 5%;
  padding: 5px 5px 5px 5px;
  justify-content: space-around;
  width: 90%;
  @media only screen and (max-width: 1360px) {
    margin-left: 20%;
  }
  @media only screen and (max-width: 1160px) {
    margin-left: 25%;
  }
`;

const StyledNavLink = styled.div`
  @media only screen and (max-width: 600px) {
    color: purple;
    flex: 1 1 90px;
    font-size: 20px;
  }
`;
const StyledImg = styled.img`
  display: flex;
  width: 6.2vw;
  border: 2px solid purple;
`;
const StyledDiv2 = styled.div`
  border: 3px solid green;
  font-size: 30px;
  @media only screen and (max-width: 1425px) {
    font-size: 20px;
  }
`;
const StyledDiv4 = styled.div`
  border: 3px solid pink;
  display: flex;
  flex-wrap: wrap;
  ${"" /* padding: 5px 5px 5px 5px; */}
  align-items: center;
  justify-content: space-around;
  width: 15%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  @media only screen and (max-width: 1300px) {
    width: 5%;
    display: block;
e  }
`;

export default Navbar;
