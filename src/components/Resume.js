import React from 'react';
import styles from './Resume.module.css';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML & CSS',
    'Git',
    'MongoDB',
    'Express.js',
    'RESTful APIs',
    'GraphQL',
    'MySQL',
    'Jest',
    'Bootstrap',
  ];

  return (
    <section className={styles.section}>
      <div className={styles.leftCol}>
        <h2>Resume</h2>
        <a href="my_resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
        <h2>Certificate</h2>
        <a href="my_certificate.pdf" target="_blank" rel="noopener noreferrer">Download My Certificate</a>
      </div>
      <div className={styles.rightCol}>
        <h3>Proficiencies:</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );  
}

export default Resume;