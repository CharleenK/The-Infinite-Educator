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
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/workshops">Workshops</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/learning">Learning Events</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>
        <div>
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
        </div>
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
const StyledImg = styled.img`
  width: 6vw;
  border: 2px solid purple;
  margin-left: -5px;
`;
const StyledDiv2 = styled.div`
  border: 3px solid green;
`;
export default Navbar;
