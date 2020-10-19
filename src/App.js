import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListItens from './components/listItens/';

class App extends Component {
  

  render(){
    
    return (
      <div>
        <header>
          <Jumbotron>
            <h1 className="header">Teste HI <br/> Raphael Wilker Mendes Araújo</h1>
          </Jumbotron>
        </header>
        <Container fluid>
          <Row>
            <Col>
              <fieldset>
                <legend>Form Selection</legend>
                  <ListItens></ListItens>
              </fieldset>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
