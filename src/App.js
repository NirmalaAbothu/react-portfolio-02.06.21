import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";

class App extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               titel: "Nirmala Abothu",
               headerLinks: [
                    {
                         title: "Home",
                         path: "/",
                    },
                    {
                         title: "About",
                         path: "/about",
                    },
                    {
                         title: "Projects",
                         path: "/Projects",
                    },
               ],
               home: {
                    title: "React Portfolio",
                    subTitle: "Projects the make a difference",
                    text: "Checkout projects",
               },
               about: {
                    title: "About Me",
               },
               projects: {
                    titel: "About projects",
               },
          };
     }
     render() {
          return (
               <Router basename={process.env.PUBLIC_URL}>
                    <Container className="p-0" fluid={true}>
                         <Navbar
                              className="border-bottom"
                              navbar-dark
                              bg="transparent"
                              expand="lg"
                         >
                              <Navbar.Brand>Nirmala Abothu</Navbar.Brand>
                              <Navbar.Toggle
                                   className="border-0"
                                   aria-controls="navbar-toggle"
                              />
                              <Navbar.Collapse id="navbar-toggle">
                                   <Nav className="ml-auto">
                                        <Link className="nav-link" to="/">
                                             Home
                                        </Link>
                                        <Link className="nav-link" to="/about">
                                             About
                                        </Link>
                                        <Link
                                             className="nav-link"
                                             to="/projects"
                                        >
                                             Projects
                                        </Link>
                                   </Nav>
                              </Navbar.Collapse>
                         </Navbar>
                         <Route
                              path="/"
                              exact
                              render={() => (
                                   <Home
                                        title={this.state.home.title}
                                        subTitle={this.state.home.subTitle}
                                        text={this.state.home.text}
                                   />
                              )}
                         />

                         <Route
                              path="/about"
                              render={() => (
                                   <About title={this.state.about.title} />
                              )}
                         />
                         <Route
                              path="/projects"
                              render={() => (
                                   <Projects
                                        title={this.state.projects.title}
                                   />
                              )}
                         />
                         <Footer />
                    </Container>
               </Router>
          );
     }
}

export default App;
