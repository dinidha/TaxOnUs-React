import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard1 from '../components/feature-card1'
import Question1 from '../components/question1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>taxonus</title>
        <meta property="og:title" content="taxonus" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              Minimize Your Tax Liability
            </h1>
            <div className="home-btn-group">
              <Link
                to="/tax-services"
                className="home-hero-button1 buttonFilled"
              >
                Get Started Now
              </Link>
              <Link to="/about" className="home-hero-button2 buttonFlat">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container2">
              <h2 className="home-features-heading heading2">
                Our Tax Services
              </h2>
            </div>
            <div className="home-container3">
              <FeatureCard1
                heading="Tax Clearance"
                subHeading="Support and assistance for your tax audit and matters."
              ></FeatureCard1>
              <FeatureCard1
                heading="Confidentiality "
                subHeading="Guarantees confidentiality of data and Tax information."
              ></FeatureCard1>
              <FeatureCard1
                heading="Responsibility"
                subHeading="Onus is on us in maximizing your tax savings."
              ></FeatureCard1>
              <FeatureCard1
                heading="Commitment"
                subHeading="for being a partner in fulfilling your tax obligation."
                rootClassName="feature-card1-root-class-name"
              ></FeatureCard1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <div className="home-container4">
            <h1 className="home-banner-heading">TYPES OF TAXES</h1>
            <div className="home-container5">
              <ul className="list">
                <li className="list-item">
                  <span className="home-tick">✔</span>
                  <span>Pay As You Earn (PAYE)</span>
                </li>
                <li className="list-item">
                  <span className="home-tick01">✔</span>
                  <span>Value Added Tax (VAT)</span>
                </li>
                <li className="list-item">
                  <span className="home-tick02">✔</span>
                  <span>Simplified Value Added Tax (SVAT) Scheme</span>
                </li>
                <li className="list-item">
                  <span className="home-tick03">✔</span>
                  <span>
                    <span>Social Security Contribution Levy (SSCL)</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-tick04">✔</span>
                  <span>
                    <span>Economic Service Charge (ESC)</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-tick05">✔</span>
                  <span>Construction Industry Guarantee Fund Levy (CIGF)</span>
                </li>
              </ul>
              <ul className="list">
                <li className="list-item">
                  <span className="home-tick06">✔</span>
                  <span>Capital Gain Tax (CGT)</span>
                </li>
                <li className="list-item">
                  <span className="home-tick07">✔</span>
                  <span>Stamp Duty (SD)</span>
                </li>
                <li className="list-item">
                  <span className="home-tick08">✔</span>
                  <span>Betting and Gaming Levy (B&amp;GL)</span>
                </li>
                <li className="list-item">
                  <span className="home-tick09">✔</span>
                  <span>
                    <span>Share Transaction Levy (STL)</span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="home-tick10">✔</span>
                  <span>Tourist VAT Refund Scheme (TVRS)</span>
                </li>
                <li className="list-item">
                  <span className="home-tick11">✔</span>
                  <span>Nation Building Tax (NBT)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container6">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text21 heading2">Common questions</h2>
              <span className="home-text22 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container7">
              <Question1
                answer="We offer a wide range of tax services including tax preparation, tax planning, and IRS problem resolution."
                question="What tax services do you offer?"
              ></Question1>
              <Question1
                answer="You can easily schedule a consultation by filling out the contact form on our website or by giving us a call."
                question="How can I schedule a consultation with your tax experts?"
              ></Question1>
              <Question1
                answer="Yes, we provide assistance with filing back taxes and can help you navigate through the process efficiently."
                question="Do you offer assistance with filing back taxes?"
              ></Question1>
              <Question1
                answer="Our team of experienced tax professionals, personalized approach to each client, and commitment to delivering exceptional service set us apart from others."
                question="What sets your tax company apart from others?"
              ></Question1>
              <Question1
                answer="We take client confidentiality and data security very seriously. Our systems are encrypted and we have strict protocols in place to safeguard all client information."
                question="How do you ensure client confidentiality and data security?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
