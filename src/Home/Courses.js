import React, { Fragment } from "react";

import styles from "./Courses.module.css";

function Courses() {
    return (
        <Fragment>
            <section className={styles.getStartedSection}>
                <h2 className={styles.title}>Get Started</h2>
                <p className={styles.paragraph}>
                    If you're feeling distracted and don't know where to start, we're here
                    to help!
                </p>
                <p className={styles.paragraph}>
                    I've gathered courses from different resources, based on my own
                    experiences, to assist you.
                </p>
                <p className={styles.paragraph}>Let's take a look!!</p>
                <div className={styles.resources}>
                    <h3>Featured Resources:</h3>
                    <ul className={styles.resourceList}>
                        <li>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/videoseries?si=BJyO7o0davJKWPDA&amp;list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji"
                                title="HTML YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                            <p className={styles.resourceDescription}>
                                This YouTube playlist covers HTML fundamentals, suitable for
                                beginners to advanced learners
                            </p>
                        </li>
                        <li>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/videoseries?si=USP0Q7dCjoVRPPgU&amp;list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe"
                                title="CSS YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            <p className={styles.resourceDescription}>
                                This YouTube playlist covers CSS fundamentals, suitable for
                                beginners to advanced learners
                            </p>
                        </li>
                        <li>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/videoseries?si=uU8oqR2MBSJfuPji&amp;list=PLDoPjvoNmBAzHSjcR-HnW9tnxyuye8KbF"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            <p className={styles.resourceDescription}>
                                This YouTube playlist covers a real project to apply the
                                HTML/CSS languages.It helps a lot guys!!
                            </p>
                        </li>
                        <li>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/videoseries?si=ckbChw6A4ScvvFNc&amp;list=PLDoPjvoNmBAy1l-2A21ng3gxEyocruT0t"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            <p className={styles.resourceDescription}>
                                This YouTube playlist is a the second template to dive deeper in
                                the HTML/ CSS concepts! It's also very very recommended!
                            </p>
                        </li>
                        <li>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/videoseries?si=YoQivUq_3MR6fyXa&amp;list=PLDoPjvoNmBAxuCSp2_-9LurPqRVwketnc"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            <p className={styles.resourceDescription}>
                                This YouTube playlist is a the second template to dive deeper in
                                the HTML/ CSS concepts! It's also very very recommended!
                            </p>
                        </li>
                        <li>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/videoseries?si=4h5ARy3ptK1XaVW4&amp;list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            <p className={styles.resourceDescription}>
                                This YouTube playlist covers JavaScript fundamentals, suitable
                                for beginners to advanced learners
                            </p>
                        </li>
                        <li>
                            <a href="https://elzero.org/study/javascript-bootcamp-2021-study-plan/" alt='fhdj' target="_blank" rel="noopener noreferrer">
                                <img src="jsmastery.png" alt="imagee" className="aboutImages" />
                            </a>
                            <p>These javascript exercices helped me memorize almost all the js concepts!</p>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/course/nodejs-the-complete-guide/" alt='fhdj' target="_blank" rel="noopener noreferrer">
                                <img src="react.png" alt="imagee" className="aboutImages" />
                            </a>
                            <p>This React js udemy ressource is really a miracle!</p>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" alt='dk' target="_blank" rel="noopener noreferrer">
                                <img src="node.png" alt="imagee" className="aboutImages" />
                            </a>
                            <p>This Node js udemy ressource is very helpfull!</p>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/course/understanding-typescript/" alt='dk' target="_blank" rel="noopener noreferrer">
                                <img src="ts.png" alt="imagee" className="aboutImages" />
                            </a>
                            <p>This Typescript udemy course should be great to enhance your frontend projects!</p>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" alt='dk' target="_blank" rel="noopener noreferrer">
                                <img src="nextjs.png" alt="imagee" className="aboutImages" />
                            </a>
                            <p>This Next js udemy course is really wonderfull!</p>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/course/mongodb-the-complete-developers-guide/" alt='dk' target="_blank" rel="noopener noreferrer">
                                <img src="mongo.png" alt="imagee" className="aboutImages" />
                            </a>
                            <p>This MongoDB udemy course is should be very helpfull!</p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* <p>In this website I gathered all the ressourses I used in my self learning journey from which I get so much knowlodge from these experemented instructors and I want to let you benifit from this ready track which you can tweak as you want of course </p> */}
        </Fragment>
    );
}

export default Courses;
