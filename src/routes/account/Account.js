import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectIsSignedIn } from "../../store/account/accountSelector";
import { setIsSignedIn } from "../../store/account/accountReducer";

import AccountTabs from "../../components/accountTabs/AccountTabs";

const Account = () => {
  const [name, setName] = useState(false);
  const [lastname, setLastName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const isSignedIn = useSelector(selectIsSignedIn);

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(setIsSignedIn(true));
  };

  const handleSignOut = () => {
    dispatch(setIsSignedIn(false));
  };

  const showRegister = (e) => {
    setRegisterForm(true);
    setLoginForm(false);
  }

  const showLogin = (e) => {
    setRegisterForm(false);
    setLoginForm(true);
  }

  const handleNameChange = (e) => {
    setName(!e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(!e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(!e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(!e.target.value);
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      {!isSignedIn ? (
        <div className="bg-gradient-to-br from-black via-gray-900 to-black shadow-text-blue rounded-xl shadow-sm">
          <div className="flex md:hidden gap-2 w-full pt-6 px-2">
            <button onClick={showLogin} className={`transition-all w-1/2 bg-brandBlue py-2 px-1 font-bold rounded-lg ${registerForm ? 'bg-brandLightBlue text-gray-100' : 'text-white'}`}>
              Existing Csutomers
            </button>
            <button onClick={showRegister} className={`transition-all w-1/2 bg-brandBlue py-2 px-1 font-bold rounded-lg ${loginForm ? 'bg-brandLightBlue text-gray-100' : 'text-white'}`}>
              Register
            </button>
          </div>
          <div className="w-full flex gap-3">
            <div className={`w-full md:w-1/2 py-6 px-4 ${loginForm ? 'block' : 'hidden md:block'}`}>
              <h2 className="text-gray-100 font-bold text-lg md:text-xl">Existing Customers</h2>
              <form id="sign-in-form">
                <div className="space-y-8">
                  <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${email && 'border-red-600'}`}>
                    <input type="email" placeholder="Email" onChange={handleEmailChange} onBlur={handleEmailChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                    <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Email</label>
                    <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                      <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${password && 'border-red-600'}`}>
                    <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Password" onChange={handlePasswordChange} onBlur={handlePasswordChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none pr-[150px]" />
                    <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Password</label>
                    <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                      <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                      </svg>
                    </span>
                    <button className="text-gray-100 white absolute right-10 top-1" onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>
                      {showPassword ? 'Hide Password' : 'Show Password'}
                    </button>
                  </div>
                </div>
                <button className="text-gray-100 text-sm mt-2" onClick={(e) => e.preventDefault()}>
                  Forgot password?
                </button>
                <button
                  onClick={handleSignIn}
                  className='bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all block w-full mt-2'
                >
                  Login
                </button>
              </form>
            </div>

            <div className={`w-full md:w-1/2 py-6 px-4 ${registerForm ? 'block' : 'hidden md:block'}`}>
              <h2 className="text-gray-100 font-bold text-lg md:text-xl">Create an account</h2>
              <form id="sign-up-form" className="space-y-8">
                <div className={`flex h-[44px] px-3 mt-5 rounded-lg w-full border border-[3px] border-brandBlue relative ${name && 'border-red-600'}`}>
                  <span
                    className="absolute left-[calc(20%-20px)] md:left-[calc(15%-10px)] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
                  <select className='relative w-[20%] appearance-none border-r-[3px] bg-black border-gray-400 pr-4 mr-2 text-gray-100 font-bold outline-none'>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                  </select>
                  <div className="relative w-full">
                    <input type="text" placeholder="First Name" onChange={handleNameChange} onBlur={handleNameChange} className="peer pr-[20px] text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                    <label className="font-semibold pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">First Name</label>
                    <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-0 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                      <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${lastname && 'border-red-600'}`}>
                  <input type="text" placeholder="Last Name" onChange={handleLastNameChange} onBlur={handleLastNameChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                  <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Last Name</label>
                  <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                    <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${email && 'border-red-600'}`}>
                  <input type="email" placeholder="Email" onChange={handleEmailChange} onBlur={handleEmailChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                  <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Email</label>
                  <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                    <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${password && 'border-red-600'}`}>
                  <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Password" onChange={handlePasswordChange} onBlur={handlePasswordChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none pr-[150px]" />
                  <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Password</label>
                  <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                    <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                    </svg>
                  </span>
                  <button className="text-gray-100 white absolute right-10 top-1" onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </button>
                </div>
                <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${password && 'border-red-600'}`}>
                  <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Confirm Password" onChange={handlePasswordChange} onBlur={handlePasswordChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none pr-[150px]" />
                  <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Confirm Password</label>
                  <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                    <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                    </svg>
                  </span>
                  <button className="text-gray-100 white absolute right-10 top-1" onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <AccountTabs />
          </div>
          <div className="max-w-xl mx-auto mt-6">
            <button
              onClick={handleSignOut}
              className='bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all w-full mt-2'
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Account