import React from "react";
import Hero from "../components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../Assets/CSS/style.css";

// Home component

function Home(props) {
     return (
          // Home page
          <div>
               <section className="row content">
                    <section className="col-md-4 col-sm-4 col-xs-12"></section>
                    <article
                         className="col-md-4 col-sm-4"
                         style={{
                              borderStyle: "groove",
                              marginBottom: "200px",
                              marginTop: "150px",
                              backgroundColor: "lightgreen",
                         }}
                    >
                         <h1 style={{ color: "black" }}>React Portfolio</h1>
                         <p style={{ fontSize: "30px" }}>
                              Projects makes a difference
                         </p>
                         <p style={{ fontSize: "30px" }}>Checkout projects</p>
                    </article>
                    <section className="col-md-4 col-sm-4"></section>
               </section>
          </div>
     );
}

export default Home;
