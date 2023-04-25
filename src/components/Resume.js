import React from 'react';
import styles from './Resume.module.css';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML & CSS',
    'Git',
    // Add more proficiencies here
  ];

  return (
    <section className={styles.section}>
      <h2>Resume</h2>
      <a href="my_resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      <h3>Proficiencies:</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;