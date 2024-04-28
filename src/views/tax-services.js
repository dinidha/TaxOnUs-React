import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './tax-services.css'

const TaxServices = (props) => {
  return (
    <div className="tax-services-container">
      <Helmet>
        <title>Tax-Services - taxonus</title>
        <meta property="og:title" content="Tax-Services - taxonus" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
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
                    <span className="tax-services-free-plan-price">1,700</span>
                  </div>
                  <div className="tax-services-feature-container">
                    <div className="tax-services-feature">
                      <h1 className="tax-services-text002">
                        TIN registration
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
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
                          <span>Updating taxpayer profile</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="tax-services-button buttonOutline">
                    Send Your Request
                  </button>
                </div>
                <div className="tax-services-pricing-card1 freePricingCard">
                  <div className="tax-services-container07">
                    <span className="tax-services-text009 heading3">
                      Tax payer registration
                    </span>
                  </div>
                  <div className="tax-services-container08">
                    <span className="tax-services-text010">LKR</span>
                    <span className="tax-services-free-plan-price1">
                      25,400
                    </span>
                  </div>
                  <div className="tax-services-feature-container1">
                    <div className="tax-services-feature1">
                      <h1 className="tax-services-text011">VAT registration</h1>
                      <div className="tax-services-sub-feature04">
                        <span className="tax-services-text012">✔</span>
                        <span>Document preparation</span>
                      </div>
                      <div className="tax-services-sub-feature05">
                        <span className="tax-services-text013">✔</span>
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
                        <span className="tax-services-text014">✔</span>
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
                        <span className="tax-services-text018">✔</span>
                        <span>
                          <span>
                            Advice on Tax responsibilities and obligations
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
                      <div className="tax-services-sub-feature08">
                        <span className="tax-services-text022">✔</span>
                        <span>
                          <span>VAT Registration</span>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="tax-services-button1 buttonOutline">
                    Send Your Request
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
                    <span className="tax-services-text026">
                      Employment Income or Investment income only
                    </span>
                  </div>
                  <div className="tax-services-container13">
                    <span className="tax-services-text027">LKR</span>
                    <span className="tax-services-free-plan-price2">
                      17,000
                    </span>
                  </div>
                  <div className="tax-services-feature-container2">
                    <div className="tax-services-feature2">
                      <h1 className="tax-services-text028">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature09">
                        <span className="tax-services-text029">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature10">
                        <span className="tax-services-text030">✔</span>
                        <span className="tax-services-text031">✔</span>
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
                      <div className="tax-services-sub-feature11">
                        <span className="tax-services-text035">✔</span>
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
                      <div className="tax-services-sub-feature12">
                        <span className="tax-services-text039">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature13">
                        <span className="tax-services-text042">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature14">
                        <span className="tax-services-text045">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature15">
                        <span className="tax-services-text048">✔</span>
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
                    <span className="tax-services-text049">
                      Employment Income &amp; Investment income only
                    </span>
                  </div>
                  <div className="tax-services-container15">
                    <span className="tax-services-text050">LKR</span>
                    <span className="tax-services-free-plan-price3">
                      21,200
                    </span>
                  </div>
                  <div className="tax-services-feature-container3">
                    <div className="tax-services-feature3">
                      <h1 className="tax-services-text051">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature16">
                        <span className="tax-services-text052">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature17">
                        <span className="tax-services-text053">✔</span>
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
                      <div className="tax-services-sub-feature18">
                        <span className="tax-services-text057">✔</span>
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
                      <div className="tax-services-sub-feature19">
                        <span className="tax-services-text061">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature20">
                        <span className="tax-services-text064">✔</span>
                        <span>
                          <span>
                            Advising &amp; filing of Statement of Estimated Tax
                            (SET)
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature21">
                        <span className="tax-services-text067">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature22">
                        <span className="tax-services-text070">✔</span>
                        <span>
                          <span>Post Return filing support</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature23">
                        <span className="tax-services-text073">✔</span>
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
                    <span className="tax-services-text076">
                      Investment Income / Employment Income/Business Income
                      (without Financial statements)
                    </span>
                  </div>
                  <div className="tax-services-container17">
                    <span className="tax-services-text077">LKR</span>
                    <span className="tax-services-free-plan-price4">
                      25,400
                    </span>
                  </div>
                  <div className="tax-services-feature-container4">
                    <div className="tax-services-feature4">
                      <h1 className="tax-services-text078">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature24">
                        <span className="tax-services-text079">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature25">
                        <span className="tax-services-text080">✔</span>
                        <span>
                          Tax registration
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                      <div className="tax-services-sub-feature26">
                        <span className="tax-services-text081">✔</span>
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
                      <div className="tax-services-sub-feature27">
                        <span className="tax-services-text085">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature28">
                        <span className="tax-services-text088">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature29">
                        <span className="tax-services-text091">✔</span>
                        <span>
                          <span>
                            Advising &amp; filing of Statement of Estimated Tax
                            (SET)
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature30">
                        <span className="tax-services-text094">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature31">
                        <span className="tax-services-text097">✔</span>
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
                    <span className="tax-services-text100">
                      Investment Income / Employment Income/Business Income with
                      Financial statements)
                    </span>
                  </div>
                  <div className="tax-services-container19">
                    <span className="tax-services-text101">LKR</span>
                    <span className="tax-services-free-plan-price5">
                      33,900
                    </span>
                  </div>
                  <div className="tax-services-feature-container5">
                    <div className="tax-services-feature5">
                      <h1 className="tax-services-text102">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature32">
                        <span className="tax-services-text103">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature33">
                        <span className="tax-services-text104">✔</span>
                        <span>
                          Tax registration
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                      <div className="tax-services-sub-feature34">
                        <span className="tax-services-text105">✔</span>
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
                      <div className="tax-services-sub-feature35">
                        <span className="tax-services-text109">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature36">
                        <span className="tax-services-text112">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature37">
                        <span className="tax-services-text115">✔</span>
                        <span>
                          <span>
                            Advising &amp; filing of Statement of Estimated Tax
                            (SET)
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature38">
                        <span className="tax-services-text118">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature39">
                        <span className="tax-services-text121">✔</span>
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
                    <span className="tax-services-text124">
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
                      <h1 className="tax-services-text125">
                        Discussion of Personal tax matters with a CERTIFIED TAX
                        ADVISOR
                      </h1>
                      <div className="tax-services-sub-feature40">
                        <span className="tax-services-text126">✔</span>
                        <span>Personal tax Preparation Services</span>
                      </div>
                      <div className="tax-services-sub-feature41">
                        <span className="tax-services-text127">✔</span>
                        <span className="tax-services-text128">✔</span>
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
                      <div className="tax-services-sub-feature42">
                        <span className="tax-services-text132">✔</span>
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
                      <div className="tax-services-sub-feature43">
                        <span className="tax-services-text136">✔</span>
                        <span>
                          <span>Quarterly tax payments advices</span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature44">
                        <span className="tax-services-text139">✔</span>
                        <span>
                          <span>
                            Tax Reminders on Tax due dates &amp; Payment
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature45">
                        <span className="tax-services-text142">✔</span>
                        <span>
                          <span>
                            Preparation &amp; Filing of Final Tax Return online
                          </span>
                          <br></br>
                        </span>
                      </div>
                      <div className="tax-services-sub-feature46">
                        <span className="tax-services-text145">✔</span>
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
              <h2 className="tax-services-text147 heading2">Download Center</h2>
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
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default TaxServices
