import { useNavigate } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer>
        <div className="bg-brandMediumGreen p-4">
          <div className="max-w-7xl mx-auto px-4 pr-0 sm:px-6 lg:px-8">
            <div className="mb-4 flex flex-col md:flex-row">
            <div className="mb-6 flex flex-col items-center md:w-1/3 md:items-stretch md:pr-4">
              <span className="font-[26px] font-bold text-brandBlue text-center w-[275px]">Be in the know with</span>
              <img src="/footer-logo.svg" alt="The Entertainer" className="w-[225px] lg:w-[275px]" width="225" height="33" />
              <span className="mt-3 w-[225px] text-center text-sm font-bold text-brandBlue md:font-[20px] lg:w-[275px]">Sign up to our emails</span>
            </div>
            <div className="flex flex-col md:w-2/3">
              <form className="flex flex-wrap">
                <div className="mb-4 w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="h-[34px] w-full rounded-lg border-[3px] border-gray-300 px-3 text-textBlue transition-all placeholder:text-gray-400 placeholder:font-semibold focus:border-textBlue focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="mt-4 h-[34px] w-full rounded-lg border-[3px] border-gray-300 px-3 text-textBlue transition-all placeholder:text-gray-400 placeholder:font-semibold focus:border-textBlue focus:outline-none"
                  />
                </div>
                <div className="w-full px-4 md:w-1/2 md:pl-6">
                  <label className="relative mb-4 flex items-start text-xs font-bold text-brandBlue">
                    <input
                      type="checkbox"
                      className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                      name="signup"
                      value="signup"
                    />
                    <span className="absolute top-[3px]">
                      <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <span className="ml-2 w-[calc(100%-30px)]">
                      I would like to receive emails about special offers, new toys and voucher codes from The Entertainer
                    </span>
                  </label>
                  <Button
                    className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandRed text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightRed hover:scale-105"
                    iconpath={
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path
                          d="M18.9028 4.35492C19.4873 4.15932 20.0692 4.72983 19.8174 5.31534L14.818 18.0558C14.6532 18.532 14.0752 18.697 13.686 18.4229L10.2385 15.9994L7.77668 17.9694C7.23857 18.3984 6.44087 17.9419 6.59633 17.2082L7.121 14.7319L16.356 7.32912C16.5477 7.17808 16.3485 6.91226 16.1633 7.03273L5.7505 12.9082L2.77086 10.8394C2.26592 10.5088 2.37319 9.70103 2.98825 9.51191L18.9028 4.35492Z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                    link="#"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
            <div className="flex items-center justify-center text-center mb-4">
              <div className="text-xl text-brandBlue font-bold mr-2">
                Follow us on
              </div>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="ml-1 transition-all hover:rotate-[20deg]"
              >
                <svg
                  width="18"
                  height="26"
                  viewBox="0 0 12 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.77894 9.38609L7.458 9.71228L8.43221 16.6442L5.33762 17.0791L4.36341 10.1472L1.85679 10.4995L1.45232 7.62151L3.95894 7.26923L3.6545 5.10301C3.48053 3.86518 3.68756 2.86833 4.27559 2.11247C4.86072 1.33598 5.72062 0.868001 6.8553 0.708532C7.18539 0.662141 7.53901 0.633481 7.91616 0.622552C8.29041 0.590993 8.58359 0.581346 8.79569 0.593613L9.1095 0.581067L9.45308 3.02579L8.21525 3.19976C7.63759 3.28094 7.23641 3.49511 7.01171 3.84226C6.80473 4.16588 6.73169 4.54431 6.79258 4.97756L7.05353 6.83431L9.80771 6.44723L9.77894 9.38609Z"
                    fill="#00548B"
                  />
                </svg>
                <span className="sr-only">Visit us on Facebook</span>
              </a>
              <a
                href="http://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="ml-1"
              >
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 transition-all hover:rotate-[20deg]"
                >
                  <path
                    d="M16.0182 8.46397L15.9872 8.45962C14.605 8.26536 13.403 7.6862 12.3814 6.72214L11.6073 12.2305C11.4101 13.6334 10.7483 14.7501 9.62173 15.5805C8.51292 16.4345 7.25707 16.7629 5.85419 16.5658C4.47194 16.3715 3.35527 15.7097 2.50418 14.5802C1.67081 13.4743 1.35126 12.2302 1.54553 10.848C1.74269 9.44509 2.39422 8.32697 3.50014 7.49361C4.62958 6.64251 5.89574 6.31555 7.29862 6.51271C7.52555 6.5446 7.75104 6.58681 7.97508 6.63934L7.58365 9.42446C7.36541 9.33068 7.14283 9.26784 6.91589 9.23595C6.27634 9.14606 5.69774 9.29616 5.18008 9.68625C4.66242 10.0763 4.35865 10.5912 4.26876 11.2307C4.18178 11.8496 4.33333 12.4179 4.72342 12.9356C5.1135 13.4532 5.618 13.7555 6.23692 13.8425C6.87647 13.9324 7.45507 13.7823 7.97273 13.3922C8.49039 13.0021 8.79417 12.4873 8.88405 11.8478L10.4019 1.04767L13.1251 1.43039C13.1222 1.45102 13.1208 1.46134 13.1208 1.46134C13.0889 1.68828 13.0791 1.9078 13.0914 2.1199C13.1469 3.22169 13.5879 4.12519 14.4145 4.83043C14.9754 5.33002 15.6376 5.63346 16.4009 5.74074L16.3965 5.77168L16.0182 8.46397Z"
                    fill="#00548B"
                  />
                </svg>
                <span className="sr-only">Visit us on TikTok</span>
              </a>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="ml-2 transition-all hover:rotate-[20deg]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.09831 5.75904C5.70117 4.95902 6.49773 4.48942 7.488 4.35025C8.47827 4.21107 9.36309 4.44437 10.1425 5.05012C10.9396 5.63235 11.4078 6.4186 11.5469 7.40887C11.6861 8.39914 11.4543 9.29428 10.8514 10.0943C10.2663 10.8708 9.47857 11.3286 8.4883 11.4678C7.49804 11.607 6.60434 11.3854 5.80722 10.8032C5.02783 10.1975 4.56855 9.39944 4.42938 8.40918C4.2902 7.41891 4.51318 6.53553 5.09831 5.75904ZM6.57853 9.77966C7.09619 10.1697 7.67479 10.3198 8.31434 10.23C8.95389 10.1401 9.4687 9.83631 9.85879 9.31865C10.2489 8.80099 10.399 8.22238 10.3091 7.58284C10.2192 6.94329 9.91544 6.42847 9.39778 6.03839C8.88012 5.6483 8.30151 5.4982 7.66196 5.58808C7.02242 5.67796 6.5076 5.98174 6.11751 6.4994C5.72743 7.01706 5.57733 7.59566 5.66721 8.23521C5.75709 8.87476 6.06086 9.38957 6.57853 9.77966ZM11.6585 3.03831C11.8438 3.15953 11.9525 3.3336 11.9843 3.56054C12.0162 3.78748 11.9613 3.99506 11.8194 4.1833C11.6982 4.36865 11.5241 4.47726 11.2972 4.50916C11.0702 4.54105 10.8627 4.48607 10.6744 4.34422C10.4862 4.20237 10.3761 4.01798 10.3442 3.79105C10.3123 3.56411 10.3688 3.36684 10.5135 3.19923C10.6553 3.01099 10.8397 2.90092 11.0667 2.86903C11.2936 2.83713 11.4909 2.89356 11.6585 3.03831ZM14.489 4.09214C14.5879 4.64627 14.7316 5.59382 14.92 6.93481C15.1085 8.2758 15.2315 9.22626 15.2892 9.78618C15.4042 11.0533 15.1602 12.0869 14.5574 12.887C13.9722 13.6634 13.0534 14.1608 11.8007 14.3789C11.2495 14.4984 10.3034 14.6524 8.96236 14.8409C7.62137 15.0294 6.66947 15.1421 6.10664 15.1791C4.83948 15.2941 3.80734 15.0605 3.01022 14.4782C2.23372 13.8931 1.73642 12.9742 1.51829 11.7216C1.39874 11.1703 1.24474 10.2242 1.05627 8.88323C0.867811 7.54225 0.753618 6.58002 0.713695 5.99657C0.60162 4.75004 0.838147 3.73852 1.42327 2.96203C2.0055 2.16491 2.9215 1.64697 4.17127 1.40821C4.72539 1.3093 5.67295 1.16561 7.01394 0.977146C8.35493 0.788682 9.30538 0.665623 9.86531 0.607969C11.1325 0.492995 12.1558 0.738387 12.9351 1.34415C13.7323 1.92637 14.2502 2.84237 14.489 4.09214ZM13.9778 11.2328C14.0165 11.059 14.039 10.8455 14.0455 10.5921C14.0491 10.3181 14.0365 10.0043 14.0079 9.65069C13.9763 9.27644 13.9446 8.97584 13.9127 8.74891C13.8808 8.52197 13.8359 8.2022 13.7779 7.78959C13.7199 7.37697 13.688 7.15004 13.6822 7.10878C13.6735 7.04689 13.6416 6.81995 13.5865 6.42797C13.5285 6.01536 13.4836 5.69558 13.4517 5.46865C13.4198 5.24171 13.3689 4.95433 13.299 4.60651C13.2261 4.23806 13.1517 3.93295 13.0757 3.69118C12.9967 3.42878 12.9147 3.21941 12.8296 3.06306C12.4921 2.45831 11.9862 2.07709 11.3119 1.9194C11.1382 1.88071 10.9143 1.85958 10.6403 1.85601C10.3869 1.84954 10.0731 1.86209 9.69887 1.89364C9.34525 1.9223 9.05497 1.95258 8.82804 1.98448C8.62173 2.01347 8.30196 2.05841 7.86872 2.1193C7.4561 2.17729 7.22917 2.20918 7.18791 2.21498C7.14664 2.22078 6.91971 2.25267 6.5071 2.31066C6.09448 2.36865 5.77471 2.41359 5.54777 2.44549C5.32084 2.47738 5.02314 2.52974 4.65469 2.60256C4.30687 2.67248 4.00176 2.74692 3.73936 2.82587C3.4976 2.90192 3.29854 2.9825 3.14219 3.06758C2.53744 3.40503 2.15622 3.91093 1.99853 4.58527C1.95984 4.75901 1.93871 4.98288 1.93514 5.25688C1.92867 5.51024 1.94121 5.82405 1.97277 6.1983C2.00143 6.55192 2.03171 6.8422 2.0636 7.06914C2.0926 7.27544 2.13754 7.59522 2.19843 8.02846C2.25642 8.44107 2.28831 8.66801 2.29411 8.70927C2.29991 8.75053 2.3318 8.97747 2.38979 9.39008C2.44778 9.80269 2.49272 10.1225 2.52462 10.3494C2.55651 10.5763 2.60887 10.874 2.68169 11.2425C2.75161 11.5903 2.82605 11.8954 2.905 12.1578C2.98105 12.3996 3.06162 12.5986 3.14671 12.755C3.50479 13.3568 4.01069 13.7381 4.6644 13.8986C4.83814 13.9373 5.0517 13.9599 5.30506 13.9664C5.57906 13.97 5.89287 13.9574 6.24649 13.9287C6.62074 13.8972 6.91101 13.8669 7.11732 13.8379C7.34426 13.806 7.66403 13.7611 8.07664 13.7031C8.50988 13.6422 8.74714 13.6089 8.7884 13.6031C8.85029 13.5944 9.07722 13.5625 9.46921 13.5074C9.88182 13.4494 10.2016 13.4045 10.4285 13.3726C10.6555 13.3407 10.9428 13.2898 11.2907 13.2198C11.6591 13.147 11.9642 13.0726 12.206 12.9965C12.4684 12.9176 12.6778 12.8355 12.8341 12.7505C13.436 12.3924 13.8172 11.8865 13.9778 11.2328Z"
                    fill="#00548B"
                  />
                </svg>
                <span className="sr-only">Visit us on Instagram</span>
              </a>
            </div>
            <div className="flex flex-wrap items-start justify-center">
              <div className="px-4 w-full md:w-auto flex flex-col items-center items-center md:items-start mb-4">
                <Dropdown
                  title="Help"
                  className="text-brandBlue font-bold flex items-center"
                  answer={
                    <ul className="text-brandBlue text-center md:text-left">
                      <li className="mt-2">
                        <button
                          onClick={() => {
                            navigate("/store-finder");
                            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
                          }}
                          title="Store Finder"
                        >
                          Store Finder
                        </button>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information"
                          title="Delivery Options"
                        >
                          Delivery Options
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/help" title="Help Centre">
                          Help Centre
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://www.thetoyshop.com/product-safety-notices"
                          title="Product Safety Notices"
                        >
                          Product Safety
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/4402417396241-Our-Returns-Policy"
                          title="Returns"
                        >
                          Returns
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/my-account/orders" title="Track Your Order">
                          Track Your Order
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/privacy" title="Your Privacy">
                          Your Privacy
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/32765165894801-How-to-complain"
                          title="How To Complain"
                        >
                          How To Complain
                        </a>
                      </li>
                    </ul>
                  }
                />
              </div>

              <div className="px-4 w-full md:w-auto flex flex-col items-center items-center md:items-start mb-4">
                <Dropdown
                  title="About"
                  className="text-brandBlue font-bold flex items-center"
                  answer={
                    <ul className="text-brandBlue text-center md:text-left">
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/6495305266833-Contact-Us"
                          title="Contact Us"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information"
                          title="Delivery Options"
                        >
                          Delivery Options
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/help" title="Help Centre">
                          Help Centre
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://www.thetoyshop.com/product-safety-notices"
                          title="Product Safety Notices"
                        >
                          Product Safety
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/4402417396241-Our-Returns-Policy"
                          title="Returns"
                        >
                          Returns
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/my-account/orders" title="Track Your Order">
                          Track Your Order
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/privacy" title="Your Privacy">
                          Your Privacy
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/32765165894801-How-to-complain"
                          title="How To Complain"
                        >
                          How To Complain
                        </a>
                      </li>
                    </ul>
                  }
                />
              </div>

              <div className="px-4 w-full md:w-auto flex flex-col items-center items-center md:items-start mb-4">
                <Dropdown
                  title="Links"
                  className="text-brandBlue font-bold flex items-center"
                  answer={
                    <ul className="text-brandBlue text-center md:text-left">
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/6495305266833-Contact-Us"
                          title="Contact Us"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information"
                          title="Delivery Options"
                        >
                          Delivery Options
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/help" title="Help Centre">
                          Help Centre
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://www.thetoyshop.com/product-safety-notices"
                          title="Product Safety Notices"
                        >
                          Product Safety
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/4402417396241-Our-Returns-Policy"
                          title="Returns"
                        >
                          Returns
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/my-account/orders" title="Track Your Order">
                          Track Your Order
                        </a>
                      </li>
                      <li className="mt-2">
                        <a href="/privacy" title="Your Privacy">
                          Your Privacy
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          href="https://theentertainer.zendesk.com/hc/en-gb/articles/32765165894801-How-to-complain"
                          title="How To Complain"
                        >
                          How To Complain
                        </a>
                      </li>
                    </ul>
                  }
                />
              </div>
              
              <div className="px-4 w-full md:w-auto flex flex-col items-center items-center md:items-start mb-4">
                <a href="/klarna"
                  className="text-brandBlue font-bold"
                >
                  <span>Klarna </span>
                </a>
              </div>
              <div className="px-4 w-full md:w-auto flex flex-col items-center items-center md:items-start mb-4">
                <button onClick={() => { navigate(`/events`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}
                  className="text-brandBlue font-bold"
                >
                  <span>Events </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-brandBlue p-4 text-white relative z-40">
          <div className="max-w-7xl mx-auto px-4 pr-0 sm:px-6 lg:px-8 flex flex-wrap justify-between">
            <div className="w-full md:w-[65%]">
              <div className="text-xs text-white my-2 text-center md:text-left">
                <p>&copy; The Entertainer {new Date().getFullYear()}</p>
                <div className="flex flex-col text-center md:flex-row text-white font-semibold gap-4 mt-2">
                  <a href="/" title="Home">Home</a>
                  <a href="/terms" title="Terms &amp; Conditions">Terms &amp; Conditions</a>
                  <a href="/privacy" title="Your Privacy">Your Privacy</a>
                  <a href="/sitemap" title="Site Map">Site Map</a>
                  <a href="https://theentertainer.zendesk.com/hc/en-gb/articles/19773673375377-Amazon-Data-Protection-Policy" title="Amazon Data Protection Policy" target="_blank" rel="noopener noreferrer">Amazon Data Protection Policy</a>
                </div>
                <p className="text-xs my-2">Company Details: The Entertainer (Amersham) Limited, TEAL House, Anglo Park, 67 White Lion Road,
                Amersham, Bucks. HP7 9FB Registered Company Number 02057757 Trading as The Entertainer since 1981</p>
              </div>
            </div>
            <div className="w-[70%] mx-auto md:mx-0 md:w-[20%] flex justify-end">
              <div className="flex flex-wrap">
                <div className="p-1 w-[25%]">
                  <img
                      src="/apple-pay.svg"
                      alt="Apple Pay"
                      className="w-full"
                  />
                </div>
                <div className="p-1 w-[25%]">
                  <img
                      src="/google-pay.svg"
                      alt="Google Pay"
                      className="w-full"
                  />
                </div>
                <div className="p-1 w-[25%]">
                  <img
                      src="/visa.svg"
                      alt="Visa"
                      className="w-full"
                  />
                </div>
                <div className="p-1 w-[25%]">
                  <img
                      src="/mastercard.svg"
                      alt="Mastercard"
                      className="w-full"
                  />
                </div>
                <div className="p-1 w-[25%]">
                  <img
                      src="/klarna.svg"
                      alt="Klarna"
                      className="w-full"
                  />
                </div>
                <div className="p-1 w-[25%]">
                  <img
                      src="/paypal.svg"
                      alt="Paypal"
                      className="w-full"
                  />
                </div>
                <div className="p-1 w-[25%]">
                  <img
                      src="/amazon-pay.svg"
                      alt="Amazon Pay"
                      className="w-full"
                  />
                </div>
                <div className="p-1 w-[25%]">
                  <img
                      src="/te-gift-card.svg"
                      alt="The  Entertainer Gift Card"
                      className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
