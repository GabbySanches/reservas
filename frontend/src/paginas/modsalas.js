import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/footer';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import '../componentes/style.css';
import logo4 from '../logo4.jpg';
import salasService from '../services/salaService';

function Salasmod() {
  
  const { id } = useParams();
  const [sala, setFormData] = useState([]);
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {
        
        console.log('id =' + id);
        //const response = await axios.get(`http://localhost:2527/api/fndsalas/${id}`);
        const response = await salasService.getOnesalas(id);
        setFormData(response.data);      
        console.log('response ' + response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 
  
  return (    

    <Container fluid>

      <NavSc/>

      <Card>
      <Card.Body>
      <Row>
      <Col>
        <Form>
        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>Descrição:</Form.Label>
          <Col sm={11}>
          <Form.Control type="text" placeholder="" value={sala.descricao}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Número da Sala:</Form.Label>
          <Col sm={11}>
          <Form.Control type="text" placeholder="Password" value={sala.numero}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Capacidade da Sala:</Form.Label>
          <Col sm={11}>
          <Form.Control type="text" placeholder="Password" value={sala.capacidade}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Valor da Sala:</Form.Label>
          <Col sm={11}>
          <Form.Control type="text" placeholder="Password" value={sala.valor}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Nome da Sala:</Form.Label>
          <Col sm={11}>
          <Form.Control type="text" placeholder="Password" value={sala.tipo}/>
          </Col>
        </Form.Group>
        
        <Button variant="dark" size='lg' type="submit" href='../'>
          VOLTAR
        </Button>
      </Form>
      </Col>
      <Col sm={1}>
      <Figure>
          <Figure.Image
            width={1}
            height={280}
            alt="img"
            src={logo4}
          />
        </Figure>
      </Col>
      <Col sm={6}>
      <Figure>
          <Figure.Image
            width={600}
            height={300}
            alt="img"
            src={sala.imagem}
          />
        </Figure>
      </Col>
      </Row>
      </Card.Body>
      </Card>
      
      <Bootfooter/>

    </Container>
  );
}

export default Salasmod;