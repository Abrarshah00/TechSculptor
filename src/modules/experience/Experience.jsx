import React from "react";
import "./experience-styles.scss";
import { experiences } from "src/common/constants/skills";

const Experience = () => {


    return (
        <div className="experience__section">
            <div className="experience__section-heading">Experience</div>
            <div className="experience__timeline-section">
                <div className="timeline">
                    {experiences?.map((experience) => (
                        <div className="event">
                            <div className="company__name">{experience?.companyName}</div>
                            <div className="dot"></div>
                            <div className="content">
                                <div className="designation__title">{experience?.designation}</div>
                                <div className="designation__duration">{experience?.duration}</div>
                                <div className="designation__description">{experience?.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
