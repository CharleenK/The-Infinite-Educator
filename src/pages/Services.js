import styled from "styled-components";
import Footer from "../Components/Footer";
import teacherHug from "../images/servicesPics/teacher&hug2.jpg";
import holdingHands from "../images/servicesPics/holdingHands.jpg";
import bricolage from "../images/servicesPics/bricolage2.jpg";
import brightClassroom from "../images/servicesPics/brightClassroom2.jpg";

const Services = () => {
  return (
    <>
      <StyledDiv1>
        <StyledDiv2>
          <StyledH1>Our Services</StyledH1>
          <StyledDiv3>
            <p>
              The Infinite Educator offers a range of workshops and mentoring
              services to support, inspire and create a positive early childhood
              community.
            </p>
          </StyledDiv3>
          <StyledDiv3>
            <p>
              The Infinite Educator specializes in early childhood, out of
              school and PreK and Kindergarten in the following areas:
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Room Assessments & Arrangement:</StyledH2>
          <StyledImg1 src={brightClassroom} alt="bright, organized classroom" />
          <StyledDiv3>
            <p>
              To assist educators in creating age and developmentally supportive
              classroom environments that foster learning through play.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Program Consultations:</StyledH2>
          <StyledDiv3>
            <p>
              To offer comprehensive program consultation that empowers
              educators to deliver a positive, evidence based, and
              developmentally appropriate curriculum.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>PreK and Kindergarten workshops:</StyledH2>
          <StyledImg1 src={bricolage} alt="child using scissors" />
          <StyledDiv3>
            <p>
              To collaborate with PreK and Kindergarten teachers to provide
              guidance on facilitating free play experiences, optimizing
              classroom setups, and deepening their understanding of child
              development stages and milestones.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Educator Support & Development:</StyledH2>
          <StyledDiv3>
            <p>
              To empower educators to elevate their teaching skills, inspire
              professional growth and enhance educational excellence.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Power of Positive Guidance:</StyledH2>
          <StyledImg1
            src={holdingHands}
            alt="child's hand holding adult's finger"
          />
          <StyledDiv3>
            <p>
              To deliver evidence-based classroom management strategies that are
              designed for immediate application in the classroom and support
              educators in creating a positive learning environment.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>After school team building:</StyledH2>
          <StyledDiv3>
            <p>
              To foster a collaborative and supportive workplace culture,
              supporting positive personal dynamics to create an engaging team
              environment.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Educator Wellness:</StyledH2>
          <StyledImg1 src={teacherHug} alt="child hugging teacher" />
          <StyledDiv3>
            <p>
              To empower educators with comprehensive, evidence-based strategies
              that restore professional fulfillment, mitigate workplace stress
              and cultivate sustainable career resilience.
            </p>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv2>
          <StyledH2>Reflective Practices:</StyledH2>
          <StyledDiv3>
            <p>
              To empower educators and teachers in enhancing their reflective
              practices, enabling them to grow as intentional professionals and
              reach their fullest potential.
            </p>
          </StyledDiv3>
        </StyledDiv2>
      </StyledDiv1>
      <Footer />
    </>
  );
};

const StyledH1 = styled.h1`
  padding: 25px;
  @media only screen and (max-width: 1000px) {
    font-size: 5vw;
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
  border-radius: 25px;
  margin: 2.5%;
  padding: 0% 1.5% 1.5%;
  background-color: rgba(255, 255, 255, 0.3);
`;

const StyledDiv3 = styled.div`
  font-size: 2.25vw;
  padding: 5px;
  @media only screen and (min-width: 1001px) {
    font-size: 1.5vw;
  }
`;

const StyledImg1 = styled.img`
  width: 350px;
  border-radius: 10px;
`;

export default Services;
