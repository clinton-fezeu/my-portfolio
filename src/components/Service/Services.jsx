import React from 'react';
import { MdDesignServices } from 'react-icons/md';
import { FiDatabase, FiCode } from 'react-icons/fi';
import styled from 'styled-components';
import Card from './Card';
import { Slide } from 'react-awesome-reveal';

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={'Responsive Web Design'}
            disc={`Design and implement responsive, user-friendly websites with modern frameworks like HTML, CSS, and Bootstrap to deliver a seamless user experience across devices.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCode}
            title={'Frontend Development'}
            disc={`Build interactive and dynamic user interfaces using JavaScript and React.js, focusing on functionality and user-centric design.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiDatabase}
            title={'Backend Development'}
            disc={`Develop robust server-side applications with Node.js and manage databases like MySQL, ensuring efficiency and scalability.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
