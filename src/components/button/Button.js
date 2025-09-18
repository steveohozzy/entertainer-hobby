import { useNavigate } from "react-router-dom";
const Button = ({children, iconpath, iconalt, link, removeIcons, ...otherProps}) => {
  const navigate = useNavigate();

  const goToLinkHandler = () => {
      navigate(link);
  };
  return (
    <button onClick={goToLinkHandler} {...otherProps}>
        {!removeIcons &&
          <span className="flex items-center justify-end w-[22px] mr-1">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fillOpacity="0.5"/>
              </svg>
              <span className="transition-all w-0 mt-[3px] ml-[-2px] group-hover:w-[7px] h-[3px] rotate-[15deg] bg-white bg-opacity-70"></span>
          </span>
        }
        {children}
        {iconpath &&
          <span className="transition-all group-hover:rotate-[20deg] ml-1">
            {iconpath}
          </span>
        }
        {!removeIcons &&
          <span className="scale-75 mt-2 group-hover:scale-100">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fillOpacity="0.5"/>
            </svg>
          </span>
        }
      </button>
  )
}

export default Button
