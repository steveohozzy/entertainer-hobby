
const ReducedFooter = () => {

  return (
    <>
      <footer>
        <div className="bg-gray-900 p-4 text-white">
          <div className="max-w-7xl mx-auto px-4 pr-0 sm:px-6 lg:px-8 flex flex-wrap justify-between">
            <div className="w-full md:w-[65%]">
              <div className="text-xs text-white my-2 text-center md:text-left">
                <p>&copy; The Entertainer {new Date().getFullYear()}</p>
                <div className="flex flex-col text-center md:flex-row text-white font-bold gap-4 mt-2">
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
            <div className="w-full md:w-[20%] flex justify-end">
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

export default ReducedFooter;
