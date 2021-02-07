import React from "react";
import Hero from "../components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Home(props) {
     return (
          <Container>
               <Row>
                    <section className="col-md-12 col-sm-12 col-xs-12"></section>{" "}
               </Row>
               <Row>
                    <section className="col-md-1 col-sm-1 col-xs-12"></section>
                    <article className="col-md-10 col-sm-10">
                         <Hero
                              title={props.title}
                              subTitle={props.subTitle}
                              text={props.text}
                         />
                    </article>
                    <section className="col-md-1 col-sm-1"></section>
               </Row>
          </Container>
          // <Hero
          //      title={props.title}
          //      subTitle={props.subTitle}
          //      text={props.text}
          // />
     );
}

export default Home;
