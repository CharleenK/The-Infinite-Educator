// import * as FaIcons from "./react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  height: 100px;
  aligns-items: center;
  align-content: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 7px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 75%;

  @media screen and (max-width: 429px) {
    font-size: 18px;
    flex-wrap: wrap;
    margin-left: 91px;
    margin-right: 15px;
  }
  @media screen and (min-width: 500px) {
    font-size: 18px;
    margin-left: 150px;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 800px) {
    font-size: 18px;
    margin-left: 215px;
    padding: 2px;
  }
  @media screen and (min-width: 915px) {
    font-size: 22px;
    margin-left: 250px;
    padding: 2px;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  color: black;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color: green;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 28px;
  }
`;
