import { Outlet } from "react-router-dom";

import ReducedFooter from "../footer/ReducedFooter";

import { Link } from "react-router-dom";

const CheckoutLayout = () => {

    return (
        <>
        <header
            id="site-header"
            className={`text-white border-b w-full z-50 transition-transform duration-300`}
        >
            <div className="bg-brandBlue shadow-sm md:shadow-md">
                <div className="max-w-7xl mx-auto px-4 pr-0 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 pt-2 ml-2 md:pt-4 md:ml-0">
                             <Link to="/">
                                <img
                                    src="/entertainer-logo.svg"
                                    alt="The Entertainer"
                                    className="w-[137px] md:w-[218px]"
                                />
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2 mr-2">
                            <span className="rotate-[12deg]">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.76153 9.47138C3.35391 9.55775 3.03767 9.77382 2.81279 10.1196C2.58791 10.4654 2.51866 10.8421 2.60503 11.2497L3.8487 17.1194C3.93507 17.527 4.15114 17.8433 4.49693 18.0682C4.84272 18.293 5.21942 18.3623 5.62704 18.2759L16.3881 15.9958C16.7958 15.9095 17.112 15.6934 17.3369 15.3476C17.5618 15.0018 17.631 14.6251 17.5446 14.2175L16.301 8.34781C16.2146 7.9402 15.9985 7.62395 15.6527 7.39907C15.3069 7.1742 14.9302 7.10494 14.5226 7.19131L13.7889 7.34677L13.3225 5.14563C13.0505 3.86164 12.3711 2.86627 11.2843 2.15951C10.1728 1.4367 8.97512 1.21132 7.69112 1.48337C6.40713 1.75543 5.41392 2.44503 4.71148 3.55217C3.98435 4.64325 3.75681 5.83079 4.02886 7.11479L4.49524 9.31592L3.76153 9.47138ZM6.94095 8.79772L6.47457 6.59659C6.34502 5.98516 6.4489 5.42011 6.78621 4.90143C7.12353 4.38274 7.5979 4.05863 8.20932 3.92908C8.82075 3.79953 9.3858 3.90341 9.90449 4.24072C10.4232 4.57804 10.7473 5.05241 10.8768 5.66383L11.3432 7.86497L6.94095 8.79772Z"/>
                                </svg>

                            </span>
                            <span className="text-xs md:text-sm">Secure Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Outlet />
        <ReducedFooter />
        </>
    )
}

export default CheckoutLayout;