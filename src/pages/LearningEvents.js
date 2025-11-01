import styled from "styled-components";
import learn20 from "../images/partnershipPics/learn20.png";
import lesterB from "../images/partnershipPics/lesterB.png";
import newFrontier from "../images/partnershipPics/newFrontier.png";
import sirWilPel from "../images/partnershipPics/sirWilPel.png";
const LearningEvents = () => {
  return (
    <>
      <StyledDiv1>
        <h1>Learning Events</h1>
        <StyledDiv2>
          <h2>Workshops</h2>
          <h3>Childcare Teachers and Educators</h3>
          <StyledDiv3>
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
          <h3>Educator wellness</h3>
          <StyledDiv3>
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
          <h3>School Age</h3>
          <StyledDiv3>
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
          <h2>Presentations</h2>
        </StyledDiv2>
        <StyledDiv2>
          <h2>Partnerships</h2>
          <StyledImg1 src={learn20} alt="Learn 20 Logo" />
          <StyledImg2 src={lesterB} alt="Lester B. Pearson School Board Logo" />
          <StyledImg3
            src={sirWilPel}
            alt=" Sir Wilfred Laurier School Board Logo"
          />
          <StyledImg4 src={newFrontier} alt="New Frontiers Logo" />
        </StyledDiv2>
      </StyledDiv1>
    </>
  );
};

const StyledDiv1 = styled.div`
  display: flex;
  border: 2px solid blue;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  flex-direction: column;
  ${"" /* justify-content: center; */}
  ${"" /* align-items: center; */}
  ${"" /* align-content: center; */}
  text-align: center;
  margin: 2.5%;
  padding: 1.5%;
  font-size: 2.25vw;
`;

const StyledDiv2 = styled.div`
  border: 2px solid green;
  border-radius: 25px;
  margin: 2.5%;
  padding: 1.5%;
`;

const StyledDiv3 = styled.div`
  border: 4px solid orange;
  box-sizing: border-box;
  text-align: left;
  padding: 1.5%;
  justify-content: flex-start;
`;

const StyledLi = styled.li`
  list-style-type: circle;
  list-style-position: inside;
`;

const StyledImg1 = styled.img`
  width: 175px;
  border-radius: 50%;
  margin: 10px;
`;
const StyledImg2 = styled.img`
  width: 175px;
  border-radius: 10%;
  margin: 10px 10px 65px 10px;
`;

const StyledImg3 = styled.img`
  width: 175px;
  border-radius: 5px;
  margin: 10px;
`;

const StyledImg4 = styled.img`
  width: 175px;
  border-radius: 50%;
  margin: 10px;
`;

export default LearningEvents;
