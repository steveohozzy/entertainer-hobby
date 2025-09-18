import { useState } from 'react'
import HomeAgeRange from '../../components/homeAgeRange/HomeAgeRange'
import HomeBlogs from '../../components/homeBlogs/HomeBlogs'
import HomeBrands from '../../components/homeBrands/HomeBrands'
import HomeCarousel from '../../components/homeCarousel/HomeCarousel'
import HomeDelivery from '../../components/homeDelivery/HomeDelivery'
import HomeHeroCard from '../../components/homeHeroCard/HomeHeroCard'
import HomeTopPicks from '../../components/homeTopPicks/HomeTopPicks'
import HomeToyTypes from '../../components/homeToyTypes/HomeToyTypes'
import HomeNewProducts from '../../components/homeNewProducts/HomeNewProducts'
import { Star } from 'lucide-react'

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-4 gap-2 md:gap-6 mb-8">
        <button className='transition-all rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(1)}>
          Offers
        </button>
        <button className='transition-all rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(2)}>
          By Age
        </button>
        <button className='transition-all rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(3)}>
          Toy Types
        </button>
        <button className='transition-all rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(4)}>
          New
        </button>
      </div>
      <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
        <HomeCarousel />
      </div>
      <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
        <HomeAgeRange />
      </div>
      <div className={`${activeTab === 3 ? 'block' : 'hidden'}`}>
        <HomeToyTypes />
      </div>
      <div className={`${activeTab === 4 ? 'block' : 'hidden'}`}>
        <HomeNewProducts />
      </div>
      <div className={`${activeTab === 5 ? 'block' : 'hidden'}`}>
        <HomeBrands />
      </div>
      <div className={`${activeTab === 6 ? 'block' : 'hidden'}`}>
        <HomeTopPicks />
      </div>
      <div className={`${activeTab === 7 ? 'block' : 'hidden'}`}>
        <HomeHeroCard />
      </div>
      <div className={`${activeTab === 8 ? 'block' : 'hidden'}`}>
        <HomeToyTypes />
      </div>
      <div className={`${activeTab === 9 ? 'block' : 'hidden'}`}>
        <HomeBlogs />
      </div>
      <div className={`${activeTab === 10 ? 'block' : 'hidden'}`}>
        <HomeDelivery />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6 mt-8">
        <button className='transition-all flex flex-col items-center rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(5)}>
          <span className='h-6'>
            <svg className='group-hover:rotate-[20deg]' xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="currentColor">
              <path d="M20.5149 7.57425L16.7187 1.48951C16.4705 1.09181 16.1204 0.840612 15.6684 0.73591C15.2163 0.631208 14.7914 0.702918 14.3937 0.95104L8.30898 4.74731C7.91128 4.99543 7.66008 5.34553 7.55538 5.7976L5.17716 16.0661C5.07246 16.5182 5.14417 16.9431 5.39229 17.3408C5.64041 17.7385 5.99051 17.9897 6.44258 18.0944L16.3236 20.3828C16.7757 20.4875 17.2006 20.4158 17.5982 20.1677C17.9959 19.9196 18.2471 19.5695 18.3518 19.1174L20.7301 8.84891C20.8348 8.39683 20.7631 7.97195 20.5149 7.57425ZM12.9222 5.10126C13.0269 4.64919 13.2781 4.29909 13.6758 4.05097C14.0735 3.80284 14.4983 3.73113 14.9504 3.83584C15.4025 3.94054 15.7526 4.19174 16.0007 4.58943C16.2488 4.98713 16.3205 5.41201 16.2158 5.86408C16.1111 6.31616 15.8599 6.66625 15.4622 6.91438C15.0646 7.1625 14.6397 7.23421 14.1876 7.12951C13.7355 7.02481 13.3854 6.77361 13.1373 6.37591C12.8892 5.97822 12.8175 5.55333 12.9222 5.10126Z"></path>
            </svg>
          </span>
          Brands
        </button>
        <button className='transition-all flex flex-col items-center rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(6)}>
          <span className='h-6'>
            <svg className='group-hover:rotate-[20deg]' xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="currentColor">
              <path d="M19.0985 4.20293C19.3057 4.22456 19.4743 4.31547 19.6042 4.47566C19.7341 4.63585 19.7882 4.81955 19.7666 5.02675L19.5849 6.76729C19.4637 7.92765 18.7122 8.90699 17.3301 9.7053C16.262 10.306 15.078 10.6118 13.7782 10.6227C13.4362 11.0897 13.0696 11.4913 12.6784 11.8275C12.2872 12.1637 11.9804 12.3935 11.7581 12.5169L11.4245 12.7021L11.1909 14.9399L12.6828 15.0956C13.2423 15.154 13.6923 15.3581 14.0328 15.7079C14.394 16.0598 14.5465 16.5051 14.4903 17.0438L14.4513 17.4168C14.4254 17.6655 14.2881 17.7768 14.0394 17.7509L4.83943 16.7904C4.59079 16.7644 4.47944 16.6271 4.5054 16.3785L4.54434 16.0055C4.60058 15.4668 4.83141 15.0615 5.23683 14.7896C5.66298 14.5199 6.15578 14.4142 6.71524 14.4726L8.20713 14.6284L8.44076 12.3905C8.3622 12.3405 8.25581 12.256 8.12158 12.1373C7.98735 12.0185 7.7543 11.7429 7.42243 11.3102C7.09055 10.8776 6.80553 10.3975 6.56736 9.8699C5.29782 9.59074 4.20252 9.04699 3.28148 8.23865C2.09414 7.1721 1.56104 6.05864 1.68218 4.89828L1.86389 3.15774C1.88552 2.95053 1.97643 2.78198 2.13662 2.65207C2.2968 2.52217 2.4805 2.46804 2.68771 2.48967L5.92014 2.82713L6.04993 1.58389C6.07156 1.37668 6.16247 1.20812 6.32266 1.07822C6.48285 0.948319 6.66655 0.894184 6.87375 0.915816L15.3278 1.79841C15.535 1.82004 15.7036 1.91095 15.8335 2.07114C15.9634 2.23132 16.0175 2.41502 15.9959 2.62223L15.8661 3.86547L19.0985 4.20293ZM4.60021 6.74249C4.96578 7.05296 5.3782 7.31595 5.83747 7.53147C5.69824 6.65813 5.65657 5.75308 5.71247 4.81632L3.72328 4.60865L3.67137 5.10595C3.62161 5.58252 3.93123 6.12804 4.60021 6.74249ZM17.5957 6.55963L17.6476 6.06233L15.6584 5.85466C15.5196 6.78277 15.2919 7.6597 14.9753 8.48545C15.4692 8.36944 15.927 8.1973 16.3489 7.96903C17.1303 7.506 17.5459 7.0362 17.5957 6.55963Z"></path>
            </svg>
          </span>
          Top Picks
        </button>
        <button className='transition-all flex flex-col items-center rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(7)}>
          <span className='h-6'>
            <Star fill='currentColor' className='group-hover:rotate-[20deg]' />
          </span>
          New Deal
        </button>
        <button className='transition-all flex flex-col items-center rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(8)}>
          <span className='h-6'>
            <svg className='group-hover:rotate-[20deg]' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M18.9028 4.35492C19.4873 4.15932 20.0692 4.72983 19.8174 5.31534L14.818 18.0558C14.6532 18.532 14.0752 18.697 13.686 18.4229L10.2385 15.9994L7.77668 17.9694C7.23857 18.3984 6.44087 17.9419 6.59633 17.2082L7.121 14.7319L16.356 7.32912C16.5477 7.17808 16.3485 6.91226 16.1633 7.03273L5.7505 12.9082L2.77086 10.8394C2.26592 10.5088 2.37319 9.70103 2.98825 9.51191L18.9028 4.35492Z" fill="currentColor"></path></svg>
          </span>
          Discover
        </button>
        <button className='transition-all flex flex-col items-center rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(9)}>
          <span className='h-6'>
            <svg className='group-hover:rotate-[20deg]' xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
              <path d="M3.05732 16.8515L19.9634 15.0746C20.7869 14.988 21.3849 14.2495 21.2984 13.426L20.2008 2.98354C20.1143 2.16008 19.3757 1.562 18.5523 1.64855L18.0558 1.70073L18.032 1.47398C17.9587 0.777019 17.3309 0.268655 16.634 0.341908L15.6959 0.4405C13.7053 0.649724 11.8134 1.24676 10.0666 2.21465C8.15644 1.6287 6.18195 1.44046 4.19131 1.64969L3.25328 1.74828C2.55632 1.82153 2.04796 2.44931 2.12121 3.14627L2.14504 3.37302L1.64858 3.4252C0.825111 3.51175 0.227036 4.25031 0.313585 5.07378L1.41113 15.5163C1.49768 16.3397 2.23625 16.9378 3.05971 16.8512L3.05732 16.8515ZM16.7386 1.33723C16.8866 1.32167 17.0211 1.43061 17.0367 1.57859L18.1819 12.4746C18.1974 12.6226 18.0885 12.7571 17.9405 12.7726L17.0025 12.8712C15.1908 13.0616 13.4616 13.5764 11.8487 14.3951L10.6548 3.03606C12.255 2.16562 13.9818 1.62698 15.8006 1.43582L16.7386 1.33723ZM3.11414 3.04191C3.09859 2.89392 3.20752 2.7594 3.35551 2.74384L4.29354 2.64525C6.10993 2.45434 7.91358 2.62434 9.65952 3.14067L10.8534 14.4997C9.10532 14.0319 7.30707 13.8903 5.49545 14.0807L4.55742 14.1793C4.40943 14.1948 4.27491 14.0859 4.25935 13.9379L3.11414 3.04191Z" fill="currentColor"></path>
              <path d="M4.78675 4.7436C5.53584 4.68417 6.97674 4.61719 8.18933 4.83483C8.23832 4.84175 8.28442 4.84414 8.32977 4.83938C8.54698 4.81655 8.73003 4.65252 8.76926 4.42879C8.81779 4.15582 8.63619 3.89739 8.36322 3.84886C7.04021 3.61386 5.50547 3.68347 4.70839 3.74552C4.4422 3.76143 4.22685 4.0085 4.24853 4.28374C4.27022 4.55898 4.51151 4.76529 4.78675 4.7436Z" fill="currentColor"></path>
              <path d="M5.04823 7.23066C5.79732 7.17123 7.23821 7.10425 8.4508 7.32189C8.49979 7.32881 8.5459 7.33121 8.59125 7.32644C8.80845 7.30361 8.99151 7.13958 9.03074 6.91585C9.07927 6.64288 8.89766 6.38445 8.62469 6.33592C7.30168 6.10092 5.76695 6.17053 4.96987 6.23258C4.70367 6.2485 4.48832 6.49556 4.51001 6.7708C4.5317 7.04604 4.77299 7.25235 5.04823 7.23066Z" fill="currentColor"></path>
              <path d="M5.30933 9.7154C6.05843 9.65597 7.49932 9.58899 8.71191 9.80664C8.7609 9.81355 8.807 9.81595 8.85235 9.81118C9.06956 9.78835 9.25262 9.62432 9.29184 9.40059C9.34038 9.12762 9.15877 8.86919 8.8858 8.82066C7.56279 8.58566 6.02806 8.65527 5.23098 8.71732C4.96478 8.73324 4.74943 8.9803 4.77112 9.25554C4.79281 9.53078 5.03409 9.73709 5.30933 9.7154Z" fill="currentColor"></path>
              <path d="M5.57067 12.2025C6.31976 12.1431 7.76065 12.0761 8.97325 12.2937C9.02224 12.3006 9.06834 12.303 9.11369 12.2983C9.33089 12.2754 9.51395 12.1114 9.55318 11.8877C9.60171 11.6147 9.4201 11.3563 9.14714 11.3077C7.82412 11.0727 6.28939 11.1424 5.49231 11.2044C5.22637 11.2227 5.01076 11.4674 5.03245 11.7426C5.05414 12.0179 5.29543 12.2242 5.57067 12.2025Z" fill="currentColor"></path>
              <path d="M12.3086 4.42112C12.354 4.41635 12.401 4.40418 12.4451 4.38748C13.5862 3.92486 15.0095 3.6908 15.7543 3.5908C16.028 3.55479 16.2188 3.30307 16.1852 3.02909C16.1491 2.75535 15.9105 2.55118 15.6234 2.59824C14.8309 2.70326 13.3152 2.95427 12.07 3.4592C11.8131 3.56342 11.6915 3.85372 11.7934 4.11088C11.8783 4.32156 12.0938 4.4437 12.3086 4.42112Z" fill="currentColor"></path>
              <path d="M12.5701 6.90827C12.6154 6.9035 12.6624 6.89132 12.7065 6.87462C13.8476 6.41201 15.2709 6.17795 16.0158 6.07795C16.2895 6.04194 16.4802 5.79022 16.4466 5.51623C16.4106 5.2425 16.1722 5.04071 15.8849 5.08539C15.0923 5.19041 13.5767 5.44142 12.3314 5.94635C12.0745 6.05057 11.953 6.34086 12.0548 6.59803C12.1397 6.80871 12.3553 6.93085 12.5701 6.90827Z" fill="currentColor"></path>
              <path d="M12.8314 9.39539C12.8768 9.39062 12.9238 9.37845 12.9679 9.36174C14.109 8.89913 15.5323 8.66507 16.2771 8.56507C16.5508 8.52906 16.7416 8.27734 16.708 8.00336C16.6719 7.72962 16.4335 7.52783 16.1462 7.57251C15.3537 7.67753 13.838 7.92854 12.5928 8.43347C12.3359 8.53769 12.2143 8.82798 12.3162 9.08515C12.4011 9.29583 12.6166 9.41797 12.8314 9.39539Z" fill="currentColor"></path>
              <path d="M16.4053 10.0599C15.6127 10.1649 14.097 10.4159 12.8518 10.9208C12.5949 11.0251 12.4734 11.3154 12.5752 11.5725C12.6601 11.7832 12.8756 11.9053 13.0905 11.8828C13.1358 11.878 13.1828 11.8658 13.2269 11.8491C14.368 11.3865 15.7913 11.1524 16.5361 11.0524C16.8099 11.0164 17.0006 10.7647 16.967 10.4907C16.931 10.217 16.6926 10.0152 16.4053 10.0599Z" fill="currentColor"></path>
            </svg>
          </span>
          Blogs
        </button>
        <button className='transition-all flex flex-col items-center rounded-full bg-white shadow-md font-bold text-sm md:text-lg text-brandBlue p-2 hover:bg-brandBlue hover:scale-110 hover:text-white hover:shadow-lg group' onClick={() => setActiveTab(10)}>
          <span className='h-6'>
            <svg className='group-hover:rotate-[20deg]' xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="currentColor">
              <path d="M9.71009 17.2836C10.158 16.4579 10.6727 15.525 11.254 14.4851C11.8134 13.4474 12.2155 12.7155 12.4603 12.2894C12.7051 11.8632 12.9848 11.3444 13.2993 10.7329C13.6115 10.0994 13.821 9.65468 13.9278 9.39871C14.0126 9.14505 14.1126 8.82304 14.2276 8.43268C14.3206 8.04462 14.3753 7.7162 14.3918 7.44741C14.3839 7.15891 14.3605 6.82752 14.3214 6.45326C14.1375 4.692 13.3648 3.25928 12.0032 2.15511C10.6416 1.05094 9.08017 0.590787 7.31891 0.774659C5.55765 0.958532 4.12493 1.73127 3.02076 3.09286C1.91659 4.45445 1.45644 6.01588 1.64031 7.77714C1.67939 8.15141 1.73588 8.47935 1.80979 8.76096C1.85939 9.02285 1.98078 9.33288 2.17396 9.69106C2.34513 10.0515 2.5094 10.346 2.66678 10.5744C2.80214 10.805 3.08798 11.1981 3.52431 11.7534C3.95833 12.2867 4.33913 12.7366 4.66671 13.103C4.99429 13.4694 5.54988 14.1013 6.3335 14.9988C7.09511 15.8985 7.78032 16.7061 8.38914 17.4215C8.56624 17.6256 8.79789 17.7126 9.08409 17.6828C9.3703 17.6529 9.57896 17.5198 9.71009 17.2836ZM10.0597 8.80103C9.5842 9.36256 8.98318 9.68124 8.25666 9.75709C7.53014 9.83294 6.88727 9.64411 6.32804 9.19061C5.7445 8.7174 5.41481 8.11753 5.33896 7.39101C5.26311 6.66449 5.46295 6.02047 5.93846 5.45894C6.38966 4.8777 6.97852 4.54916 7.70504 4.47331C8.43156 4.39746 9.08659 4.59614 9.67013 5.06936C10.2294 5.52286 10.5469 6.11287 10.6227 6.83939C10.6986 7.56591 10.5109 8.21979 10.0597 8.80103Z"></path>
            </svg>
          </span>
          Our Stores
        </button>
      </div>
    </div>
  )
}

export default HomeTabs