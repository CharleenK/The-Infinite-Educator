import React from "react";
// import "../styles/background.css";
import styled from "styled-components";
import childMessyHands from "../images/aboutPagePics/childMessyHands2.jpg";
import teacherAndBalloons from "../images/aboutPagePics/teacher&balloons2.jpg";
import teacherLaptop from "../images/aboutPagePics/teacherLaptop2.jpg";
import profilePic from "../images/aboutPagePics/profile.jpeg";

const About = () => {
  return (
    <>
      <StyledDivA>
        <StyledH1>
          The Infinite Educator: Childcare Solutions that Inspire!
        </StyledH1>
        <StyledImg1 src={childMessyHands} alt="child with painted hands" />
      </StyledDivA>
      <StyledDiv1>
        <StyledDiv2>
          {" "}
          <StyledH2>Our Guiding Principles</StyledH2>
          <StyledImg2
            src={teacherAndBalloons}
            alt="children and teachers playing with balloons"
          />
          <p>
            The Infinite Educator is dedicated to empowering educational
            professionals through comprehensive support, proactive advocacy and
            responsive listening strategies. Our core commitments include
            providing targeted professional development resources, personalized
            mentoring and promote inclusive and innovative educational
            environments.
          </p>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Our Mission</StyledH2>
          <StyledImg3
            src={teacherLaptop}
            alt="people gathered around a laptop, smiling"
          />
          <p>
            To improve educational quality in early childhood settings. Empower
            educators with skills and knowledge and provide the early years
            community comprehensive professional growth and new opportunities.
          </p>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH3>Donna Skea</StyledH3>
          <h4>
            ECE faculty member at Vanier College and founder of The Infinite
            Educator
          </h4>
          <StyledImg4 src={profilePic} alt="profile picture" />
          <p>
            With 30 years of experience in Early Childhood Education, I founded
            The Infinite Educator to empower and support educators and childcare
            centers.
          </p>
          <p>
            Our mission is to build strong, positive communities within
            childcare settings through tailored workshops and mentorship.
          </p>
          <p>
            I offer guidance and strategies to foster a nurturing and
            collaborative work environment, helping educators thrive and centers
            succeed.
          </p>
          <p>
            Ready to transform your childcare center? Book a FREE 30-minute
            consultation today by reaching out via LinkedIn or email:
            donna.skea30@gmail.com
          </p>
        </StyledDiv2>
      </StyledDiv1>
    </>
  );
};

const StyledDivA = styled.div`
  position: relative;
`;
const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4.5vw;
  color: rgba(16, 145, 87, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledH2 = styled.h2`
  font-size: 4vw;
  color: rgba(241, 254, 248, 1);
`;

const StyledH3 = styled.h3`
  font-size: 3vw;
  color: rgba(241, 254, 248, 1);
`;

const StyledDiv1 = styled.div`
  border: 2px solid blue;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  margin: 2.5%;
  padding: 1.5%;
`;

const StyledDiv2 = styled.div`
  border: 2px solid green;
  border-radius: 25px;
  margin: 2.5%;
  padding: 1.5%;
`;

const StyledImg1 = styled.img`
  width: 100%;
  height: auto;
`;
const StyledImg2 = styled.img`
  width: 75%;
  height: auto;
`;
const StyledImg3 = styled.img`
  width: 100%;
  height: auto;
`;
const StyledImg4 = styled.img`
  width: 50%;
  height: auto;
  border-radius: 50%;
`;
export default About;
