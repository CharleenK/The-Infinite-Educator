import React from "react";
import Footer from "../Components/Footer";
import "../styles/background.css";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <div className="gradient">
        <StyledDiv1>
          <h1> Welcome to The Infinite Educator</h1>
        </StyledDiv1>
      </div>
      <Footer />
    </>
  );
};

const StyledDiv1 = styled.div`
 
`;

export default Home;
