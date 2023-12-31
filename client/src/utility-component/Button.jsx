import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Button({ text, icon, bg }) {
    return (
        <button
            className={`lg:max-w-[370px] flex items-center justify-center gap-3 xl:inline-block xl:text-right relative w-full text-white transition hover:shadow-1 py-[19px] xl:pe-20 rounded-[10px] text-[24px] uppercase tracking-[0.24px] ${
                bg ? bg : "bg-green-700"
            }`}
        >
            <span className="icon_wrap absolute left-[10%]">
                <FontAwesomeIcon icon={icon ?? icon} />
            </span>
            {text ? text : "Default Text"}
        </button>
    );
}
