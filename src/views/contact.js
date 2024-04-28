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
          <div className="contact-container01">
            <h1 className="contact-hero-heading heading1">
              Get In Touch With Us TODAY!
            </h1>
          </div>
        </div>
      </div>
      <div className="contact-container02">
        <form className="contact-form">
          <div className="contact-container03">
            <div className="contact-container04">
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
            <div className="contact-container05">
              <textarea
                placeholder="Message"
                className="textarea contact-textarea"
              ></textarea>
            </div>
          </div>
        </form>
        <div className="contact-container06">
          <button type="button" className="button">
            Button
          </button>
        </div>
        <div className="contact-container07">
          <div className="contact-container08">
            <span className="contact-email">Email: </span>
            <a
              href="mailto:info@taxobey.lk?subject=Welcome to TaxObey"
              className="contact-text"
            >
              info@taxobey.lk
            </a>
          </div>
          <div className="contact-container09">
            <span className="contact-tel">Tel: </span>
            <span className="contact-text1">+94 </span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Contact
