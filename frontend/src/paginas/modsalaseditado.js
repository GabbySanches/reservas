import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Figure } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/footer';
import '../componentes/style.css';
import logo4 from '../logo4.jpg';
import salasService from '../services/salaService';


function Salasmodfic() {

  const { id } = useParams();
  const [sala, setFormData] = useState({});
  const history = useNavigate();

  useEffect(() => {
    async function fetchFormData() {

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
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      //const id = event.target._id.value;
      if (event.nativeEvent.submitter.name === "salvar") {
        console.log(typeof id);
        //console.log(id._id);
        alert(id);
        if (typeof id === 'undefined') {
          //await axios.post('http://localhost:2527/api/instsalas/',sala );
          await salasService.postSalas(sala);
          alert('incluido com sucesso!');
        }
        else {
          //await axios.put(`http://localhost:2527/api/updtsalas/${id}`,sala );
          await salasService.updtSalas(id, sala);
          alert('alterado com sucesso!');
        }
      }
    } catch (error) {
      console.error(error);
    }
    history(-1);
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...sala, [name]: value });
  };
  return (

    <Container fluid>

      <NavSc />

      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="me-2" >
                  <Form.Label>Descrição:</Form.Label>
                  <Col sm={11}>
                    <Form.Control type="text" placeholder="" name='descricao' value={sala.descricao} onChange={handleChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="me-2" >
                  <Form.Label>Número da Sala:</Form.Label>
                  <Col sm={11}>
                    <Form.Control type="text" placeholder="" name='numero' value={sala.numero} onChange={handleChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="me-2" >
                  <Form.Label>Capacidade da Sala:</Form.Label>
                  <Col sm={11}>
                    <Form.Control type="text" placeholder="" name='capacidade' value={sala.capacidade} onChange={handleChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="me-2" >
                  <Form.Label>Valor da Sala:</Form.Label>
                  <Col sm={11}>
                    <Form.Control type="text" placeholder="" name='valor' value={sala.valor} onChange={handleChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="me-2" >
                  <Form.Label>Nome da Sala:</Form.Label>
                  <Col sm={11}>
                    <Form.Control type="text" placeholder="" name='tipo' value={sala.tipo} onChange={handleChange} />
                  </Col>
                </Form.Group>

                <Button variant="dark" name='salvar' size='lg' type="submit">
                  SALVAR
                </Button>
                <Button variant="warning" name='cancelar' size='lg' href='/salas'>
                  CANCELAR
                </Button>
              </Form>
            </Col>
            <Col sm={1}>
              <Figure>
                <Figure.Image
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

      <Bootfooter />

    </Container>
  );
}

export default Salasmodfic;