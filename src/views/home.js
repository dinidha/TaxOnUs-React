import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard1 from '../components/feature-card1'
import Question1 from '../components/question1'
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
          <div className="home-container01">
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
            <div className="home-container02">
              <h2 className="home-features-heading heading2">
                Our Tax Services
              </h2>
            </div>
            <div className="home-container03">
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
          <div className="home-container04">
            <h1 className="home-banner-heading">TYPES OF TAXES</h1>
            <div className="home-container05">
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
            <div className="home-container06">
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
            <div className="home-container07">
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
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container08">
            <span className="TaxOnUs">TAXONUS</span>
            <nav className="home-nav">
              <span className="bodySmall">Services</span>
              <span className="home-nav22 bodySmall">About Us</span>
              <span className="home-nav32 bodySmall">Resources</span>
              <span className="home-nav42 bodySmall">Contact Us</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container09">
            <span className="bodySmall home-text25">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon2 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon4 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
