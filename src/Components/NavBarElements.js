// import * as FaIcons from "./react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
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
    margin-right: 20px;
  }
  @media screen and (max-width: 1175px) {
    margin-left: 200px;
    flex-wrap: wrap;
  }
`;
