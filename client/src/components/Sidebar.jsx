import React from "react";

import Button from "../utility-component/Button";
import logo from "../assets/images/logo.png";
import { FaUsers } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Sidebar({ sidepanelState, sidePanelSetState }) {
    function closeSidePanel() {
        sidePanelSetState(false);
    }
    return (
        <aside
            className={`absolute w-full z-30 transition xl:relative left-0 xl:translate-x-0 xl:col-span-3 lg:rounded-tr-[20px] bg-green-400 py-[48px] px-[10px] text-center h-full ${
                sidepanelState
                    ? "translate-x-0 max-w-[385px]"
                    : "translate-x-[-100%]"
            }`}
        >
            <div className="flex items-center relative justify-center gap-2 mx-auto mb-[20px] md:mb-[50px]  lg:mb-[123px]">
                <img src={logo} alt="" className="block" />
                <button
                    className="text-[44px] font-bold closeIcon text-white xl:hidden"
                    onClick={closeSidePanel}
                >
                    <IoClose />
                </button>
            </div>
            <ul className="list-none">
                <li className="text-center">
                    <button className="lg:max-w-[350px] flex items-center justify-center gap-3 mx-auto  xl:text-right relative w-full text-white transition hover:shadow-1 py-[15px] xl:px-20 rounded-[10px] text-[18px] uppercase tracking-[0.24px] bg-green-700">
                        <span className="icon_wrap relative left-[-10%]">
                            <FaUsers />
                        </span>
                        
                        CUSTOMERS
                    </button>
                </li>
            </ul>
        </aside>
    );
}
