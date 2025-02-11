import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - TaxObey</title>
        <meta
          name="description"
          content="Title: Taxobey: Maximize Tax Returns!\nMeta Description: Get expert tax solutions with Taxobey! From planning to resolution, optimize returns hassle-free. Contact now!"
        />
        <meta property="og:title" content="About - TaxObey" />
        <meta
          property="og:description"
          content="Title: Taxobey: Maximize Tax Returns!\nMeta Description: Get expert tax solutions with Taxobey! From planning to resolution, optimize returns hassle-free. Contact now!"
        />
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
      <div className="about-creds bannerContainer">
        <div className="about-container2">
          <div className="about-credentials">
            <span className="about-text">
              <span>Credentials of the Tax Principal</span>
              <br></br>
            </span>
            <div className="about-container3">
              <svg viewBox="0 0 877.7142857142857 1024" className="about-icon">
                <path d="M786.286 512l78.857 77.143c10.857 10.286 14.857 25.714 11.429 40-4 14.286-15.429 25.714-29.714 29.143l-107.429 27.429 30.286 106.286c4 14.286 0 29.714-10.857 40-10.286 10.857-25.714 14.857-40 10.857l-106.286-30.286-27.429 107.429c-3.429 14.286-14.857 25.714-29.143 29.714-3.429 0.571-7.429 1.143-10.857 1.143-10.857 0-21.714-4.571-29.143-12.571l-77.143-78.857-77.143 78.857c-10.286 10.857-25.714 14.857-40 11.429-14.857-4-25.714-15.429-29.143-29.714l-27.429-107.429-106.286 30.286c-14.286 4-29.714 0-40-10.857-10.857-10.286-14.857-25.714-10.857-40l30.286-106.286-107.429-27.429c-14.286-3.429-25.714-14.857-29.714-29.143-3.429-14.286 0.571-29.714 11.429-40l78.857-77.143-78.857-77.143c-10.857-10.286-14.857-25.714-11.429-40 4-14.286 15.429-25.714 29.714-29.143l107.429-27.429-30.286-106.286c-4-14.286 0-29.714 10.857-40 10.286-10.857 25.714-14.857 40-10.857l106.286 30.286 27.429-107.429c3.429-14.286 14.857-25.714 29.143-29.143 14.286-4 29.714 0 40 10.857l77.143 79.429 77.143-79.429c10.286-10.857 25.143-14.857 40-10.857 14.286 3.429 25.714 14.857 29.143 29.143l27.429 107.429 106.286-30.286c14.286-4 29.714 0 40 10.857 10.857 10.286 14.857 25.714 10.857 40l-30.286 106.286 107.429 27.429c14.286 3.429 25.714 14.857 29.714 29.143 3.429 14.286-0.571 29.714-11.429 40z"></path>
              </svg>
              <span className="about-text03">
                Authorised tax agent registered with Inland Revenue Department
                (IRD)
              </span>
            </div>
            <div className="about-container4">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon02"
              >
                <path d="M786.286 512l78.857 77.143c10.857 10.286 14.857 25.714 11.429 40-4 14.286-15.429 25.714-29.714 29.143l-107.429 27.429 30.286 106.286c4 14.286 0 29.714-10.857 40-10.286 10.857-25.714 14.857-40 10.857l-106.286-30.286-27.429 107.429c-3.429 14.286-14.857 25.714-29.143 29.714-3.429 0.571-7.429 1.143-10.857 1.143-10.857 0-21.714-4.571-29.143-12.571l-77.143-78.857-77.143 78.857c-10.286 10.857-25.714 14.857-40 11.429-14.857-4-25.714-15.429-29.143-29.714l-27.429-107.429-106.286 30.286c-14.286 4-29.714 0-40-10.857-10.857-10.286-14.857-25.714-10.857-40l30.286-106.286-107.429-27.429c-14.286-3.429-25.714-14.857-29.714-29.143-3.429-14.286 0.571-29.714 11.429-40l78.857-77.143-78.857-77.143c-10.857-10.286-14.857-25.714-11.429-40 4-14.286 15.429-25.714 29.714-29.143l107.429-27.429-30.286-106.286c-4-14.286 0-29.714 10.857-40 10.286-10.857 25.714-14.857 40-10.857l106.286 30.286 27.429-107.429c3.429-14.286 14.857-25.714 29.143-29.143 14.286-4 29.714 0 40 10.857l77.143 79.429 77.143-79.429c10.286-10.857 25.143-14.857 40-10.857 14.286 3.429 25.714 14.857 29.143 29.143l27.429 107.429 106.286-30.286c14.286-4 29.714 0 40 10.857 10.857 10.286 14.857 25.714 10.857 40l-30.286 106.286 107.429 27.429c14.286 3.429 25.714 14.857 29.714 29.143 3.429 14.286-0.571 29.714-11.429 40z"></path>
              </svg>
              <span className="about-text04">
                A Professional Accountant holding a MBA in Finance
              </span>
            </div>
            <div className="about-container5">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon04"
              >
                <path d="M786.286 512l78.857 77.143c10.857 10.286 14.857 25.714 11.429 40-4 14.286-15.429 25.714-29.714 29.143l-107.429 27.429 30.286 106.286c4 14.286 0 29.714-10.857 40-10.286 10.857-25.714 14.857-40 10.857l-106.286-30.286-27.429 107.429c-3.429 14.286-14.857 25.714-29.143 29.714-3.429 0.571-7.429 1.143-10.857 1.143-10.857 0-21.714-4.571-29.143-12.571l-77.143-78.857-77.143 78.857c-10.286 10.857-25.714 14.857-40 11.429-14.857-4-25.714-15.429-29.143-29.714l-27.429-107.429-106.286 30.286c-14.286 4-29.714 0-40-10.857-10.857-10.286-14.857-25.714-10.857-40l30.286-106.286-107.429-27.429c-14.286-3.429-25.714-14.857-29.714-29.143-3.429-14.286 0.571-29.714 11.429-40l78.857-77.143-78.857-77.143c-10.857-10.286-14.857-25.714-11.429-40 4-14.286 15.429-25.714 29.714-29.143l107.429-27.429-30.286-106.286c-4-14.286 0-29.714 10.857-40 10.286-10.857 25.714-14.857 40-10.857l106.286 30.286 27.429-107.429c3.429-14.286 14.857-25.714 29.143-29.143 14.286-4 29.714 0 40 10.857l77.143 79.429 77.143-79.429c10.286-10.857 25.143-14.857 40-10.857 14.286 3.429 25.714 14.857 29.143 29.143l27.429 107.429 106.286-30.286c14.286-4 29.714 0 40 10.857 10.857 10.286 14.857 25.714 10.857 40l-30.286 106.286 107.429 27.429c14.286 3.429 25.714 14.857 29.714 29.143 3.429 14.286-0.571 29.714-11.429 40z"></path>
              </svg>
              <span className="about-text05">
                <span>
                  A Certified Tax Advisor conferred by the Institute of
                  Chartered Accountants of Sri 
                </span>
                <span>Lanka.</span>
              </span>
            </div>
            <div className="about-container6">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon06"
              >
                <path d="M786.286 512l78.857 77.143c10.857 10.286 14.857 25.714 11.429 40-4 14.286-15.429 25.714-29.714 29.143l-107.429 27.429 30.286 106.286c4 14.286 0 29.714-10.857 40-10.286 10.857-25.714 14.857-40 10.857l-106.286-30.286-27.429 107.429c-3.429 14.286-14.857 25.714-29.143 29.714-3.429 0.571-7.429 1.143-10.857 1.143-10.857 0-21.714-4.571-29.143-12.571l-77.143-78.857-77.143 78.857c-10.286 10.857-25.714 14.857-40 11.429-14.857-4-25.714-15.429-29.143-29.714l-27.429-107.429-106.286 30.286c-14.286 4-29.714 0-40-10.857-10.857-10.286-14.857-25.714-10.857-40l30.286-106.286-107.429-27.429c-14.286-3.429-25.714-14.857-29.714-29.143-3.429-14.286 0.571-29.714 11.429-40l78.857-77.143-78.857-77.143c-10.857-10.286-14.857-25.714-11.429-40 4-14.286 15.429-25.714 29.714-29.143l107.429-27.429-30.286-106.286c-4-14.286 0-29.714 10.857-40 10.286-10.857 25.714-14.857 40-10.857l106.286 30.286 27.429-107.429c3.429-14.286 14.857-25.714 29.143-29.143 14.286-4 29.714 0 40 10.857l77.143 79.429 77.143-79.429c10.286-10.857 25.143-14.857 40-10.857 14.286 3.429 25.714 14.857 29.143 29.143l27.429 107.429 106.286-30.286c14.286-4 29.714 0 40 10.857 10.857 10.286 14.857 25.714 10.857 40l-30.286 106.286 107.429 27.429c14.286 3.429 25.714 14.857 29.714 29.143 3.429 14.286-0.571 29.714-11.429 40z"></path>
              </svg>
              <span className="about-text08">
                A Finalist of the Institute of Chartered Accountants of Sri
                Lanka
              </span>
            </div>
            <span className="about-text09">
              Phenomenally analytical &amp; business intelligent Senior
              Financial/ Accounting Management Professional, with experience in
              multi-national companies comprising IT/ Testing Lab/ Retail/
              Engineering/ Office Automation industries, &amp; also performing
              auditing in Manufacturing/ Banking/ Trading/ Hospitality/ Etc.,
              acquiring 25+ years’ of expertise in formulating/ executing
              fiscal/ business strategies &amp; tactics to attain corporate
              objectives, playing an integral role in the company’s business
              direction to sustainable profitability/ growth, and steering
              financial operations effectively/ efficiently to meet &amp;
              surpass business objectives via continuously collaborating with
              other departments.
            </span>
          </div>
          <div className="about-container7">
            <svg viewBox="0 0 1024 1024" className="about-icon08">
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default About
