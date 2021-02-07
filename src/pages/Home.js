import React from "react";
import Hero from "../components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../Assets/CSS/style.css";

function Home(props) {
     return (
          // Home page
          <div>
               <section className="row content">
                    <section className="col-md-1 col-sm-1 col-xs-12"></section>
                    <article className="col-md-10 col-sm-10">
                         <h1>React Portfolio</h1>
                         <p style={{ fontSize: "30px" }}>
                              Projects the make a difference, Checkout projects
                         </p>
                    </article>
               </section>
          </div>
     );
}

export default Home;
