import React from "react";
import "../Assets/CSS/style.css";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import profilepic from "../Assets/Images/IMG_78771.JPG";

function About() {
     return (
          <div>
               <section className="row content">
                    <section className="col-md-1 col-sm-1 col-xs-12"></section>
                    <article className="col-md-10 col-sm-10">
                         <h1>About Me</h1>
                         <img
                              src={profilepic}
                              alt="NirmalaAbothu"
                              className="img-thumbnail"
                         />
                         {/* <!-- About me section --> */}
                         <article className="article1">
                              Around 3 Years of training and project experience
                              in analysis, development of web-based software
                              applications using Microsoft technologies ASP.NET
                              skills including NET framework, C#.NET., Visual
                              Studio Code.Experience in front end development of
                              web applications using various client-side
                              technologies (JavaScript, Angular JS 1.2, HTML,
                              CSS etc.). Experience in middle tier development
                              using .NET, C#, ASP.NET MVC, Web API, Microsoft
                              Azure, SQL Server, Entity Framework.
                         </article>
                         <article className="article2">
                              Extensive knowledge of the software development
                              life cycle (SDLC). Expertise in development of Web
                              Forms using C# and ASP.NET. Experience in creating
                              web user controls and web custom controls to
                              enable reuse of common UI functionalities.
                              Knowledge in writing complex Database queries,
                              stored procedures, Views using MS SQL Server
                              2012/2014. Expertise in manual, test automation
                              and perform unit testing. Experience working in
                              Agile/Scrum development environment Experience in
                              Agile/SCRUM methodology <br />
                         </article>
                    </article>

                    <section className="col-md-1 col-sm-1"></section>
               </section>

               <section className="row">
                    <section className="col-md-1 col-sm-1 col-xs-12"></section>
                    <section
                         className="col-md-10 col-sm-10 links"
                         style={{ textAlign: "center" }}
                    >
                         {/* <!-- GitHub Profile link --> */}
                         <section>
                              <a
                                   target="_blank"
                                   href="https://github.com/NirmalaAbothu"
                              >
                                   GitHub-Profile
                              </a>
                         </section>
                         {/* <!-- LinkedIn link --> */}
                         <section>
                              <a
                                   target="_blank"
                                   href="https://www.linkedin.com/in/nirmala-abothu-170a7435/"
                              >
                                   LinkedIn
                              </a>
                         </section>
                         {/* <!-- Resume .pdf path --> */}
                         <section>
                              <a
                                   target="_blank"
                                   href="Assets//Resume/Resume_Nirmala_ Abothu_R.pdf"
                                   download
                              >
                                   Resume
                              </a>
                         </section>
                    </section>

                    <section className="col-md-1 col-sm-1"></section>
               </section>
          </div>
     );
}

export default About;
