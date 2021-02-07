import React from "react";
// import "../Assets/CSS/style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// function Footer() {
//      return (
//           <footer className="footer">
//                <span>Pupster 2017</span>
//           </footer>
//      );
// }

function Footer() {
     return (
          // <!-- footer -->
          <footer className="footer mt-auto py-3">
               <div className="footer-container">
                    <span className="text-muted">© Copyright</span>
               </div>
          </footer>
          // <footer className="mt-5">
          /* <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                         <Col className="p-0" md={3} sm={12}>
                              copyright 2021
                         </Col>
                         <Col
                              className="p-0 d-flex justify-content-end"
                              md={3}
                         ></Col>
                    </Row>
               </Container>
          </footer> */
     );
}

export default Footer;
