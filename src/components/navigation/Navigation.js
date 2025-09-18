import { useState } from "react";
import { X, MenuIcon } from "lucide-react";

import Accordion from "../accordion/Accordion";

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <button name="Activate Menu" className="transition-all shadow-lg flex flex-col items-center text-brandBlue bg-white p-1 px-3 pl rounded-xl hover:scale-105 rounded-tl-[0] rounded-bl-[0] md:rounded-tl-xl md:rounded-bl-xl" onClick={() => setShowMenu(true)}>
                <MenuIcon />
                <span className="text-[10px] mt-[-3px] relative">Menu</span>
                <span className="sr-only">Activate Menu</span>
            </button>
             
        {/* Filter Panel Overlay */}
        {showMenu && (
            <div className="fixed h-screen inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowMenu(false)} />
        )}

        {/* Sliding Filter Panel */}
        <div
            className={`fixed h-screen top-0 left-0 h-full w-80 bg-brandLightBlue shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
            showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="h-full overflow-y-auto">
                <div className="flex items-center bg-brandBlue justify-between p-3 shadow-md">
                    <a href="/">
                        <img
                            src="/entertainer-logo.svg"
                            alt="The Entertainer"
                            className="w-[100px]"
                        />
                    </a>
                    <button name="Close Menu" onClick={() => setShowMenu(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close Menu</span>
                    </button>
                </div>
                <nav>
                    <Accordion
                        className="text-brandBlue"
                        title="Brands"
                        answer={
                           
                            <ul className="sub-navigation-list">
                                <li className="flex justify-between w-full p-3 border-b border-b-2 border-blue-300 text-textBlue text-lg">
                                    <a href="/brands/squishmallows" title="Squishmallows">Squishmallows</a>
                                </li>
                                <li className="flex justify-between w-full p-3 border-b border-b-2 border-blue-300 text-textBlue text-lg">
                                    <a href="/brands/lego" title="LEGO">LEGO</a>
                                </li>
                                <li className="flex justify-between w-full p-3 border-b border-b-2 border-blue-300 text-textBlue text-lg">
                                    <a href="/brands/barbie" title="Barbie">Barbie</a>
                                </li>
                                <li className="flex justify-between w-full p-3 border-b border-b-2 border-blue-300 text-textBlue text-lg">
                                    <a href="/brands/fuggler" title="Fuggler">Fuggler</a>
                                </li>
                            </ul>
                        }
                    />

                    <Accordion
                        className="text-brandBlue"
                        title="Type of Toy"
                        answer={
                           <Accordion
                                className="text-brandBlue"
                                title="Action Toys"
                                isSubNav={true}
                                answer={
                                
                                    <ul className="sub-navigation-list px-3">
                                        <li className="flex justify-between w-full p-3 border-b border-b-2 border-blue-300 text-textBlue text-lg">
                                            <a href="/brands/squishmallows" title="Squishmallows">Squishmallows</a>
                                        </li>
                                        <li className="flex justify-between w-full p-3 border-b border-b-2 border-blue-300 text-textBlue text-lg">
                                            <a href="/brands/lego" title="LEGO">LEGO</a>
                                        </li>
                                        <li className="flex justify-between w-full p-3 border-b border-b-2 border-blue-300 text-textBlue text-lg">
                                            <a href="/brands/barbie" title="Barbie">Barbie</a>
                                        </li>
                                        <li className="flex justify-between w-full p-3 border-b border-b-2 border-blue-300 text-textBlue text-lg">
                                            <a href="/brands/fuggler" title="Fuggler">Fuggler</a>
                                        </li>
                                    </ul>
                                }
                            />
                        }
                    />
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navigation;
