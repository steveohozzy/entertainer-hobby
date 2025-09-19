import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const HomeDelivery = () => {
  const navigate = useNavigate();

  const goToLinkHandler = () => {
      navigate("/store-finder");
      window.scrollTo({top: 0,left: 0,behavior: "smooth",});
  };
  return (
    <div id="delivery" className="mt-20">
        <div className="border-[1px] border-gray-300 bg-gray-900 rounded-xl mb-2 shadow-lg">
            <div className="flex items-center justify-center gap-3 w-full py-2">
                <img className="hidden md:block" src="https://www.thetoyshop.com/medias/hp-redesign-map.png?context=bWFzdGVyfHJvb3R8OTg4OXxpbWFnZS9wbmd8YURFM0wyZzNOUzh4TWpVMU5qSTJORGt6TVRNMU9DOW9jQzF5WldSbGMybG5iaTF0WVhBdWNHNW58YWEyNjA2ZDA0MzA2Mzk0NjQ1ZTdmMTg0YWZkMmQzN2M1MTQ1Nzc3YmI4NTkwY2Q4NDAyMmZlODI4ZjdhZWU3NA" alt="Find your local The Entertainer store or locker" title="Find your local The Entertainer store or locker" />
                <div className="flex flex-col justify-center p-4">
                    <img className="hidden md:block mb-4" src="https://www.thetoyshop.com/medias/hp-redesign-store-locator-title.png?context=bWFzdGVyfHJvb3R8MTE2NDJ8aW1hZ2UvcG5nfGFEQm1MMmc0TXk4eE1qVTFOakkyTkRVd05UTTNOQzlvY0MxeVpXUmxjMmxuYmkxemRHOXlaUzFzYjJOaGRHOXlMWFJwZEd4bExuQnVad3w1NDYwMzQ4ZDQ4YWZjZjk4Mjc2NWE2YjIzMjZlYWVjNjE2ZGQyODA5MmE5NzY3NzdlYWI4MTEzYmE4ZWY2OWRl" alt="Find your local The Entertainer store or locker" title="Find your local The Entertainer store or locker" />
                    <img className="md:hidden mb-3" src="https://www.thetoyshop.com/medias/store-locator-title-graphic.png?context=bWFzdGVyfHJvb3R8MTg0MjJ8aW1hZ2UvcG5nfGFHRTNMMmhtTUM4eE1qVTBOREExTXpNeE16VTJOaTl6ZEc5eVpTMXNiMk5oZEc5eUxYUnBkR3hsTFdkeVlYQm9hV011Y0c1bnw2YjEzMjZmMjRhNzBjMjY3MWRmZDVkN2U4MTQzNGI3MGMwOGIwNjBlMzkwYzUyNmRjNTJhYTUyZWJiYjBhZDI5" alt="Find your local The Entertainer store or locker" title="Find your local The Entertainer store or locker" />

                    <div className="flex items-center justify-center gap-2">
                        <img className="hidden md:block" src="https://www.thetoyshop.com/medias/hp-redesign-store-locator-locations-text.png?context=bWFzdGVyfHJvb3R8NTczMHxpbWFnZS9wbmd8YURJNUwyZzNPQzh4TWpVMU5qSTJORGcyTlRneU1pOW9jQzF5WldSbGMybG5iaTF6ZEc5eVpTMXNiMk5oZEc5eUxXeHZZMkYwYVc5dWN5MTBaWGgwTG5CdVp3fDM1YzA3YTY3Y2E2Njg2NjVjNzk4OGQyMjJiOWI2N2Q2MTVhMGRkZTk0YWQ4YjJmOWM4NTY4NzY4MmY1MDc0Mzc" alt="1000+ locations in the UK" title="1000+ locations in the UK" />
                        <Button
                          className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandRed text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                          iconpath={
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                <path d="M10.5124 13.7391L11.3721 9.13113L13.1951 9.56975L11.8195 16.9425C11.7228 17.4609 11.2203 17.7613 10.736 17.6448L3.44414 15.8903C2.93143 15.7669 2.60788 15.2678 2.70461 14.7494L4.08023 7.37662L5.9032 7.81525L5.04344 12.4232L10.5124 13.7391ZM20.7513 8.95035C21.0373 9.6511 20.4596 10.3547 19.7475 10.1834L3.3407 6.23571C2.60011 6.05752 2.32331 5.14832 2.83493 4.63947L5.94388 1.53564C6.16315 1.31756 6.48023 1.2133 6.79355 1.28869L18.3296 4.06437C18.6429 4.13976 18.8955 4.3811 19.018 4.68142L20.7513 8.95035ZM15.3794 18.2806L16.841 10.447L18.664 10.8856L17.2024 18.7192C17.1541 18.9784 16.8886 19.1252 16.6607 19.0703L15.7492 18.851C15.4929 18.7893 15.3311 18.5398 15.3794 18.2806Z" fill="white"></path>
                            </svg>
                          }
                          onClick={goToLinkHandler}
                        >
                          Search for stores
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="my-5">
          <div className='flex justify-center'>
            <h3 id="offers" className="text-xl md:text-2xl lg:text-3xl font-bold md:!leading-[1.2] text-transparent text-center drop-shadow-md"><span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>We Love to Deliver</span></h3>
          </div>
        </div>
        <div className="flex gap-2 bg-white rounded-xl shadow-lg p-6 mb-5 leading-[1.2]">
          <div className="w-1/3">
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="29" viewBox="0 0 37 29" fill="none">
                    <path d="M18.5547 21.5V12.75H22.0547V26.75C22.0547 27.224 21.8724 27.625 21.5078 27.9531C21.1797 28.3177 20.7786 28.5 20.3047 28.5H6.30469C5.83073 28.5 5.41146 28.3177 5.04688 27.9531C4.71875 27.625 4.55469 27.224 4.55469 26.75V12.75H8.05469V21.5H18.5547ZM35.7812 8.26562C36.1458 8.84896 36.1641 9.45052 35.8359 10.0703C35.5078 10.6901 34.9974 11 34.3047 11H2.80469C2.11198 11 1.60156 10.6901 1.27344 10.0703C0.945312 9.45052 0.981771 8.84896 1.38281 8.26562L6.03125 1.26562C6.35938 0.755208 6.83333 0.5 7.45312 0.5H29.6562C30.276 0.5 30.75 0.755208 31.0781 1.26562L35.7812 8.26562ZM29.0547 27.625V12.75H32.5547V27.625C32.5547 27.8802 32.4635 28.0807 32.2812 28.2266C32.1354 28.4089 31.9349 28.5 31.6797 28.5H29.9297C29.6745 28.5 29.4557 28.4089 29.2734 28.2266C29.1276 28.0807 29.0547 27.8802 29.0547 27.625Z" fill="#00548B"></path>
                </svg>
                <div className="text-textBlue text-lg !leading-[1] font-bold mt-5 mb-3">
                    FREE Click &amp; Collect
                </div>
                <div className="text-textBlue">
                    In as little as
                    30 minutes
                </div>
            </Link>
          </div>
          <div className="w-1/3">
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29" fill="none">
                    <path d="M34.125 19.75C34.5625 19.75 35 20.1875 35 20.625V22.375C35 22.8672 34.5625 23.25 34.125 23.25H31.5C31.5 26.1484 29.1484 28.5 26.25 28.5C23.3516 28.5 21 26.1484 21 23.25H14C14 26.1484 11.6484 28.5 8.75 28.5C5.85156 28.5 3.5 26.1484 3.5 23.25H2.625C1.14844 23.25 0 22.1016 0 20.625V3.125C0 1.70312 1.14844 0.5 2.625 0.5H20.125C21.5469 0.5 22.75 1.70312 22.75 3.125V5.75H25.1562C25.8125 5.75 26.5234 6.07812 27.0156 6.57031L32.4297 11.9844C32.9219 12.4766 33.25 13.1875 33.25 13.8438V19.75H34.125ZM8.75 25.875C10.1719 25.875 11.375 24.7266 11.375 23.25C11.375 21.8281 10.1719 20.625 8.75 20.625C7.27344 20.625 6.125 21.8281 6.125 23.25C6.125 24.7266 7.27344 25.875 8.75 25.875ZM26.25 25.875C27.6719 25.875 28.875 24.7266 28.875 23.25C28.875 21.8281 27.6719 20.625 26.25 20.625C24.7734 20.625 23.625 21.8281 23.625 23.25C23.625 24.7266 24.7734 25.875 26.25 25.875ZM30.625 14.5V13.8438L25.1562 8.375H22.75V14.5H30.625Z" fill="#00548B"></path>
                </svg>
                <div className="text-textBlue text-lg !leading-[1] font-bold mt-5 mb-3">
                    Standard Delivery
                </div>
                <div className="text-textBlue">
                    Within 3 working days
                </div>
            </Link>
          </div>
          <div className="w-1/3">
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29" fill="none">
                    <path d="M34.125 19.75C34.5625 19.75 35 20.1875 35 20.625V22.375C35 22.8672 34.5625 23.25 34.125 23.25H31.5C31.5 26.1484 29.1484 28.5 26.25 28.5C23.3516 28.5 21 26.1484 21 23.25H14C14 26.1484 11.6484 28.5 8.75 28.5C5.85156 28.5 3.5 26.1484 3.5 23.25V16.25H11.8125C12.0312 16.25 12.25 16.0859 12.25 15.8125V14.9375C12.25 14.7188 12.0312 14.5 11.8125 14.5H0.4375C0.164062 14.5 0 14.3359 0 14.0625V13.1875C0 12.9688 0.164062 12.75 0.4375 12.75H13.5625C13.7812 12.75 14 12.5859 14 12.3125V11.4375C14 11.2188 13.7812 11 13.5625 11H2.1875C1.91406 11 1.75 10.8359 1.75 10.5625V9.6875C1.75 9.46875 1.91406 9.25 2.1875 9.25H15.3125C15.5312 9.25 15.75 9.08594 15.75 8.8125V7.9375C15.75 7.71875 15.5312 7.5 15.3125 7.5H0.4375C0.164062 7.5 0 7.33594 0 7.0625V6.1875C0 5.96875 0.164062 5.75 0.4375 5.75H3.5V3.125C3.5 1.70312 4.64844 0.5 6.125 0.5H20.125C21.5469 0.5 22.75 1.70312 22.75 3.125V5.75H25.1562C25.8125 5.75 26.5234 6.07812 27.0156 6.57031L32.4297 11.9844C32.9219 12.4766 33.25 13.1875 33.25 13.8438V19.75H34.125ZM8.75 25.875C10.1719 25.875 11.375 24.7266 11.375 23.25C11.375 21.8281 10.1719 20.625 8.75 20.625C7.27344 20.625 6.125 21.8281 6.125 23.25C6.125 24.7266 7.27344 25.875 8.75 25.875ZM26.25 25.875C27.6719 25.875 28.875 24.7266 28.875 23.25C28.875 21.8281 27.6719 20.625 26.25 20.625C24.7734 20.625 23.625 21.8281 23.625 23.25C23.625 24.7266 24.7734 25.875 26.25 25.875ZM30.625 14.5V13.8438L25.1562 8.375H22.75V14.5H30.625Z" fill="#00548B"></path>
                </svg>
                <div className="text-textBlue text-lg !leading-[1] font-bold mt-5 mb-3">
                    Next Day Delivery
                </div>
                <div className="text-textBlue">
                    If you order by 7pm
                </div>
            </Link>
          </div>
        </div> */}
    </div>
  )
}

export default HomeDelivery