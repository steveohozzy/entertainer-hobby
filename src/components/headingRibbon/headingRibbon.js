
const HeadingRibbon = ({children, fullWidth, smallerText, ...otherProps}) => {
  return (
    <div {...otherProps}>
        <svg className='invisible absolute' width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="round"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="round" />
                    <feComposite in="SourceGraphic" in2="round" operator="atop"/>
                </filter>
            </defs>
        </svg>
        
        <div className={`${fullWidth ? 'w-full' : 'inline-block'} ribbon bg-brandRed px-16 text-center ${smallerText ? 'text-sm' : 'text-xl'} font-bold text-white p-inline-[3.8em] py-2 leading-[1.8]`}>
            {children}
        </div>
    </div>
  )
}

export default HeadingRibbon