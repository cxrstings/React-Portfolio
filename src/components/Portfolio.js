import React from "react";
import styles from './Portfolio.module.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'Animal Shelter',
            imgSrc: '../images/',
            deployLink: 'https://example.com',
            githubLink: 'https://example.com',
        },
        {
            title: 'Movie Mash',
            imgSrc: '../images/',
            deployLink: 'https://example.com',
            githubLink: 'https://example.com',
        },
        {
            title: 'JavaScript Quiz',
            imgSrc: '../images/',
            deployLink: 'https://example.com',
            githubLink: 'https://example.com',
        },
        {
            title: 'Weather Dashboard',
            imgSrc: '../images/',
            deployLink: 'https://example.com',
            githubLink: 'https://example.com',
        },
        {
            title: 'My Previous Portfolio',
            imgSrc: '../images/',
            deployLink: 'https://example.com',
            githubLink: 'https://example.com',
        },
        {
            title: 'Password Generator',
            imgSrc: '../images/',
            deployLink: 'https://example.com',
            githubLink: 'https://example.com',
        },
    ];

    return (
        <div className={styles.portfolio}>
            {projects.map((project, index) => (
                <div key={index} className='project'>
                    <h2>{project.title}</h2>
                    <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                        <img src={project.imgSrc} alt={project.title} />
                    </a>
                    <div className="links">
                        <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Github Repo</a>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Portfolio;