import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Logo from "../images/homePagePics/Logo.png";

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
  font
`;
const Nav = styled.nav`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 7px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const NavLink = styled(Link)`
  color: rgb(2, 52, 254);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;
// const Titles = styled.div`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;

  @media screen and (max-width: 764px) {
    ${"" /* display: none; */}
    font-size: 18px;
    flex-wrap: wrap;
    margin-left: 200px;
    margin-right: 20px;
  }
  @media screen and (max-width: 1175px) {
    margin-left: 200px;
    flex-wrap: wrap;
  }
`;

export default Navbar;
