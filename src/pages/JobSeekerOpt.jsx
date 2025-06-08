

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MemberCard from "../components/MemberCard";

const JobSeekerOpt = () => {
    const [showActiveInfo, setShowActiveInfo] = useState(false);
    const [showFreelancerInfo, setShowFreelancerInfo] = useState(false);
    const [showInactiveInfo, setShowInactiveInfo] = useState(false);

    const activeRef = useRef(null);
    const freelancerRef = useRef(null);
    const inactiveRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (activeRef.current && !activeRef.current.contains(e.target)) {
                setShowActiveInfo(false);
            }
            if (freelancerRef.current && !freelancerRef.current.contains(e.target)) {
                setShowFreelancerInfo(false);
            }
            if (inactiveRef.current && !inactiveRef.current.contains(e.target)) {
                setShowInactiveInfo(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-white">
            <div className="flex w-[80%] mx-auto justify-between absolute right-4 left-4 top-1/12 transform -translate-y-1/2 z-10">
                <img src="/assets/images/logo.png" alt="logo" />
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen px-4 w-[50%] mx-auto">
                <div className="w-[70%] text-center">
                    <p className="text-[48px] font-bold text-[#FF3C61]">
                        As a Jobseeker
                    </p>
                    <p className="text-[#FF6F61] text-[20px]">
                        Select one of the listed options below
                    </p>
                </div>

                <div className="p-10 flex items-center justify-between bg-[#E0E0E01A] w-[1024px] h-[240px] mt-20 border-1 border-[#82828226] rounded-2xl">
                    <MemberCard
                        label="ACTIVE MEMBER"
                        iconSrc="/assets/images/profiletick.svg"
                        infoText="As an ACTIVE jobseeker, employers can search you out using the advanced search engine (ASE)."
                        position="above-icon"
                        showInfo={showActiveInfo}
                        setShowInfo={setShowActiveInfo}
                        containerRef={activeRef}
                        
                    />

                    <MemberCard
                        label="FREELANCER"
                        iconSrc="/assets/images/freelic.svg"
                        infoText="As a FREELANCER, employers can search you out using the advanced search engine (ASE)."
                        position="above-icon"
                        showInfo={showFreelancerInfo}
                        setShowInfo={setShowFreelancerInfo}
                        containerRef={freelancerRef}
                        onClick={() => navigate('/jobconnection')}
                    />

                    <MemberCard
                        label="INACTIVE MEMBER"
                        iconSrc="/assets/images/profile.svg"
                        infoText="As an INACTIVE jobseeker, employers cannot search you out on the platform."
                        position="below-card"
                        showInfo={showInactiveInfo}
                        setShowInfo={setShowInactiveInfo}
                        containerRef={inactiveRef}
                    
                    />
                </div>
            </div>
        </div>
    );
};

export default JobSeekerOpt;
