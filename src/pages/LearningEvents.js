import styled from "styled-components";

const LearningEvents = () => {
  return (
    <>
      {/* <h2>presentations</h2>
      <h1>Partnerships</h1> */}
      <StyledDiv1>
        <h1>Learning Events</h1>
        <h2>Workshops</h2>
        <StyledDiv2>
          <h3>
            One Team, One Dream:Building a Positive Early Childhood Community
            Teamwork Workshop
          </h3>
          <p>
            This interactive workshop aims to empower participants by enhancing
            their ability to communicate effectively, paving the way for a more
            cohesive team culture. Through engaging activities, attendees will
            identify and leverage individual strengths, facilitating collective
            success. We will develop actionable strategies for conflict
            resolution and constructive feedback, ensuring that challenges are
            addressed positively. Participants will collaborate to create a
            shared vision and set meaningful goals, aligning their efforts for
            optimal outcomes.
          </p>
        </StyledDiv2>
        <StyledDiv2>
          <h3>
            {" "}
            Embracing Play:Innovative Strategies for Learning Environments
          </h3>
          <p>
            This interactive workshop deep dives into the creating a learning
            environment that embracing children’s natural need to play. Int this
            workshop educators will review the fundamentals in classroom
            management and will discuss the importance of creating a “yes”
            environment for both the educators and the children. Educators will
            be inspired by a variety of ideas and photos. This workshop will
            support educators to create a learning environment that will reduce
            guidance issues and engage all children in their overall
            development.
          </p>
        </StyledDiv2>
        <StyledDiv2>
          <h2> Workshops include:</h2>
          <ul>
            <li>
              A pre-meeting between presenter and organizer to narrow down the
              topic that will be discussed.
            </li>
            <li>
              A pre workshop meeting will take place to finalize the workshop.
            </li>
            <li>2-4 hrs of theory-based research on topic.</li>
            <li>Creation of a PowerPoint presentation </li>
            <li>Travel</li>
            <li>Each workshop is 2-3hrs</li>
          </ul>
        </StyledDiv2>
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
`;

const StyledDiv2 = styled.div`
  border: 2px solid green;
  border-radius: 25px;
  margin: 2.5%;
  padding: 0% 1.5% 1.5%;
`;

export default LearningEvents;
