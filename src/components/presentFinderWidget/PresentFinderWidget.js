import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { ChevronUp } from "lucide-react";

const PresentFinderWidget = () => {
  const [ageValue, setAge] = useState('Age');
  const [ageUrlString, setAgeUrlString] = useState();
  const [typeValue, setType] = useState('Type');
  const [typeUrlString, setTypeUrlString] = useState();
  const [priceValue, setPrice] = useState('Price');
  const [priceUrlString, setPriceUrlString] = useState();
  const [showAge, setshowAge] = useState(false);
  const [showType, setshowType] = useState(false);
  const [showPrice, setshowPrice] = useState(false);

  const navigate = useNavigate();

  const ageWrapperRef = useRef(null);
  const typeWrapperRef = useRef(null);
  const priceWrapperRef = useRef(null);

  function useOutsideAlerterAge(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowAge(false)
          document.body.classList.remove('body-noscroll');
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function useOutsideAlerterType(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowType(false)
          document.body.classList.remove('body-noscroll');
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function useOutsideAlerterPrice(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowPrice(false)
          document.body.classList.remove('body-noscroll');
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
    useOutsideAlerterAge(ageWrapperRef);
    useOutsideAlerterType(typeWrapperRef);
    useOutsideAlerterPrice(priceWrapperRef);

  return (
    <div className="max-w-[532px] border-[3px] border-brandBlue bg-brandNeonBlue rounded-lg mx-auto my-3 px-2 md:px-4 py-4 flex items-center">
      <div className="font-bold text-brandBlue flex items-center flex-wrap text-[14px] md:text-base xl:text-lg leading-[1] w-[65px] md:w-1/3">
        <span className="shadow-text-yellow order-1">
          GIFT
        </span>
        <span className="shadow-text-yellow md:ml-2 order-3 md:order-2">
          FINDER
        </span>
        <svg className="order-2 md:order-3 ml-1 md:ml-2" xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
          <mask id="path-1-outside-1_2307_14" maskUnits="userSpaceOnUse" x="-0.472571" y="-1.22883" width="26.6241" height="25.7534" fill="black">
          <rect fill="white" x="-0.472571" y="-1.22883" width="26.6241" height="25.7534"/>
          <path d="M4.23103 17.1397L4.77944 12.6733L11.4791 13.4959L10.7936 19.0789L5.21054 18.3934C4.58244 18.3163 4.15391 17.7678 4.23103 17.1397ZM13.0268 19.3531L13.7124 13.7701L20.412 14.5927L19.8636 19.0592C19.7865 19.6872 19.2031 20.1115 18.6099 20.0387L13.0268 19.3531ZM21.0976 9.00962C21.6908 9.08246 22.1499 9.67014 22.0771 10.2633L21.7343 13.0549C21.6958 13.3689 21.3866 13.5789 21.1075 13.5446L4.35824 11.4881C4.04419 11.4495 3.82992 11.1753 3.86848 10.8612L4.21124 8.06969C4.28407 7.47649 4.83686 7.01306 5.46496 7.09018L7.0003 7.2787C6.80745 6.82998 6.75847 6.3635 6.82274 5.84008C7.02839 4.16516 8.56064 2.93649 10.2705 3.14643C11.7011 3.32209 12.549 4.20544 13.5689 5.99543C14.9567 4.50107 15.9931 3.84908 17.4587 4.02903C19.1336 4.23468 20.358 5.80183 20.1523 7.47675C20.0881 8.00017 19.8928 8.43665 19.5971 8.82539L21.0976 9.00962ZM9.68715 7.6086L12.7229 7.98135C11.2341 5.1066 10.7278 4.90276 10.0299 4.81707C9.26224 4.72281 8.55702 5.27378 8.46276 6.04145C8.36422 6.84402 8.91948 7.51434 9.68715 7.6086ZM16.9103 8.49549C17.6779 8.58975 18.3789 8.07366 18.4774 7.2711C18.5717 6.50343 18.0207 5.79821 17.253 5.70395C16.5202 5.61398 16.0146 5.69357 13.8745 8.12274L16.9103 8.49549Z"/>
          </mask>
          <path d="M4.23103 17.1397L4.77944 12.6733L11.4791 13.4959L10.7936 19.0789L5.21054 18.3934C4.58244 18.3163 4.15391 17.7678 4.23103 17.1397ZM13.0268 19.3531L13.7124 13.7701L20.412 14.5927L19.8636 19.0592C19.7865 19.6872 19.2031 20.1115 18.6099 20.0387L13.0268 19.3531ZM21.0976 9.00962C21.6908 9.08246 22.1499 9.67014 22.0771 10.2633L21.7343 13.0549C21.6958 13.3689 21.3866 13.5789 21.1075 13.5446L4.35824 11.4881C4.04419 11.4495 3.82992 11.1753 3.86848 10.8612L4.21124 8.06969C4.28407 7.47649 4.83686 7.01306 5.46496 7.09018L7.0003 7.2787C6.80745 6.82998 6.75847 6.3635 6.82274 5.84008C7.02839 4.16516 8.56064 2.93649 10.2705 3.14643C11.7011 3.32209 12.549 4.20544 13.5689 5.99543C14.9567 4.50107 15.9931 3.84908 17.4587 4.02903C19.1336 4.23468 20.358 5.80183 20.1523 7.47675C20.0881 8.00017 19.8928 8.43665 19.5971 8.82539L21.0976 9.00962ZM9.68715 7.6086L12.7229 7.98135C11.2341 5.1066 10.7278 4.90276 10.0299 4.81707C9.26224 4.72281 8.55702 5.27378 8.46276 6.04145C8.36422 6.84402 8.91948 7.51434 9.68715 7.6086ZM16.9103 8.49549C17.6779 8.58975 18.3789 8.07366 18.4774 7.2711C18.5717 6.50343 18.0207 5.79821 17.253 5.70395C16.5202 5.61398 16.0146 5.69357 13.8745 8.12274L16.9103 8.49549Z" fill="#F05C41"/>
          <path d="M4.77944 12.6733L5.14505 9.69561L2.16741 9.33001L1.8018 12.3076L4.77944 12.6733ZM11.4791 13.4959L14.4568 13.8615L14.8224 10.8838L11.8447 10.5182L11.4791 13.4959ZM10.7936 19.0789L10.428 22.0566L13.4056 22.4222L13.7713 19.4446L10.7936 19.0789ZM13.0268 19.3531L10.0492 18.9875L9.68359 21.9652L12.6612 22.3308L13.0268 19.3531ZM13.7124 13.7701L14.078 10.7924L11.1003 10.4268L10.7347 13.4045L13.7124 13.7701ZM20.412 14.5927L23.3897 14.9583L23.7553 11.9807L20.7777 11.6151L20.412 14.5927ZM7.0003 7.2787L6.63469 10.2563L11.8189 10.8929L9.75654 6.09416L7.0003 7.2787ZM13.5689 5.99543L10.9624 7.48064L12.9859 11.0319L15.7672 8.03691L13.5689 5.99543ZM19.5971 8.82539L17.2093 7.00924L14.0473 11.1665L19.2315 11.803L19.5971 8.82539ZM12.7229 7.98135L12.3573 10.959L18.0026 11.6521L15.3869 6.60167L12.7229 7.98135ZM13.8745 8.12274L11.6234 6.13957L7.8636 10.4072L13.5088 11.1004L13.8745 8.12274ZM4.23103 17.1397L7.20867 17.5053L7.75708 13.0389L4.77944 12.6733L1.8018 12.3076L1.25339 16.7741L4.23103 17.1397ZM4.77944 12.6733L4.41383 15.6509L11.1135 16.4735L11.4791 13.4959L11.8447 10.5182L5.14505 9.69561L4.77944 12.6733ZM11.4791 13.4959L8.50149 13.1303L7.81597 18.7133L10.7936 19.0789L13.7713 19.4446L14.4568 13.8615L11.4791 13.4959ZM10.7936 19.0789L11.1592 16.1013L5.57615 15.4158L5.21054 18.3934L4.84493 21.3711L10.428 22.0566L10.7936 19.0789ZM5.21054 18.3934L5.57615 15.4158C6.59256 15.5406 7.33347 16.4889 7.20867 17.5053L4.23103 17.1397L1.25339 16.7741C0.97435 19.0467 2.57233 21.092 4.84493 21.3711L5.21054 18.3934ZM13.0268 19.3531L16.0045 19.7188L16.69 14.1357L13.7124 13.7701L10.7347 13.4045L10.0492 18.9875L13.0268 19.3531ZM13.7124 13.7701L13.3467 16.7477L20.0464 17.5703L20.412 14.5927L20.7777 11.6151L14.078 10.7924L13.7124 13.7701ZM20.412 14.5927L17.4344 14.2271L16.886 18.6935L19.8636 19.0592L22.8413 19.4248L23.3897 14.9583L20.412 14.5927ZM19.8636 19.0592L16.886 18.6935C17.0182 17.6171 17.9849 16.9394 18.9755 17.061L18.6099 20.0387L18.2443 23.0163C20.4213 23.2836 22.5549 21.7574 22.8413 19.4248L19.8636 19.0592ZM18.6099 20.0387L18.9755 17.061L13.3924 16.3755L13.0268 19.3531L12.6612 22.3308L18.2443 23.0163L18.6099 20.0387ZM21.0976 9.00962L20.7319 11.9873C20.1465 11.9154 19.7226 11.6078 19.473 11.2883C19.2235 10.9689 19.0275 10.4832 19.0994 9.89773L22.0771 10.2633L25.0547 10.6289C25.3295 8.39124 23.7009 6.30674 21.4632 6.03198L21.0976 9.00962ZM22.0771 10.2633L19.0994 9.89773L18.7567 12.6893L21.7343 13.0549L24.7119 13.4205L25.0547 10.6289L22.0771 10.2633ZM21.7343 13.0549L18.7567 12.6893C18.8494 11.9343 19.2624 11.3658 19.7148 11.0276C20.1473 10.7043 20.7622 10.4797 21.4731 10.567L21.1075 13.5446L20.7418 16.5223C22.5448 16.7436 24.457 15.4972 24.7119 13.4205L21.7343 13.0549ZM21.1075 13.5446L21.4731 10.567L4.72384 8.51045L4.35824 11.4881L3.99263 14.4657L20.7418 16.5223L21.1075 13.5446ZM4.35824 11.4881L4.72384 8.51045C6.0543 8.67381 7.00948 9.89638 6.84612 11.2268L3.86848 10.8612L0.890842 10.4956C0.650362 12.4542 2.03408 14.2252 3.99263 14.4657L4.35824 11.4881ZM3.86848 10.8612L6.84612 11.2268L7.18888 8.4353L4.21124 8.06969L1.2336 7.70408L0.890842 10.4956L3.86848 10.8612ZM4.21124 8.06969L7.18888 8.4353C7.06724 9.42591 6.1758 10.2 5.09935 10.0678L5.46496 7.09018L5.83056 4.11254C3.49792 3.82613 1.5009 5.52707 1.2336 7.70408L4.21124 8.06969ZM5.46496 7.09018L5.09935 10.0678L6.63469 10.2563L7.0003 7.2787L7.36591 4.30106L5.83056 4.11254L5.46496 7.09018ZM7.0003 7.2787L9.75654 6.09416C9.76497 6.11377 9.77351 6.13767 9.78063 6.16435C9.78774 6.19098 9.79191 6.21463 9.79411 6.23315C9.79862 6.27107 9.79268 6.26833 9.80038 6.20569L6.82274 5.84008L3.8451 5.47448C3.72848 6.42424 3.80471 7.44094 4.24406 8.46324L7.0003 7.2787ZM6.82274 5.84008L9.80038 6.20569C9.80194 6.19299 9.80516 6.18428 9.81008 6.17569C9.81598 6.16541 9.8256 6.15359 9.83878 6.14321C9.85175 6.13299 9.86354 6.12778 9.87161 6.12545C9.8773 6.12381 9.88636 6.1218 9.90485 6.12407L10.2705 3.14643L10.6361 0.16879C7.25977 -0.245767 4.24996 2.17711 3.8451 5.47448L6.82274 5.84008ZM10.2705 3.14643L9.90485 6.12407C9.98924 6.13443 10.0094 6.14729 9.99953 6.14278C9.98965 6.13827 10.0092 6.14354 10.0666 6.19527C10.2212 6.33439 10.4976 6.66496 10.9624 7.48064L13.5689 5.99543L16.1755 4.51022C15.0538 2.54172 13.5578 0.527531 10.6361 0.16879L10.2705 3.14643ZM13.5689 5.99543L15.7672 8.03691C16.3918 7.36431 16.7248 7.12264 16.8927 7.0334C16.9261 7.01561 16.9461 7.00784 16.9544 7.0049C16.9622 7.00214 16.9649 7.00175 16.9652 7.00169C16.9656 7.00161 16.9725 7.00028 16.9894 6.99993C17.0069 6.99957 17.0402 7.00018 17.0931 7.00667L17.4587 4.02903L17.8243 1.05139C16.4934 0.887983 15.2472 1.11312 14.0766 1.73533C13.0129 2.30069 12.1338 3.13219 11.3707 3.95395L13.5689 5.99543ZM17.4587 4.02903L17.0931 7.00667C17.0949 7.0069 17.0981 7.00715 17.1061 7.01182C17.1162 7.01772 17.1316 7.02967 17.1467 7.0489C17.1617 7.06813 17.1696 7.086 17.1728 7.09726C17.1754 7.10617 17.1749 7.10928 17.1747 7.11114L20.1523 7.47675L23.13 7.84236C23.5375 4.52293 21.1437 1.45897 17.8243 1.05139L17.4587 4.02903ZM20.1523 7.47675L17.1747 7.11114C17.1749 7.10904 17.1763 7.0997 17.1802 7.08503C17.1841 7.07028 17.1894 7.05443 17.196 7.03891C17.21 7.00547 17.2206 6.99437 17.2093 7.00924L19.5971 8.82539L21.9849 10.6415C22.572 9.86969 22.9951 8.94032 23.13 7.84236L20.1523 7.47675ZM19.5971 8.82539L19.2315 11.803L20.7319 11.9873L21.0976 9.00962L21.4632 6.03198L19.9627 5.84775L19.5971 8.82539ZM9.68715 7.6086L9.32155 10.5862L12.3573 10.959L12.7229 7.98135L13.0886 5.00371L10.0528 4.63096L9.68715 7.6086ZM12.7229 7.98135L15.3869 6.60167C14.6379 5.15561 13.9748 4.04501 13.2549 3.2872C12.8485 2.85929 12.3647 2.47697 11.768 2.20814C11.1836 1.94486 10.6637 1.87235 10.3955 1.83943L10.0299 4.81707L9.6643 7.7947C9.74509 7.80462 9.55013 7.78973 9.30346 7.6786C9.18295 7.62431 9.08399 7.56314 9.00942 7.50785C8.9386 7.45534 8.90397 7.41867 8.90468 7.41942C8.91751 7.43293 9.02303 7.55079 9.23437 7.88605C9.44055 8.21309 9.70835 8.68393 10.059 9.36104L12.7229 7.98135ZM10.0299 4.81707L10.3955 1.83943C7.98334 1.54325 5.7813 3.26367 5.48513 5.67585L8.46276 6.04145L11.4404 6.40706C11.3327 7.28389 10.5411 7.90237 9.6643 7.7947L10.0299 4.81707ZM8.46276 6.04145L5.48513 5.67585C5.1787 8.17153 6.9584 10.2961 9.32155 10.5862L9.68715 7.6086L10.0528 4.63096C10.8806 4.7326 11.5497 5.51652 11.4404 6.40706L8.46276 6.04145ZM16.9103 8.49549L16.5446 11.4731C18.9078 11.7633 21.1486 10.1324 21.455 7.63671L18.4774 7.2711L15.4998 6.90549C15.6091 6.01494 16.4481 5.41621 17.2759 5.51785L16.9103 8.49549ZM18.4774 7.2711L21.455 7.63671C21.7512 5.22453 20.0308 3.02249 17.6186 2.72631L17.253 5.70395L16.8874 8.68159C16.0106 8.57393 15.3921 7.78232 15.4998 6.90549L18.4774 7.2711ZM17.253 5.70395L17.6186 2.72631C17.3528 2.69367 16.8248 2.63586 16.1907 2.74884C15.5358 2.86552 14.9683 3.12409 14.4686 3.44554C13.5935 4.00839 12.6894 4.92966 11.6234 6.13957L13.8745 8.12274L16.1255 10.1059C16.6328 9.53001 17.007 9.13506 17.2867 8.86478C17.4247 8.73153 17.5285 8.63941 17.6037 8.57712C17.6794 8.51451 17.7145 8.49176 17.7144 8.49179C17.7002 8.50095 17.5303 8.60466 17.2432 8.65581C16.9769 8.70326 16.7869 8.66925 16.8874 8.68159L17.253 5.70395ZM13.8745 8.12274L13.5088 11.1004L16.5446 11.4731L16.9103 8.49549L17.2759 5.51785L14.2401 5.1451L13.8745 8.12274Z" fill="#00548B" mask="url(#path-1-outside-1_2307_14)"/>
          </svg>
      </div>

      <div className="flex items-center grid grid-cols-[repeat(3,1fr)0.5fr] gap-2 w-[calc(100%-60px)] md:w-2/3">
        <div ref={ageWrapperRef} className="relative">
          <button className={`relative z-[2] flex items-center text-brandBlue font-semibold border-[3px] border-brandBlue rounded-lg w-full justify-center py-1 transition-all ${showAge ? 'bg-white' : 'bg-yellow-100'}`} onClick={() => {setshowAge(!showAge)}}>
            <span>{ageValue}</span>
            <ChevronUp className={`h-4 w-4 rotate-180 mt-1 ml-1 transition-all ${showAge && 'rotate-[0]'}`} />
          </button>
          <div ref={ageWrapperRef}
            className={`absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out left-0 no-scrollbar w-full border-textBlue rounded-bl-lg rounded-br-lg text-center text-brandBlue font-semibold flex flex-col gap-1 ${
              showAge ? "max-h-[calc(100vh-250px)] overflow-y-auto border-[3px] top-[calc(100%-4px)] p-2" : "max-h-0 top-full"
            }`}
          >
            <button onClick={() => {setAge('0-3'); setAgeUrlString('0-3'); setshowAge(!showAge)}}>
              0-3
            </button>
            <button onClick={() => {setAge('3-5'); setAgeUrlString('3-5'); setshowAge(!showAge)}}>
              3-5
            </button>
            <button onClick={() => {setAge('5-8'); setAgeUrlString('5-8'); setshowAge(!showAge)}}>
              5-8
            </button>
            <button onClick={() => {setAge('8-11'); setAgeUrlString('8-11'); setshowAge(!showAge)}}>
              8-10
            </button>
            <button onClick={() => {setAge('11+'); setAgeUrlString('11-plus'); setshowAge(!showAge)}}>
              11+
            </button>
            <button onClick={() => {setAge('Big Kids'); setAgeUrlString('big-kids'); setshowAge(!showAge)}}>
              Adult
            </button>
          </div>
        </div>
        <div ref={typeWrapperRef} className="relative">
          <button className={`relative z-[2] flex items-center text-brandBlue font-semibold border-[3px] border-brandBlue rounded-lg w-full justify-center py-1 transition-all ${showType ? 'bg-white' : 'bg-yellow-100'}`} onClick={() => {setshowType(!showType)}}>
            <span>{typeValue}</span>
            <ChevronUp className={`h-4 w-4 rotate-180 mt-1 ml-1 transition-all ${showType && 'rotate-[0]'}`} />
          </button>
          <div ref={typeWrapperRef}
            className={`absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out left-0 no-scrollbar w-full border-textBlue rounded-bl-lg rounded-br-lg text-center text-brandBlue font-semibold flex flex-col gap-1 ${
              showType ? "max-h-[calc(100vh-250px)] overflow-y-auto border-[3px] top-[calc(100%-4px)] p-2" : "max-h-0 top-full"
            }`}
          >
            <button onClick={() => {setType('Arts'); setTypeUrlString('arts-and-crafts'); setshowType(!showType)}}>
              Arts
            </button>
            <button onClick={() => {setType('Games'); setTypeUrlString('games-and-puzzles'); setshowType(!showType)}}>
              Games
            </button>
            <button onClick={() => {setType('Dolls'); setTypeUrlString('dolls'); setshowType(!showType)}}>
              Dolls
            </button>
            <button onClick={() => {setType('Action'); setTypeUrlString('action-figures'); setshowType(!showType)}}>
              Action
            </button>
            <button onClick={() => {setType('Soft'); setTypeUrlString('plushies'); setshowType(!showType)}}>
              Soft
            </button>
            <button onClick={() => {setType('Cars'); setTypeUrlString('cars'); setshowType(!showType)}}>
              Cars
            </button>
            <button onClick={() => {setType('Garden'); setTypeUrlString('outdoor-toys'); setshowType(!showType)}}>
              Garden
            </button>
            <button onClick={() => {setType('Baby'); setTypeUrlString('pre-school-toys'); setshowType(!showType)}}>
              Baby
            </button>
          </div>
        </div>
        <div ref={priceWrapperRef} className="relative">
          <button className={`relative z-[2] flex items-center text-brandBlue font-semibold border-[3px] border-brandBlue rounded-lg w-full justify-center py-1 transition-all ${showPrice ? 'bg-white' : 'bg-yellow-100'}`} onClick={() => {setshowPrice(!showPrice)}}>
            <span>{priceValue}</span>
            <ChevronUp className={`h-4 w-4 rotate-180 mt-1 ml-1 transition-all ${showPrice && 'rotate-[0]'}`} />
          </button>
          <div ref={priceWrapperRef}
            className={`absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out left-0 no-scrollbar w-full border-textBlue rounded-bl-lg rounded-br-lg text-center text-brandBlue font-semibold flex flex-col gap-1 ${
              showPrice ? "max-h-[calc(100vh-250px)] overflow-y-auto border-[3px] top-[calc(100%-4px)] p-2" : "max-h-0 top-full"
            }`}
          >
            <button onClick={() => {setPrice('-£15'); setPriceUrlString('0-15'); setshowPrice(!showPrice)}}>
              -£15
            </button>
            <button onClick={() => {setPrice('£15+'); setPriceUrlString('15-30'); setshowPrice(!showPrice)}}>
              £15+
            </button>
            <button onClick={() => {setPrice('£30+'); setPriceUrlString('30-45'); setshowPrice(!showPrice)}}>
              £30+
            </button>
            <button onClick={() => {setPrice('45+'); setPriceUrlString('45-60'); setshowPrice(!showPrice)}}>
              £45+
            </button>
            <button onClick={() => {setPrice('£60+'); setPriceUrlString('60-75'); setshowPrice(!showPrice)}}>
              £60+
            </button>
            <button onClick={() => {setPrice('£75+'); setPriceUrlString('75'); setshowPrice(!showPrice)}}>
              £75+
            </button>
          </div>
        </div>
        <button 
          onClick={() => { navigate(`/category/?age=${ageUrlString}&type=${typeUrlString}&price=${priceUrlString}`); window.location.reload(false);}}
          className="shadow-md z-20 group text-white font-bold bg-brandRed rounded-full size-[40px] md:h-[40px] md:w-[59px] transition-all hover:bg-brandGreen hover:scale-105 border-[3px] border-brandBlue">
          <span className="block transition-all group-hover:rotate-[20deg]">
            <span className="inline-block rotate-[-10deg] text-lg">G</span>
            <span className="inline-block translate-y-[-2px] rotate-[-10deg] text-sm ml-[1.2px]">O</span>
            <span className="inline-block translate-y-[-2px] rotate-[5deg] text-[10px] ml-[2px]">!</span>
          </span>
        </button>
      </div>

    </div>
  )
}

export default PresentFinderWidget