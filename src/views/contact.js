import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - taxonus</title>
        <meta property="og:title" content="Contact - taxonus" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="contact-hero">
        <div className="heroContainer contact-hero1">
          <div className="contact-container1">
            <h1 className="contact-hero-heading heading1">
              Maximize Your Tax Refund
            </h1>
            <span className="contact-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Your Trusted Tax Experts</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="contact-btn-group">
              <button className="buttonFilled">Get Started Now</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container2">
        <form className="contact-form">
          <div className="contact-container3">
            <div className="contact-container4">
              <input
                type="text"
                required="true"
                placeholder="Name"
                className="contact-textinput input"
              />
              <input
                type="tel"
                required="true"
                placeholder="Tel"
                className="contact-textinput1 input"
              />
              <input
                type="email"
                required="true"
                placeholder="Email"
                className="contact-textinput2 input"
              />
            </div>
            <div className="contact-container5">
              <textarea
                placeholder="Message"
                className="textarea contact-textarea"
              ></textarea>
            </div>
          </div>
        </form>
        <div className="contact-container6">
          <button type="button" className="button">
            Button
          </button>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Contact
