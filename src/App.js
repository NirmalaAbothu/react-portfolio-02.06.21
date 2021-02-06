import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Header from "./components/Header";

import Contact from "./components/pages/Contact";

function App() {
     return (
          <Router>
               <div>
                    <>
                         <Navbar />
                         <Header />
                         <Route exact path="/" component={About} />
                         <Route exact path="/projects" component={Projects} />

                         {/* <Route path="/contact" component={Contact} /> */}
                         <Footer />
                    </>
               </div>
          </Router>
     );
}

export default App;
