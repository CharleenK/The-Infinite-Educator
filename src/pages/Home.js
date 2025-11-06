import React from "react";
import Footer from "../Components/Footer";
import "../styles/background.css";
import styled from "styled-components";
import paintedChild from "../images/servicesPics/paintedChild.jpg";

import storyTime from "../images/homePagePics/storyTime2.jpg";
import playBlocks from "../images/homePagePics/playBlocks2.jpg";
const Home = () => {
  return (
    <>
      <div className="gradient">
        <StyledDiv1>
          <StyledH1> Welcome to The Infinite Educator</StyledH1>
          <StyledH2>Childcare solutions that inspire!</StyledH2>
          <StyledDiv2>
            <StyledDiv3>
              <p>
                Early childhood educators and early education teachers play a
                crucial role in guiding our children during their formative
                years,laying a strong foundation for a brighter future.
              </p>
            </StyledDiv3>
            <StyledImg1 src={paintedChild} alt="child covered in paint" />
            <StyledDiv3>
              <p>
                At the Infinite Educator, we offer workshops, seminars and
                mentoring sessions designed to empower the early years community
                to meet today's challenges and thrive in their classrooms.
              </p>
            </StyledDiv3>
          </StyledDiv2>
          <StyledH2>Ongoing development</StyledH2>
          <StyledDiv2>
            <StyledImg2 src={storyTime} alt="teacher reads story to children" />
            <StyledDiv3>
              <p>
                Professional development in early childhood education is a
                dynamic journey of continuous learning and growth. The Infinite
                Educator supports the early years community through innovative
                and creative approaches to professional development.
              </p>
            </StyledDiv3>
            <StyledDiv3>
              <p>
                Our workshops and mentoring sessions will inspire educators and
                teachers with current research and hands on practical strategies
                that can be easily implemented into the classroom.
              </p>
            </StyledDiv3>
          </StyledDiv2>
          <StyledH2>Tailored Programs</StyledH2>
          <StyledDiv2>
            <StyledImg3 src={playBlocks} alt="blocks spell play" />
            <StyledDiv3>
              <p>
                The Infinite Educator provides comprehensive workshops and
                mentoring services that are specifically tailored to meet the
                unique needs of your childcare facility or school.
              </p>
            </StyledDiv3>
          </StyledDiv2>
        </StyledDiv1>
      </div>
      <Footer />
    </>
  );
};

const StyledH1 = styled.h1`
  ${"" /* color: rgba(16, 145, 87, 1); */}
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    font-size: 6vw;
  }
  @media only screen and (min-width: 1001px) {
    font-size: 4vw;
  }
`;

const StyledH2 = styled.h2`
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    font-size: 3.5vw;
  }
  @media only screen and (min-width: 1001px) {
    font-size: 2.5vw;
  }
`;
const StyledDiv1 = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media only screen and (min-width: 1001px) {
  }
`;

const StyledDiv2 = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: auto;
  width: 98%;
  padding: 1.5%;
  text-align: center;
  justify-content: center;
  align-content: center;
`;

const StyledDiv3 = styled.div`
  ${"" /* border: 2px solid black; */}
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  width: 95%;
  font-size: 2vw;
  padding: 1.5%;
  justify-content: center;
  align-items: center;
  align-content: center;
  line-height: 1.5;
  @media only screen and (min-width: 1001px) {
    font-size: 1.5vw;
  }
`;

const StyledImg1 = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  @media only screen and (min-width: 1001px) {
    width: 50%;
  }
`;
const StyledImg2 = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  @media only screen and (min-width: 1001px) {
    width: 50%;
  }
`;
const StyledImg3 = styled.img`
  width: 100%;
  border-radius: 5px;
  height: auto;
  @media only screen and (min-width: 1001px) {
    width: 50%;
  }
`;

export default Home;
