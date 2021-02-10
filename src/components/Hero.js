import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Hero component
function Hero(props) {
     return (
          <Jumbotron>
               <Container>
                    <Row>
                         <Col>
                              <div>
                                   {props.title && <h1>{props.title}</h1>}
                                   {props.subTitle && <p>{props.subTitle}</p>}
                                   {props.text && <p>{props.text}</p>}
                              </div>
                         </Col>
                    </Row>
               </Container>
          </Jumbotron>
     );
}

export default Hero;
