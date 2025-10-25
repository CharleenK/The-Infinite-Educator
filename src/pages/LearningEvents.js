import styled from "styled-components";

const LearningEvents = () => {
  return (
    <>
      <StyledDiv1>
        <h1>Learning Events</h1>
        <StyledDiv2>
          <h2>Workshops</h2>
          <h3>
            One Team, One Dream: Building Positive Early Childhood Community
            Teamwork
          </h3>
          <h3>
            {" "}
            Embracing Play:Innovative Strategies for Learning Environments
          </h3>
          <h3>
            Affective Relationships:Building a community of learners in after
            school care
            <h3>Strategies and Solutions: Children’s Challenging Behaviours</h3>
          </h3>
          <h3>
            Making a difference: The important role that school age educators
            have in the lives of young children
          </h3>
        </StyledDiv2>
        <StyledDiv2>
          <h2>Presentations</h2>
        </StyledDiv2>
        <StyledDiv2>
          <h2>Partnerships</h2>
        </StyledDiv2>
        <StyledDiv2></StyledDiv2>
        <StyledDiv2></StyledDiv2>
      </StyledDiv1>
    </>
  );
};

const StyledDiv1 = styled.div`
  display: inline-flex;
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
  font-size: 2vw;
`;

const StyledDiv2 = styled.div`
  border: 2px solid green;
  border-radius: 25px;
  margin: 2.5%;
  padding: 1.5%;
`;

export default LearningEvents;
