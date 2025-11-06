import styled from "styled-components";
import learn20 from "../images/partnershipPics/Learn20.png";
import lesterB from "../images/partnershipPics/LesterB.png";
import newFrontier from "../images/partnershipPics/NewFrontier.png";
import sirWilPel from "../images/partnershipPics/sirWilPel.png";
import buildingClassroom from "../images/presentationPics/buildingClassroom6.jpeg";
import empEdu from "../images/presentationPics/empEdu1.jpeg";
import engaging from "../images/presentationPics/engaging2.jpeg";
import positive from "../images/presentationPics/positive3.jpeg";
import proDev from "../images/presentationPics/proDev4.jpeg";
import workWellness from "../images/presentationPics/work&wellness5.jpeg";

const LearningEvents = () => {
  return (
    <>
      <StyledDiv1>
        <h1>Learning Events</h1>
        <StyledDiv2>
          <StyledH2>Workshops</StyledH2>
          <StyledDiv3>
            <h3>Childcare</h3>
            <ul>
              <StyledLi>
                Creating a community classroom: Classroom management techniques
              </StyledLi>
              <StyledLi>
                Embracing Play: Innovative Strategies for Learning Environments
              </StyledLi>
              <StyledLi>Challenging Behaviors: Part 1</StyledLi>
              <StyledLi>Challenging Behaviors: Part 2</StyledLi>
            </ul>
          </StyledDiv3>
          <StyledDiv3>
            <h3>Educator wellness</h3>
            <ul>
              <StyledLi>
                Resiliance in Early childhood: Educators' role and mindset
              </StyledLi>
              <StyledLi>
                One Team, One Dream: Building Positive Early Childhood Community
                Teamwork
              </StyledLi>
            </ul>
          </StyledDiv3>
          <StyledDiv3>
            <h3>School Age</h3>
            <StyledLi>
              Affective Relationships: Building a community of learners
            </StyledLi>
            <StyledLi>
              Strategies and Solutions: Children’s Challenging Behaviours
            </StyledLi>
            <StyledLi>
              Making a difference: The important role that school age educators
              have in the lives of young children
            </StyledLi>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Presentations</StyledH2>
          <StyledDiv4>
            <StyledImgA src={empEdu} alt="poster of Empowering Educators" />
            <StyledImgA
              src={buildingClassroom}
              alt="poster of Building a Community Classroom"
            />
            <StyledImgA
              src={engaging}
              alt="poster of Engaging Early Learners"
            />
            <StyledImgA
              src={positive}
              alt="poster of Promoting Positive Behavior"
            />
            <StyledImgA
              src={proDev}
              alt="poster of Professional Development: School Age Educators"
            />
            <StyledImgA
              src={workWellness}
              alt="poster of Integrating Wellness"
            />
          </StyledDiv4>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Partnerships</StyledH2>
          <StyledDiv5>
            <StyledImg1 src={learn20} alt="Learn 20 Logo" />
            <StyledImg2
              src={lesterB}
              alt="Lester B. Pearson School Board Logo"
            />
            <StyledImg3
              src={sirWilPel}
              alt=" Sir Wilfred Laurier School Board Logo"
            />
            <StyledImg4 src={newFrontier} alt="New Frontiers Logo" />
          </StyledDiv5>
        </StyledDiv2>
      </StyledDiv1>
    </>
  );
};

const StyledH2 = styled.h2`
  padding: 5px;
`;

const StyledDiv1 = styled.div`
  display: flex;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  flex-direction: column;
  text-align: center;
  margin: 2.5%;
  padding: 1.5%;
  font-size: 2.25vw;
`;

const StyledDiv2 = styled.div`
  border-radius: 25px;
  margin: 2.5%;
  padding: 1.5%;
`;

const StyledDiv3 = styled.div`
  border: 4px solid #7bb59b;
  background-color: rgba(123, 181, 155, 0.5);
  border-radius: 20px;
  box-sizing: border-box;
  text-align: left;
  padding: 1.5%;
  margin: 10px;
  justify-content: flex-start;
  @media only screen and (min-width: 1001px) {
    font-size: 1.5vw;
  }
`;

const StyledDiv4 = styled.div`
  border: 4px solid #cadc73;
  background-color: rgba(202, 220, 115, 0.5);
  border-radius: 20px;
  margin: 10px;
`;

const StyledDiv5 = styled.div`
  border: 4px solid #f5b849;
  background-color: rgba(245, 184, 73, 0.5);
  border-radius: 20px;
  margin: 10px;
`;

const StyledLi = styled.li`
  list-style-type: circle;
  list-style-position: inside;
`;

const StyledImg1 = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 10px;
`;
const StyledImg2 = styled.img`
  width: 155px;
  border-radius: 5px;
  margin: 10px 10px 40px 10px;
`;

const StyledImg3 = styled.img`
  width: 100px;
  border-radius: 5px;
  margin: 10px;
`;

const StyledImg4 = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 10px;
`;

const StyledImgA = styled.img`
  width: 275px;
  border-radius: 5px;
  margin: 10px;
`;

export default LearningEvents;
