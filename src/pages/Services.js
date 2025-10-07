import styled from "styled-components";
import colorfulClay from "../images/servicesPics/colorfulClay.jpg";
import teacherHug from "../images/servicesPics/teacher&hug2.jpg";
import holdingHands from "../images/servicesPics/holdingHands.jpg";
import teacherMotivation from "../images/servicesPics/teacherMotivation2.jpg";
import bricolage from "../images/servicesPics/bricolage2.jpg";
import specialNeeds from "../images/servicesPics/specialNeeds2.jpg";
import brightClassroom from "../images/servicesPics/brightClassroom2.jpg";
import maleTeacher from "../images/servicesPics/maleTeacher2.jpg";
import paintedChild from "../images/servicesPics/paintedChild.jpg";

const Services = () => {
  return (
    <>
      <h1>The Services page</h1>
      <h2>Our Services</h2>
      <p>
        The Infinite Educator offers a range of workshops and mentoring services
        to support, inspire and create a positive early childhood community.
      </p>
      <StyledImg1
        src={colorfulClay}
        alt="toddler placing blocks to form a tower"
      />
      <p>
        The Infinite Educator specializes in early childhood, out of school and
        PreK and Kindergarten in the following areas:
      </p>
      <h3>Educator Wellness:</h3>
      <StyledImg1 src={teacherHug} alt="child hugging teacher" />
      <p>
        to empower educators with comprehensive, evidence-based strategies that
        restore professional fulfillment, mitigate workplace stress and
        cultivate sustainable career resilience.
      </p>
      <h3>Educator Support & Development:</h3>
      <StyledImg1 src={paintedChild} alt="child covered in paint" />
      <p>
        To empower educators to elevate their teaching skills, inspire
        professional growth and enhance educational excellence.
      </p>
      <h3>Power of Positive Guidance:</h3>
      <StyledImg1
        src={holdingHands}
        alt="child's hand holding adult's finger"
      />
      <p>
        To deliver evidence-based classroom management strategies that are
        designed for immediate application in the classroom and support
        educators in creating a positive learning environment.
      </p>
      <h3>After school team building:</h3>
      <StyledImg1 src={teacherMotivation} alt="group high-fiving" />
      <p>
        To foster a collaborative and supportive workplace culture, supporting
        positive personal dynamics to create an engaging team environment.
      </p>
      <h3>PreK and Kindergarten workshops:</h3>
      <StyledImg1 src={bricolage} alt="child using scissors" />
      <p>
        To collaborate with PreK and Kindergarten teachers to provide guidance
        on facilitating free play experiences, optimizing classroom setups, and
        deepening their understanding of child development stages and
        milestones.
      </p>
      <h3>Program Consultations:</h3>
      <StyledImg1
        src={specialNeeds}
        alt="teacher playing with special needs child"
      />
      <p>
        To offer comprehensive program consultation that empowers educators to
        deliver a positive, evidence based, and developmentally appropriate
        curriculum.
      </p>
      <h3>Room Assessments & Arrangement:</h3>
      <StyledImg1 src={brightClassroom} alt="bright, organized classroom" />
      <p>
        To assist educators in creating age and developmentally supportive
        classroom environments that foster learning through play.
      </p>
      <h3>Reflective Practices:</h3>
      <StyledImg1 src={maleTeacher} alt="male teacger reading with child" />
      <p>
        To empower educators and teachers in enhancing their reflective
        practices, enabling them to grow as intentional professionals and reach
        their fullest potential.
      </p>
    </>
  );
};

const StyledImg1 = styled.img`
  width: 350px;
`;
export default Services;
