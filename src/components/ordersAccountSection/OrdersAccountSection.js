import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import { products } from "../../data/products";

const OrdersAccountSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-8">
      <div className="w-full lg:w-2/3">
        <div className="text-xl font-semibold text-gray-100 mb-3">
          Current Order
        </div>
        <div className="flex gap-2 items-start">
          <div className="flex gap-3 md:gap-6 w-2/3 items-start">
            <div className="border-[3px] border-brandLightblue rounded-lg relative w-1/3">
              <img
                  src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                  alt="Product Name"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <div className="font-semibold text-gray-100 mb-1 text-sm md:text-base">
                Product Name Here
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Order no #000004444
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Default Address
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Delivery target 00/00/26
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <Button
            className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
            iconpath={
              <svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
              </svg>
            }>
              Track
            </Button>
          </div>
        </div>
        <div className="text-xl font-semibold text-gray-100 mb-3 mt-8">
          Previous Orders
        </div>
        <div className="flex gap-2 items-start mb-6">
          <div className="flex gap-3 md:gap-6 w-2/3 items-start">
            <div className="border-[3px] border-brandLightblue rounded-lg relative w-1/3">
              <img
                  src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                  alt="Product Name"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <div className="font-semibold text-gray-400 mb-1 text-sm md:text-base">
                Product Name Here
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Order no #000004444
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Default Address
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Delivery target 00/00/26
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <Button
            className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-gray-400 text-white py-2 px-4 transition-all hover:bg-gray-600 hover:scale-105"
            removeIcons={true}>
              Details
            </Button>
          </div>
        </div>
        <div className="flex gap-2 items-start mb-6">
          <div className="flex gap-3 md:gap-6 w-2/3 items-start">
            <div className="border-[3px] border-brandLightblue rounded-lg relative w-1/3">
              <img
                  src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                  alt="Product Name"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <div className="font-semibold text-gray-400 mb-1 text-sm md:text-base">
                Product Name Here
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Order no #000004444
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Default Address
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Delivery target 00/00/26
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <Button
            className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-gray-400 text-white py-2 px-4 transition-all hover:bg-gray-600 hover:scale-105"
            removeIcons={true}>
              Details
            </Button>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <div className="flex gap-3 md:gap-6 w-2/3 items-start">
            <div className="border-[3px] border-brandLightblue rounded-lg relative w-1/3">
              <img
                  src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                  alt="Product Name"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <div className="font-semibold text-gray-400 mb-1 text-sm md:text-base">
                Product Name Here
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Order no #000004444
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Default Address
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                Delivery target 00/00/26
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <Button
            className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-gray-400 text-white py-2 px-4 transition-all hover:bg-gray-600 hover:scale-105"
            removeIcons={true}>
              Details
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
            <div className='w-full text-center'>
                <div className='flex justify-center'>
                  <h3 id="offers" className="text-xl md:text-2xl lg:text-3xl font-semibold md:!leading-[1.2] text-transparent text-center drop-shadow-md"><span className='text-black md:!leading-[1.2] title-purple'>You May Also Like</span></h3>
                </div>
                <div className='bg-transparent p-5 rounded-tl-lg rounded-bl-lg'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 justify-start'>
                    {products.slice(0, 6).map((product) => (
                        <div key={product.id} onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",})}} className="cursor-pointer flex flex-col border-[2px] border-brandLightBlue rounded-xl hover:shadow-lg hover:scale-105 hover:border-brandBlue transition-all">
                            <div className="w-full">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full object-cover transition-transform duration-300 rounded-xl"
                                />
                            </div>
                            <div className="w-full flex flex-col justify-between items-center p-2 flex-grow">
                                <div className="text-xs lg:text-sm xl:text-base text-gray-100 font-semibold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0 line-clamp-2">{product.name}</div>
                                <div>
                                    <div className="price">
                                        <div className="flex items-end justify-center">
                                            <span className="text-brandRed font-semibold text-xs md:text-sm">£{product.price}</span>
                                            {product.originalPrice &&
                                                <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">£{product.originalPrice}</span>
                                            }
                                        </div>
                                    </div>
                                    <Button 
                                        className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2 min-h-[44px]'
                                        onClick={() => { navigate(`/product-details/${product.id}`)}}>
                                            Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default OrdersAccountSection