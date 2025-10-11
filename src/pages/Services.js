import styled from "styled-components";
// import colorfulClay from "../images/servicesPics/colorfulClay.jpg";
import teacherHug from "../images/servicesPics/teacher&hug2.jpg";
import holdingHands from "../images/servicesPics/holdingHands.jpg";
// import teacherMotivation from "../
import bricolage from "../images/servicesPics/bricolage2.jpg";
// import specialNeeds from "../images/servicesPics/specialNeeds2.jpg";
import brightClassroom from "../images/servicesPics/brightClassroom2.jpg";

const Services = () => {
  return (
    <>
      <StyledDiv1>
        <StyledDiv2>
          <h1>Our Services</h1>
          <StyledDiv3>
            {" "}
            <p>
              The Infinite Educator offers a range of workshops and mentoring
              services to support, inspire and create a positive early childhood
              community.
            </p>
          </StyledDiv3>
          {/* <StyledImg1
          src={colorfulClay}
          alt="toddler placing clay to form a row"
        /> */}
          <StyledDiv3>
            <p>
              The Infinite Educator specializes in early childhood, out of
              school and PreK and Kindergarten in the following areas:
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <h2>Room Assessments & Arrangement:</h2>
          <StyledImg1 src={brightClassroom} alt="bright, organized classroom" />
          <StyledDiv3>
            {" "}
            <p>
              To assist educators in creating age and developmentally supportive
              classroom environments that foster learning through play.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <h2>Program Consultations:</h2>
          {/* <StyledImg1
            src={specialNeeds}
            alt="teacher playing with special needs child"
          /> */}
          <StyledDiv3>
            {" "}
            <p>
              To offer comprehensive program consultation that empowers
              educators to deliver a positive, evidence based, and
              developmentally appropriate curriculum.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <h2>PreK and Kindergarten workshops:</h2>
          <StyledImg1 src={bricolage} alt="child using scissors" />
          <StyledDiv3>
            {" "}
            <p>
              To collaborate with PreK and Kindergarten teachers to provide
              guidance on facilitating free play experiences, optimizing
              classroom setups, and deepening their understanding of child
              development stages and milestones.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <h2>Educator Support & Development:</h2>
          <StyledDiv3>
            {" "}
            <p>
              To empower educators to elevate their teaching skills, inspire
              professional growth and enhance educational excellence.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <h2>Power of Positive Guidance:</h2>
          <StyledImg1
            src={holdingHands}
            alt="child's hand holding adult's finger"
          />
          <StyledDiv3>
            {" "}
            <p>
              To deliver evidence-based classroom management strategies that are
              designed for immediate application in the classroom and support
              educators in creating a positive learning environment.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <h2>After school team building:</h2>
          {/* <StyledImg1 src={teacherMotivation} alt="group high-fiving" /> */}
          <StyledDiv3>
            {" "}
            <p>
              To foster a collaborative and supportive workplace culture,
              supporting positive personal dynamics to create an engaging team
              environment.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <h2>Educator Wellness:</h2>
          <StyledImg1 src={teacherHug} alt="child hugging teacher" />
          <StyledDiv3>
            {" "}
            <p>
              To empower educators with comprehensive, evidence-based strategies
              that restore professional fulfillment, mitigate workplace stress
              and cultivate sustainable career resilience.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <h3>Reflective Practices:</h3>
          <StyledDiv3>
            <p>
              To empower educators and teachers in enhancing their reflective
              practices, enabling them to grow as intentional professionals and
              reach their fullest potential.
            </p>
          </StyledDiv3>
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

const StyledDiv3 = styled.div`
  border: 4px solid orange;
  font-size: 2.25vw;
  ${
    "" /* @media only screen and(min-width:500px) {
    font-size: 5vw; */
  }
  ${"" /* } */}
`;

const StyledImg1 = styled.img`
  width: 350px;
`;
export default Services;
