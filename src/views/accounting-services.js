import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
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
          <div className="accounting-services-container1">
            <h1 className="accounting-services-hero-heading heading1">
              Choose the right plan for you 
            </h1>
          </div>
        </div>
      </div>
      <div className="accounting-services-pricing">
        <div className="accounting-services-pricing1">
          <div className="pricingContainer">
            <div className="accounting-services-container2">
              <div className="freePricingCard accounting-services-pricing-card">
                <div className="accounting-services-container3">
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
                <div className="accounting-services-container4">
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
                <a
                  href="mailto:info@taxobey.lk?subject=SMB Enquiry"
                  className="accounting-services-link buttonOutline"
                >
                  Send Your Request
                </a>
              </div>
              <div className="freePricingCard accounting-services-pricing-card1">
                <div className="accounting-services-container5">
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
                <div className="accounting-services-container6">
                  <span className="accounting-services-text051">LKR</span>
                  <span className="accounting-services-free-plan-price1">
                    38,500
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
                <a
                  href="mailto:info@taxobey.lk?subject=SMB+ Enquiry"
                  className="accounting-services-link1 buttonOutline"
                >
                  Send Your Request
                </a>
              </div>
              <div className="freePricingCard accounting-services-pricing-card2">
                <div className="accounting-services-container7">
                  <span className="accounting-services-text096 heading3">
                    Small business Advanced
                  </span>
                  <span>
                    <span className="bodySmall">(250+ transactions/month)</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="accounting-services-container8">
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
                <a
                  href="mailto:info@taxobey.lk?subject=SMB Advanced Enquiry"
                  className="accounting-services-link2 buttonOutline"
                >
                  Send Your Request
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default AccountingServices
