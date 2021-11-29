import React from 'react'
import './about.css'
import GitHub from '../../assets/github_logo.png';
import LinkedIn from '../../assets/linkedin_logo.png'
import Angel from "../../assets/angel.png";

const About = () => {
    return (
        <div className="about-container">
            <h1>Meet the Creators!</h1>
            <div className="team-container">
                <div className="team-member">
                    <h2>Sydney Parsons</h2>
                    <div className="team-bio">
                        <p>
                            BIO GOES HERE
                        </p>
                        <div className="team-links">
                            <a href="https://github.com/sparsons808">
                                <img src={GitHub} alt="GitHub Link" />
                            </a>
                            <a href="https://www.linkedin.com/in/sydney-parsons-18929458/">
                                <img src={LinkedIn} alt="LinkedIn Link" />
                            </a>
                            <a href="https://angel.co/">
                                <img src={Angel} alt="Angel Link" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <h2>Tyler Koh</h2>
                    <div className="team-bio">
                        <p>
                            BIO GOES HERE
                        </p>
                        <div className="team-links">
                            <a href="https://github.com/tkoh13">
                                <img src={GitHub} alt="GitHub Link" />
                            </a>
                            <a href="https://linkedin.com/">
                                <img src={LinkedIn} alt="LinkedIn Link" />
                            </a>
                            <a href="https://angel.co/">
                                <img src={Angel} alt="Angel Link" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <h2>Daniel Bradley</h2>
                    <div className="team-bio">
                        <p>
                            BIO GOES HERE
                        </p>
                        <div className="team-links">
                            <a href="https://github.com/87danielbradley">
                                <img src={GitHub} alt="GitHub Link" />
                            </a>
                            <a href="https://www.linkedin.com/in/87danielbradley/">
                                <img src={LinkedIn} alt="LinkedIn Link" />
                            </a>
                            <a href="https://angel.co/">
                                <img src={Angel} alt="Angel Link" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <h2>Michelle Addai</h2>
                    <div className="team-bio">
                        <p>
                            Michelle Addai has a background in Chemical Engineering and Fire Protection Engineering. As a Software Engineer she has experience building fullstack apps with React on the front end, Ruby on Rails or Express on the backend, and for databases Postgresql or MongoDB. 
                            Outside coding she enjoys playing the piano and staying fit.
                        </p>
                        <div className="team-links">
                            <a href="https://github.com/mickeysaddai">
                                <img src={GitHub} alt="GitHub Link" />
                            </a>
                            <a href="https://www.linkedin.com/in/michelle-addai-5626a6106/">
                                <img src={LinkedIn} alt="LinkedIn Link" />
                            </a>
                            <a href="https://angel.co/u/michelle-addai">
                                <img src={Angel} alt="Angel Link" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
