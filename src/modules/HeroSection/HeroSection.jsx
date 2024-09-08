import React from "react";
import "./herosection-styles.scss";
import { TypeAnimation } from "react-type-animation";
import Button from "src/common/components/Button";

const headlineStyles = {
    fontFamily: "Poppins",
    fontWeight: 800, // Extrabold weight
    fontSize: "40px", // Large font size
    // Add any additional styles from `.font-xl` as needed
};

const HeroSection = () => {
    return (
        <div className="hero__section">
            <img
                className="my-image"
                src="https://firebasestorage.googleapis.com/v0/b/chilled-grapes.appspot.com/o/IMG_20221030_040413_424.jpg?alt=media&token=b4cb43c0-5dfe-4675-ac29-9ebce01aa55f"
            />
            <div className="intro__section">
                <TypeAnimation
                    style={headlineStyles}
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Tech Sculptor',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Building the Future, Pixel by Pixel.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={1}
                />
                <div className="intro-text">
                    Hi there! I'm Abrar Ahmad Shah, a full-stack developer with a passion
                    for creating engaging and user-friendly web applications. With over 4
                    years of experience, I've honed my skills in React, Node.js, and
                    Firestore to build innovative digital solutions. Let's work together
                    to bring your ideas to life!
                </div>
                <Button buttonText="About Me" />
            </div>
        </div>
    );
};

export default HeroSection;
