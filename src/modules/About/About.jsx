import React from "react";
import "./about-styles.scss";
import { skills } from "src/common/constants/skills";

const About = () => {
  return (
    <div className="about__section">
      <div className="about_section-heading">About Me</div>
      <div className="about__description">
        I'm a dedicated Software Developer with a passion for crafting
        innovative web applications. Based in Bangalore, India, I bring a proven
        track record of delivering high-performance solutions that exceed
        expectations. My expertise lies in leveraging modern JavaScript
        frameworks and libraries, including React, Redux, Redux Saga, Vue, and
        Nuxt, to create intuitive and engaging user interfaces. Beyond the
        frontend, I possess a deep understanding of backend development,
        utilizing Node.js and Firebase to build scalable and reliable
        server-side infrastructure. <br /> My commitment to code quality and
        maintainability is evident in my proficiency with testing tools like
        Jest and Cypress, along with code linters like ESLint and Prettier, and
        CI/CD pipelines for efficient development workflows. With a strong
        foundation in web development fundamentals and a keen eye for detail, I
        am dedicated to delivering exceptional results. I thrive on
        collaborating with cross-functional teams to understand business
        requirements and translate them into effective technical solutions. My
        ability to stay up-to-date with the latest industry trends and
        technologies ensures that I consistently deliver cutting-edge
        applications. Let's connect to discuss how my skills and experience can
        contribute to your projects and drive your business forward.
      </div>
      <div className="skills">

        {/* SKILL SECTION */}

        <div className="skill__section">
          <div className="skill__title">Skills</div>
          <div className="skill__name-column">
            <div className="skill__name-section">
              {skills.frontend.map((skill) => (
                <div className="skill__name">{skill}</div>
              ))}
            </div>
            <div className="skill__name-section">
              {skills.backend.map((skill) => (
                <div className="skill__name">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        {/* TOOLS */}
        <div className="skill__section">
          <div className="skill__title">Tools</div>
          <div className="skill__name-column">
            <div className="skill__name-section">
              {skills.tools.map((skill) => (
                <div className="skill__name">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        {/* STRATEGIES */}
        <div className="skill__section">
          <div className="skill__title">Strategies</div>
          <div className="skill__name-column">
            <div className="skill__name-section">
              {skills.strategies.map((skill) => (
                <div className="skill__name">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        {/* APIS */}
        <div className="skill__section">
          <div className="skill__title">API</div>
          <div className="skill__name-column">
            <div className="skill__name-section">
              {skills.apis.map((skill) => (
                <div className="skill__name">{skill}</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
