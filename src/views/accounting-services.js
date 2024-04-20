import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './accounting-services.css'

const AccountingServices = (props) => {
  return (
    <div className="accounting-services-container">
      <Helmet>
        <title>Accounting-Services - taxonus</title>
        <meta property="og:title" content="Accounting-Services - taxonus" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
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
              <div className="freePricingCard accounting-services-pricing-card">
                <div className="accounting-services-container03">
                  <span className="accounting-services-text heading3">
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
                <div className="accounting-services-container04">
                  <span className="accounting-services-text004">LKR</span>
                  <span className="accounting-services-free-plan-price">
                    28,500
                  </span>
                  <span className="accounting-services-text005">/ month</span>
                </div>
                <div className="accounting-services-feature-container">
                  <div className="accounting-services-feature">
                    <h1 className="accounting-services-text006">
                      Account reconciliation
                    </h1>
                    <div className="accounting-services-sub-feature">
                      <span className="accounting-services-text007">✔</span>
                      <span>Bank accounts up to 3</span>
                    </div>
                    <div className="accounting-services-sub-feature01">
                      <span className="accounting-services-text008">✔</span>
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
                      <span className="accounting-services-text009">✔</span>
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
                    <span className="accounting-services-text010">
                      LKR 9000
                    </span>
                  </div>
                  <div className="accounting-services-feature01">
                    <h1 className="accounting-services-text011">
                      Monthly financials
                    </h1>
                    <div className="accounting-services-sub-feature03">
                      <span className="accounting-services-text012">✔</span>
                      <span>Balance Sheet</span>
                    </div>
                    <div className="accounting-services-sub-feature04">
                      <span className="accounting-services-text013">✔</span>
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
                      <span className="accounting-services-text017">✔</span>
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
                      <span className="accounting-services-text021">✔</span>
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
                    <span className="accounting-services-text025">
                      <span>LKR 8000</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="accounting-services-feature02">
                    <h1 className="accounting-services-text028">
                      Stock Records
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature07">
                      <span className="accounting-services-text029">✔</span>
                      <span>Stock report up to 20 items</span>
                    </div>
                    <span className="accounting-services-text030">
                      LKR 2500
                    </span>
                  </div>
                  <div className="accounting-services-feature03">
                    <h1 className="accounting-services-text031">
                      Employee Funds
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature08">
                      <span className="accounting-services-text032">✔</span>
                      <span>EPF &amp; ETF returns up to 5 Emps</span>
                    </div>
                    <div className="accounting-services-sub-feature09">
                      <span className="accounting-services-text033">✔</span>
                      <span>
                        Annual return
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text034">
                      LKR 2500
                    </span>
                  </div>
                  <div className="accounting-services-feature04">
                    <h1 className="accounting-services-text035">
                      Advice
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature10">
                      <span className="accounting-services-text036">✔</span>
                      <span>
                        Accountant and business service meeting up to an hour
                      </span>
                    </div>
                    <span className="accounting-services-text037">
                      LKR 2000
                    </span>
                  </div>
                  <div className="accounting-services-feature05">
                    <h1 className="accounting-services-text038">
                      Software and portals
                    </h1>
                    <div className="accounting-services-sub-feature11">
                      <span className="accounting-services-text039">✔</span>
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
                      <span className="accounting-services-text040">✔</span>
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
                      <span className="accounting-services-text041">✔</span>
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
                    <span className="accounting-services-text046">
                      LKR 4500
                    </span>
                  </div>
                </div>
                <button className="accounting-services-button buttonOutline">
                  Continue with Free
                </button>
              </div>
              <div className="freePricingCard accounting-services-pricing-card1">
                <div className="accounting-services-container05">
                  <span className="accounting-services-text047 heading3">
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
                <div className="accounting-services-container06">
                  <span className="accounting-services-text051">LKR</span>
                  <span className="accounting-services-free-plan-price1">
                    28,500
                  </span>
                  <span className="accounting-services-text052">/ month</span>
                </div>
                <div className="accounting-services-feature-container1">
                  <div className="accounting-services-feature06">
                    <h1 className="accounting-services-text053">
                      Account reconciliation
                    </h1>
                    <div className="accounting-services-sub-feature14">
                      <span className="accounting-services-text054">✔</span>
                      <span>Bank accounts up to 5</span>
                    </div>
                    <div className="accounting-services-sub-feature15">
                      <span className="accounting-services-text055">✔</span>
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
                      <span className="accounting-services-text056">✔</span>
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
                    <span className="accounting-services-text057">
                      LKR 12000
                    </span>
                  </div>
                  <div className="accounting-services-feature07">
                    <h1 className="accounting-services-text058">
                      Monthly financials
                    </h1>
                    <div className="accounting-services-sub-feature17">
                      <span className="accounting-services-text059">✔</span>
                      <span>Balance Sheet</span>
                    </div>
                    <div className="accounting-services-sub-feature18">
                      <span className="accounting-services-text060">✔</span>
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
                      <span className="accounting-services-text064">✔</span>
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
                      <span className="accounting-services-text068">✔</span>
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
                    <span className="accounting-services-text072">
                      <span>LKR 10000</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="accounting-services-feature08">
                    <h1 className="accounting-services-text075">
                      Stock Records
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature21">
                      <span className="accounting-services-text076">✔</span>
                      <span>Stock report up to 20 items</span>
                    </div>
                    <span className="accounting-services-text077">
                      LKR 4000
                    </span>
                  </div>
                  <div className="accounting-services-feature09">
                    <h1 className="accounting-services-text078">
                      Employee Funds
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature22">
                      <span className="accounting-services-text079">✔</span>
                      <span>EPF &amp; ETF returns up to 5 Emps</span>
                    </div>
                    <div className="accounting-services-sub-feature23">
                      <span className="accounting-services-text080">✔</span>
                      <span>
                        Annual return
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text081">
                      LKR 4000
                    </span>
                  </div>
                  <div className="accounting-services-feature10">
                    <h1 className="accounting-services-text082">
                      Advice
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature24">
                      <span className="accounting-services-text083">✔</span>
                      <span>
                        CFO and business service meeting up to an hour
                      </span>
                    </div>
                    <span className="accounting-services-text084">
                      LKR 5000
                    </span>
                  </div>
                  <div className="accounting-services-feature11">
                    <h1 className="accounting-services-text085">
                      Training
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature25">
                      <span className="accounting-services-text086">✔</span>
                      <span>
                        Necessary software training
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text087">
                      LKR 5000
                    </span>
                  </div>
                  <div className="accounting-services-feature12">
                    <h1 className="accounting-services-text088">
                      Software and portals
                    </h1>
                    <div className="accounting-services-sub-feature26">
                      <span className="accounting-services-text089">✔</span>
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
                      <span className="accounting-services-text090">✔</span>
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
                      <span className="accounting-services-text091">✔</span>
                      <span>Expense management with two criteria</span>
                    </div>
                    <div className="accounting-services-sub-feature29">
                      <span className="accounting-services-text092">✔</span>
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
                      <span className="accounting-services-text093">✔</span>
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
                      <span className="accounting-services-text094">✔</span>
                      <span>
                        Class tracking
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="accounting-services-text095">
                      LKR 7500
                    </span>
                  </div>
                </div>
                <button className="accounting-services-button1 buttonOutline">
                  Continue with Free
                </button>
              </div>
              <div className="freePricingCard accounting-services-pricing-card2">
                <div className="accounting-services-container07">
                  <span className="accounting-services-text096 heading3">
                    Small business Advanced
                  </span>
                  <span>
                    <span className="bodySmall">(250+ transactions/month)</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="accounting-services-container08">
                  <span className="accounting-services-free-plan-price2">
                    Custom Pricing
                  </span>
                  <span className="accounting-services-text100"></span>
                </div>
                <div className="accounting-services-feature-container2">
                  <div className="accounting-services-feature13">
                    <h1 className="accounting-services-text101">
                      Account reconciliation
                    </h1>
                    <div className="accounting-services-sub-feature32">
                      <span className="accounting-services-text102">✔</span>
                      <span>Bank accounts up to 5</span>
                    </div>
                    <div className="accounting-services-sub-feature33">
                      <span className="accounting-services-text103">✔</span>
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
                      <span className="accounting-services-text104">✔</span>
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
                    <h1 className="accounting-services-text105">
                      Monthly financials
                    </h1>
                    <div className="accounting-services-sub-feature35">
                      <span className="accounting-services-text106">✔</span>
                      <span>Balance Sheet</span>
                    </div>
                    <div className="accounting-services-sub-feature36">
                      <span className="accounting-services-text107">✔</span>
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
                      <span className="accounting-services-text111">✔</span>
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
                      <span className="accounting-services-text115">✔</span>
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
                    <h1 className="accounting-services-text119">
                      Stock Records
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature39">
                      <span className="accounting-services-text120">✔</span>
                      <span>Stock system</span>
                    </div>
                  </div>
                  <div className="accounting-services-feature16">
                    <h1 className="accounting-services-text121">
                      Employee Funds
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h1>
                    <div className="accounting-services-sub-feature40">
                      <span className="accounting-services-text122">✔</span>
                      <span>EPF &amp; ETF returns up to 5 Emps</span>
                    </div>
                    <div className="accounting-services-sub-feature41">
                      <span className="accounting-services-text123">✔</span>
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
                      <span className="accounting-services-text124">✔</span>
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
                    <h1 className="accounting-services-text125">
                      Advice &amp; Training
                    </h1>
                    <div className="accounting-services-sub-feature43">
                      <span className="accounting-services-text126">✔</span>
                      <span>General business consulting</span>
                    </div>
                    <div className="accounting-services-sub-feature44">
                      <span className="accounting-services-text127">✔</span>
                      <span>Strategic planning</span>
                    </div>
                    <div className="accounting-services-sub-feature45">
                      <span className="accounting-services-text128">✔</span>
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
                      <span className="accounting-services-text129">✔</span>
                      <span>Necessary software training</span>
                    </div>
                    <div className="accounting-services-sub-feature47">
                      <span className="accounting-services-text130">✔</span>
                      <span>Business advisory service</span>
                    </div>
                  </div>
                  <div className="accounting-services-feature18">
                    <h1 className="accounting-services-text131">
                      Software and portals
                    </h1>
                    <div className="accounting-services-sub-feature48">
                      <span className="accounting-services-text132">✔</span>
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
                      <span className="accounting-services-text133">✔</span>
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
                      <span className="accounting-services-text134">✔</span>
                      <span>Expense management</span>
                    </div>
                    <div className="accounting-services-sub-feature51">
                      <span className="accounting-services-text135">✔</span>
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
                      <span className="accounting-services-text136">✔</span>
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
          <div className="accounting-services-container09">
            <span className="TaxOnUs">TAXPROS</span>
            <nav className="accounting-services-nav">
              <span className="bodySmall">Services</span>
              <span className="accounting-services-nav22 bodySmall">
                About Us
              </span>
              <span className="accounting-services-nav32 bodySmall">
                Resources
              </span>
              <span className="accounting-services-nav42 bodySmall">
                Contact Us
              </span>
            </nav>
          </div>
          <div className="accounting-services-separator"></div>
          <div className="accounting-services-container10">
            <span className="bodySmall accounting-services-text137">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="accounting-services-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="accounting-services-icon socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="accounting-services-icon2 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="accounting-services-icon4 socialIcons"
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
