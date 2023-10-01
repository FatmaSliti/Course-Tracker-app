import React, { Fragment } from 'react'
import styles from './About.module.css'

const About = () => {
    return (
        <Fragment>
            <div className={styles.aboutSection}>
                <h1 className={styles.title}>About</h1>
                <p className={styles.about}>Welcome to this section of resources that have been instrumental in my self-learning journey. Here, you'll discover a collection of materials that I've either explored or have plans to explore in the future </p>
                <h3>Courses</h3>
                <p className={styles.about}>Within the course section, you'll find a diverse range of resources, each offering its own unique value. Some resources listed here have been tried and tested, and I've provided insights into what I gained from them. Others are part of my future learning goals, representing the exciting paths I'm eager to explore.</p>
                <p className={styles.about}>For each resource, I've included information on why it caught my interest and what I aim to learn or achieve by engaging with it. This section is a reflection of my continuous learning journey, encompassing both past accomplishments and future aspirations.</p>
                <p className={styles.about}>As I continue to explore and learn from these resources, I'll update this section with my latest experiences and insights. Feel free to browse through the combined collection, and I hope you find inspiration and valuable learning opportunities that resonate with your own journey</p>
            </div>

        </Fragment>
    )
}

export default About
