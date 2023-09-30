import React, { Fragment, useState } from 'react'
import styles from './Home.module.css'
import Button from '../UI/Button'

function Home(props) {

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.homeContainer}>
                    <div className={styles.description}>
                        <p>Hellooo tech enthusiasts! welcome to the course tracker website !!!</p>
                        <Button className={styles.homeButton} onClick={props.onShowSignIn}>Get Started</Button>
                    </div>
                </div>
                <div class={styles.imageContainer}>
                    <img src="homeImage.png" alt="homeimage" />
                </div>
            </div>
        </Fragment>
    )
}

export default Home
