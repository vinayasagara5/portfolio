import React, { useEffect, useRef, useState } from "react";
import "./PortPolfolio.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Academia from "./Assets/Academia.png";
import Youtubeclone from "./Assets/Youtube-clone.png";
import Chatapp from "./Assets/Chatapp.png";

const PortPolfolio = () => {
  const [activeTab, setActiveTab] = useState("about");
  const mainContentRef = useRef(null);

  const handleScroll = () => {
    const mainContent = mainContentRef.current;
    if (!mainContent) return;
    const sections = mainContent.querySelectorAll("section");
    const scrollPosition = mainContent.scrollTop;
    const scrollMarginTop = 6 * 16; // 6rem converted to pixels (assuming 1rem = 16px)

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollPosition - scrollMarginTop;
      const sectionHeight = rect.height;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveTab(section.id);
      }
    });
  };

  useEffect(() => {
    const mainContent = mainContentRef.current;
    console.log("mainContent", mainContent);
    if (!mainContent) return;

    mainContent.addEventListener("scroll", handleScroll);
    return () => {
      mainContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="maxScreen">
        <div className="content">
          <header className={"headerContent"}>
            <div>
              <h1 className={"userName"}>
                <a href="/">Vinaya Sagara Reddy</a>
              </h1>
              <h2 className={"designation"}>Associate Staff Engineer</h2>
              <p className={"objective"}>
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
              <nav className={"navbar"}>
                <ul className={"selectTab"}>
                  <li
                    className={`nav-item ${
                      activeTab === "about" ? "active" : ""
                    }`}
                  >
                    <a
                      className="tabGroup"
                      onClick={(e) => scrollToSection("about", e)}
                      href="#about"
                    >
                      <span className={"navIndicator"}></span>
                      <span>About</span>
                    </a>
                  </li>
                  <li
                    className={`nav-item ${
                      activeTab === "experience" ? "active" : ""
                    }`}
                  >
                    <a
                      className={"tabGroup"}
                      onClick={(e) => scrollToSection("experience", e)}
                      href="#experience"
                    >
                      <span className={"navIndicator"}></span>
                      <span>Experience</span>
                    </a>
                  </li>
                  <li
                    className={`nav-item ${
                      activeTab === "projects" ? "active" : ""
                    }`}
                  >
                    <a
                      className={"tabGroup"}
                      onClick={(e) => scrollToSection("projects", e)}
                      href="#projects"
                    >
                      <span className={"navIndicator"}></span>
                      <span>Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="bottom_icons">
              <li className="icons_li">
                <span>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </span>
              </li>
              <li className="icons_li">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </li>
              <li className="icons_li">
                <span>
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </span>
              </li>
              <li className="icons_li">
                <span>
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </span>
              </li>
            </ul>
          </header>
          <main className={"mainContent"} ref={mainContentRef}>
            <section id="about" className={"section"}>
              <div className="heading-xs">ABOUT</div>
              <div>
                <p className={"aboutContent"}>
                  Hi there! I'm a passionate web developer with over 5.5 years
                  of hands-on experience in crafting innovative and reusable web
                  components. My expertise lies in building scalable and dynamic
                  front-end solutions tailored to meet diverse project
                  requirements.
                </p>
                <p className={"aboutContent"}>
                  My extensive background in web development, coupled with a
                  deep proficiency in HTML, CSS, Material UI, TypeScript, and
                  ReactJS, makes me a strong candidate for any challenging
                  project. I excel in implementing robust state management
                  systems using Redux, optimizing front-end performance, and
                  seamlessly integrating backend APIs.
                </p>
                <p className={"aboutContent"}>
                  When I'm not coding, I enjoy exploring the latest trends in
                  web development, experimenting with new technologies, and
                  engaging in tech meetups. I'm a firm believer in continuous
                  learning and always strive to stay ahead in the ever-evolving
                  tech landscape.
                </p>
              </div>
            </section>
            <section id="experience" className={"experienceSection section"}>
              <div className="heading-xs">Experience</div>
              <div>
                <ol>
                  <li className={"experienceLi"}>
                    <div className="exp-card">
                      <Row>
                        <Col xs={3} md={3}>
                          <header className="exp-header">
                            May 2023 — Present
                          </header>
                        </Col>
                        <Col xs={9} md={9}>
                          <h3 className="disignation">
                            <a href="https://www.wego.co.in/" target="_blank">
                              <span>Associate Staff Engineer @ Nagarro</span>
                            </a>
                          </h3>
                          <p className="about-postion">
                            Implemented a scalable frontend stack using React
                            from scratch.Created reusable components tailored to
                            each project's needs, making development more
                            efficient and adaptable.Reviewed design requirements
                            with stakeholders and come to conclusion on the
                            final design requirements.Conducted sprint planning,
                            created stories from requirements, and documented
                            them.
                          </p>
                          <ul className={"techGroup"}>
                            <li className={"techLi"}>
                              <div className={"tech"}>JavaScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>React</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Next Js</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Node Js</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Jira</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Kendo React</div>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </li>

                  <li className={"experienceLi"}>
                    <div className="exp-card">
                      <Row>
                        <Col xs={3} md={3}>
                          <header className="exp-header">
                            May 2022 — May 2023
                          </header>
                        </Col>
                        <Col xs={9} md={9}>
                          <h3 className="disignation">
                            <a href="https://www.wego.co.in/" target="_blank">
                              <span>SDE-II @ Get My Parking·</span>
                            </a>
                          </h3>
                          <p className="about-postion">
                            Implemented state management using Redux and
                            revamped existing code with new UI using Material
                            UI.Debugged existing issues, optimized assets, and
                            components to reduce build size.Developed and
                            Deployed email templates and invoices using HTML,
                            CSS, ThemeLeaf, Handlebar.js.Deployed templates in
                            Jenkins, conducted testing, and facilitated
                            white-labeling for various clients.
                          </p>
                          <ul className={"techGroup"}>
                            <li className={"techLi"}>
                              <div className={"tech"}>JavaScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>TypeScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>React</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>StoryBook</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>ThemeLeaf</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Handlebar.js</div>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </li>
                  <li className={"experienceLi"}>
                    <div className="exp-card">
                      <Row>
                        <Col xs={3} md={3}>
                          <header className="exp-header">
                            Oct 2018 — Mar 2022
                          </header>
                        </Col>
                        <Col xs={9} md={9}>
                          <h3 className="disignation">
                            <a href="https://www.wego.co.in/" target="_blank">
                              <span>Engineer @ L&T Technology Services</span>
                            </a>
                          </h3>
                          <p className="about-postion">
                            Developed reusable components using React and
                            Material UI, and improved performance using various
                            optimization techniques such as lazy
                            loading.Integrated backend APIs of web application
                            using fetch and axios.
                          </p>
                          <ul className={"techGroup"}>
                            <li className={"techLi"}>
                              <div className={"tech"}>JavaScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>TypeScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>React</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Material UI</div>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            {/* <Row>
                            <a href='/resume.pdf'>
                                <span>
                                    View Full Resume
                                </span>
                            </a>
                        </Row> */}

            <section id="projects" className={"section"}>
              <div className="heading-xs">projects</div>
              <div>
                <ol>
                  <li className={"experienceLi"}>
                    <div className="exp-card">
                      <Row>
                        <Col xs={3} md={3}>
                          {/* <header className="exp-header">2023 — Present</header> */}
                          <img className="img-academia" src={Academia} alt="" />
                        </Col>
                        <Col xs={9} md={9}>
                          <h3 className="disignation">
                            <a href="https://www.wego.co.in/" target="_blank">
                              <span>Academia</span>
                            </a>
                          </h3>
                          <p className="about-postion">
                            In this project, I developed a fully responsive
                            University website using React JS, showcasing my
                            proficiency in modern web development techniques.
                            The website is designed to provide an engaging and
                            user-friendly experience across all devices,
                            highlighting key features such as smooth scrolling,
                            interactive sliders, and a functional contact form.
                          </p>
                          <ul className={"techGroup"}>
                            <li className={"techLi"}>
                              <div className={"tech"}>JavaScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>React</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Next Js</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Node Js</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Jira</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Kendo React</div>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </li>

                  <li className={"experienceLi"}>
                    <div className="exp-card">
                      <Row>
                        <Col xs={3} md={3}>
                          <img
                            className="img-academia"
                            src={Youtubeclone}
                            alt=""
                          />
                        </Col>
                        <Col xs={9} md={9}>
                          <h3 className="disignation">
                            <a href="https://www.wego.co.in/" target="_blank">
                              <span>YouTube Clone</span>
                            </a>
                          </h3>
                          <p className="about-postion">
                            In this project, I developed a YouTube Clone Web App
                            using React JS, demonstrating my ability to
                            integrate third-party APIs and create a dynamic,
                            user-centric web application. This project leverages
                            the YouTube Data API to fetch and display video
                            lists and real-time statistics, replicating the core
                            functionalities of the popular video-sharing
                            platform.
                          </p>
                          <ul className={"techGroup"}>
                            <li className={"techLi"}>
                              <div className={"tech"}>JavaScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>TypeScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>React</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>StoryBook</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>ThemeLeaf</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Handlebar.js</div>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </li>
                  <li className={"experienceLi"}>
                    <div className="exp-card">
                      <Row>
                        <Col xs={3} md={3}>
                          <img className="img-academia" src={Chatapp} alt="" />
                        </Col>
                        <Col xs={9} md={9}>
                          <h3 className="disignation">
                            <a href="https://www.wego.co.in/" target="_blank">
                              <span>React Chat-App</span>
                            </a>
                          </h3>
                          <p className="about-postion">
                            In this project, I developed a real-time chat
                            application using React and Firebase, showcasing my
                            ability to create interactive, real-time web
                            applications with robust backend integration. This
                            chat app provides a seamless communication platform
                            with real-time message updates, user authentication,
                            and a responsive design.
                          </p>
                          <ul className={"techGroup"}>
                            <li className={"techLi"}>
                              <div className={"tech"}>JavaScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>TypeScript</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>React</div>
                            </li>
                            <li className={"techLi"}>
                              <div className={"tech"}>Material UI</div>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* <section id="writing" className={'aboutSection'}>

                            <p className={'aboutContent'}>
                                Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                            </p>
                            <p className={'aboutContent'}>
                                My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                            </p>

                        </section> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PortPolfolio;
