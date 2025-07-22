import React, { useState } from "react";

export default function Switcher({options, className}) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`flex items-center ${className}`}>
            <div className={`border-1 flex justify-center items-center border-gray-300 overflow-hidden rounded-sm tracking-[5%]`}>
                <label className="relative inline-flex cursor-pointer select-none items-center justify-center bg-primary p-[2px]">
                    <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    {/* Fundo deslizante*/}
                    <span
                        className={`slider absolute left-[2px] top-[2px] h-9 w-32 rounded-[2px] bg-white transition-all duration-300 ease-in-out z-0 ${
                            isChecked ? "translate-x-32" : ""
                        }`}
                    ></span>

                    {/* Opção Sobre */}
                    <span
                        className={`relative z-10 flex items-center justify-center  py-2 px-6 text-sm w-32 ${
                            !isChecked ? "text-font font-medium" : "text-white"
                        }`}
                    >
                        {options[0]}
                    </span>

                    {/* Opção Ocorrências */}
                    <span
                        className={`relative z-10 flex items-center justify-center  py-2 px-6 text-sm w-32 ${
                            isChecked ? "text-font font-medium" : "text-white"
                        }`}
                    >
                        {options[1]}
                    </span>
                </label>
            </div>
        </div>
    );
}
