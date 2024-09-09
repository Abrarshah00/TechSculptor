import React, { useState } from "react";
import "./navbarstyles.scss";
import { SunMoon } from "lucide-react";
import Button from "src/common/components/Button";
import IconButton from "src/common/components/IconButton";
import { ROUTES } from "src/common/constants/routes";
import { resumelink } from "src/common/constants/profile";

const Navbar = () => {
    const [isActive, setIsActive] = useState();
    const handleNavigate = (route) => {
        setIsActive(route.label)
    };

    const handleRedirect = (route) => {
        window.open(route, "_blank");
    }

    return (
        <div className="navbar">
            <div className="navbar__title">Abrar.</div>
            <div className="navbar__menu">
                {Object.values(ROUTES).map((route) => (
                    <div
                        className={`navbar__menu-link ${isActive === route.label ? "active" : ''}`}
                        key={route.label}
                        onClick={() => handleNavigate(route)}
                    >
                        {route.label}
                    </div>
                ))}
            </div>
            <div className="navbar__actions">
                <IconButton icon={<SunMoon />} />

                <Button buttonText="Download CV" variant="button-neutral" onClick={() => handleRedirect(resumelink)} />
            </div>
        </div>
    );
};

export default Navbar;
