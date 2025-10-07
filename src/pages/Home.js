import React from "react";
import Footer from "../Components/Footer";
import "../styles/background.css";
import styled from "styled-components";
// import brightIdea from "../images/homePagePics/brightIdea2.png";
import paintedChild from "../images/servicesPics/paintedChild.jpg";

import storyTime from "../images/homePagePics/storyTime2.jpg";
import playBlocks from "../images/homePagePics/playBlocks2.jpg";
const Home = () => {
  return (
    <>
      <div className="gradient">
        <StyledDiv1>
          <h1> Welcome to The Infinite Educator</h1>
          <h2>Childcare solutions that inspire!</h2>
          <StyledDiv2>
            <p>
              Early childhood educators and early education teachers play a
              crucial role in guiding our children during their formative
              years,laying a strong foundation for a brighter future.
            </p>
            <StyledImg1 src={paintedChild} alt="child covered in paint" />
            <p>
              At the Infinite Educator, we offer workshops, seminars and
              mentoring sessions designed to empower the early years community
              to meet today's challenges and thrive in their classrooms.
            </p>
          </StyledDiv2>
          <h2>Ongoing development</h2>
          <StyledDiv2>
            <StyledImg2 src={storyTime} alt="teacher reads story to children" />
            <p>
              Professional development in early childhood education is a dynamic
              journey of continuous learning and growth. The Infinite Educator
              supports the early years community through innovative and creative
              approaches to professional development.
            </p>
            <p>
              Our workshops and mentoring sessions will inspire educators and
              teachers with current research and hands on practical strategies
              that can be easily implemented into the classroom.
            </p>
          </StyledDiv2>
          <h2>Tailored Programs</h2>
          <StyledDiv2>
            <StyledImg3 src={playBlocks} alt="blocks spell play" />
            <p>
              The Infinite Educator provides comprehensive workshops and
              mentoring services that are specifically tailored to meet the
              unique needs of your childcare facility or school.
            </p>
          </StyledDiv2>
        </StyledDiv1>
      </div>
      <Footer />
    </>
  );
};

const StyledDiv1 = styled.div`
  border: 2px solid blue;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StyledDiv2 = styled.div`
  display: flex;
  border: 2px solid green;
  margin: auto;
  width: 95%;
  padding: 1.5%;
  text-align: center;
`;

const StyledImg1 = styled.img`
  max-width: 350px;
`;
const StyledImg2 = styled.img`
  max-width: 350px;
`;
const StyledImg3 = styled.img`
  max-width: 350px;
`;

export default Home;
