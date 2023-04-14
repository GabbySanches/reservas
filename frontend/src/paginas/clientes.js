import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import NavSc from '../componentes/navbar';
import Bootfooter from '../componentes/footer';
import logo5 from '../logo5.png';
import logo6 from '../logo6.png';
import clientesService from '../services/clienteService';


function Clientes() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchTableData() {

      try {

        //const response = await axios.get('http://localhost:2527/api/clientes');
        const response = await clientesService.getClientes();
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }

    };
    fetchTableData();
  }, [tableData]);

  async function handleDelete(id) {
    var confirma = window.confirm('Confere?');
    if (confirma) {
      try {
        //await axios.delete(`http://localhost:2527/api/deltclientes/${id}`);
        await clientesService.deltClientes(id);
        alert('deletado com sucesso!');
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (

    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavSc />
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <Row>
            <Col sm={3}>
              <Button variant="warning" size='lg' href='/clisalas'>
                +
              </Button>
            </Col>

            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Cep</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => {
                  return (
                    <tr key={index} data-toogle="tooltip" title={row.cep}>
                      <td>{row.cpf}</td>
                      <td>{row.nome}</td>
                      <td>{row.cep}</td>
                      <td><a href={`/clisalas/${row._id}`}>
                        <img src={logo5} alt='logo5'></img>
                      </a>
                      </td>
                      <td><a href='#'>
                        <img src={logo6} alt='logo6' onClick={() => handleDelete(row._id)}></img>
                      </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <Col sm={3}>
              <Button variant="dark" size='lg' href='/index'>
                VOLTAR
              </Button>
            </Col>

          </Row>
        </Card.Body>
      </Card>

      <Bootfooter />

    </Container>
  );
}

export default Clientes;