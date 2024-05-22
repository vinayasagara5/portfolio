import React, { useEffect, useRef, useState } from 'react';
import './PortPolfolio.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const PortPolfolio = () => {
    const [activeTab, setActiveTab] = useState('about');
    const mainContentRef = useRef(null);

    const handleScroll = () => {
        const mainContent = mainContentRef.current;
        if (!mainContent) return;
        const sections = mainContent.querySelectorAll('section');
        const scrollPosition = mainContent.scrollTop;
        const scrollMarginTop = 6 * 16; // 6rem converted to pixels (assuming 1rem = 16px)

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollPosition - scrollMarginTop;
            const sectionHeight = rect.height;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setActiveTab(section.id);
            }
        });
    };


    useEffect(() => {
        const mainContent = mainContentRef.current;
        console.log("mainContent", mainContent)
        if (!mainContent) return;

        mainContent.addEventListener('scroll', handleScroll);
        return () => {
            mainContent.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id, event) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <div className="maxScreen">
                <div className='content'>
                    <header className={'headerContent'}>
                        <div>
                            <h1 className={'userName'}>
                                <a href="/">Sridhar Vedunoori</a>
                            </h1>
                            <h2 className={'designation'}>
                                Senior Frontend Engineer
                            </h2>
                            <p className={'objective'}>
                                I build pixel-perfect, engaging, and accessible digital experiences.
                            </p>
                            <nav className={'navbar'}>
                                <ul className={'selectTab'} >
                                    <li className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}>
                                        <a className='tabGroup' onClick={(e) => scrollToSection('about', e)} href="#about">
                                            <span className={'navIndicator'}>
                                            </span>
                                            <span>
                                                About
                                            </span>
                                        </a>
                                    </li>
                                    <li className={`nav-item ${activeTab === 'experience' ? 'active' : ''}`}>
                                        <a className={'tabGroup'} onClick={(e) => scrollToSection('experience', e)} href="#experience">
                                            <span className={'navIndicator'}>
                                            </span>
                                            <span>
                                                Experience
                                            </span>
                                        </a>
                                    </li>
                                    <li className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}>
                                        <a className={'tabGroup'} onClick={(e) => scrollToSection('projects', e)} href="#projects">
                                            <span className={'navIndicator'}>
                                            </span>
                                            <span>
                                                Projects
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <ul className='bottom_icons'>
                            <li className='icons_li'>
                                <span>
                                    <FontAwesomeIcon icon={faGithub} className='icon' />

                                </span>
                            </li>
                            <li className='icons_li'>
                                <FontAwesomeIcon icon={faLinkedin} className='icon' />
                            </li>
                            <li className='icons_li'>
                                <span>
                                <FontAwesomeIcon icon={faInstagram} className='icon' />
                                
                                </span>
                            </li>
                            <li className='icons_li'>
                                <span>
                                <FontAwesomeIcon icon={faTwitter}  className='icon' />
                                
                                </span>
                            </li>

                        </ul>
                    </header>
                    <main className={'mainContent'} ref={mainContentRef}>
                        <section id="about" className={'section'}>
                            <div className='heading-xs'>ABOUT</div>
                            <div>
                                <p className={'aboutContent'}>
                                    Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                                </p>
                                <p className={'aboutContent'}>
                                    My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                                </p>
                                <p className={'aboutContent'}> When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
                                </p>
                            </div>
                        </section>
                        <section id="experience" className={'experienceSection section'}>
                        <div className='heading-xs'>Experience</div>
                            <div>
                                <ol>
                                    <li className={'experienceLi'}>
                                        <div className='exp-card'>
                                            <Row>
                                                <Col xs={3} md={3}>
                                                    <header className='exp-header'>
                                                        2024 — Present
                                                    </header>
                                                </Col>
                                                <Col xs={9} md={9}>
                                                    <h3 className='disignation'>
                                                        <a href='https://www.wego.co.in/' target="_blank">
                                                            <span>
                                                                Senior Frontend Engineer, Accessibility ·
                                                            </span>
                                                        </a>
                                                    </h3>
                                                    <p className='about-postion'>
                                                        Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
                                                    </p>
                                                    <ul className={'techGroup'}>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                JavaScript
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                TypeScript
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                React
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                StoryBook
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </Col>


                                            </Row>
                                        </div>
                                    </li>
                                    <li className={'experienceLi'}>
                                        <div className='exp-card'>
                                            <Row>
                                                <Col xs={3} md={3}>
                                                    <header className='exp-header'>
                                                        2022 — 2024
                                                    </header>
                                                </Col>
                                                <Col xs={9} md={9}>
                                                    <h3 className='disignation'>
                                                        <a href='https://www.wego.co.in/' target="_blank">
                                                            <span>
                                                                Senior Frontend Engineer, Accessibility ·
                                                            </span>
                                                        </a>
                                                    </h3>
                                                    <p className='about-postion'>
                                                        Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
                                                    </p>
                                                    <ul className={'techGroup'}>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                JavaScript
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                TypeScript
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                React
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                StoryBook
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </Col>


                                            </Row>
                                        </div>
                                    </li>
                                    <li className={'experienceLi'}>
                                        <div className='exp-card'>
                                            <Row>
                                                <Col xs={3} md={3}>
                                                    <header className='exp-header'>
                                                        2020 — 2022
                                                    </header>
                                                </Col>
                                                <Col xs={9} md={9}>
                                                    <h3 className='disignation'>
                                                        <a href='https://www.wego.co.in/' target="_blank">
                                                            <span>
                                                                Senior Frontend Engineer, Accessibility ·
                                                            </span>
                                                        </a>
                                                    </h3>
                                                    <p className='about-postion'>
                                                        Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
                                                    </p>
                                                    <ul className={'techGroup'}>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                JavaScript
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                TypeScript
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                React
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                StoryBook
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </Col>


                                            </Row>
                                        </div>
                                    </li>
                                    <li className={'experienceLi'}>
                                        <div className='exp-card'>
                                            <Row>
                                                <Col xs={3} md={3}>
                                                    <header className='exp-header'>
                                                        2018 — 2020
                                                    </header>
                                                </Col>
                                                <Col xs={9} md={9}>
                                                    <h3 className='disignation'>
                                                        <a href='https://www.wego.co.in/' target="_blank">
                                                            <span>
                                                                Senior Frontend Engineer, Accessibility ·
                                                            </span>
                                                        </a>
                                                    </h3>
                                                    <p className='about-postion'>
                                                        Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
                                                    </p>
                                                    <ul className={'techGroup'}>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                JavaScript
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                TypeScript
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                React
                                                            </div>
                                                        </li>
                                                        <li className={'techLi'}>
                                                            <div className={'tech'}>
                                                                StoryBook
                                                            </div>
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



                        <section id="projects" className={'section'}>
                        <div className='heading-xs'>projects</div>
                            <p className={'aboutContent'}>
                                Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                            </p>
                            <p className={'aboutContent'}>
                                My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                            </p>
                            <p className={'aboutContent'}> When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
                            </p>
                            <p className={'aboutContent'}>
                                Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                            </p>
                            <p className={'aboutContent'}>
                                My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                            </p>
                            <p className={'aboutContent'}> When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
                            </p>
                            <p className={'aboutContent'}>
                                Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                            </p>
                            <p className={'aboutContent'}>
                                My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                            </p>

                            <p>Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>
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
