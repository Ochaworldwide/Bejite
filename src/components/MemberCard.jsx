import React from "react";
import InfoBox from "./InfoBox";

const MemberCard = ({
    label,
    iconSrc,
    infoText,
    position,
    showInfo,
    setShowInfo,
    containerRef,
    onClick,
}) => (
    <div className="w-[274px] h-[164px] relative">
        <img onClick={onClick} className="m-auto cursor-pointer" src={iconSrc} alt="" />
        <div className="gap-4 flex justify-center items-center w-[274px] h-[53px] bg-[#E63357] shadow-2xl rounded-2xl mt-5 relative">
            <p className="text-center text-white text-[16px] font-medium">{label}</p>
            <div className="relative" ref={containerRef}>
                {showInfo && <InfoBox text={infoText} position={position} />}
                <img
                    className="w-[23px] h-[23px] cursor-pointer"
                    src="/assets/images/questiontag.svg"
                    alt=""
                    onClick={() => setShowInfo((prev) => !prev)}
                />
            </div>
        </div>
    </div>
);

export default MemberCard;
