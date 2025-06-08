import React from "react";

const InfoBox = ({ text, position }) => {
    const base =
        "absolute w-[250px] h-[80px] text-center text-[12px] font-normal text-white bg-[#333333] p-5 rounded-tl-[50px] rounded-br-[50px] shadow-lg z-20";

    const positionClass =
        position === "above-icon"
            ? "bottom-full mb-0 left-35 transform -translate-x-1/2" : "top-full mt-3 left-[-120px] transform -translate-x-1/2";
    return (
        <div className={`${base} ${positionClass}`}>
            <p>{text}</p>
        </div>
    );
};

export default InfoBox;
