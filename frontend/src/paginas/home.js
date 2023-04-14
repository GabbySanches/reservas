import React from 'react';
import { Container } from 'react-bootstrap';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/footer';
import Carrocell from '../componentes/carrossel';

function Home() {
  return (
      
    <Container>

      <NavSc/>

      <Carrocell/>

      <Bootfooter/>

    </Container>

      )
      };

export default Home;

