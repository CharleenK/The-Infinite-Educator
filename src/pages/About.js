import React from "react";
// import "../styles/background.css";
import styled from "styled-components";
import childMessyHands from "../images/aboutPagePics/childMessyHands2.jpg";
import teacherAndBalloons from "../images/aboutPagePics/teacher&balloons2.jpg";
import teacherLaptop from "../images/aboutPagePics/teacherLaptop2.jpg";
import profilePic from "../images/aboutPagePics/profile.jpeg";

const About = () => {
  return (
    <div>
      <h1>The Infinite Educator: Childcare Solutions that Inspire!</h1>
      <StyledImg1 src={childMessyHands} alt="bright fun looking classroom" />
      <h2>Our Guiding Principles</h2>
      <StyledImg2
        src={teacherAndBalloons}
        alt="children and teachers playing with balloons"
      />
      <p>
        The Infinite Educator is dedicated to empowering educational
        professionals through comprehensive support, proactive advocacy and
        responsive listening strategies. Our core commitments include providing
        targeted professional development resources, personalized mentoring and
        promote inclusive and innovative educational environments.
      </p>
      <h2>Our Mission</h2>
      <StyledImg3
        src={teacherLaptop}
        alt="people gathered around a laptop, smiling"
      />
      <p>
        To improve educational quality in early childhood settings. Empower
        educators with skills and knowledge and provide the early years
        community comprehensive professional growth and new opportunities.
      </p>
      <h3>Donna Skea</h3>
      <h4>
        ECE faculty member at Vanier College and founder of The Infinite
        Educator
      </h4>
      <StyledImg4 src={profilePic} alt="profile picture" />
      <p>
        With 30 years of experience in Early Childhood Education, I founded The
        Infinite Educator to empower and support educators and childcare
        centers.
      </p>
      <p>
        Our mission is to build strong, positive communities within childcare
        settings through tailored workshops and mentorship.
      </p>
      <p>
        I offer guidance and strategies to foster a nurturing and collaborative
        work environment, helping educators thrive and centers succeed.
      </p>
      <p>
        Ready to transform your childcare center? Book a FREE 30-minute
        consultation today by reaching out via LinkedIn or email:
        donna.skea30@gmail.com
      </p>
    </div>
  );
};

const StyledImg1 = styled.img`
  width: 350px;
`;
const StyledImg2 = styled.img`
  width: 350px;
`;
const StyledImg3 = styled.img`
  width: 350px;
`;
const StyledImg4 = styled.img`
  width: 200px;
  border-radius: 50%;
`;
export default About;
