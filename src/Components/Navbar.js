import { Nav, NavLink, NavMenu } from "./NavBarElements";
import Logo from "../images/homePagePics/Logo.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/learning">Learning Events</NavLink>
          <NavLink to="/workshops">Workshops</NavLink>
          {/* <NavLink to="/contact">Contact</NavLink> */}
        </NavMenu>
        <StyledDiv3>
          <StyledDivA>
            <a
              href="https://www.facebook.com/profile.php?id=100066017271883"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </StyledDivA>
          <StyledDivA>
            <a
              href="https://www.linkedin.com/in/donna-skea-71771aa7"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </StyledDivA>
          <StyledDivA>
            <a href="mailto:Donna.skea30@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </StyledDivA>
          {/* <p>
            <a href="1-514-651-6621">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </p> */}
        </StyledDiv3>
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
`;

const StyledImg = styled.img`
  display: flex;
  width: 6.2vw;
`;

const StyledDiv2 = styled.div`
  font-size: 30px;
  @media only screen and (max-width: 1425px) {
    font-size: 20px;
  }
`;
const StyledDiv3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  box-sizing: border-box;
  width: 10%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 8px;
  @media only screen and (max-width: 1300px) {
    width: 5%;
    display: block;
  }
  @media only screen and (max-width: 400px) {
    width: 7.5%;
    display: block;
  }
`;
const StyledDivA = styled.div`
  padding: 2px;
  margin: 2px;
  @media only screen and (max-width: 412px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 413px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 900px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1300px) {
    font-size: 30px;
  }
`;

export default Navbar;
