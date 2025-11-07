import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <p className="text-footer">
          Copyright ©2022 The Infinite Educator-All rights are reserved
        </p>
      </StyledFooter>
    </>
  );
};

const StyledFooter= styled.footer`
padding-bottom: 10px;
text-align: center;
`

export default Footer;
