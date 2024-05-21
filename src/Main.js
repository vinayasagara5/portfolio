import React, { useState, useEffect } from 'react';
import './App.css';

const Main = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((section) => {
        console.log('===========>', section.offsetTop,scrollPosition,section.offsetTop,section.offsetHeight)
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setActiveTab(section.id);
        console.log("aaa",section.id)
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    console.log("-=====", id,)
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  console.log("activeTab",activeTab)

  return (
    <div className="containesr">
      <nav className="nav">
        <ul className="nav-list">
          <li className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}>
            <a href="#about" onClick={() => scrollToSection('about')}>about</a>
          </li>
          <li className={`nav-item ${activeTab === 'experience' ? 'active' : ''}`}>
            <a href="#experience" onClick={() => scrollToSection('experience')}>experience</a>
          </li>
          <li className={`nav-item ${activeTab === 'project' ? 'active' : ''}`}>
            <a href="#project" onClick={() => scrollToSection('project')}>project</a>
          </li>
        </ul>
      </nav>

      {/* <section id="about" className="section" style={{ backgroundColor: 'red' }}>
        Section 1
      </section>
      <section id="experience" className="section" style={{ backgroundColor: 'blue' }}>
      experience
      </section>
      <section id="project" className="section" style={{ backgroundColor: 'green' }}>
      project
      </section> */}

      {/* <main className="mainContent"> */}
                        <section id="about" className="section">
                            {/* <div>
                                <p className="aboutContent">
                                    Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                                </p>
                                <p className="aboutContent">
                                    My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                                </p>
                                <p className="aboutContent"> When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
                                </p>
                            </div> */}
                        </section>
                        <section id="experience" className="section">
                            {/* <div>
                                <ol>
                                    <li className="experienceLi">
                                        <div>
                                            <header>2024 — Present</header>
                                            <h3>
                                                <a href="#">
                                                    <span>Senior Frontend Engineer, Accessibility ·</span>
                                                </a>
                                            </h3>
                                            <p>
                                                Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
                                            </p>
                                            <ul className="techGroup">
                                                <li className="techLi">
                                                    <div className="tech">JavaScript</div>
                                                </li>
                                                <li className="techLi">
                                                    <div className="tech">TypeScript</div>
                                                </li>
                                                <li className="techLi">
                                                    <div className="tech">React</div>
                                                </li>
                                                <li className="techLi">
                                                    <div className="tech">StoryBook</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </ol>
                            </div> */}
                        </section>
                        <section id="project" className="section">
                            {/* <div>
                                <p className="aboutContent">
                                    Project description and details.
                                </p>

                            </div> */}
                        </section>
                    {/* </main> */}
    </div>
  );
};

export default Main;
