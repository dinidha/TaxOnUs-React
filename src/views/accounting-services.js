import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './accounting-services.css'

const AccountingServices = (props) => {
  return (
    <div className="accounting-services-container">
      <Helmet>
        <title>Accounting-Services - taxonus</title>
        <meta property="og:title" content="Accounting-Services - taxonus" />
      </Helmet>
      <div className="accounting-services-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer accounting-services-navbar-interactive"
        >
          <Link to="/" className="accounting-services-logo TaxOnUs">
            Taxonus
          </Link>
          <div
            data-thq="thq-navbar-nav"
            className="accounting-services-desktop-menu"
          >
            <nav className="accounting-services-links">
              <Link to="/" className="accounting-services-nav12 bodySmall">
                Home
              </Link>
              <Link to="/about" className="accounting-services-nav22 bodySmall">
                About Us
              </Link>
              <Link to="/tax-services" className="accounting-services-nav32">
                Tax Services
              </Link>
              <Link
                to="/accounting-services"
                className="accounting-services-nav42 bodySmall"
              >
                Accounting Services
              </Link>
              <Link
                to="/contact"
                className="accounting-services-nav52 bodySmall"
              >
                Contact Us
              </Link>
            </nav>
            <div className="accounting-services-buttons">
              <button className="accounting-services-login buttonFlat">
                Login
              </button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="accounting-services-burger-menu"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="accounting-services-icon socialIcons"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="accounting-services-mobile-menu1 mobileMenu"
          >
            <div className="accounting-services-nav">
              <div className="accounting-services-top">
                <span className="TaxOnUs">TAXPROS</span>
                <div
                  data-thq="thq-close-menu"
                  className="accounting-services-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="accounting-services-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="accounting-services-links1">
                <span className="accounting-services-nav121 bodySmall">
                  Services
                </span>
                <span className="accounting-services-nav221 bodySmall">
                  About Us
                </span>
                <span className="accounting-services-nav321 bodySmall">
                  Resources
                </span>
                <span className="accounting-services-nav421 bodySmall">
                  Contact Us
                </span>
              </nav>
              <div className="accounting-services-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="accounting-services-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="accounting-services-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="accounting-services-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="accounting-services-hero">
        <div className="heroContainer accounting-services-hero1">
          <div className="accounting-services-container01">
            <h1 className="accounting-services-hero-heading heading1">
              Choose the right plan for you 
            </h1>
          </div>
        </div>
      </div>
      <div className="accounting-services-pricing">
        <div className="accounting-services-pricing1">
          <div className="pricingContainer">
            <div className="accounting-services-container02">
              <span className="accounting-services-pricing-sub-heading bodyLarge">
                <span>
                  <span>
                    Our pricing plans are designed to cater to individuals,
                    families, and businesses of all sizes.
                  </span>
                </span>
              </span>
            </div>
            <div className="accounting-services-container03">
              <div className="freePricingCard accounting-services-pricing-card">
                <div className="accounting-services-container04">
                  <span className="accounting-services-text002 heading3">
                    Small business
                  </span>
                  <span>
                    <span className="bodySmall">
                      (up to 120 transactions/month)
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="accounting-services-container05">
                  <span className="accounting-services-text006">LKR</span>
                  <span className="accounting-services-free-plan-price">
                    28,500
                  </span>
                  <span className="accounting-services-text007">/ month</span>
                </div>
                <div className="accounting-services-feature-container">
                  <div className="accounting-services-feature">
                    <h1 className="accounting-services-text008">
                      Account reconciliation
                    </h1>
                    <div className="accounting-services-sub-feature">
                      <span className="accounting-services-text009">✔</span>
                      <span>Bank accounts up to 3</span>
                    </div>
                    <div className="accounting-services-sub-feature01">
                      <span className="accounting-services-text010">✔</span>
                      <span>
                        Credit card accounts up to 3
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature02">
                      <span className="accounting-services-text011">✔</span>
                      <span>
                        Reconcile electronic transactions into an Accounting
                        Package
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text012">
                      LKR 9000
                    </span>
                  </div>
                  <div className="accounting-services-feature01">
                    <h1 className="accounting-services-text013">
                      Monthly financials
                    </h1>
                    <div className="accounting-services-sub-feature03">
                      <span className="accounting-services-text014">✔</span>
                      <span>Balance Sheet</span>
                    </div>
                    <div className="accounting-services-sub-feature04">
                      <span className="accounting-services-text015">✔</span>
                      <span>
                        <span>
                          Profit &amp; Loss
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
                    <div className="accounting-services-sub-feature05">
                      <span className="accounting-services-text019">✔</span>
                      <span>
                        <span>
                          General Ledger
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
                    <div className="accounting-services-sub-feature06">
                      <span className="accounting-services-text023">✔</span>
                      <span>
                        <span>Statement of Cash Flows</span>
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
                    <span className="accounting-services-text027">
                      <span>LKR 8000</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="accounting-services-feature02">
                    <h1 className="accounting-services-text030">
                      Stock Records
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature07">
                      <span className="accounting-services-text031">✔</span>
                      <span>Stock report up to 20 items</span>
                    </div>
                    <span className="accounting-services-text032">
                      LKR 2500
                    </span>
                  </div>
                  <div className="accounting-services-feature03">
                    <h1 className="accounting-services-text033">
                      Employee Funds
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature08">
                      <span className="accounting-services-text034">✔</span>
                      <span>EPF &amp; ETF returns up to 5 Emps</span>
                    </div>
                    <div className="accounting-services-sub-feature09">
                      <span className="accounting-services-text035">✔</span>
                      <span>
                        Annual return
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text036">
                      LKR 2500
                    </span>
                  </div>
                  <div className="accounting-services-feature04">
                    <h1 className="accounting-services-text037">
                      Advice
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature10">
                      <span className="accounting-services-text038">✔</span>
                      <span>
                        Accountant and business service meeting up to an hour
                      </span>
                    </div>
                    <span className="accounting-services-text039">
                      LKR 2000
                    </span>
                  </div>
                  <div className="accounting-services-feature05">
                    <h1 className="accounting-services-text040">
                      Software and portals
                    </h1>
                    <div className="accounting-services-sub-feature11">
                      <span className="accounting-services-text041">✔</span>
                      <span>
                        Essential document storage
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature12">
                      <span className="accounting-services-text042">✔</span>
                      <span>
                        Accounting software setup &amp; maintenance
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature13">
                      <span className="accounting-services-text043">✔</span>
                      <span>
                        <span>
                          Expense management with one criterion
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
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
                    <span className="accounting-services-text048">
                      LKR 4500
                    </span>
                  </div>
                </div>
                <button className="accounting-services-button buttonOutline">
                  Continue with Free
                </button>
              </div>
              <div className="freePricingCard accounting-services-pricing-card1">
                <div className="accounting-services-container06">
                  <span className="accounting-services-text049 heading3">
                    Small business plus
                  </span>
                  <span>
                    <span className="bodySmall">
                      (up to 125-240 transactions/month)
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="accounting-services-container07">
                  <span className="accounting-services-text053">LKR</span>
                  <span className="accounting-services-free-plan-price1">
                    28,500
                  </span>
                  <span className="accounting-services-text054">/ month</span>
                </div>
                <div className="accounting-services-feature-container1">
                  <div className="accounting-services-feature06">
                    <h1 className="accounting-services-text055">
                      Account reconciliation
                    </h1>
                    <div className="accounting-services-sub-feature14">
                      <span className="accounting-services-text056">✔</span>
                      <span>Bank accounts up to 5</span>
                    </div>
                    <div className="accounting-services-sub-feature15">
                      <span className="accounting-services-text057">✔</span>
                      <span>
                        Credit card accounts up to 5
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature16">
                      <span className="accounting-services-text058">✔</span>
                      <span>
                        Reconcile electronic transactions into an Accounting
                        Package
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text059">
                      LKR 12000
                    </span>
                  </div>
                  <div className="accounting-services-feature07">
                    <h1 className="accounting-services-text060">
                      Monthly financials
                    </h1>
                    <div className="accounting-services-sub-feature17">
                      <span className="accounting-services-text061">✔</span>
                      <span>Balance Sheet</span>
                    </div>
                    <div className="accounting-services-sub-feature18">
                      <span className="accounting-services-text062">✔</span>
                      <span>
                        <span>
                          Profit &amp; Loss
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
                    <div className="accounting-services-sub-feature19">
                      <span className="accounting-services-text066">✔</span>
                      <span>
                        <span>
                          General Ledger
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
                    <div className="accounting-services-sub-feature20">
                      <span className="accounting-services-text070">✔</span>
                      <span>
                        <span>Statement of Cash Flows</span>
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
                    <span className="accounting-services-text074">
                      <span>LKR 10000</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="accounting-services-feature08">
                    <h1 className="accounting-services-text077">
                      Stock Records
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature21">
                      <span className="accounting-services-text078">✔</span>
                      <span>Stock report up to 20 items</span>
                    </div>
                    <span className="accounting-services-text079">
                      LKR 4000
                    </span>
                  </div>
                  <div className="accounting-services-feature09">
                    <h1 className="accounting-services-text080">
                      Employee Funds
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature22">
                      <span className="accounting-services-text081">✔</span>
                      <span>EPF &amp; ETF returns up to 5 Emps</span>
                    </div>
                    <div className="accounting-services-sub-feature23">
                      <span className="accounting-services-text082">✔</span>
                      <span>
                        Annual return
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text083">
                      LKR 4000
                    </span>
                  </div>
                  <div className="accounting-services-feature10">
                    <h1 className="accounting-services-text084">
                      Advice
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature24">
                      <span className="accounting-services-text085">✔</span>
                      <span>
                        CFO and business service meeting up to an hour
                      </span>
                    </div>
                    <span className="accounting-services-text086">
                      LKR 5000
                    </span>
                  </div>
                  <div className="accounting-services-feature11">
                    <h1 className="accounting-services-text087">
                      Training
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature25">
                      <span className="accounting-services-text088">✔</span>
                      <span>
                        Necessary software training
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text089">
                      LKR 5000
                    </span>
                  </div>
                  <div className="accounting-services-feature12">
                    <h1 className="accounting-services-text090">
                      Software and portals
                    </h1>
                    <div className="accounting-services-sub-feature26">
                      <span className="accounting-services-text091">✔</span>
                      <span>
                        Essential document storage
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature27">
                      <span className="accounting-services-text092">✔</span>
                      <span>
                        Accounting software setup &amp; maintenance
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature28">
                      <span className="accounting-services-text093">✔</span>
                      <span>Expense management with two criteria</span>
                    </div>
                    <div className="accounting-services-sub-feature29">
                      <span className="accounting-services-text094">✔</span>
                      <span>
                        Optional monthly
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature30">
                      <span className="accounting-services-text095">✔</span>
                      <span>
                        Optional monthly performance report with key performance
                        indicators (KPIs)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature31">
                      <span className="accounting-services-text096">✔</span>
                      <span>
                        Class tracking
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text097">
                      LKR 7500
                    </span>
                  </div>
                </div>
                <button className="accounting-services-button1 buttonOutline">
                  Continue with Free
                </button>
              </div>
              <div className="freePricingCard accounting-services-pricing-card2">
                <div className="accounting-services-container08">
                  <span className="accounting-services-text098 heading3">
                    Small business Advanced
                  </span>
                  <span>
                    <span className="bodySmall">(250+ transactions/month)</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="accounting-services-container09">
                  <span className="accounting-services-free-plan-price2">
                    Custom Pricing
                  </span>
                  <span className="accounting-services-text102"></span>
                </div>
                <div className="accounting-services-feature-container2">
                  <div className="accounting-services-feature13">
                    <h1 className="accounting-services-text103">
                      Account reconciliation
                    </h1>
                    <div className="accounting-services-sub-feature32">
                      <span className="accounting-services-text104">✔</span>
                      <span>Bank accounts up to 5</span>
                    </div>
                    <div className="accounting-services-sub-feature33">
                      <span className="accounting-services-text105">✔</span>
                      <span>
                        Credit card accounts up to 5
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature34">
                      <span className="accounting-services-text106">✔</span>
                      <span>
                        Reconcile electronic transactions into an Accounting
                        Package
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="accounting-services-feature14">
                    <h1 className="accounting-services-text107">
                      Monthly financials
                    </h1>
                    <div className="accounting-services-sub-feature35">
                      <span className="accounting-services-text108">✔</span>
                      <span>Balance Sheet</span>
                    </div>
                    <div className="accounting-services-sub-feature36">
                      <span className="accounting-services-text109">✔</span>
                      <span>
                        <span>
                          Profit &amp; Loss
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
                    <div className="accounting-services-sub-feature37">
                      <span className="accounting-services-text113">✔</span>
                      <span>
                        <span>
                          General Ledger
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
                    <div className="accounting-services-sub-feature38">
                      <span className="accounting-services-text117">✔</span>
                      <span>
                        <span>Statement of Cash Flows</span>
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
                  </div>
                  <div className="accounting-services-feature15">
                    <h1 className="accounting-services-text121">
                      Stock Records
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature39">
                      <span className="accounting-services-text122">✔</span>
                      <span>Stock system</span>
                    </div>
                  </div>
                  <div className="accounting-services-feature16">
                    <h1 className="accounting-services-text123">
                      Employee Funds
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature40">
                      <span className="accounting-services-text124">✔</span>
                      <span>EPF &amp; ETF returns up to 5 Emps</span>
                    </div>
                    <div className="accounting-services-sub-feature41">
                      <span className="accounting-services-text125">✔</span>
                      <span>
                        Annual return
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature42">
                      <span className="accounting-services-text126">✔</span>
                      <span>
                        PAYE
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="accounting-services-feature17">
                    <h1 className="accounting-services-text127">
                      Advice &amp; Training
                    </h1>
                    <div className="accounting-services-sub-feature43">
                      <span className="accounting-services-text128">✔</span>
                      <span>General business consulting</span>
                    </div>
                    <div className="accounting-services-sub-feature44">
                      <span className="accounting-services-text129">✔</span>
                      <span>Strategic planning</span>
                    </div>
                    <div className="accounting-services-sub-feature45">
                      <span className="accounting-services-text130">✔</span>
                      <span>
                        Tax planning
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature46">
                      <span className="accounting-services-text131">✔</span>
                      <span>Necessary software training</span>
                    </div>
                    <div className="accounting-services-sub-feature47">
                      <span className="accounting-services-text132">✔</span>
                      <span>Business advisory service</span>
                    </div>
                  </div>
                  <div className="accounting-services-feature18">
                    <h1 className="accounting-services-text133">
                      Software and portals
                    </h1>
                    <div className="accounting-services-sub-feature48">
                      <span className="accounting-services-text134">✔</span>
                      <span>
                        Essential document storage
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature49">
                      <span className="accounting-services-text135">✔</span>
                      <span>
                        Accounting software setup &amp; maintenance
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature50">
                      <span className="accounting-services-text136">✔</span>
                      <span>Expense management</span>
                    </div>
                    <div className="accounting-services-sub-feature51">
                      <span className="accounting-services-text137">✔</span>
                      <span>
                        Optional monthly performance report with key performance
                        indicators (KPIs)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="accounting-services-sub-feature52">
                      <span className="accounting-services-text138">✔</span>
                      <span>
                        Class and location tracking
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <button className="accounting-services-button2 buttonOutline">
                  Continue with Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accounting-services-footer">
        <footer className="footerContainer accounting-services-footer1">
          <div className="accounting-services-container10">
            <span className="TaxOnUs">TAXPROS</span>
            <nav className="accounting-services-nav1">
              <span className="bodySmall">Services</span>
              <span className="accounting-services-nav222 bodySmall">
                About Us
              </span>
              <span className="accounting-services-nav322 bodySmall">
                Resources
              </span>
              <span className="accounting-services-nav422 bodySmall">
                Contact Us
              </span>
            </nav>
          </div>
          <div className="accounting-services-separator"></div>
          <div className="accounting-services-container11">
            <span className="bodySmall accounting-services-text139">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="accounting-services-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="accounting-services-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="accounting-services-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="accounting-services-icon14 socialIcons"
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

export default AccountingServices
