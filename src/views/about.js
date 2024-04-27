import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - taxonus</title>
        <meta property="og:title" content="About - taxonus" />
      </Helmet>
      <Header></Header>
      <div className="about-hero">
        <div className="heroContainer about-hero1">
          <div className="about-container1">
            <h1 className="about-hero-heading heading1">
              Get In Touch With Us TODAY!
            </h1>
          </div>
        </div>
      </div>
      <div className="about-banner bannerContainer">
        <div className="about-container2">
          <h1 className="about-banner-heading">TYPES OF TAXES</h1>
          <div className="about-container3">
            <ul className="list">
              <li className="list-item">
                <span className="about-tick">✔</span>
                <span>Income tax (IT)</span>
              </li>
              <li className="list-item">
                <span className="about-tick01">✔</span>
                <span>Pay As You Earn (PAYE)</span>
              </li>
              <li className="list-item">
                <span className="about-tick02">✔</span>
                <span>Value Added Tax (VAT)</span>
              </li>
              <li className="list-item">
                <span className="about-tick03">✔</span>
                <span>Simplified Value Added Tax (SVAT) Scheme</span>
              </li>
              <li className="list-item">
                <span className="about-tick04">✔</span>
                <span>
                  <span>Social Security Contribution Levy (SSCL)</span>
                  <br></br>
                </span>
              </li>
              <li className="list-item">
                <span className="about-tick05">✔</span>
                <span>Construction Industry Guarantee Fund Levy (CIGF)</span>
              </li>
            </ul>
            <ul className="list">
              <li className="list-item">
                <span className="about-tick06">✔</span>
                <span>Capital Gain Tax (CGT)</span>
              </li>
              <li className="list-item">
                <span className="about-tick07">✔</span>
                <span>Stamp Duty (SD)</span>
              </li>
              <li className="list-item">
                <span className="about-tick08">✔</span>
                <span>Betting and Gaming Levy (B&amp;GL)</span>
              </li>
              <li className="list-item">
                <span className="about-tick09">✔</span>
                <span>
                  <span>Economic Service Charge (ESC)</span>
                  <br></br>
                </span>
              </li>
              <li className="list-item">
                <span className="about-tick10">✔</span>
                <span>
                  <span>Share Transaction Levy (STL)</span>
                  <br></br>
                </span>
              </li>
              <li className="list-item">
                <span className="about-tick11">✔</span>
                <span>Tourist VAT Refund Scheme (TVRS)</span>
              </li>
              <li className="list-item">
                <span className="about-tick12">✔</span>
                <span>Nation Building Tax (NBT)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default About
