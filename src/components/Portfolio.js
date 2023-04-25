import React from "react";
import styles from './Portfolio.module.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'Animal Shelter',
            imgSrc: '/images/animalshelter.jpg',
            deployLink: 'https://project2-animal-shelter.herokuapp.com/',
            githubLink: 'https://github.com/marywebby/animal-shelter',
        },
        {
            title: 'Movie Mash',
            imgSrc: '/images/moviemash.jpg',
            deployLink: 'https://scicluna.github.io/movie-mash/',
            githubLink: 'https://github.com/scicluna/movie-mash',
        },
        {
            title: 'JavaScript Quiz',
            imgSrc: '/images/jsquiz.jpg',
            deployLink: 'https://github.com/cxrstings/javascript-quiz',
            githubLink: 'https://cxrstings.github.io/javascript-quiz/',
        },
        {
            title: 'Weather Dashboard',
            imgSrc: '/images/weather.jpg',
            deployLink: 'https://cxrstings.github.io/weather-forecast/',
            githubLink: 'https://github.com/cxrstings/weather-forecast',
        },
        {
            title: 'My Previous Portfolio',
            imgSrc: '/images/portfolio.jpg',
            deployLink: 'https://cxrstings.github.io/myportfolio/',
            githubLink: 'https://github.com/cxrstings/myportfolio',
        },
        {
            title: 'Password Generator',
            imgSrc: '/images/passgen.jpg',
            deployLink: 'https://cxrstings.github.io/javascriptPasswordGenerator/',
            githubLink: 'https://github.com/cxrstings/javascriptPasswordGenerator',
        },
    ];

    return (
        <div className={styles.portfolio}>
            {projects.map((project, index) => (
                <div key={index} className={styles.project}>
                    <h2>{project.title}</h2>
                    <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                        <img src={project.imgSrc} alt={project.title} />
                    </a>
                    <div className={styles.links}>
                        <a className={styles.button} href={project.deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
                        <a className={styles.button} href={project.githubLink} target="_blank" rel="noopener noreferrer">Github Repo</a>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Portfolio;