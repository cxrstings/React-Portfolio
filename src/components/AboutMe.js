import React from "react";
import styles from './AboutMe.module.css';

const About = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.aboutimage}>
        <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="Corbin Johns" />
      </div>
      <div className={styles.abouttext}>
        <h2>About Me</h2>
        <p>
            Hello, and thank you for looking at my portfolio! My name is Corbin Johns, and I am a 22-year-old aspiring web developer currently studying coding at edX Boot Camps through Michigan State University. With a passion for learning and trying new things, I thrive on expanding my comfort zone and embracing challenges that come my way.
            <br></br>
            <br></br>
            Throughout my studies, I have developed skills in HTML, CSS, JavaScript, and various other web technologies. I'm always excited to explore new languages and tools to strengthen my abilities as a developer. This course has been quite challenging at times, but it has taught me the importance of persistence and adaptability.
            <br></br>
            <br></br>
            In my free time, I enjoy hiking, swimming, playing video games, and taking care of my pets which contributes to my creativity and problem-solving abilities.
            <br></br>
            <br></br>
            As I continue on my journey in the tech industry, I hope to secure a career that not only challenges me but also allows me to learn and grow every day. I am eager to collaborate with others, make a positive impact, and be a part of the ever-evolving world of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
