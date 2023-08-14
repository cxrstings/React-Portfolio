import React from "react";
import styles from './AboutMe.module.css';

const About = () => {
  return (
    <>
    <div className={styles.aboutcontainer}>
      <div className={styles.aboutimage}>
        <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="Corbin Johns" />
      </div>
      <div className={styles.abouttext}>
        <h2>About Me</h2>
        <p>
            Hello, and thank you for looking at my portfolio! My name is Corbin Johns, and I am a 22-year-old aspiring web developer with a Certification of Completion in Full Stack Web Development at edX Boot Camps through Michigan State University College of Engineering. With a passion for learning and trying new things, I thrive on expanding my comfort zone and embracing challenges that come my way.
            <br></br>
            <br></br>
            Throughout my studies, I have developed skills in MongoDB, MySQL, Express, React, Node, and various other web technologies. I'm always excited to explore new languages and tools to strengthen my abilities as a developer. This course was quite challenging at times, but it taught me the importance of persistence and adaptability.
            <br></br>
            <br></br>
            As I continue on my journey in the tech industry, I hope to secure a career that not only challenges me but also allows me to learn and grow every day. I am eager to collaborate with others, make a positive impact, and be a part of the ever-evolving world of technology.
        </p>
      </div>
    </div>
    <div className={styles.resume}>
      <div className={styles.resumeSection}>
        <h2>Resume</h2>
        <a href="my_resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
      </div>
      <div className={styles.certificate}>
        <h2>Certificate</h2>
        <a href="my_certificate.pdf" target="_blank" rel="noopener noreferrer">Download My Certificate</a>
      </div>
    </div>
    </>
  );
};

export default About;
