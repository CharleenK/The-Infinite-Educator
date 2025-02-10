import React from "react";
import Footer from "../Components/Footer";
import "../styles/background.css";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <div className="gradient">
        <StyledDiv1>
          <h1> Welcome to The Infinite Educator</h1>
          <h2>Childcare solutions that inspire!</h2>
          <p>
            Early childhood educators and early education teachers play a
            crucial role in guiding our children during their formative
            years,laying a strong foundation for a brighter future.
          </p>
          <p>
            At the Infinite Educator, we offer workshops, seminars and mentoring
            sessions designed to empower the early years community to meet
            today's challenges and thrive in their classrooms.
          </p>
          <h2>Ongoing development</h2>
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
          <h2>Tailored Programs</h2>
          <p>
            The Infinite Educator provides comprehensive workshops and mentoring
            services that are specifically tailored to meet the unique needs of
            your childcare facility or school.
          </p>         
        </StyledDiv1>
      </div>
      <Footer />
    </>
  );
};

const StyledDiv1 = styled.div``;

export default Home;
