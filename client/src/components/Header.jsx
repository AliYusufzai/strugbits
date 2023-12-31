import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ sidePanelSetState }) {
  function openSidePanel() {
    sidePanelSetState(true);
  }
  return (
    <header className="flex gap-5 px-[50px] py-[20px] md:py-[35px] bg-white shadow-2">
      <button className="burgerButton text-[44px] font-bold xl:hidden">
        <RxHamburgerMenu onClick={openSidePanel} />
      </button>

      <h1 className="pageTitle font-black text-black  text-[20px] md:text-[30px]">
        CUSTOMERS
      </h1>
    </header>
  );
}
