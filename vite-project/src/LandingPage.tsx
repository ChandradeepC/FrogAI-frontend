import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import frogaiLogo from './assets/frogai.jpg';

const LandingPage: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="header-container">
                <div className="color-bar"></div>
                <div className="brand">
                    <img
                        src={frogaiLogo}
                        alt="FrogAI Logo"
                        className="frogai-logo"
                    />
                    <div className="logo-text">
                        <h1 className="header">FrogAI</h1>
                        <p className="tagline">Monitor recommendations</p>
                    </div>
                </div>
            </div>
            <div className="LandingPage">
                <h2>Trust FrogAI to find the perfect monitor for you.</h2>
                <ul>
                    <li>
                        Trained on thousands of conversations in Monitor
                        Enthusiasts
                    </li>
                    <li>
                        Monitors selected based on objective measurements from
                        multiple professional reviewers, enthusiast feedback,
                        frog pursuits and UFO tests
                    </li>
                    <li>Aware of the flaws in every recommended monitor</li>
                    <li>No Samsung or Dough(Eve) bullshit</li>
                    <li>Attention to detail</li>
                </ul>
                <Link to="/recommender">
                    <button className="button">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
