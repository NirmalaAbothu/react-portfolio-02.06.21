import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
//import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// function NavTabs() {

// We'll go into the Hooks API later, for now, we are just using some code
// from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
// This allows the component to check the route any time the user uses a link to navigate.

const Navbars = () => {
     const location = useLocation();
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
               <div className="container">
                    <div className="container-fluid">
                         <div className="navbar-brand">Nirmala Abothu</div>
                         <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                         >
                              <FontAwesomeIcon
                                   icon={faBars}
                                   style={{ color: "#fff" }}
                              />
                         </button>
                         <div
                              className="collapse navbar-collapse"
                              id="navbarSupportedContent"
                         >
                              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                   <li className="nav-item active">
                                        <Link
                                             to="/"
                                             className={
                                                  location.pathname === "/"
                                                       ? "nav-link active"
                                                       : "nav-link"
                                             }
                                        >
                                             About
                                        </Link>
                                        {/* <a
                                             className="nav-link"
                                             aria-current="page"
                                             href="#"
                                        >
                                             About
                                             <span className="sr-only">
                                                  (current
                                             </span>
                                        </a> */}
                                   </li>
                                   <li className="nav-item">
                                        <Link
                                             to="/project"
                                             className={
                                                  location.pathname ===
                                                  "/project"
                                                       ? "nav-link active"
                                                       : "nav-link"
                                             }
                                        >
                                             Projects
                                        </Link>
                                        {/* <a className="nav-link" href="#">
                                             Projects
                                        </a> */}
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </nav>
     );
};

export default Navbars;
