// import * as FaIcons from "./react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffb3ff;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.3rem calc((100vw - 1000px) / 6);
  z-index: 12;
  font-size: 20px;
`;

export const NavLink = styled(Link)`
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

export const Titles = styled.div`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;

  @media screen and (max-width: 764px) {
    ${"" /* display: none; */}
    font-size: 18px;
    flex-wrap: wrap;
    margin-left: 200px;
    margin-right: -100px;
  }
  @media screen and (max-width: 1175px) {
    margin-left: 200px;
    flex-wrap: wrap;
  }
`;
