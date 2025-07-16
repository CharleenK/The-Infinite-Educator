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
  ${"" /* padding: 0 1rem; */}
  height: 100%;
  cursor: pointer;
    &.active {
      color: #4d4dff; */
    }
  @media only screen and (max-width: 600px) {
     color: purple;
     flex: 1 1 90px;
     font-size: 20px;
  }  
  @media only screen and (max-width: 400px) {
     color: purple;
     flex: 1 1 80px;
     font-size: 16px;
  }  
`;

export const NavMenu = styled.div`
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
