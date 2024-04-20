import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './tax-services.css'

const TaxServices = (props) => {
  return (
    <div className="tax-services-container">
      <Helmet>
        <title>Tax-Services - taxonus</title>
        <meta property="og:title" content="Tax-Services - taxonus" />
      </Helmet>
      <div className="tax-services-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer tax-services-navbar-interactive"
        >
          <Link to="/" className="tax-services-logo TaxOnUs">
            Taxonus
          </Link>
          <div data-thq="thq-navbar-nav" className="tax-services-desktop-menu">
            <nav className="tax-services-links">
              <Link to="/" className="tax-services-nav12 bodySmall">
                Home
              </Link>
              <Link to="/about" className="tax-services-nav22 bodySmall">
                About Us
              </Link>
              <Link to="/tax-services" className="tax-services-nav32">
                Tax Services
              </Link>
              <Link
                to="/accounting-services"
                className="tax-services-nav42 bodySmall"
              >
                Accounting Services
              </Link>
              <Link to="/contact" className="tax-services-nav52 bodySmall">
                Contact Us
              </Link>
            </nav>
            <div className="tax-services-buttons">
              <button className="tax-services-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="tax-services-burger-menu">
            <svg
              viewBox="0 0 1024 1024"
              className="tax-services-icon socialIcons"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="tax-services-mobile-menu1 mobileMenu"
          >
            <div className="tax-services-nav">
              <div className="tax-services-top">
                <span className="TaxOnUs">TAXPROS</span>
                <div
                  data-thq="thq-close-menu"
                  className="tax-services-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="tax-services-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="tax-services-links1">
                <span className="tax-services-nav121 bodySmall">Services</span>
                <span className="tax-services-nav221 bodySmall">About Us</span>
                <span className="tax-services-nav321 bodySmall">Resources</span>
                <span className="tax-services-nav421 bodySmall">
                  Contact Us
                </span>
              </nav>
              <div className="tax-services-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="tax-services-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="tax-services-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="tax-services-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="tax-services-hero">
        <div className="heroContainer tax-services-hero1">
          <div className="tax-services-container01">
            <h1 className="tax-services-hero-heading heading1">
              Tailor made packages for your needs
            </h1>
          </div>
        </div>
      </div>
      <div className="tax-services-pricing">
        <div className="tax-services-pricing1">
          <div className="pricingContainer">
            <div className="tax-services-container02">
              <div className="tax-services-container03">
                <h2 className="tax-services-pricing-heading heading3">
                  Choose the Right Plan for Your Tax Needs
                </h2>
              </div>
              <div className="tax-services-container04">
                <div className="tax-services-pricing-card freePricingCard">
                  <div className="tax-services-container05">
                    <span className="tax-services-text heading3">
                      Tax payer registration
                    </span>
                  </div>
                  <div className="tax-services-container06">
                    <span className="tax-services-text001">LKR</span>
                    <span className="tax-services-free-plan-price">17,000</span>
                  </div>
                  <div className="tax-services-feature-container">
                    <div className="tax-services-feature">
                      <h1 className="tax-services-text002">
                        Account reconciliation
                      </h1>
                      <div className="tax-services-sub-feature">
                        <span className="tax-services-text003">✔</span>
                        <span>Obtaining your (IRD) PIN</span>
                      </div>
                      <div className="tax-services-sub-feature01">
                        <span className="tax-services-text004">✔</span>
                        <span>
                          Tax Type Registration and advice
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                      <div className="tax-services-sub-feature02">
                        <span className="tax-services-text005">✔</span>
                        <span>
                          Registration Confirmation follow up
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                      <div className="tax-services-sub-feature03">
                        <span className="tax-services-text006">✔</span>
                        <span>
                          <span>Record Keeping</span>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="tax-services-button buttonOutline">
                    Continue with Free
                  </button>
                </div>
                <div className="tax-services-pricing-card1 freePricingCard">
                  <div className="tax-services-container07">
                    <span className="tax-services-text010 heading3">
                      Tax payer registration
                    </span>
                  </div>
                  <div className="tax-services-container08">
                    <span className="tax-services-text011">LKR</span>
                    <span className="tax-services-free-plan-price1">
                      25,400
                    </span>
                  </div>
                  <div className="tax-services-feature-container1">
                    <div className="tax-services-feature1">
                      <h1 className="tax-services-text012">VAT registration</h1>
                      <div className="tax-services-sub-feature04">
                        <span className="tax-services-text013">✔</span>
                        <span>Document preparation</span>
                      </div>
                      <div className="tax-services-sub-feature05">
                        <span className="tax-services-text014">✔</span>
                        <span>
                          Coordination between IRD and the taxpayer
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                      <div className="tax-services-sub-feature06">
                        <span className="tax-services-text015">✔</span>
                        <span>
                          <span>Advice on VAT Registration</span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature07">
                        <span className="tax-services-text019">✔</span>
                        <span>
                          <span>VAT Registration</span>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="tax-services-button1 buttonOutline">
                    Continue with Free
                  </button>
                </div>
              </div>
            </div>
            <div className="tax-services-container09">
              <div className="tax-services-container10">
                <h2 className="tax-services-pricing-heading1 heading3">
                  Individual Income Tax (IIT) consultation packages
                </h2>
              </div>
              <div className="tax-services-container11">
                <div className="tax-services-pricing-card2 freePricingCard">
                  <div className="tax-services-container12">
                    <span className="tax-services-text023">
                      Employment Income or Investment income only
                    </span>
                  </div>
                  <div className="tax-services-container13">
                    <span className="tax-services-text024">LKR</span>
                    <span className="tax-services-free-plan-price2">
                      17,000
                    </span>
                  </div>
                  <div className="tax-services-feature-container2">
                    <div className="tax-services-feature2">
                      <h1 className="tax-services-text025">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature08">
                        <span className="tax-services-text026">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature09">
                        <span className="tax-services-text027">✔</span>
                        <span className="tax-services-text028">✔</span>
                        <span>
                          <span>Tax registration</span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature10">
                        <span className="tax-services-text032">✔</span>
                        <span>
                          <span>
                            Tax advisory service
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature11">
                        <span className="tax-services-text036">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature12">
                        <span className="tax-services-text039">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature13">
                        <span className="tax-services-text042">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature14">
                        <span className="tax-services-text045">✔</span>
                        <span>Post Return filing support</span>
                      </div>
                    </div>
                  </div>
                  <button className="tax-services-button2 buttonOutline">
                    Continue with Free
                  </button>
                </div>
                <div className="tax-services-pricing-card3 freePricingCard">
                  <div className="tax-services-container14">
                    <span className="tax-services-text046">
                      Employment Income &amp; Investment income only
                    </span>
                  </div>
                  <div className="tax-services-container15">
                    <span className="tax-services-text047">LKR</span>
                    <span className="tax-services-free-plan-price3">
                      21,200
                    </span>
                  </div>
                  <div className="tax-services-feature-container3">
                    <div className="tax-services-feature3">
                      <h1 className="tax-services-text048">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature15">
                        <span className="tax-services-text049">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature16">
                        <span className="tax-services-text050">✔</span>
                        <span>
                          <span>Tax registration</span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature17">
                        <span className="tax-services-text054">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature18">
                        <span className="tax-services-text058">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature19">
                        <span className="tax-services-text061">✔</span>
                        <span>
                          <span>
                            Advising &amp; filing of Statement of Estimated Tax
                            (SET)
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature20">
                        <span className="tax-services-text064">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature21">
                        <span className="tax-services-text067">✔</span>
                        <span>
                          <span>Post Return filing support</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature22">
                        <span className="tax-services-text070">✔</span>
                        <span>
                          <span>
                            For timely &amp; effective tax completion, it is
                            advisable to submit your requirements in advance
                          </span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="tax-services-button3 buttonOutline">
                    Continue with Free
                  </button>
                </div>
                <div className="tax-services-pricing-card4 freePricingCard">
                  <div className="tax-services-container16">
                    <span className="tax-services-text073">
                      Investment Income / Employment Income/Business Income
                      (without Financial statements)
                    </span>
                  </div>
                  <div className="tax-services-container17">
                    <span className="tax-services-text074">LKR</span>
                    <span className="tax-services-free-plan-price4">
                      25,400
                    </span>
                  </div>
                  <div className="tax-services-feature-container4">
                    <div className="tax-services-feature4">
                      <h1 className="tax-services-text075">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature23">
                        <span className="tax-services-text076">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature24">
                        <span className="tax-services-text077">✔</span>
                        <span>
                          Tax registration
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                      <div className="tax-services-sub-feature25">
                        <span className="tax-services-text078">✔</span>
                        <span>
                          <span>
                            Tax advisory service
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature26">
                        <span className="tax-services-text082">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature27">
                        <span className="tax-services-text085">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature28">
                        <span className="tax-services-text088">✔</span>
                        <span>
                          <span>
                            Advising &amp; filing of Statement of Estimated Tax
                            (SET)
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature29">
                        <span className="tax-services-text091">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature30">
                        <span className="tax-services-text094">✔</span>
                        <span>
                          <span>Post Return filing support</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="tax-services-button4 buttonOutline">
                    Continue with Free
                  </button>
                </div>
                <div className="tax-services-pricing-card5 freePricingCard">
                  <div className="tax-services-container18">
                    <span className="tax-services-text097">
                      Investment Income / Employment Income/Business Income with
                      Financial statements)
                    </span>
                  </div>
                  <div className="tax-services-container19">
                    <span className="tax-services-text098">LKR</span>
                    <span className="tax-services-free-plan-price5">
                      33,900
                    </span>
                  </div>
                  <div className="tax-services-feature-container5">
                    <div className="tax-services-feature5">
                      <h1 className="tax-services-text099">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature31">
                        <span className="tax-services-text100">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature32">
                        <span className="tax-services-text101">✔</span>
                        <span>
                          Tax registration
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                      <div className="tax-services-sub-feature33">
                        <span className="tax-services-text102">✔</span>
                        <span>
                          <span>Tax advisory service</span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature34">
                        <span className="tax-services-text106">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature35">
                        <span className="tax-services-text109">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature36">
                        <span className="tax-services-text112">✔</span>
                        <span>
                          <span>
                            Advising &amp; filing of Statement of Estimated Tax
                            (SET)
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature37">
                        <span className="tax-services-text115">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature38">
                        <span className="tax-services-text118">✔</span>
                        <span>
                          <span>Post Return filing support</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="tax-services-button5 buttonOutline">
                    Continue with Free
                  </button>
                </div>
              </div>
            </div>
            <div className="tax-services-container20">
              <div className="tax-services-container21">
                <h2 className="tax-services-pricing-heading2 heading3">
                  Companies/Charitable  Institutions/NGOs &amp; Other
                  Organizations
                </h2>
              </div>
              <div className="tax-services-container22">
                <div className="tax-services-pricing-card6 freePricingCard">
                  <div className="tax-services-container23">
                    <span className="tax-services-text121">
                      Investment Income / /Business Income (with/OR without
                      Financial statements)
                    </span>
                  </div>
                  <div className="tax-services-container24">
                    <span className="tax-services-free-plan-price6">
                      Fee on A quotation Basis
                    </span>
                  </div>
                  <div className="tax-services-feature-container6">
                    <div className="tax-services-feature6">
                      <h1 className="tax-services-text122">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature39">
                        <span className="tax-services-text123">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature40">
                        <span className="tax-services-text124">✔</span>
                        <span className="tax-services-text125">✔</span>
                        <span>
                          <span>Tax registration</span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature41">
                        <span className="tax-services-text129">✔</span>
                        <span>
                          <span>
                            Tax advisory service
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature42">
                        <span className="tax-services-text133">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature43">
                        <span className="tax-services-text136">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature44">
                        <span className="tax-services-text139">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature45">
                        <span className="tax-services-text142">✔</span>
                        <span>Post Return filing support</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="mailto:info@taxonus.lk?subject=Custom Accounting Quote"
                    className="tax-services-link buttonOutline"
                  >
                    Request a quote
                  </a>
                </div>
              </div>
            </div>
            <p>
              For timely &amp; effective tax completion, it is advisable to
              submit your requirements in advance.
            </p>
          </div>
        </div>
      </div>
      <div className="tax-services-download-center">
        <div className="faqContainer">
          <div className="tax-services-download">
            <div className="tax-services-container25">
              <h2 className="tax-services-text144 heading2">Download Center</h2>
            </div>
            <div className="tax-services-container26">
              <h3>
                <span>Download link 1</span>
                <br></br>
              </h3>
              <a
                href="https://www.google.lk"
                target="_blank"
                rel="noreferrer noopener"
                className="tax-services-link1"
              >
                <span>Download here</span>
                <br></br>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tax-services-footer">
        <footer className="footerContainer tax-services-footer1">
          <div className="tax-services-container27">
            <span className="TaxOnUs">TAXPROS</span>
            <nav className="tax-services-nav1">
              <span className="bodySmall">Services</span>
              <span className="tax-services-nav222 bodySmall">About Us</span>
              <span className="tax-services-nav322 bodySmall">Resources</span>
              <span className="tax-services-nav422 bodySmall">Contact Us</span>
            </nav>
          </div>
          <div className="tax-services-separator"></div>
          <div className="tax-services-container28">
            <span className="bodySmall tax-services-text150">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="tax-services-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="tax-services-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="tax-services-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="tax-services-icon14 socialIcons"
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

export default TaxServices
