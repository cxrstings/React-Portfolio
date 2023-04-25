import React from "react";
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <section className={styles.section}>
            <h2>About Me</h2>
            <div>
                <img src="https://via.placeholder.com/150" alt="Profile" />
                <p>
                    Non ullamco commodo laborum Lorem elit dolor occaecat incididunt in veniam nostrud dolor Lorem in.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;