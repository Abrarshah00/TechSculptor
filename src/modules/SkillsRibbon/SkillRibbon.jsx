import React from "react";
import "./skillsribbon-styles.scss";
import { skills } from "src/common/constants/skills";

const SkillRibbon = () => {
    return (
        <div className="skills__ribbon">
            <div className="black__strip">black strip</div>
            <div className="red__strip">
                <div className="skills__container">
                    {skills.frontend?.map((skill) => {
                        return <div className="skill__label"> {skill} </div>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillRibbon;
