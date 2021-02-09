import React from "react";
import burger1 from "../Assets/Images/burger1.PNG";
import burger2 from "../Assets/Images/burger2.PNG";
import hikelocator2 from "../Assets/Images/hikelocator2.PNG";
import hikelocator3 from "../Assets/Images/hikelocator3.PNG";
import workdayplanner1 from "../Assets/Images/latest1.PNG";
import workdayplanner2 from "../Assets/Images/workdayplanner2.PNG";
import weather from "../Assets/Images/weather.PNG";
import weather1 from "../Assets/Images/weather1.PNG";

function Projects() {
     return (
          <div>
               <section className="row content" style={{ marginTop: "40px" }}>
                    <section className="col-md-1 col-sm-1 col-xs-12"></section>
                    <section
                         className="col-md-10 col-sm-10"
                         style={{
                              Border: "5px solid whitesmoke",
                              marginBottom: "40px",
                              backgroundColor: "#e4deff",
                         }}
                    >
                         <h1>Weather Dashboard</h1>
                         {/* <!-- Deployed project link --> */}
                         <section className="link">
                              <a
                                   target="_blank"
                                   href="https://nirmalaabothu.github.io/weather-dashboard-10.13.20/"
                              >
                                   Website
                              </a>
                              <br />
                              {/* <!-- GitHub Repo link --> */}
                              <a
                                   target="_blank"
                                   href="https://github.com/NirmalaAbothu/weather-dashboard-10.13.20"
                              >
                                   GitHub-Repo
                              </a>
                         </section>

                         <section className="row">
                              <section className="col-md-8 col-sm-8 col-xs-12">
                                   <section className="row">
                                        <section className="col-md-12 col-sm-12 col-xs-12">
                                             <img
                                                  className="img-fluid"
                                                  src={weather}
                                                  alt="Portfoliopic"
                                             />
                                        </section>
                                   </section>

                                   <section className="row">
                                        <section className="col-md-12 col-sm-12 col-xs-12">
                                             <img
                                                  className="img-fluid"
                                                  src={weather1}
                                                  alt="Portfoliopic"
                                             />
                                        </section>
                                   </section>
                              </section>
                              {/* <!-- Description about the project --> */}
                              <section className="col-md-4 col-sm-4 col-xs-12">
                                   <section className="projectdetails">
                                        <h4>Description</h4>
                                        If user first time visits application,
                                        will not see list of cities display
                                        below the search input box,user will see
                                        only input box to enter city name and
                                        search button. If click submit button
                                        without entering city name,warning
                                        message will be displayed in red color.
                                        If user is existing user(already visited
                                        Weather dashboard application), then
                                        user will able to see her/his searched
                                        cities in list(citynames) and the page
                                        will displays the weather details of
                                        last visited city until enter new city
                                        name and click submit button. This
                                        application diplays current weather and
                                        five day forecast of perticular city
                                        selected by user. Current weather
                                        details will be retrived thru
                                        openweather.com api passing city as
                                        parameter. UV index of perticulr city
                                        will find by passing longitude and
                                        latitude as a parameters in Openweather
                                        api URL. Five day forecast will be
                                        retrieved by passing city name as
                                        parameter in Openweather forecast api
                                        URL.
                                   </section>
                                   {/* <!-- Technology used in project --> */}
                                   <section className="projectdetails">
                                        <h4>Technologies</h4>
                                        <ul>
                                             Technologies and skills i got
                                             involved when i work on this
                                             project
                                             <li>HTML</li>
                                             <li>CSS</li>
                                             <li>Javascript</li>
                                             <li>Bootstrap</li>
                                             <li>LocalStorage</li>
                                        </ul>
                                   </section>
                              </section>
                         </section>
                    </section>

                    <section className="col-md-1 col-sm-1"></section>
               </section>

               {/* <!-- 2nd project details --> */}

               <section className="row content" style={{ marginTop: "40px" }}>
                    <section className="col-md-1 col-sm-1 col-xs-12"></section>
                    <section
                         className="col-md-10 col-sm-10"
                         style={{
                              border: "5px solid whitesmoke",
                              marginBottom: "40px",
                              backgroundColor: "#deffe4",
                         }}
                    >
                         <h1>Workday Scheduler</h1>
                         {/* <!-- Deployed project link --> */}
                         <section className="link">
                              <a
                                   target="_blank"
                                   href="https://nirmalaabothu.github.io/work-day-scheduler-10.6.20/"
                              >
                                   Website
                              </a>
                              <br />
                              {/* <!-- GitHub Repo link --> */}
                              <a
                                   target="_blank"
                                   href="https://github.com/NirmalaAbothu/work-day-scheduler-10.6.20"
                              >
                                   GitHub-Repo
                              </a>
                         </section>

                         <section className="row">
                              <section className="col-md-12 col-sm-12 col-xs-12">
                                   <section className="row">
                                        <section className="col-md-8 col-sm-8 col-xs-12">
                                             <img
                                                  className="img-fluid"
                                                  src={workdayplanner1}
                                                  alt="Portfoliopic"
                                             />
                                        </section>
                                        {/* <!-- Description about project --> */}
                                        <section className="col-md-4 col-sm-4 projectdetails">
                                             <h4>Description</h4>
                                             Once user open the application,the
                                             time block's colors will be
                                             displayed as below: - if current
                                             time equals to time block time,then
                                             green color will be displayed. - if
                                             current time less than to time
                                             block time,then gray color will be
                                             displayed. - if current time
                                             greater than to time block
                                             time,then red color will be
                                             displayed. - after enter text in
                                             textarea and click save button ,the
                                             item will be saved in localstorage
                                             with corresponding time block. -
                                             after page refresh the event will
                                             be displayed
                                        </section>
                                   </section>

                                   <section className="row">
                                        <section className="col-md-8 col-sm-8 col-xs-12">
                                             <img
                                                  className="img-fluid"
                                                  src={workdayplanner2}
                                                  alt="Portfoliopic"
                                             />
                                        </section>
                                        {/* <!-- Technology used in project --> */}
                                        <section className="col-md-4 col-sm-4 projectdetails">
                                             <h4>Technologies</h4>
                                             <ul>
                                                  Technologies and skills i got
                                                  involved when i work on this
                                                  project
                                                  <li>HTML</li>
                                                  <li>CSS</li>
                                                  <li>Javascript</li>
                                                  <li>Bootstrap</li>
                                                  <li>LocalStorage</li>
                                             </ul>
                                        </section>
                                   </section>
                              </section>
                         </section>
                    </section>

                    <section className="col-md-1 col-sm-1"></section>
               </section>

               {/* <!-- 3rd project --> */}

               <section className="row content" style={{ marginTop: "40px" }}>
                    <section className="col-md-1 col-sm-1 col-xs-12"></section>
                    <section
                         className="col-md-10 col-sm-10"
                         style={{
                              border: "5px solid whitesmoke",
                              marginBottom: "40px",
                              backgroundColor: "#5bb1935e",
                         }}
                    >
                         <h1>Hike Locator</h1>
                         {/* <!-- Deployed project link --> */}
                         <section className="link">
                              <a
                                   target="_blank"
                                   href="https://jessica264365.github.io/Project-1/"
                              >
                                   Website
                              </a>
                              <br />
                              {/* <!-- GitHub Repo link --> */}
                              <a
                                   target="_blank"
                                   href="https://github.com/Jessica264365/Project-1/tree/main"
                              >
                                   GitHub-Repo
                              </a>
                         </section>

                         <section className="row">
                              <section className="col-md-12 col-sm-12 col-xs-12">
                                   <section className="row">
                                        <section className="col-md-8 col-sm-8 col-xs-12">
                                             <img
                                                  className="img-fluid"
                                                  src={hikelocator2}
                                                  alt="Portfoliopic"
                                             />
                                        </section>
                                        {/* <!-- Description about the project --> */}
                                        <section className="col-md-4 col-sm-4 projectdetails">
                                             <h4>Description</h4>
                                             When the user types a city name in
                                             the search bar an ajax call is made
                                             to the Google Geocoding API to get
                                             the latitude and longitude of the
                                             city. This is then used in the ajax
                                             call to the hiking project API. The
                                             results are displayed for the user
                                             along with some information about
                                             the hike such as brief summary and
                                             the length of the trail. The user
                                             has the option to add the hike to a
                                             list of favorites that is saved in
                                             local storage. When the favorites
                                             button is clicked the list of
                                             favorites is displayed to the user.
                                             If a favorite is accidentally added
                                             there is an option to delete it
                                             from the list. There are also
                                             buttons that show the users
                                             previous 3 searches in case they
                                             wanted to look at more hikes in
                                             those areas.
                                        </section>
                                   </section>

                                   <section className="row">
                                        <section className="col-md-8 col-sm-8 col-xs-12">
                                             <img
                                                  className="img-fluid"
                                                  src={hikelocator3}
                                                  alt="Portfoliopic"
                                             />
                                        </section>
                                        {/* <!-- Technology used in project --> */}
                                        <section className="col-md-4 col-sm-4 projectdetails">
                                             <h4>Technologies</h4>
                                             <ul>
                                                  Technologies and skills i got
                                                  involved when i work on this
                                                  project
                                                  <li>HTML</li>
                                                  <li>CSS</li>
                                                  <li>Javascript</li>
                                                  <li>Materialize</li>
                                                  <li>LocalStorage</li>
                                                  <li>HickingProject API</li>
                                                  <li>Google Geocoding API</li>
                                             </ul>
                                        </section>
                                   </section>
                              </section>
                         </section>
                    </section>

                    <section className="col-md-1 col-sm-1"></section>
               </section>
               {/* <!-- 4th project --> */}

               <section
                    className="row content"
                    style={{ marginTop: "40px", marginBottom: "50px" }}
               >
                    <section className="col-md-1 col-sm-1 col-xs-12"></section>
                    <section
                         className="col-md-10 col-sm-10"
                         style={{
                              border: "5px solid whitesmoke",
                              marginBottom: "90px",
                              backgroundColor: "#91f54d5c",
                         }}
                    >
                         <h1>Burger with MVC</h1>
                         {/* <!-- Heroku deployed project link --> */}
                         <section className="link">
                              <a
                                   target="_blank"
                                   href="https://murmuring-depths-53897.herokuapp.com/"
                              >
                                   Website
                              </a>
                              <br />
                              {/* <!-- GitHub Repo link --> */}
                              <a
                                   target="_blank"
                                   href="https://github.com/NirmalaAbothu/burger-12.8.20"
                              >
                                   GitHub-Repo
                              </a>
                         </section>

                         <section className="row">
                              <section className="col-md-12 col-sm-12 col-xs-12">
                                   <section className="row">
                                        <section className="col-md-8 col-sm-8 col-xs-12">
                                             <img
                                                  className="img-fluid"
                                                  src={burger1}
                                                  alt="burger"
                                             />
                                        </section>
                                        {/* <!-- Description about the project --> */}
                                        <section className="col-md-4 col-sm-4 projectdetails">
                                             <h4>Description</h4>
                                             Eat-Da-Burger! is a restaurant app
                                             that lets users input the names of
                                             burgers they'd like to eat.Whenever
                                             a user submits a burger's name, app
                                             will display the burger on the left
                                             side of the page -- waiting to be
                                             devoured. Each burger in the
                                             waiting area also has a `Devour
                                             it!` button. When the user clicks
                                             it, the burger will move to the
                                             right side of the page. This app
                                             will store every burger in a
                                             database, whether devoured or not.
                                        </section>
                                   </section>

                                   <section className="row">
                                        <section className="col-md-8 col-sm-8 col-xs-12">
                                             <img
                                                  className="img-fluid"
                                                  src={burger2}
                                                  alt="Portfoliopic"
                                             />
                                        </section>
                                        {/* <!-- Technology used in project --> */}
                                        <section className="col-md-4 col-sm-4 projectdetails">
                                             <h4>Technologies</h4>
                                             <ul>
                                                  Technologies and skills i got
                                                  involved when i work on this
                                                  project
                                                  <li>Express</li>
                                                  <li>CSS</li>
                                                  <li>Express Handlebars</li>
                                                  <li>Mysql</li>
                                                  <li>dotenv</li>
                                                  <li>Bootstrap Grid System</li>
                                             </ul>
                                        </section>
                                   </section>
                              </section>
                         </section>
                    </section>

                    <section className="col-md-1 col-sm-1"></section>
               </section>
          </div>
     );
}

export default Projects;
