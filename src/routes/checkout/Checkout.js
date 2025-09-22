import { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button'
import CartProductTile from '../../components/cartProductTile/CartProductTile'
import Tabs from '../../components/tabs/Tabs';
import Tab from '../../components/tabs/Tab';
import Dropdown from '../../components/dropdown/Dropdown';

import { selectCartItems } from '../../store/cart/cartSelector';
import { setIsCartOpen } from '../../store/cart/cartReducer';
import {
  selectCartTotal,
} from '../../store/cart/cartSelector';

const Checkout = () => {

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [animateTrainDelivery, setanimateTrainDelivery] = useState(false);
  const [animateTrainPayment, setanimateTrainPayment] = useState(false);
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [name, setName] = useState(false);
  const [lastname, setLastName] = useState(false);
  const [phone, setPhone] = useState(false);
  const [address1, setAddress1] = useState(false);
  const [address2, setAddress2] = useState(false);
  const [town, setTown] = useState(false);
  const [county, setCounty] = useState(false);
  const [postcode, setPostcode] = useState(false);
  const [lookup, setLookup] = useState(false);
  const [addressfinder, setAddressFinder] = useState(false);
  const [selectDelivery, setSelectDelivery] = useState(false);
  const [showManualDelivery, setShowManualDelivery] = useState(false);
  const [showManualCollect, setShowManualCollect] = useState(false);
  const [showStoreResults, setShowStoreResults] = useState(false);
  const [clickAndCollectResults, setShowClickAndCollectResults] = useState(false);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(!e.target.value);
    handleSetSelectDelivery();
  }

  const handleLastNameChange = (e) => {
    setLastName(!e.target.value);
    handleSetSelectDelivery();
  }

  const handlePhoneChange = (e) => {
    setPhone(!e.target.value);
    handleSetSelectDelivery();
  }

  const handleAddress1Change = (e) => {
    setAddress1(!e.target.value);
    handleSetSelectDelivery();
  }

  const handleAddress2Change = (e) => {
    setAddress2(!e.target.value);
    handleSetSelectDelivery();
  }

  const handleTownChange = (e) => {
    setTown(!e.target.value);
    handleSetSelectDelivery();
  }

  const handleCountyChange = (e) => {
    setCounty(!e.target.value);
    handleSetSelectDelivery();
  }

  const handlePostcodeChange = (e) => {
    setPostcode(!e.target.value);
    handleSetSelectDelivery();
  }

  const handleAddressFinderChange = (e) => {
    setAddressFinder(!e.target.value);
    handleSetSelectDelivery();
  }

  const handleLookupChange = (e) => {
    setLookup(!e.target.value);
  }

  const handleSetSelectDelivery = () => {
    if (name || lastname || address1 || address2 || town || county || postcode ) {
      setSelectDelivery(false);
    } else {
      setSelectDelivery(true);
    }
  }

  const handleShowManualAddress = (e) => {
    e.preventDefault();
    setShowManualDelivery(true);
  }

  const handleShowManualAddressCollect = (e) => {
    e.preventDefault();
    setShowManualCollect(true);
  }

  const handleShowStoreResults = () => {
    setShowStoreResults(!showStoreResults);
  }

  useEffect(() => {
    setanimateTrainDelivery(true)
    dispatch(setIsCartOpen(false));
    document.body.classList.remove('body-noscroll');
  }, [animateTrainDelivery, dispatch])
  

  return (
    <>
        <div className="bg-black">
          
            <div className='text-sm text-gray-100 flex items-center justify-center pt-6'>
                <span className='text-gray-300'><Link to="/cart">Basket</Link></span>
                <img src='/stars-icon.svg' alt='stars' className='mx-4' />
                <span className={`text-gray-300 ${animateTrainDelivery && !animateTrainPayment && 'text-gray-100 font-bold'}`}>Delivery</span>
                <img src='/rocket-icon.svg' alt='stars' className='mx-4' />
                <span className={`text-gray-300 ${animateTrainPayment && 'font-bold text-gray-100'}`}>Payment</span>
            </div>
            <div className='mx-auto max-w-[335px] mt-4'>
              <div className="max-w-[300px] mx-auto mt-8 flex flex-wrap justify-between items-center">
                <div className="bg-gray-500 w-full h-4 rounded-full relative">
                  <div className={`rounded-full h-full bg-purple-500 transition-all w-[50%] ${animateTrainPayment && 'w-full'}`}></div>
                    <div className={`absolute top-[-5px] ${animateTrainDelivery && !animateTrainPayment && 'ml-[calc(50%-15px)]'} ${animateTrainPayment && 'ml-[calc(100%-15px)]'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29" fill="none">
                        <path d="M13.0201 12.66H11.29V14.39H13.0201V12.66Z" fill="white"/>
                        <path d="M11.29 12.66H9.56006V14.39H11.29V12.66Z" fill="white"/>
                        <path d="M9.56006 12.66H7.83008V14.39H9.56006V12.66Z" fill="#BE6CFF"/>
                        <path d="M7.83008 12.66H6.1001V14.39H7.83008V12.66Z" fill="#BE6CFF"/>
                        <path d="M11.29 10.93H9.56006V12.66H11.29V10.93Z" fill="#BE6CFF"/>
                        <path d="M9.56006 9.2H7.83008V10.93H9.56006V9.2Z" fill="#BE6CFF"/>
                        <path d="M14.75 10.93H13.02V12.66H14.75V10.93Z" fill="#BE6CFF"/>
                        <path d="M16.48 9.2H14.75V10.93H16.48V9.2Z" fill="#BE6CFF"/>
                        <path d="M14.75 14.39H13.02V16.12H14.75V14.39Z" fill="#BE6CFF"/>
                        <path d="M16.48 16.12H14.75V17.85H16.48V16.12Z" fill="#BE6CFF"/>
                        <path d="M11.29 14.39H9.56006V16.12H11.29V14.39Z" fill="#BE6CFF"/>
                        <path d="M9.56006 16.12H7.83008V17.85H9.56006V16.12Z" fill="#BE6CFF"/>
                        <path d="M14.75 12.66H13.02V14.39H14.75V12.66Z" fill="white"/>
                        <path d="M16.48 12.66H14.75V14.39H16.48V12.66Z" fill="#BE6CFF"/>
                        <path d="M18.21 12.66H16.48V14.39H18.21V12.66Z" fill="#BE6CFF"/>
                        <path d="M13.0201 10.93H11.29V12.66H13.0201V10.93Z" fill="white"/>
                        <path d="M13.0201 9.2H11.29V10.93H13.0201V9.2Z" fill="#BE6CFF"/>
                        <path d="M13.0201 7.48H11.29V9.21H13.0201V7.48Z" fill="#BE6CFF"/>
                        <path d="M13.0201 5.75H11.29V7.48H13.0201V5.75Z" fill="#8200DA"/>
                        <path d="M7.83008 7.48H6.1001V9.21H7.83008V7.48Z" fill="#8200DA"/>
                        <path d="M18.21 7.48H16.48V9.21H18.21V7.48Z" fill="#8200DA"/>
                        <path d="M6.1001 12.66H4.37012V14.39H6.1001V12.66Z" fill="#8200DA"/>
                        <path d="M13.0201 19.58H11.29V21.31H13.0201V19.58Z" fill="#8200DA"/>
                        <path d="M14.75 17.85H13.02V19.58H14.75V17.85Z" fill="#8200DA"/>
                        <path d="M11.29 16.12H9.56006V17.85H11.29V16.12Z" fill="#8200DA"/>
                        <path d="M11.29 17.85H9.56006V19.58H11.29V17.85Z" fill="#8200DA"/>
                        <path d="M9.56006 14.39H7.83008V16.12H9.56006V14.39Z" fill="#8200DA"/>
                        <path d="M7.83008 14.39H6.1001V16.12H7.83008V14.39Z" fill="#8200DA"/>
                        <path d="M7.83008 10.93H6.1001V12.66H7.83008V10.93Z" fill="#8200DA"/>
                        <path d="M9.56006 10.93H7.83008V12.66H9.56006V10.93Z" fill="#8200DA"/>
                        <path d="M11.29 9.2H9.56006V10.93H11.29V9.2Z" fill="#8200DA"/>
                        <path d="M11.29 7.48H9.56006V9.21H11.29V7.48Z" fill="#8200DA"/>
                        <path d="M14.75 7.48H13.02V9.21H14.75V7.48Z" fill="#8200DA"/>
                        <path d="M14.75 9.2H13.02V10.93H14.75V9.2Z" fill="#8200DA"/>
                        <path d="M16.48 10.93H14.75V12.66H16.48V10.93Z" fill="#8200DA"/>
                        <path d="M18.21 10.93H16.48V12.66H18.21V10.93Z" fill="#8200DA"/>
                        <path d="M19.9302 12.66H18.2002V14.39H19.9302V12.66Z" fill="#8200DA"/>
                        <path d="M18.21 17.85H16.48V19.58H18.21V17.85Z" fill="#8200DA"/>
                        <path d="M7.83008 17.85H6.1001V19.58H7.83008V17.85Z" fill="#8200DA"/>
                        <path d="M13.0201 4.02H11.29V5.75H13.0201V4.02Z" fill="#8200DA"/>
                        <path d="M13.0201 23.03H11.29V24.76H13.0201V23.03Z" fill="#8200DA"/>
                        <path d="M13.0201 26.45H11.29V28.18H13.0201V26.45Z" fill="#8200DA"/>
                        <path d="M13.0201 0.560001H11.29V2.29H13.0201V0.560001Z" fill="#8200DA"/>
                        <path d="M23.3901 12.66H21.6602V14.39H23.3901V12.66Z" fill="#8200DA"/>
                        <path d="M2.64014 12.66H0.910156V14.39H2.64014V12.66Z" fill="#8200DA"/>
                        <path d="M18.21 14.39H16.48V16.12H18.21V14.39Z" fill="#8200DA"/>
                        <path d="M16.48 14.39H14.75V16.12H16.48V14.39Z" fill="#8200DA"/>
                        <path d="M14.75 16.12H13.02V17.85H14.75V16.12Z" fill="#8200DA"/>
                        <path d="M13.0201 14.39H11.29V16.12H13.0201V14.39Z" fill="white"/>
                        <path d="M13.0201 16.12H11.29V17.85H13.0201V16.12Z" fill="#BE6CFF"/>
                        <path d="M13.0201 17.85H11.29V19.58H13.0201V17.85Z" fill="#BE6CFF"/>
                      </svg>
                    </div>
                  </div>
                </div>

            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-wrap py-6'>
                    <div className='w-full lg:w-[66.6666666%] md:px-3'>
                        <div className='border-[3px] border-gray-300 rounded-xl lg:hidden'>
                          <div className='flex items-end justify-between p-4 px-2 sm:px-4'>
                            <span className='font-bold text-lg text-gray-100 flex items-center'>
                              <span className='mr-2'>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.76153 9.47138C3.35391 9.55775 3.03767 9.77382 2.81279 10.1196C2.58791 10.4654 2.51866 10.8421 2.60503 11.2497L3.8487 17.1194C3.93507 17.527 4.15114 17.8433 4.49693 18.0682C4.84272 18.293 5.21942 18.3623 5.62704 18.2759L16.3881 15.9958C16.7958 15.9095 17.112 15.6934 17.3369 15.3476C17.5618 15.0018 17.631 14.6251 17.5446 14.2175L16.301 8.34781C16.2146 7.9402 15.9985 7.62395 15.6527 7.39907C15.3069 7.1742 14.9302 7.10494 14.5226 7.19131L13.7889 7.34677L13.3225 5.14563C13.0505 3.86164 12.3711 2.86627 11.2843 2.15951C10.1728 1.4367 8.97512 1.21132 7.69112 1.48337C6.40713 1.75543 5.41392 2.44503 4.71148 3.55217C3.98435 4.64325 3.75681 5.83079 4.02886 7.11479L4.49524 9.31592L3.76153 9.47138ZM6.94095 8.79772L6.47457 6.59659C6.34502 5.98516 6.4489 5.42011 6.78621 4.90143C7.12353 4.38274 7.5979 4.05863 8.20932 3.92908C8.82075 3.79953 9.3858 3.90341 9.90449 4.24072C10.4232 4.57804 10.7473 5.05241 10.8768 5.66383L11.3432 7.86497L6.94095 8.79772Z" fill="#407EC9" fillOpacity="0.5"/>
                                </svg>

                              </span>
                              Checkout
                            </span>
                            <span className='text-sm text-gray-100 mb-[3px]'>
                              Total
                              <span className='text-purple-500 ml-1'>
                                £{cartTotal.toFixed(2)}
                              </span>
                            </span>
                            <span className='gray-300'>
                              <button
                                  onClick={() => setAccordionOpen(!accordionOpen)}
                                  className='flex items-center text-gray-100'
                              >
                                  <span className="mr-2">Details </span>
                                  <span
                                  className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-gray-400 transition-all ${
                                      accordionOpen && "rotate-180"
                                  }`}
                                  ></span>
                              </button>
                            </span>
                          </div>
                          <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm pb-4 ${
                            accordionOpen
                              ? "grid-rows-[1fr] opacity-100 px-2 sm:px-4"
                              : "grid-rows-[0fr] opacity-0 px-2 sm:px-4"
                          }`}>
                            <div className="overflow-hidden">
                              {(
                                cartItems.map((item) => <CartProductTile key={item.id} product={item} nocontrols={true} />)
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="my-4 flex flex-wrap">
                          <Tabs>
                            <Tab className="block"
                            title="Home Delivery"
                            iconpath={<svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
                                  </svg>}
                            >
                              {showDeliveryOptions && !showPaymentOptions && 
                              <>
                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <div className='relative'>
                                    <button  onClick={() => {
                                      setShowDeliveryOptions(!showDeliveryOptions)
                                      setShowPaymentOptions(false)
                                      setanimateTrainPayment(false)
                                    }}
                                    className='absolute z-[2] top-[17px] right-[50px] text-sm underline text-purple-500'>Edit</button>
                                    <Dropdown 
                                      expanded={true}
                                      title="Delivery Address"
                                      className="relative bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-md text-white font-semibold flex items-center justify-between w-full"
                                      answer={
                                        <>
                                        <div className='py-6 px-4'>
                                          <div className='text-gray-100 mb-1 font-semibold'>
                                              Your Details
                                          </div>
                                          <div className='text-gray-100'>
                                            Mr Test Test<br />
                                            01234 4567890
                                          </div>
                                          <div className='text-gray-100  mt-4 mb-1 font-semibold'>
                                              Delivering to
                                          </div>
                                          <div className='text-gray-100'>
                                            The Entertainer, TEAL House, Anglo Office Park,
                                            67 White Lion Road, Amersham,
                                            Buckinghamshire, HP7 9FB, United Kingdom
                                          </div>
                                        </div>
                                        </>
                                      }
                                    />
                                  </div>
                                </div>

                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <div className='relative'>
                                    <Dropdown 
                                      expanded={true}
                                      title="Delivery Options"
                                      className="relative bg-gradient-to-br from-gray-600 to-gray-800 p-4 px-2 sm:px-4 rounded-md text-white font-semibold flex items-center justify-between w-full"
                                      answer={
                                        <>
                                        <div className='py-6 px-4'>
                                          <form id="delivery-form" className='flex flex-col'>
                                            <label className='border-b-[3px] border-gray-300 pb-4 mb-4 cursor-pointer'>
                                              <input type="radio" name="option" id="option1" className="hidden" defaultChecked/>
                                              <div className='flex flex-wrap text-gray-100 label-checked:text-gray-100 label-checked:[&>.icon]:rotate-[-45deg] label-checked:[&>.icon]:text-brandGreen label-checked:[&>.cost]:text-brandGreen'>
                                                <div className="rotate-[-12deg] transition-all icon text-gray-300 mr-1">
                                                  <svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
                                                  </svg>
                                                </div>
                                                <div className='cost font-bold mr-1'>Free</div>
                                                <div className='font-bold'>- Standard Delivery</div>
                                                <div className='w-full mt-2'>
                                                  Delivered on or before <span className='font-bold'>Friday 4th July 2025</span>
                                                </div>
                                              </div>
                                            </label>
                                            <label className='border-b-[3px] border-gray-300 pb-4 mb-4 last:border-none last: mb-0 cursor-pointer'>
                                              <input type="radio" name="option" id="option1" className="hidden" />
                                              <div className='flex flex-wrap text-gray-100 label-checked:text-gray-100 label-checked:[&>.icon]:rotate-[-45deg] label-checked:[&>.icon]:text-brandGreen label-checked:[&>.cost]:text-brandGreen'>
                                                <div className="rotate-[-12deg] transition-all icon text-gray-300 mr-1">
                                                  <svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
                                                  </svg>
                                                </div>
                                                <div className='cost font-bold mr-1'>£2.99</div>
                                                <div className='font-bold'>- Express Delivery</div>
                                                <div className='w-full mt-2'>
                                                  Delivered on or before <span className='font-bold'>Wednesday 1st July 2025</span>
                                                </div>
                                              </div>
                                            </label>
                                          </form>
                                          <div className='text-xs text-gray-100'>
                                            Iems will ship as soon as they are available.<br />
                                            See Order Summary for more information.
                                          </div>
                                        </div>
                                        </>
                                      }
                                    />
                                  </div>
                                </div>
                              </>
                              }

                              {showPaymentOptions && 
                              <>
                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <div className='relative'>
                                    <button  onClick={() => {
                                      setShowDeliveryOptions(!showDeliveryOptions)
                                      setShowPaymentOptions(false)
                                      setanimateTrainPayment(false)
                                    }}
                                      className='absolute z-[2] top-[17px] right-[50px] text-sm underline text-purple-500'>Edit</button>
                                    <Dropdown 
                                      expanded={true}
                                      title={<div className='flex items-end'>
                                          <span className='mr-8'>Delivery</span>
                                          <span className='font-[500] text-sm text-gray-100'>Standard</span>
                                        </div>}
                                      className="relative bg-gradient-to-br from-gray-600 to-gray-800 w-[calc(100%+6px)] ml-[-3px] mt-[-3px] p-4 border-[3px] border-gray-300 rounded-md text-white font-semibold flex items-center justify-between"
                                      answer={
                                        <>
                                        <div className='py-6 px-4'>
                                          <div className='text-gray-100 mb-1 font-semibold'>
                                              Your Details
                                          </div>
                                          <div className='text-gray-100'>
                                            Mr Test Test<br />
                                            01234 4567890
                                          </div>
                                          <div className='text-gray-100  mt-4 mb-1 font-semibold'>
                                              Delivering to
                                          </div>
                                          <div className='text-gray-100'>
                                            The Entertainer, TEAL House, Anglo Office Park,
                                            67 White Lion Road, Amersham,
                                            Buckinghamshire, HP7 9FB, United Kingdom
                                          </div>
                                        </div>
                                        </>
                                      }
                                    />
                                  </div>
                                </div>

                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <div className='relative'>
                                    <Dropdown 
                                      expanded={true}
                                      title="Payment Method"
                                      className="relative bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-md text-white font-semibold flex items-center justify-between w-full"
                                      answer={
                                        <>
                                        <div className='py-6 px-4'>
                                          <div className='text-sm text-gray-100 font-bold'>
                                            Express Checkout
                                          </div>
                                          <div className='pb-4 border-b-[3px] border-gray-300'>
                                            <button 
                                              removeIcons={true}
                                              className="text-black hover:text-brandGreen"
                                              iconpath={
                                              <svg width="290" height="40" viewBox="0 0 290 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="290" height="40" rx="20" fill="currentColor"/>
                                                <path d="M81.7699 19.86V25.77H79.8999V11.18H84.8599C86.1199 11.18 87.1899 11.6 88.0599 12.44C88.9599 13.28 89.3999 14.3 89.3999 15.52C89.3999 16.74 88.9499 17.78 88.0599 18.61C87.1899 19.44 86.1199 19.85 84.8599 19.85H81.7699V19.86ZM81.7699 12.98V18.07H84.8999C85.6399 18.07 86.2599 17.82 86.7499 17.32C87.2499 16.82 87.4999 16.22 87.4999 15.53C87.4999 14.84 87.2499 14.26 86.7499 13.76C86.2599 13.24 85.6499 12.99 84.8999 12.99H81.7699V12.98ZM94.2899 15.46C95.6699 15.46 96.7599 15.83 97.5599 16.57C98.3599 17.31 98.7599 18.33 98.7599 19.62V25.77H96.9799V24.38H96.8999C96.1299 25.52 95.0999 26.09 93.8099 26.09C92.7099 26.09 91.7899 25.77 91.0499 25.11C90.3099 24.46 89.9399 23.65 89.9399 22.67C89.9399 21.64 90.3299 20.82 91.1099 20.21C91.8899 19.59 92.9299 19.29 94.2299 19.29C95.3399 19.29 96.2599 19.5 96.9699 19.91V19.48C96.9699 18.83 96.7199 18.28 96.1999 17.82C95.6799 17.36 95.0799 17.14 94.3899 17.14C93.3499 17.14 92.5199 17.58 91.9199 18.47L90.2699 17.44C91.1799 16.12 92.5199 15.47 94.2899 15.47V15.46ZM91.8799 22.7C91.8799 23.19 92.0799 23.6 92.4999 23.92C92.9099 24.24 93.3999 24.41 93.9499 24.41C94.7399 24.41 95.4399 24.12 96.0499 23.53C96.6599 22.94 96.9699 22.26 96.9699 21.47C96.3899 21.01 95.5799 20.78 94.5399 20.78C93.7799 20.78 93.1499 20.97 92.6399 21.33C92.1199 21.71 91.8699 22.17 91.8699 22.71L91.8799 22.7ZM108.93 15.78L102.7 30.15H100.77L103.09 25.12L98.9799 15.78H101.01L103.97 22.95H104.01L106.89 15.78H108.92H108.93Z" fill="white"/>
                                                <path d="M74.3301 18.67C74.3301 18.06 74.2801 17.47 74.1701 16.91H66.3301V20.13H70.8401C70.6701 21.19 70.0601 22.13 69.1701 22.73V24.82H71.8601C73.4301 23.36 74.3301 21.21 74.3301 18.67Z" fill="#4285F4"/>
                                                <path d="M69.1799 22.73C68.4299 23.24 67.4699 23.53 66.3399 23.53C64.1599 23.53 62.3199 22.06 61.6599 20.08H58.8899V22.24C60.2599 24.97 63.0799 26.85 66.3399 26.85C68.5899 26.85 70.4899 26.11 71.8599 24.83L69.1699 22.74L69.1799 22.73Z" fill="#34A853"/>
                                                <path d="M61.4 18.48C61.4 17.92 61.49 17.39 61.66 16.88V14.72H58.89C58.3 15.89 58 17.17 58 18.48C58 19.83 58.32 21.1 58.89 22.23L61.66 20.07C61.49 19.55 61.4 19.01 61.4 18.47V18.48Z" fill="#FABB05"/>
                                                <path d="M66.3399 13.43C67.5699 13.43 68.6699 13.85 69.5399 14.68L71.9199 12.3C70.4699 10.95 68.5899 10.12 66.3399 10.12C63.0799 10.12 60.2599 11.99 58.8899 14.72L61.6599 16.88C62.3199 14.9 64.1699 13.43 66.3399 13.43Z" fill="#E94235"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M145.76 23.66H150.37V15.33H145.76V23.66Z" fill="#FF5F00"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M146.05 19.5C146.05 17.81 146.84 16.3 148.06 15.34C147.16 14.63 146.03 14.21 144.8 14.21C141.89 14.21 139.53 16.58 139.53 19.51C139.53 22.44 141.89 24.81 144.8 24.81C146.03 24.81 147.16 24.39 148.06 23.68C146.83 22.71 146.05 21.21 146.05 19.52" fill="#EB001B"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M156.43 22.78V22.57H156.38L156.32 22.71L156.26 22.57H156.21V22.78H156.25V22.62L156.31 22.75H156.35L156.41 22.62V22.78H156.45H156.43ZM156.09 22.78V22.61H156.16V22.58H155.99V22.61H156.06V22.78H156.1H156.09ZM156.59 19.5C156.59 22.43 154.23 24.8 151.32 24.8C150.09 24.8 148.96 24.38 148.06 23.67C149.29 22.7 150.07 21.2 150.07 19.51C150.07 17.82 149.28 16.32 148.06 15.35C148.96 14.64 150.09 14.22 151.32 14.22C154.23 14.22 156.59 16.59 156.59 19.52V19.5Z" fill="#F79E1B"/>
                                                <path d="M161.09 30.96H135.05C132.96 30.96 131.25 29.26 131.25 27.16V12.8C131.25 10.71 132.95 9 135.05 9H161.09C163.18 9 164.89 10.7 164.89 12.8V27.16C164.89 29.25 163.19 30.96 161.09 30.96ZM135.05 10C133.51 10 132.25 11.25 132.25 12.8V27.16C132.25 28.7 133.5 29.96 135.05 29.96H161.09C162.63 29.96 163.89 28.71 163.89 27.16V12.8C163.89 11.26 162.64 10 161.09 10H135.05Z" fill="white"/>
                                                <path d="M118.95 30.96C118.67 30.96 118.45 30.74 118.45 30.46V9.5C118.45 9.22 118.67 9 118.95 9C119.23 9 119.45 9.22 119.45 9.5V30.46C119.45 30.74 119.23 30.96 118.95 30.96Z" fill="white"/>
                                                <path d="M176.57 21.62C176.46 21.88 176.3 22.11 176.11 22.31C175.92 22.51 175.68 22.66 175.42 22.77C175.16 22.88 174.88 22.94 174.58 22.94C174.28 22.94 174 22.88 173.74 22.77C173.48 22.66 173.25 22.5 173.05 22.31C172.85 22.12 172.7 21.88 172.59 21.62C172.48 21.36 172.42 21.08 172.42 20.78C172.42 20.48 172.48 20.21 172.59 19.94C172.7 19.68 172.86 19.45 173.05 19.25C173.24 19.05 173.48 18.9 173.74 18.79C174 18.68 174.28 18.62 174.58 18.62C174.88 18.62 175.16 18.68 175.42 18.79C175.68 18.9 175.91 19.06 176.11 19.25C176.31 19.44 176.46 19.68 176.57 19.94C176.68 20.2 176.74 20.48 176.74 20.78C176.74 21.08 176.68 21.36 176.57 21.62Z" fill="white"/>
                                                <path d="M182.71 21.62C182.6 21.88 182.44 22.11 182.25 22.31C182.06 22.51 181.82 22.66 181.56 22.77C181.3 22.88 181.02 22.94 180.73 22.94C180.44 22.94 180.15 22.88 179.89 22.77C179.63 22.66 179.4 22.5 179.2 22.31C179 22.12 178.85 21.88 178.74 21.62C178.63 21.36 178.57 21.08 178.57 20.78C178.57 20.48 178.63 20.21 178.74 19.94C178.85 19.68 179.01 19.45 179.2 19.25C179.39 19.05 179.63 18.9 179.89 18.79C180.15 18.68 180.43 18.62 180.73 18.62C181.03 18.62 181.3 18.68 181.56 18.79C181.82 18.9 182.05 19.06 182.25 19.25C182.45 19.44 182.6 19.68 182.71 19.94C182.82 20.2 182.88 20.48 182.88 20.78C182.88 21.08 182.82 21.36 182.71 21.62Z" fill="white"/>
                                                <path d="M188.84 21.62C188.73 21.88 188.57 22.11 188.38 22.31C188.19 22.51 187.95 22.66 187.69 22.77C187.43 22.88 187.15 22.94 186.85 22.94C186.55 22.94 186.27 22.88 186.01 22.77C185.75 22.66 185.52 22.5 185.32 22.31C185.12 22.12 184.97 21.88 184.86 21.62C184.75 21.36 184.69 21.08 184.69 20.78C184.69 20.48 184.75 20.21 184.86 19.94C184.97 19.68 185.13 19.45 185.32 19.25C185.51 19.05 185.75 18.9 186.01 18.79C186.27 18.68 186.55 18.62 186.85 18.62C187.15 18.62 187.43 18.68 187.69 18.79C187.95 18.9 188.18 19.06 188.38 19.25C188.58 19.44 188.73 19.68 188.84 19.94C188.95 20.2 189.01 20.48 189.01 20.78C189.01 21.08 188.95 21.36 188.84 21.62Z" fill="white"/>
                                                <path d="M194.98 21.62C194.87 21.88 194.71 22.11 194.52 22.31C194.33 22.51 194.09 22.66 193.83 22.77C193.57 22.88 193.29 22.94 193 22.94C192.71 22.94 192.42 22.88 192.16 22.77C191.9 22.66 191.67 22.5 191.47 22.31C191.27 22.12 191.12 21.88 191.01 21.62C190.9 21.36 190.84 21.08 190.84 20.78C190.84 20.48 190.9 20.21 191.01 19.94C191.12 19.68 191.28 19.45 191.47 19.25C191.66 19.05 191.9 18.9 192.16 18.79C192.42 18.68 192.7 18.62 193 18.62C193.3 18.62 193.57 18.68 193.83 18.79C194.09 18.9 194.32 19.06 194.52 19.25C194.72 19.44 194.87 19.68 194.98 19.94C195.09 20.2 195.15 20.48 195.15 20.78C195.15 21.08 195.09 21.36 194.98 21.62Z" fill="white"/>
                                                <path d="M206.58 25.98C203.66 25.98 202.94 23.89 202.94 20.18C202.94 15.94 203.9 14.38 206.86 14.38C207.35 14.38 208.26 14.53 208.92 14.96C209.13 15.09 209.45 15.34 209.45 15.67C209.45 16.03 209.07 16.54 208.64 16.54C208.47 16.54 208.33 16.46 208.1 16.31C207.66 16.03 207.06 15.95 206.83 15.95C205.15 15.95 204.75 16.89 204.64 19C204.64 19.08 204.64 19.15 204.69 19.15C204.77 19.15 204.86 19.05 205.02 18.95C205.42 18.7 206.01 18.51 206.72 18.51C209.09 18.51 210.05 20.36 210.05 22.27C210.05 24.18 209.14 25.99 206.59 25.99L206.58 25.98ZM204.75 22.24C204.75 23.06 205.05 24.42 206.58 24.42C208.11 24.42 208.41 23.07 208.41 22.24C208.41 21.41 208.18 20.06 206.58 20.06C204.98 20.06 204.75 21.41 204.75 22.24Z" fill="white"/>
                                                <path d="M213.57 14.74C213.87 14.46 214.11 14.38 214.34 14.38C214.69 14.38 215.1 14.59 215.1 15.22V25.24C215.1 25.78 214.69 25.98 214.28 25.98C213.87 25.98 213.46 25.78 213.46 25.24V17.45C213.46 17.45 213.46 17.3 213.38 17.3C213.33 17.3 213.3 17.33 213.28 17.35L212.19 18.34C211.99 18.5 211.81 18.57 211.65 18.57C211.24 18.57 210.81 18.19 210.81 17.75C210.81 17.57 210.88 17.37 211.07 17.19L213.57 14.75V14.74Z" fill="white"/>
                                                <path d="M222.26 22.11C222.26 20.84 222.03 19.79 220.46 19.79C219.39 19.79 219.06 20.89 218.28 20.89C217.74 20.89 217.31 20.66 217.31 20.08V15.19C217.31 14.73 217.61 14.45 218.02 14.45H222.55C223.09 14.45 223.29 14.83 223.29 15.24C223.29 15.65 223.09 16.01 222.55 16.01H219.11C218.99 16.01 218.96 16.04 218.96 16.16V18.68C218.96 18.75 218.99 18.8 219.08 18.8C219.15 18.8 219.18 18.77 219.18 18.77C219.66 18.41 220.2 18.23 220.84 18.23C223.16 18.23 223.95 19.89 223.95 22.12C223.95 24.74 222.55 25.99 220.55 25.99C218.69 25.99 217.77 25.03 217.4 24.64C217.3 24.52 217.15 24.31 217.15 24.11C217.15 23.78 217.58 23.27 218.04 23.27C218.21 23.27 218.37 23.3 218.57 23.53C218.87 23.88 219.51 24.42 220.45 24.42C221.47 24.42 222.25 23.84 222.25 22.11H222.26Z" fill="white"/>
                                                <path d="M226.06 25.92C225.24 25.92 225.14 25.56 225.14 25.15C225.14 24.21 225.93 22.76 227.28 21.44L229.19 19.58C229.93 18.87 230.15 18.26 230.15 17.7C230.15 16.65 229.61 15.95 228.5 15.95C227.68 15.95 227.31 16.26 226.72 16.79C226.6 16.91 226.47 17 226.21 17C225.81 17 225.35 16.67 225.35 16.19C225.35 15.94 225.53 15.73 225.75 15.5C226.36 14.87 227.27 14.38 228.5 14.38C230.66 14.38 231.86 15.8 231.86 17.66C231.86 18.55 231.6 19.57 230.41 20.73L228.61 22.46C228.15 22.9 227.52 23.58 227.32 24.12C227.32 24.12 227.29 24.22 227.29 24.27C227.29 24.35 227.39 24.35 227.44 24.35H231.1C231.64 24.35 231.84 24.73 231.84 25.14C231.84 25.55 231.64 25.91 231.1 25.91H226.06V25.92Z" fill="white"/>
                                              </svg>

                                            }></button>
                                          </div>
                                          <div className='text-sm text-gray-100 mt-4 font-bold'>
                                            Card Payment
                                          </div>
                                          <div className='flex my-4'>
                                            <div>
                                              <svg width="206" height="43" viewBox="0 0 206 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2227_2428)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M97.3601 30.58H108.69V10.13H97.3601V30.58Z" fill="#FF5F00"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M98.0801 20.35C98.0801 16.2 100.01 12.5 103.03 10.12C100.83 8.38003 98.0501 7.34003 95.0301 7.34003C87.8801 7.34003 82.0801 13.16 82.0801 20.35C82.0801 27.54 87.8801 33.36 95.0301 33.36C98.0501 33.36 100.83 32.32 103.03 30.58C100.02 28.2 98.0801 24.5 98.0801 20.35Z" fill="#EB001B"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M123.57 28.42V27.92H123.44L123.29 28.27L123.14 27.92H123.01V28.42H123.1V28.04L123.24 28.37H123.34L123.48 28.04V28.42H123.57ZM122.74 28.42V28H122.91V27.91H122.48V28H122.65V28.42H122.74ZM123.98 20.36C123.98 27.54 118.18 33.37 111.03 33.37C108.01 33.37 105.23 32.33 103.03 30.59C106.04 28.21 107.98 24.51 107.98 20.36C107.98 16.21 106.05 12.51 103.03 10.13C105.23 8.39004 108.01 7.35004 111.03 7.35004C118.18 7.35004 123.98 13.17 123.98 20.36Z" fill="#F79E1B"/>
                                                <path d="M127.71 1.11999C130.76 1.11999 133.24 3.58999 133.24 6.64999V35.6C133.24 38.65 130.77 41.13 127.71 41.13H78.35C75.3 41.13 72.82 38.66 72.82 35.6V6.63999C72.82 3.58999 75.29 1.10999 78.35 1.10999H127.71M127.71 -0.0100098H78.35C74.69 -0.0100098 71.71 2.96999 71.71 6.62999V35.58C71.71 39.24 74.69 42.22 78.35 42.22H127.71C131.37 42.22 134.35 39.24 134.35 35.58V6.63999C134.35 2.97999 131.37 -9.76585e-06 127.71 -9.76585e-06V-0.0100098Z" fill="#EAEAEA"/>
                                                <path d="M56.01 1.12C59.06 1.12 61.54 3.59 61.54 6.65V35.6C61.54 38.65 59.07 41.13 56.01 41.13H6.64C3.59 41.13 1.11 38.66 1.11 35.6V6.64C1.12 3.59 3.59 1.12 6.64 1.12H56M56 0H6.64C2.98 0 0 2.98 0 6.64V35.59C0 39.25 2.98 42.23 6.64 42.23H56C59.66 42.23 62.64 39.25 62.64 35.59V6.64C62.64 2.98 59.66 0 56 0Z" fill="#EAEAEA"/>
                                                <path d="M199.01 1.11999C202.06 1.11999 204.54 3.58999 204.54 6.64999V35.6C204.54 38.65 202.07 41.13 199.01 41.13H149.65C146.6 41.13 144.12 38.66 144.12 35.6V6.63999C144.12 3.58999 146.59 1.10999 149.65 1.10999H199.01M199.01 -0.0100098H149.65C145.99 -0.0100098 143.01 2.96999 143.01 6.62999V35.58C143.01 39.24 145.99 42.22 149.65 42.22H199.01C202.67 42.22 205.65 39.24 205.65 35.58V6.63999C205.65 2.97999 202.67 -9.76585e-06 199.01 -9.76585e-06V-0.0100098Z" fill="#EAEAEA"/>
                                                <path d="M196.35 26.13V25.59H196.22L196.06 25.95L195.9 25.59H195.77V26.13H195.86V25.73L196.02 26.09H196.13L196.29 25.73V26.13H196.36H196.35ZM195.45 26.13V25.68H195.63V25.59H195.18V25.68H195.36V26.13H195.45Z" fill="#00A2E5"/>
                                                <path d="M180.39 28.44H168.25V6.62H180.39V28.44Z" fill="#7375CF"/>
                                                <path d="M169.03 17.53C169.03 13.11 171.1 9.15997 174.33 6.61997C171.97 4.75997 168.99 3.65997 165.75 3.65997C158.1 3.65997 151.88 9.87997 151.88 17.53C151.88 25.18 158.1 31.4 165.75 31.4C168.98 31.4 171.97 30.3 174.33 28.44C171.1 25.9 169.03 21.95 169.03 17.53Z" fill="#EB001B"/>
                                                <path d="M196.78 17.53C196.78 25.18 190.56 31.4 182.91 31.4C179.68 31.4 176.69 30.3 174.33 28.44C177.56 25.9 179.63 21.95 179.63 17.53C179.63 13.11 177.56 9.15997 174.33 6.61997C176.69 4.75997 179.67 3.65997 182.91 3.65997C190.56 3.65997 196.78 9.87997 196.78 17.53Z" fill="#00A2E5"/>
                                                <path d="M184.48 34.62C184.64 34.62 184.88 34.64 185.04 34.71L184.79 35.47C184.61 35.4 184.45 35.38 184.3 35.38C183.78 35.38 183.51 35.72 183.51 36.32V38.39H182.7V34.71H183.49V35.16C183.71 34.82 184.03 34.62 184.48 34.62ZM181.52 35.43H180.22V37.09C180.22 37.45 180.35 37.7 180.76 37.7C180.96 37.7 181.23 37.63 181.48 37.5L181.7 38.2C181.45 38.38 181.05 38.49 180.69 38.49C179.75 38.49 179.41 37.97 179.41 37.12V35.44H178.67V34.7H179.41V33.58H180.22V34.7H181.52V35.44V35.43ZM171.26 36.22C171.35 35.68 171.66 35.32 172.25 35.32C172.77 35.32 173.1 35.63 173.19 36.22H171.26ZM174.02 36.56C174.02 35.42 173.3 34.63 172.27 34.63C171.24 34.63 170.43 35.42 170.43 36.56C170.43 37.7 171.22 38.49 172.32 38.49C172.88 38.49 173.38 38.36 173.82 37.97L173.42 37.39C173.11 37.64 172.72 37.77 172.34 37.77C171.82 37.77 171.35 37.52 171.24 36.87H173.98C174 36.76 174.02 36.67 174.02 36.56ZM177.54 35.66C177.32 35.53 176.87 35.35 176.4 35.35C175.93 35.35 175.7 35.51 175.7 35.78C175.7 36.03 175.97 36.09 176.33 36.14L176.71 36.18C177.52 36.29 177.99 36.63 177.99 37.28C177.99 37.98 177.38 38.49 176.31 38.49C175.7 38.49 175.14 38.33 174.72 38.02L175.1 37.39C175.37 37.59 175.77 37.77 176.33 37.77C176.89 37.77 177.16 37.61 177.16 37.32C177.16 37.12 176.96 37.01 176.51 36.94L176.13 36.9C175.3 36.79 174.85 36.41 174.85 35.82C174.85 35.08 175.46 34.63 176.38 34.63C176.96 34.63 177.5 34.76 177.88 35.01L177.54 35.66ZM187.42 35.37C187.26 35.37 187.11 35.39 186.97 35.46C186.84 35.53 186.7 35.59 186.61 35.71C186.52 35.83 186.43 35.93 186.36 36.09C186.29 36.22 186.27 36.4 186.27 36.56C186.27 36.74 186.29 36.9 186.36 37.03C186.43 37.16 186.49 37.3 186.61 37.41C186.73 37.52 186.83 37.59 186.97 37.66C187.11 37.73 187.26 37.75 187.42 37.75C187.58 37.75 187.73 37.73 187.87 37.66C188 37.59 188.14 37.53 188.23 37.41C188.34 37.3 188.41 37.19 188.48 37.03C188.55 36.9 188.57 36.72 188.57 36.56C188.57 36.38 188.55 36.22 188.48 36.09C188.41 35.96 188.35 35.82 188.23 35.71C188.11 35.6 188.01 35.53 187.87 35.46C187.74 35.42 187.58 35.37 187.42 35.37ZM187.42 34.63C187.71 34.63 187.98 34.67 188.21 34.79C188.46 34.88 188.66 35.01 188.84 35.19C189.02 35.37 189.15 35.57 189.27 35.8C189.36 36.05 189.43 36.29 189.43 36.56C189.43 36.83 189.39 37.1 189.27 37.32C189.18 37.57 189.02 37.77 188.84 37.93C188.66 38.11 188.46 38.24 188.21 38.33C187.96 38.42 187.69 38.49 187.42 38.49C187.13 38.49 186.86 38.45 186.63 38.33C186.38 38.24 186.18 38.11 186 37.93C185.82 37.75 185.69 37.55 185.57 37.32C185.48 37.07 185.41 36.83 185.41 36.56C185.41 36.29 185.45 36.02 185.57 35.8C185.66 35.55 185.82 35.35 186 35.19C186.18 35.01 186.38 34.88 186.63 34.79C186.85 34.68 187.12 34.63 187.42 34.63ZM166.59 36.56C166.59 35.91 167.02 35.37 167.71 35.37C168.4 35.37 168.81 35.89 168.81 36.56C168.81 37.23 168.36 37.73 167.71 37.73C167.01 37.73 166.59 37.21 166.59 36.56ZM169.58 36.56V34.72H168.77V35.17C168.52 34.83 168.14 34.63 167.6 34.63C166.57 34.63 165.76 35.44 165.76 36.56C165.76 37.68 166.57 38.49 167.6 38.49C168.12 38.49 168.5 38.29 168.77 37.95V38.4H169.58V36.56ZM165.07 38.4V36.09C165.07 35.21 164.51 34.63 163.61 34.63C163.14 34.63 162.64 34.76 162.31 35.28C162.06 34.88 161.66 34.63 161.1 34.63C160.72 34.63 160.31 34.74 160.02 35.17V34.72H159.21V38.4H160.02V36.36C160.02 35.73 160.38 35.37 160.92 35.37C161.46 35.37 161.73 35.71 161.73 36.34V38.38H162.54V36.34C162.54 35.71 162.92 35.35 163.44 35.35C163.96 35.35 164.25 35.69 164.25 36.32V38.36H165.08V38.4H165.07Z" fill="black"/>
                                                <path d="M190.27 38.1V38.19H190.36C190.36 38.19 190.4 38.19 190.4 38.17C190.42 38.17 190.42 38.15 190.42 38.13C190.42 38.11 190.42 38.11 190.4 38.11C190.4 38.11 190.38 38.09 190.36 38.09H190.27V38.11V38.1ZM190.36 38.06C190.36 38.06 190.43 38.06 190.45 38.08C190.47 38.1 190.49 38.12 190.49 38.17C190.49 38.19 190.49 38.21 190.47 38.24C190.45 38.27 190.43 38.26 190.38 38.26L190.49 38.39H190.4L190.29 38.26H190.27V38.39H190.2V38.05H190.36V38.06ZM190.34 38.51C190.34 38.51 190.41 38.51 190.45 38.49C190.49 38.47 190.52 38.45 190.54 38.42C190.56 38.4 190.58 38.38 190.61 38.33C190.64 38.28 190.63 38.26 190.63 38.22C190.63 38.18 190.63 38.15 190.61 38.11C190.59 38.07 190.57 38.04 190.54 38.02C190.52 38 190.5 37.98 190.45 37.95C190.43 37.93 190.38 37.93 190.34 37.93C190.3 37.93 190.27 37.93 190.23 37.95C190.19 37.97 190.16 37.99 190.14 38.02C190.12 38.04 190.1 38.09 190.07 38.11C190.05 38.15 190.05 38.18 190.05 38.22C190.05 38.26 190.05 38.29 190.07 38.33C190.09 38.37 190.11 38.4 190.14 38.42C190.16 38.44 190.21 38.46 190.23 38.49C190.27 38.51 190.3 38.51 190.34 38.51ZM190.34 37.86C190.34 37.86 190.43 37.86 190.47 37.88C190.51 37.9 190.56 37.92 190.58 37.95C190.6 37.98 190.65 38.02 190.67 38.06C190.69 38.1 190.69 38.15 190.69 38.19C190.69 38.23 190.69 38.28 190.67 38.32C190.65 38.36 190.63 38.41 190.58 38.43C190.53 38.45 190.51 38.5 190.47 38.52C190.43 38.54 190.38 38.54 190.34 38.54C190.3 38.54 190.23 38.54 190.18 38.52C190.13 38.5 190.09 38.48 190.07 38.43C190.05 38.41 190 38.36 189.98 38.32C189.96 38.28 189.96 38.23 189.96 38.19C189.96 38.15 189.96 38.1 189.98 38.06C190 38.02 190.02 37.97 190.07 37.95C190.09 37.93 190.14 37.88 190.18 37.88C190.22 37.86 190.29 37.86 190.34 37.86Z" fill="black"/>
                                                <path d="M38.1201 13.22C34.6601 13.22 31.5601 15.02 31.5601 18.33C31.5601 22.13 37.0501 22.4 37.0501 24.31C37.0501 25.11 36.1301 25.83 34.5501 25.83C32.3201 25.83 30.6501 24.82 30.6501 24.82L29.9401 28.17C29.9401 28.17 31.8601 29.02 34.4201 29.02C38.2101 29.02 41.1901 27.14 41.1901 23.76C41.1901 19.74 35.6801 19.49 35.6801 17.71C35.6801 17.08 36.4401 16.39 38.0101 16.39C39.7801 16.39 41.2301 17.12 41.2301 17.12L41.9301 13.89C41.9301 13.89 40.3601 13.21 38.1401 13.21L38.1201 13.22ZM6.44011 13.46L6.36011 13.95C6.36011 13.95 7.82011 14.22 9.13011 14.75C10.8201 15.36 10.9401 15.72 11.2201 16.82L14.3201 28.77H18.4801L24.8801 13.46H20.7301L16.6201 23.87L14.9401 15.05C14.7901 14.04 14.0101 13.46 13.0501 13.46H6.44011ZM26.5501 13.46L23.3001 28.77H27.2501L30.4901 13.46H26.5501ZM48.6101 13.46C47.6601 13.46 47.1501 13.97 46.7801 14.86L40.9901 28.76H45.1401L45.9401 26.44H50.9901L51.4801 28.76H55.1401L51.9501 13.45H48.6201L48.6101 13.46ZM49.1501 17.6L50.3801 23.34H47.0901L49.1501 17.6Z" fill="#1434CB"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_2227_2428">
                                                <rect width="205.66" height="42.24" fill="white"/>
                                                </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className='text-gray-100'>
                                            <span className='font-bold'>Payment details</span>
                                            <span className='text-xs block'>(* Mandatory)</span>
                                          </div>
                                          <form className='space-y-8' id="checkout-form">
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
                                              <input id="nameOnCard" type="text" placeholder="Name on card*" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label for="nameOnCard" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Name on Card*</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
                                              <input id="cardNumber" type="text" placeholder="Card Number*" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label for="cardNumber" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none font-semibold">Card Number*</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
                                              <input id="securityNumber" type="text" placeholder="Security Number*" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label for="securityNumber" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Security Number*</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            {showPaymentOptions &&
                                              <Button 
                                                className='mt-6 h-[44px] shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-boldtext-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 font-bold'
                                                iconpath={
                                                  <svg width="18" height="19" viewBox="0 0 18 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.76153 9.47138C3.35391 9.55775 3.03767 9.77382 2.81279 10.1196C2.58791 10.4654 2.51866 10.8421 2.60503 11.2497L3.8487 17.1194C3.93507 17.527 4.15114 17.8433 4.49693 18.0682C4.84272 18.293 5.21942 18.3623 5.62704 18.2759L16.3881 15.9958C16.7958 15.9095 17.112 15.6934 17.3369 15.3476C17.5618 15.0018 17.631 14.6251 17.5446 14.2175L16.301 8.34781C16.2146 7.9402 15.9985 7.62395 15.6527 7.39907C15.3069 7.1742 14.9302 7.10494 14.5226 7.19131L13.7889 7.34677L13.3225 5.14563C13.0505 3.86164 12.3711 2.86627 11.2843 2.15951C10.1728 1.4367 8.97512 1.21132 7.69112 1.48337C6.40713 1.75543 5.41392 2.44503 4.71148 3.55217C3.98435 4.64325 3.75681 5.83079 4.02886 7.11479L4.49524 9.31592L3.76153 9.47138ZM6.94095 8.79772L6.47457 6.59659C6.34502 5.98516 6.4489 5.42011 6.78621 4.90143C7.12353 4.38274 7.5979 4.05863 8.20932 3.92908C8.82075 3.79953 9.3858 3.90341 9.90449 4.24072C10.4232 4.57804 10.7473 5.05241 10.8768 5.66383L11.3432 7.86497L6.94095 8.79772Z" />
                                                  </svg>

                                                }
                                                link={'/confirmation'}>
                                                  Checkout Securely
                                              </Button>
                                            }
                                        </form>
                                        </div>
                                        </>
                                      }
                                    />
                                  </div>
                                </div>
                              </>
                              }
                              {!showDeliveryOptions &&
                            <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                <Dropdown 
                                  expanded={true}
                                  title="Delivery Address (*Mandatory)"
                                  className="p-4 px-2 sm:px-4 rounded-md text-white font-semibold flex items-center justify-between w-full bg-gradient-to-br from-gray-600 to-gray-800"
                                  answer={
                                    <form id="address-form" className='py-6 space-y-8 px-4'>
                                        <div className={`flex h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${name && 'border-red-600'}`}>
                                          <span
                                            className="absolute left-[calc(20%-20px)] md:left-[calc(15%-10px)] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
                                          <select className='relative w-[20%] appearance-none border-r-[3px] bg-black border-gray-400 pr-4 mr-2 text-gray-100 font-bold outline-none'>
                                            <option>Mr</option>
                                          </select>
                                          <div className="relative w-full">
                                            <input type="text" id='firstName' placeholder="First Name" onChange={handleNameChange} onBlur={handleNameChange} className="peer pr-[20px] text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label for="firstName" className="font-semibold pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">First Name</label>
                                            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-0 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                              <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                        <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${lastname && 'border-red-600'}`}>
                                          <input id="lastName" type="text" placeholder="Last Name" onChange={handleLastNameChange} onBlur={handleLastNameChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                          <label for="lastName" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Last Name</label>
                                          <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                              <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                              </svg>
                                            </span>
                                        </div>
                                        <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${phone && 'border-red-600'}`}>
                                          <span
                                            className="absolute left-[calc(20%-20px)] md:left-[calc(15%-10px)] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
                                          <select id="areaCode" className='relative w-[20%] appearance-none border-r-[3px] bg-black border-gray-400 pr-4 mr-2 text-gray-100 font-bold outline-none'>
                                            <option>+44</option>
                                          </select>
                                          <div className="relative w-full">
                                            <input id="phoneNumber" type="number" placeholder="1234 567890" onChange={handlePhoneChange} onBlur={handlePhoneChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label for="phoneNumber" className="font-semibold pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Phone Number</label>
                                            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-0 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                              <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                        {!showManualDelivery &&
                                        <>
                                          <div className={`flex mt-5 h-[44px] pr-3 pl-8 rounded-lg w-full border border-[3px] border-brandBlue relative group ${lookup && 'border-red-600'}`}>
                                            <input id="addressFinder" type="text" placeholder="Type address or postcode" onChange={handleLookupChange} onBlur={handleLookupChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label for="addressFinder" className="font-semibold pr-3 pl-[30px] pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Type address or postcode</label>
                                            <span className="absolute p-1 h-full w-[20px] flex items-center justify-center top-0 left-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                              <svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.7539 23.8242C17.918 23.9883 18 24.1875 18 24.4219C18 24.6562 17.918 24.8555 17.7539 25.0195L16.7695 26.0039C16.6055 26.168 16.4062 26.25 16.1719 26.25C15.9375 26.25 15.7383 26.168 15.5742 26.0039L12.0586 22.4883C11.8945 22.3242 11.8125 22.125 11.8125 21.8906V21.3281C10.5 22.3594 9 22.875 7.3125 22.875C5.29688 22.875 3.57422 22.1602 2.14453 20.7305C0.714844 19.3008 0 17.5781 0 15.5625C0 13.5469 0.714844 11.8242 2.14453 10.3945C3.57422 8.96484 5.29688 8.25 7.3125 8.25C9.32812 8.25 11.0508 8.96484 12.4805 10.3945C13.9102 11.8242 14.625 13.5469 14.625 15.5625C14.625 17.25 14.1094 18.75 13.0781 20.0625H13.6406C13.875 20.0625 14.0742 20.1445 14.2383 20.3086L17.7539 23.8242ZM4.11328 18.7617C5.00391 19.6289 6.07031 20.0625 7.3125 20.0625C8.55469 20.0625 9.60938 19.6289 10.4766 18.7617C11.3672 17.8711 11.8125 16.8047 11.8125 15.5625C11.8125 14.3203 11.3672 13.2656 10.4766 12.3984C9.60938 11.5078 8.55469 11.0625 7.3125 11.0625C6.07031 11.0625 5.00391 11.5078 4.11328 12.3984C3.24609 13.2656 2.8125 14.3203 2.8125 15.5625C2.8125 16.8047 3.24609 17.8711 4.11328 18.7617Z" fill="currentColor"/>
                                              </svg>
                                            </span>
                                            <span onClick={handleShowStoreResults} className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-full h-auto">
                                                  <path d="M12.9102 6.21625C13.1167 6.21625 13.22 6.31953 13.22 6.52609V7.55891C13.22 7.76547 13.1167 7.86875 12.9102 7.86875H12.1355C11.9462 9.0737 11.4126 10.1151 10.5347 10.993C9.67401 11.8537 8.6412 12.3787 7.43625 12.568V13.3427C7.43625 13.5492 7.33297 13.6525 7.12641 13.6525H6.09359C5.88703 13.6525 5.78375 13.5492 5.78375 13.3427V12.568C4.5788 12.3787 3.53738 11.8537 2.65949 10.993C1.79882 10.1151 1.2738 9.0737 1.08445 7.86875H0.309844C0.103281 7.86875 0 7.76547 0 7.55891V6.52609C0 6.31953 0.103281 6.21625 0.309844 6.21625H1.08445C1.2738 5.0113 1.79882 3.97849 2.65949 3.11781C3.53738 2.23992 4.5788 1.7063 5.78375 1.51695V0.742344C5.78375 0.535781 5.88703 0.4325 6.09359 0.4325H7.12641C7.33297 0.4325 7.43625 0.535781 7.43625 0.742344V1.51695C8.6412 1.7063 9.67401 2.23992 10.5347 3.11781C11.4126 3.97849 11.9462 5.0113 12.1355 6.21625H12.9102ZM7.43625 10.8897C8.19365 10.7176 8.83915 10.3647 9.37277 9.83109C9.92361 9.28026 10.2851 8.62615 10.4572 7.86875H9.39859C9.19203 7.86875 9.08875 7.76547 9.08875 7.55891V6.52609C9.08875 6.31953 9.19203 6.21625 9.39859 6.21625H10.4572C10.2851 5.45885 9.92361 4.81335 9.37277 4.27973C8.83915 3.72889 8.19365 3.36741 7.43625 3.19527V4.25391C7.43625 4.46047 7.33297 4.56375 7.12641 4.56375H6.09359C5.88703 4.56375 5.78375 4.46047 5.78375 4.25391V3.19527C5.02635 3.36741 4.37224 3.72889 3.82141 4.27973C3.28779 4.81335 2.93491 5.45885 2.76277 6.21625H3.82141C4.02797 6.21625 4.13125 6.31953 4.13125 6.52609V7.55891C4.13125 7.76547 4.02797 7.86875 3.82141 7.86875H2.76277C2.93491 8.62615 3.28779 9.28026 3.82141 9.83109C4.37224 10.3647 5.02635 10.7176 5.78375 10.8897V9.83109C5.78375 9.62453 5.88703 9.52125 6.09359 9.52125H7.12641C7.33297 9.52125 7.43625 9.62453 7.43625 9.83109V10.8897ZM7.17805 6.47445C7.35018 6.62937 7.43625 6.81872 7.43625 7.0425C7.43625 7.26628 7.35018 7.46423 7.17805 7.63637C7.02313 7.79129 6.83378 7.86875 6.61 7.86875C6.38622 7.86875 6.18827 7.79129 6.01613 7.63637C5.86121 7.46423 5.78375 7.26628 5.78375 7.0425C5.78375 6.81872 5.86121 6.62937 6.01613 6.47445C6.18827 6.30232 6.38622 6.21625 6.61 6.21625C6.83378 6.21625 7.02313 6.30232 7.17805 6.47445Z" fill="currentColor"/>
                                                </svg>
                                              </span>
                                          </div>
                                          {showStoreResults &&
                                            <div className="text-xs text-gray-100 flex flex-col mt-3">
                                              <span>The Entertainer, TEAL House, Anglo Office Park,</span>
                                              <span>67 White Lion Road, Amersham,</span>
                                              <span>Buckinghamshire, HP7 9FB, United Kingdom</span>
                                              <button onClick={handleShowStoreResults} className="text-gray-100 text-left underline mt-3">
                                                Edit address
                                              </button>
                                            </div>
                                          }
                                          {!showStoreResults &&
                                            <button onClick={handleShowManualAddress} className='text-xs text-gray-100 underline mt-4'>
                                              Enter address manually
                                            </button>
                                          }
                                        </>
                                        }
                                        <div className={`overflow-hiddden transition-all space-y-8 ${showManualDelivery ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                                          <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${address1 && 'border-red-600'}`}>
                                            <input id="address1" type="text" placeholder="Address 1" onChange={handleAddress1Change} onBlur={handleAddress1Change} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label for="address1" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Address 1</label>
                                            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                </svg>
                                              </span>
                                          </div>
                                          <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${address2 && 'border-red-600'}`}>
                                            <input id="address2" type="text" placeholder="Address 2" onChange={handleAddress2Change} onBlur={handleAddress2Change} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label for="address2" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Address 2</label>
                                            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                </svg>
                                              </span>
                                          </div>
                                          <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${town && 'border-red-600'}`}>
                                            <input id="townCity" type="text" placeholder="Town/City" onChange={handleTownChange} onBlur={handleTownChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label for="townCity" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Town/City</label>
                                            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                </svg>
                                              </span>
                                          </div>
                                          <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${county && 'border-red-600'}`}>
                                            <input id="county" type="text" placeholder="County" onChange={handleCountyChange} onBlur={handleCountyChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label for="county" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">County</label>
                                            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                </svg>
                                              </span>
                                          </div>
                                          <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${postcode && 'border-red-600'}`}>
                                            <input id="postcode" type="text" placeholder="Postcode" onChange={handlePostcodeChange} onBlur={handlePostcodeChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label for="postcode" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Postcode</label>
                                            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                </svg>
                                              </span>
                                          </div>
                                          <div className="flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative">
                                            <span
                                              className="absolute right-[15px] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
                                            <select id="country" className='relative w-full appearance-none border-gray-400 bg-black pr-4 mr-2 text-gray-100 font-bold outline-none'>
                                              <option>United Kingdom</option>
                                            </select>
                                          </div>
                                        </div>
                                    </form>
                                  }
                                />
                              </div>
                            }
                            <div className='bg-black p-4 w-full'>
                          {!showDeliveryOptions &&
                            <button 
                              className={`h-[44px] w-full bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all ${!selectDelivery && 'pointer-events-none opacity-[0.5]'}`}
                              iconpath={
                                <svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
                                </svg>
                              }
                              onClick={() => {
                                setShowDeliveryOptions(!showDeliveryOptions)
                                setShowPaymentOptions(false)
                              }}>
                                Select delivery options
                            </button>
                          }
                          {showDeliveryOptions && !showPaymentOptions &&
                            <button 
                              className='h-[44px] w-full bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all mt-4'
                              iconpath={
                                <svg width="23" height="19" viewBox="0 0 23 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0.518313 13.4305L2.59111 3.64768L22.1567 7.79327L20.0839 17.5761C19.9674 18.1264 19.4181 18.4572 18.8984 18.3471L1.28932 14.6161C0.739033 14.4995 0.401719 13.9808 0.518313 13.4305ZM15.5616 9.97358L15.3543 10.9519C15.296 11.227 15.4647 11.4863 15.7398 11.5446L18.6746 12.1665C18.9192 12.2183 19.2091 12.0561 19.2674 11.781L19.4747 10.8027C19.5265 10.5581 19.3338 10.2617 19.0892 10.2099L16.1544 9.58808C15.8792 9.52978 15.6134 9.72901 15.5616 9.97358ZM14.7843 13.6421L14.6806 14.1313C14.6482 14.2841 14.7205 14.3953 14.8734 14.4277L18.2974 15.1531C18.4197 15.1791 18.5614 15.1132 18.5938 14.9604L18.6974 14.4713C18.7233 14.349 18.6269 14.2008 18.5047 14.1749L15.0807 13.4494C14.9278 13.417 14.8102 13.5198 14.7843 13.6421ZM3.66673 8.21994L3.56309 8.70908C3.53071 8.86194 3.60299 8.97308 3.75584 9.00547L13.0495 10.9746C13.1718 11.0005 13.3135 10.9347 13.3459 10.7819L13.4496 10.2927C13.4755 10.1704 13.3791 10.0222 13.2568 9.99634L3.96312 8.02719C3.81027 7.9948 3.69264 8.09765 3.66673 8.21994ZM3.04489 11.1548L2.94126 11.6439C2.90887 11.7968 2.98115 11.9079 3.13401 11.9403L8.51456 13.0804C8.63684 13.1063 8.77856 13.0405 8.81095 12.8876L8.91459 12.3985C8.9405 12.2762 8.84412 12.128 8.72183 12.1021L3.34129 10.962C3.18843 10.9296 3.0708 11.0325 3.04489 11.1548ZM22.2894 4.75478C22.534 4.8066 22.7268 5.10299 22.6749 5.34756L22.364 6.81498L2.79838 2.6694L3.1093 1.20198C3.16112 0.957407 3.42694 0.758179 3.70208 0.816476L22.2894 4.75478Z" />
                                </svg>
                              }
                              onClick={() => {
                                setShowPaymentOptions(!showPaymentOptions)
                                setanimateTrainDelivery(false);
                                setanimateTrainPayment(true);
                              }}>
                                Go To Payment
                            </button>
                          }
                        </div>
                            </Tab>
                            <Tab className="block"
                              title="Click & Collect"
                              iconpath={
                                <svg width="23" height="20" viewBox="0 0 23 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8971 13.691L11.8687 9.10528L13.703 9.49393L12.1484 16.831C12.0391 17.3469 11.5241 17.6571 11.0369 17.5539L3.69979 15.9993C3.1839 15.89 2.86767 15.4037 2.97697 14.8878L4.53157 7.55069L6.36585 7.93933L5.39422 12.525L10.8971 13.691ZM21.36 8.69058C21.6337 9.37747 21.0338 10.0889 20.3173 9.93706L3.80875 6.43922C3.06358 6.28133 2.8037 5.38775 3.33247 4.87089L6.54592 1.71851C6.77254 1.497 7.09558 1.38576 7.41085 1.45256L19.0184 3.91198C19.3337 3.97878 19.5838 4.21147 19.7011 4.50585L21.36 8.69058ZM15.7198 18.0669L17.3715 10.2712L19.2058 10.6599L17.554 18.4556C17.4994 18.7135 17.2276 18.8655 16.9983 18.817L16.0812 18.6226C15.8232 18.568 15.6651 18.3249 15.7198 18.0669Z"/>
                                  </svg>
                              }
                            >
                              {!showDeliveryOptions &&
                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <Dropdown 
                                    expanded={true}
                                    title="Collect Address"
                                    className="relative bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-md text-white font-semibold flex items-center justify-between w-full"
                                    answer={
                                      <div>
                                        <form id="manual-address-form" className='py-6 px-4'>
                                          <div className={`flex h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${addressfinder && 'border-red-600'}`}>
                                            <input type="text" placeholder="Enter city, town or postcode" onChange={handleAddressFinderChange} onBlur={handleAddressFinderChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                            <label className="font-semibold pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent px-3 text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none">Enter city, town or postcode</label>
                                          </div>
                                          <button onClick={handleShowManualAddressCollect} className='text-xs text-gray-100 underline mt-2'>
                                            Enter address manually
                                          </button>
                                          <div className={`overflow-hiddden transition-all space-y-8 ${showManualCollect ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${address1 && 'border-red-600'}`}>
                                              <input type="text" placeholder="Address 1" onChange={handleAddress1Change} onBlur={handleAddress1Change} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Address 1</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${address2 && 'border-red-600'}`}>
                                              <input type="text" placeholder="Address 2" onChange={handleAddress2Change} onBlur={handleAddress2Change} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Address 2</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${town && 'border-red-600'}`}>
                                              <input type="text" placeholder="Town/City" onChange={handleTownChange} onBlur={handleTownChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Town/City</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${county && 'border-red-600'}`}>
                                              <input type="text" placeholder="County" onChange={handleCountyChange} onBlur={handleCountyChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">County</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative ${postcode && 'border-red-600'}`}>
                                              <input type="text" placeholder="Postcode" onChange={handlePostcodeChange} onBlur={handlePostcodeChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Postcode</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            <div className="flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative">
                                              <span
                                                className="absolute right-[15px] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
                                              <select className='relative w-full appearance-none border-gray-400 bg-black pr-4 mr-2 text-gray-100 font-bold outline-none'>
                                                <option>United Kingdom</option>
                                              </select>
                                            </div>
                                          </div>
                                        </form>
                                        <div className='px-5 w-full'>
                                          <Button 
                                            className={`bg-brandGreen h-[44px] shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] text-white py-0 px-4 pl-2 transition-all hover:bg-brandLightGreen hover:scale-105 mb-6 ${addressfinder && 'pointer-events-none bg-gray-400'}`}
                                            removeIcons={true}
                                            onClick={() => setShowClickAndCollectResults(true)}
                                            >
                                              Find Store
                                          </Button>
                                        </div>
                                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm pb-4 ${
                                          clickAndCollectResults
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                          }`}
                                        >
                                          <div className='overflow-hidden'>
                                            <div className='px-5 w-full'>
                                              <div className='font-bold text-gray-100'>
                                                Click & Collect options
                                              </div>
                                              <div className='mt-4'>
                                                <form id="pickup-form" className='flex'>
                                                  <label className='text-sm text-gray-100 mr-6 font-semibold'>
                                                    <input type="radio" name="option" id="option1" className='accent-brandGreen mr-2' />
                                                    Entertainer stores
                                                  </label>
                                                  <label className='text-sm text-gray-100 font-semibold'>
                                                    <input type="radio" name="option" id="option1" className='accent-brandGreen mr-2' />
                                                    Tesco stores
                                                  </label>
                                                </form>
                                                <div className='flex justify-between py-3 border-b-[3px] border-gray-300'>
                                                  <div>
                                                    <button className='text-sm text-gray-100 mr-3 font-semibold'>
                                                      List view
                                                    </button>
                                                    <button className='text-sm text-gray-100 font-semibold'>
                                                      map view
                                                    </button>
                                                  </div>
                                                  <span className='text-sm text-gray-100'>
                                                    Results
                                                  </span>
                                                </div>
                                                <div className="text-sm text-brandBlue py-4">
                                                  <span className="font-semibold">The Entertainer Amersham</span>
                                                  <br />2 Sycamore Road, Amersham HP6 5DR
                                                  <div className="text-gray-100 mt-2">
                                                    Collect within 30 minutes for FREE
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    }
                                  />
                                </div>
                              }
                              {showDeliveryOptions && !showPaymentOptions && 
                              <>
                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <div className='relative'>
                                    <button  onClick={() => {
                                      setShowDeliveryOptions(!showDeliveryOptions)
                                      setShowPaymentOptions(false)
                                      setanimateTrainPayment(false)
                                    }}
                                    className='absolute z-[2] top-[17px] right-[50px] text-sm underline text-purple-500'>Edit</button>
                                    <Dropdown 
                                      expanded={true}
                                      title="Delivery Address"
                                      className="relative bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-md text-white font-semibold flex items-center justify-between w-full"
                                      answer={
                                        <>
                                        <div className='py-6 px-4'>
                                          <div className='text-gray-100 mb-1 font-semibold'>
                                              Your Details
                                          </div>
                                          <div className='text-gray-100'>
                                            Mr Test Test<br />
                                            01234 4567890
                                          </div>
                                          <div className='text-gray-100  mt-4 mb-1 font-semibold'>
                                              Delivering to
                                          </div>
                                          <div className='text-gray-100'>
                                            The Entertainer, TEAL House, Anglo Office Park,
                                            67 White Lion Road, Amersham,
                                            Buckinghamshire, HP7 9FB, United Kingdom
                                          </div>
                                        </div>
                                        </>
                                      }
                                    />
                                  </div>
                                </div>

                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <div className='relative'>
                                    <Dropdown 
                                      expanded={true}
                                      title="Delivery Options"
                                      className="relative bg-gradient-to-br from-gray-600 to-gray-800 p-4 px-2 sm:px-4 rounded-md text-white font-semibold flex items-center justify-between w-full"
                                      answer={
                                        <>
                                        <div className='py-6 px-4'>
                                          <form id="delivery-form" className='flex flex-col'>
                                            <label className='border-b-[3px] border-gray-300 pb-4 mb-4 cursor-pointer'>
                                              <input type="radio" name="option" id="option1" className="hidden" defaultChecked/>
                                              <div className='flex flex-wrap text-gray-100 label-checked:text-gray-100 label-checked:[&>.icon]:rotate-[-45deg] label-checked:[&>.icon]:text-brandGreen label-checked:[&>.cost]:text-brandGreen'>
                                                <div className="rotate-[-12deg] transition-all icon text-gray-300 mr-1">
                                                  <svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
                                                  </svg>
                                                </div>
                                                <div className='cost font-bold mr-1'>Free</div>
                                                <div className='font-bold'>- Standard Delivery</div>
                                                <div className='w-full mt-2'>
                                                  Delivered on or before <span className='font-bold'>Friday 4th July 2025</span>
                                                </div>
                                              </div>
                                            </label>
                                            <label className='border-b-[3px] border-gray-300 pb-4 mb-4 last:border-none last: mb-0 cursor-pointer'>
                                              <input type="radio" name="option" id="option1" className="hidden" />
                                              <div className='flex flex-wrap text-gray-100 label-checked:text-gray-100 label-checked:[&>.icon]:rotate-[-45deg] label-checked:[&>.icon]:text-brandGreen label-checked:[&>.cost]:text-brandGreen'>
                                                <div className="rotate-[-12deg] transition-all icon text-gray-300 mr-1">
                                                  <svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
                                                  </svg>
                                                </div>
                                                <div className='cost font-bold mr-1'>£2.99</div>
                                                <div className='font-bold'>- Express Delivery</div>
                                                <div className='w-full mt-2'>
                                                  Delivered on or before <span className='font-bold'>Wednesday 1st July 2025</span>
                                                </div>
                                              </div>
                                            </label>
                                          </form>
                                          <div className='text-xs text-gray-100'>
                                            Iems will ship as soon as they are available.<br />
                                            See Order Summary for more information.
                                          </div>
                                        </div>
                                        </>
                                      }
                                    />
                                  </div>
                                </div>
                              </>
                              }
                              {showPaymentOptions && 
                              <>
                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <div className='relative'>
                                    <button  onClick={() => {
                                      setShowDeliveryOptions(!showDeliveryOptions)
                                      setShowPaymentOptions(false)
                                      setanimateTrainPayment(false)
                                    }}
                                      className='absolute z-[2] top-[17px] right-[50px] text-sm underline text-purple-500'>Edit</button>
                                    <Dropdown 
                                      expanded={true}
                                      title={<div className='flex items-end'>
                                          <span className='mr-8'>Delivery</span>
                                          <span className='font-[500] text-sm text-gray-100'>Standard</span>
                                        </div>}
                                      className="relative w-[calc(100%+6px)] ml-[-3px] mt-[-3px] p-4 border-[3px] border-gray-300 rounded-md text-white font-semibold flex items-center justify-between"
                                      answer={
                                        <>
                                        <div className='py-6 px-4'>
                                          <div className='text-gray-100 mb-1 font-semibold'>
                                              Your Details
                                          </div>
                                          <div className='text-gray-100'>
                                            Mr Test Test<br />
                                            01234 4567890
                                          </div>
                                          <div className='text-gray-100  mt-4 mb-1 font-semibold'>
                                              Delivering to
                                          </div>
                                          <div className='text-gray-100'>
                                            The Entertainer, TEAL House, Anglo Office Park,
                                            67 White Lion Road, Amersham,
                                            Buckinghamshire, HP7 9FB, United Kingdom
                                          </div>
                                        </div>
                                        </>
                                      }
                                    />
                                  </div>
                                </div>

                                <div className='mt-6 rounded-lg border-[3px] border-brandLightBlue bg-gradient-to-br from-black via-gray-900 to-black w-full'>
                                  <div className='relative'>
                                    <Dropdown 
                                      expanded={true}
                                      title="Payment Method"
                                      className="relative bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-md text-white font-semibold flex items-center justify-between w-full"
                                      answer={
                                        <>
                                        <div className='py-6 px-4'>
                                          <div className='text-sm text-gray-100 mt-4 font-bold'>
                                            Card Payment
                                          </div>
                                          <div className='flex my-4'>
                                            <div>
                                              <svg width="206" height="43" viewBox="0 0 206 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2227_2428)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M97.3601 30.58H108.69V10.13H97.3601V30.58Z" fill="#FF5F00"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M98.0801 20.35C98.0801 16.2 100.01 12.5 103.03 10.12C100.83 8.38003 98.0501 7.34003 95.0301 7.34003C87.8801 7.34003 82.0801 13.16 82.0801 20.35C82.0801 27.54 87.8801 33.36 95.0301 33.36C98.0501 33.36 100.83 32.32 103.03 30.58C100.02 28.2 98.0801 24.5 98.0801 20.35Z" fill="#EB001B"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M123.57 28.42V27.92H123.44L123.29 28.27L123.14 27.92H123.01V28.42H123.1V28.04L123.24 28.37H123.34L123.48 28.04V28.42H123.57ZM122.74 28.42V28H122.91V27.91H122.48V28H122.65V28.42H122.74ZM123.98 20.36C123.98 27.54 118.18 33.37 111.03 33.37C108.01 33.37 105.23 32.33 103.03 30.59C106.04 28.21 107.98 24.51 107.98 20.36C107.98 16.21 106.05 12.51 103.03 10.13C105.23 8.39004 108.01 7.35004 111.03 7.35004C118.18 7.35004 123.98 13.17 123.98 20.36Z" fill="#F79E1B"/>
                                                <path d="M127.71 1.11999C130.76 1.11999 133.24 3.58999 133.24 6.64999V35.6C133.24 38.65 130.77 41.13 127.71 41.13H78.35C75.3 41.13 72.82 38.66 72.82 35.6V6.63999C72.82 3.58999 75.29 1.10999 78.35 1.10999H127.71M127.71 -0.0100098H78.35C74.69 -0.0100098 71.71 2.96999 71.71 6.62999V35.58C71.71 39.24 74.69 42.22 78.35 42.22H127.71C131.37 42.22 134.35 39.24 134.35 35.58V6.63999C134.35 2.97999 131.37 -9.76585e-06 127.71 -9.76585e-06V-0.0100098Z" fill="#EAEAEA"/>
                                                <path d="M56.01 1.12C59.06 1.12 61.54 3.59 61.54 6.65V35.6C61.54 38.65 59.07 41.13 56.01 41.13H6.64C3.59 41.13 1.11 38.66 1.11 35.6V6.64C1.12 3.59 3.59 1.12 6.64 1.12H56M56 0H6.64C2.98 0 0 2.98 0 6.64V35.59C0 39.25 2.98 42.23 6.64 42.23H56C59.66 42.23 62.64 39.25 62.64 35.59V6.64C62.64 2.98 59.66 0 56 0Z" fill="#EAEAEA"/>
                                                <path d="M199.01 1.11999C202.06 1.11999 204.54 3.58999 204.54 6.64999V35.6C204.54 38.65 202.07 41.13 199.01 41.13H149.65C146.6 41.13 144.12 38.66 144.12 35.6V6.63999C144.12 3.58999 146.59 1.10999 149.65 1.10999H199.01M199.01 -0.0100098H149.65C145.99 -0.0100098 143.01 2.96999 143.01 6.62999V35.58C143.01 39.24 145.99 42.22 149.65 42.22H199.01C202.67 42.22 205.65 39.24 205.65 35.58V6.63999C205.65 2.97999 202.67 -9.76585e-06 199.01 -9.76585e-06V-0.0100098Z" fill="#EAEAEA"/>
                                                <path d="M196.35 26.13V25.59H196.22L196.06 25.95L195.9 25.59H195.77V26.13H195.86V25.73L196.02 26.09H196.13L196.29 25.73V26.13H196.36H196.35ZM195.45 26.13V25.68H195.63V25.59H195.18V25.68H195.36V26.13H195.45Z" fill="#00A2E5"/>
                                                <path d="M180.39 28.44H168.25V6.62H180.39V28.44Z" fill="#7375CF"/>
                                                <path d="M169.03 17.53C169.03 13.11 171.1 9.15997 174.33 6.61997C171.97 4.75997 168.99 3.65997 165.75 3.65997C158.1 3.65997 151.88 9.87997 151.88 17.53C151.88 25.18 158.1 31.4 165.75 31.4C168.98 31.4 171.97 30.3 174.33 28.44C171.1 25.9 169.03 21.95 169.03 17.53Z" fill="#EB001B"/>
                                                <path d="M196.78 17.53C196.78 25.18 190.56 31.4 182.91 31.4C179.68 31.4 176.69 30.3 174.33 28.44C177.56 25.9 179.63 21.95 179.63 17.53C179.63 13.11 177.56 9.15997 174.33 6.61997C176.69 4.75997 179.67 3.65997 182.91 3.65997C190.56 3.65997 196.78 9.87997 196.78 17.53Z" fill="#00A2E5"/>
                                                <path d="M184.48 34.62C184.64 34.62 184.88 34.64 185.04 34.71L184.79 35.47C184.61 35.4 184.45 35.38 184.3 35.38C183.78 35.38 183.51 35.72 183.51 36.32V38.39H182.7V34.71H183.49V35.16C183.71 34.82 184.03 34.62 184.48 34.62ZM181.52 35.43H180.22V37.09C180.22 37.45 180.35 37.7 180.76 37.7C180.96 37.7 181.23 37.63 181.48 37.5L181.7 38.2C181.45 38.38 181.05 38.49 180.69 38.49C179.75 38.49 179.41 37.97 179.41 37.12V35.44H178.67V34.7H179.41V33.58H180.22V34.7H181.52V35.44V35.43ZM171.26 36.22C171.35 35.68 171.66 35.32 172.25 35.32C172.77 35.32 173.1 35.63 173.19 36.22H171.26ZM174.02 36.56C174.02 35.42 173.3 34.63 172.27 34.63C171.24 34.63 170.43 35.42 170.43 36.56C170.43 37.7 171.22 38.49 172.32 38.49C172.88 38.49 173.38 38.36 173.82 37.97L173.42 37.39C173.11 37.64 172.72 37.77 172.34 37.77C171.82 37.77 171.35 37.52 171.24 36.87H173.98C174 36.76 174.02 36.67 174.02 36.56ZM177.54 35.66C177.32 35.53 176.87 35.35 176.4 35.35C175.93 35.35 175.7 35.51 175.7 35.78C175.7 36.03 175.97 36.09 176.33 36.14L176.71 36.18C177.52 36.29 177.99 36.63 177.99 37.28C177.99 37.98 177.38 38.49 176.31 38.49C175.7 38.49 175.14 38.33 174.72 38.02L175.1 37.39C175.37 37.59 175.77 37.77 176.33 37.77C176.89 37.77 177.16 37.61 177.16 37.32C177.16 37.12 176.96 37.01 176.51 36.94L176.13 36.9C175.3 36.79 174.85 36.41 174.85 35.82C174.85 35.08 175.46 34.63 176.38 34.63C176.96 34.63 177.5 34.76 177.88 35.01L177.54 35.66ZM187.42 35.37C187.26 35.37 187.11 35.39 186.97 35.46C186.84 35.53 186.7 35.59 186.61 35.71C186.52 35.83 186.43 35.93 186.36 36.09C186.29 36.22 186.27 36.4 186.27 36.56C186.27 36.74 186.29 36.9 186.36 37.03C186.43 37.16 186.49 37.3 186.61 37.41C186.73 37.52 186.83 37.59 186.97 37.66C187.11 37.73 187.26 37.75 187.42 37.75C187.58 37.75 187.73 37.73 187.87 37.66C188 37.59 188.14 37.53 188.23 37.41C188.34 37.3 188.41 37.19 188.48 37.03C188.55 36.9 188.57 36.72 188.57 36.56C188.57 36.38 188.55 36.22 188.48 36.09C188.41 35.96 188.35 35.82 188.23 35.71C188.11 35.6 188.01 35.53 187.87 35.46C187.74 35.42 187.58 35.37 187.42 35.37ZM187.42 34.63C187.71 34.63 187.98 34.67 188.21 34.79C188.46 34.88 188.66 35.01 188.84 35.19C189.02 35.37 189.15 35.57 189.27 35.8C189.36 36.05 189.43 36.29 189.43 36.56C189.43 36.83 189.39 37.1 189.27 37.32C189.18 37.57 189.02 37.77 188.84 37.93C188.66 38.11 188.46 38.24 188.21 38.33C187.96 38.42 187.69 38.49 187.42 38.49C187.13 38.49 186.86 38.45 186.63 38.33C186.38 38.24 186.18 38.11 186 37.93C185.82 37.75 185.69 37.55 185.57 37.32C185.48 37.07 185.41 36.83 185.41 36.56C185.41 36.29 185.45 36.02 185.57 35.8C185.66 35.55 185.82 35.35 186 35.19C186.18 35.01 186.38 34.88 186.63 34.79C186.85 34.68 187.12 34.63 187.42 34.63ZM166.59 36.56C166.59 35.91 167.02 35.37 167.71 35.37C168.4 35.37 168.81 35.89 168.81 36.56C168.81 37.23 168.36 37.73 167.71 37.73C167.01 37.73 166.59 37.21 166.59 36.56ZM169.58 36.56V34.72H168.77V35.17C168.52 34.83 168.14 34.63 167.6 34.63C166.57 34.63 165.76 35.44 165.76 36.56C165.76 37.68 166.57 38.49 167.6 38.49C168.12 38.49 168.5 38.29 168.77 37.95V38.4H169.58V36.56ZM165.07 38.4V36.09C165.07 35.21 164.51 34.63 163.61 34.63C163.14 34.63 162.64 34.76 162.31 35.28C162.06 34.88 161.66 34.63 161.1 34.63C160.72 34.63 160.31 34.74 160.02 35.17V34.72H159.21V38.4H160.02V36.36C160.02 35.73 160.38 35.37 160.92 35.37C161.46 35.37 161.73 35.71 161.73 36.34V38.38H162.54V36.34C162.54 35.71 162.92 35.35 163.44 35.35C163.96 35.35 164.25 35.69 164.25 36.32V38.36H165.08V38.4H165.07Z" fill="black"/>
                                                <path d="M190.27 38.1V38.19H190.36C190.36 38.19 190.4 38.19 190.4 38.17C190.42 38.17 190.42 38.15 190.42 38.13C190.42 38.11 190.42 38.11 190.4 38.11C190.4 38.11 190.38 38.09 190.36 38.09H190.27V38.11V38.1ZM190.36 38.06C190.36 38.06 190.43 38.06 190.45 38.08C190.47 38.1 190.49 38.12 190.49 38.17C190.49 38.19 190.49 38.21 190.47 38.24C190.45 38.27 190.43 38.26 190.38 38.26L190.49 38.39H190.4L190.29 38.26H190.27V38.39H190.2V38.05H190.36V38.06ZM190.34 38.51C190.34 38.51 190.41 38.51 190.45 38.49C190.49 38.47 190.52 38.45 190.54 38.42C190.56 38.4 190.58 38.38 190.61 38.33C190.64 38.28 190.63 38.26 190.63 38.22C190.63 38.18 190.63 38.15 190.61 38.11C190.59 38.07 190.57 38.04 190.54 38.02C190.52 38 190.5 37.98 190.45 37.95C190.43 37.93 190.38 37.93 190.34 37.93C190.3 37.93 190.27 37.93 190.23 37.95C190.19 37.97 190.16 37.99 190.14 38.02C190.12 38.04 190.1 38.09 190.07 38.11C190.05 38.15 190.05 38.18 190.05 38.22C190.05 38.26 190.05 38.29 190.07 38.33C190.09 38.37 190.11 38.4 190.14 38.42C190.16 38.44 190.21 38.46 190.23 38.49C190.27 38.51 190.3 38.51 190.34 38.51ZM190.34 37.86C190.34 37.86 190.43 37.86 190.47 37.88C190.51 37.9 190.56 37.92 190.58 37.95C190.6 37.98 190.65 38.02 190.67 38.06C190.69 38.1 190.69 38.15 190.69 38.19C190.69 38.23 190.69 38.28 190.67 38.32C190.65 38.36 190.63 38.41 190.58 38.43C190.53 38.45 190.51 38.5 190.47 38.52C190.43 38.54 190.38 38.54 190.34 38.54C190.3 38.54 190.23 38.54 190.18 38.52C190.13 38.5 190.09 38.48 190.07 38.43C190.05 38.41 190 38.36 189.98 38.32C189.96 38.28 189.96 38.23 189.96 38.19C189.96 38.15 189.96 38.1 189.98 38.06C190 38.02 190.02 37.97 190.07 37.95C190.09 37.93 190.14 37.88 190.18 37.88C190.22 37.86 190.29 37.86 190.34 37.86Z" fill="black"/>
                                                <path d="M38.1201 13.22C34.6601 13.22 31.5601 15.02 31.5601 18.33C31.5601 22.13 37.0501 22.4 37.0501 24.31C37.0501 25.11 36.1301 25.83 34.5501 25.83C32.3201 25.83 30.6501 24.82 30.6501 24.82L29.9401 28.17C29.9401 28.17 31.8601 29.02 34.4201 29.02C38.2101 29.02 41.1901 27.14 41.1901 23.76C41.1901 19.74 35.6801 19.49 35.6801 17.71C35.6801 17.08 36.4401 16.39 38.0101 16.39C39.7801 16.39 41.2301 17.12 41.2301 17.12L41.9301 13.89C41.9301 13.89 40.3601 13.21 38.1401 13.21L38.1201 13.22ZM6.44011 13.46L6.36011 13.95C6.36011 13.95 7.82011 14.22 9.13011 14.75C10.8201 15.36 10.9401 15.72 11.2201 16.82L14.3201 28.77H18.4801L24.8801 13.46H20.7301L16.6201 23.87L14.9401 15.05C14.7901 14.04 14.0101 13.46 13.0501 13.46H6.44011ZM26.5501 13.46L23.3001 28.77H27.2501L30.4901 13.46H26.5501ZM48.6101 13.46C47.6601 13.46 47.1501 13.97 46.7801 14.86L40.9901 28.76H45.1401L45.9401 26.44H50.9901L51.4801 28.76H55.1401L51.9501 13.45H48.6201L48.6101 13.46ZM49.1501 17.6L50.3801 23.34H47.0901L49.1501 17.6Z" fill="#1434CB"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_2227_2428">
                                                <rect width="205.66" height="42.24" fill="white"/>
                                                </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className='text-gray-100'>
                                            <span className='font-bold'>Payment details</span>
                                            <span className='text-xs block'>(* Mandatory)</span>
                                          </div>
                                          <form className='space-y-8' id="checkout-form">
                                            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
                                              <input id="nameOnCard" type="text" placeholder="Name on card*" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                                              <label for="nameOnCard" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-100 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:textgray-100 motion-reduce:transition-none">Name on Card</label>
                                              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                                                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                                                  </svg>
                                                </span>
                                            </div>
                                            <div className='flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative'>
                                              <input id="cardNumber" type="text" placeholder="Card number*" className="outline-none w-full text-gray-100 bg-black placeholder:text-gray-100" />
                                            </div>
                                            <div className='flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative'>
                                              <input id="cvc" type="text" placeholder="Security number (CVC)*" className="outline-none w-full text-gray-100 bg-black placeholder:text-gray-100" />
                                            </div>
                                            {showPaymentOptions &&
                                              <Button 
                                                className='mt-6 h-[44px] shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-boldtext-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105'
                                                iconpath={
                                                  <svg width="18" height="19" viewBox="0 0 18 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.76153 9.47138C3.35391 9.55775 3.03767 9.77382 2.81279 10.1196C2.58791 10.4654 2.51866 10.8421 2.60503 11.2497L3.8487 17.1194C3.93507 17.527 4.15114 17.8433 4.49693 18.0682C4.84272 18.293 5.21942 18.3623 5.62704 18.2759L16.3881 15.9958C16.7958 15.9095 17.112 15.6934 17.3369 15.3476C17.5618 15.0018 17.631 14.6251 17.5446 14.2175L16.301 8.34781C16.2146 7.9402 15.9985 7.62395 15.6527 7.39907C15.3069 7.1742 14.9302 7.10494 14.5226 7.19131L13.7889 7.34677L13.3225 5.14563C13.0505 3.86164 12.3711 2.86627 11.2843 2.15951C10.1728 1.4367 8.97512 1.21132 7.69112 1.48337C6.40713 1.75543 5.41392 2.44503 4.71148 3.55217C3.98435 4.64325 3.75681 5.83079 4.02886 7.11479L4.49524 9.31592L3.76153 9.47138ZM6.94095 8.79772L6.47457 6.59659C6.34502 5.98516 6.4489 5.42011 6.78621 4.90143C7.12353 4.38274 7.5979 4.05863 8.20932 3.92908C8.82075 3.79953 9.3858 3.90341 9.90449 4.24072C10.4232 4.57804 10.7473 5.05241 10.8768 5.66383L11.3432 7.86497L6.94095 8.79772Z" />
                                                  </svg>

                                                }
                                                link={'/confirmation'}>
                                                  Checkout Securely
                                              </Button>
                                            }
                                        </form>
                                        </div>
                                        </>
                                      }
                                    />
                                  </div>
                                </div>
                              </>
                              }
                              {showDeliveryOptions && !showPaymentOptions &&
                                <button 
                                  className='h-[44px] w-full bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all mt-4'
                                  iconpath={
                                    <svg width="23" height="19" viewBox="0 0 23 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M0.518313 13.4305L2.59111 3.64768L22.1567 7.79327L20.0839 17.5761C19.9674 18.1264 19.4181 18.4572 18.8984 18.3471L1.28932 14.6161C0.739033 14.4995 0.401719 13.9808 0.518313 13.4305ZM15.5616 9.97358L15.3543 10.9519C15.296 11.227 15.4647 11.4863 15.7398 11.5446L18.6746 12.1665C18.9192 12.2183 19.2091 12.0561 19.2674 11.781L19.4747 10.8027C19.5265 10.5581 19.3338 10.2617 19.0892 10.2099L16.1544 9.58808C15.8792 9.52978 15.6134 9.72901 15.5616 9.97358ZM14.7843 13.6421L14.6806 14.1313C14.6482 14.2841 14.7205 14.3953 14.8734 14.4277L18.2974 15.1531C18.4197 15.1791 18.5614 15.1132 18.5938 14.9604L18.6974 14.4713C18.7233 14.349 18.6269 14.2008 18.5047 14.1749L15.0807 13.4494C14.9278 13.417 14.8102 13.5198 14.7843 13.6421ZM3.66673 8.21994L3.56309 8.70908C3.53071 8.86194 3.60299 8.97308 3.75584 9.00547L13.0495 10.9746C13.1718 11.0005 13.3135 10.9347 13.3459 10.7819L13.4496 10.2927C13.4755 10.1704 13.3791 10.0222 13.2568 9.99634L3.96312 8.02719C3.81027 7.9948 3.69264 8.09765 3.66673 8.21994ZM3.04489 11.1548L2.94126 11.6439C2.90887 11.7968 2.98115 11.9079 3.13401 11.9403L8.51456 13.0804C8.63684 13.1063 8.77856 13.0405 8.81095 12.8876L8.91459 12.3985C8.9405 12.2762 8.84412 12.128 8.72183 12.1021L3.34129 10.962C3.18843 10.9296 3.0708 11.0325 3.04489 11.1548ZM22.2894 4.75478C22.534 4.8066 22.7268 5.10299 22.6749 5.34756L22.364 6.81498L2.79838 2.6694L3.1093 1.20198C3.16112 0.957407 3.42694 0.758179 3.70208 0.816476L22.2894 4.75478Z" />
                                    </svg>
                                  }
                                  onClick={() => {
                                    setShowPaymentOptions(!showPaymentOptions)
                                    setanimateTrainDelivery(false);
                                    setanimateTrainPayment(true);
                                  }}>
                                    Go To Payment
                                </button>
                              }
                              {!showDeliveryOptions &&
                            <button 
                              className={`h-[44px] w-full bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all mt-4 ${!selectDelivery && 'pointer-events-none opacity-[0.5]'}`}
                              iconpath={
                                <svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
                                </svg>
                              }
                              onClick={() => {
                                setShowDeliveryOptions(!showDeliveryOptions)
                                setShowPaymentOptions(false)
                              }}>
                                Select delivery options
                            </button>
                          }
                            </Tab>
                          </Tabs>
                        </div>
                        
                    </div>
                    <div className='w-full lg:w-[33.3333333%] px-3'>
                        <div className='border-[3px] border-gray-300  bg-gradient-to-br from-black via-gray-900 to-black rounded-xl md:px-3 hidden lg:block'>
                              {(
                                cartItems.map((item) => <CartProductTile key={item.id} product={item} nocontrols={true} />)
                              )}
                        </div>

                        <div className='mt-6 bg-gradient-to-br from-black via-gray-900 to-black border-2 border-gray-400 p-6 px-4 rounded-md'>
                          <Dropdown 
                            title="Use a promo code"
                            className="text-gray-100 font-bold flex items-center justify-center w-full"
                            answer={
                              <form id="promo-form" className='flex items-center py-4 px-2'>
                                  <input type="search" placeholder="Add a promo code" className="bg-black outline-0 h-[44px] px-3 rounded-3xl w-full border border-[3px] border-brandBlue text-gray-100 placeholder:text-gray-100 mr-2 font-semibold" />
                                  <button className="group text-white font-bold bg-brandBlue rounded-[50px] px-5 h-[44px] transition-all hover:bg-blue-500 hover:scale-105"><span className="block transition-all group-hover:rotate-[10deg]">Apply</span></button>
                              </form>
                            }
                          />
                        </div>

                        <div className='mt-6 bg-gray-200 text-gray-100 bg-opacity-30 font-bold text-center p-6 rounded-2xl'>
                          Your order qualifies for FREE express delivery
                          <span className='block font-normal'>Exclusions apply</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
