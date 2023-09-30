import React, { Fragment } from 'react'
import styles from './Navigation.module.css'
import Button from '../../../UI/Button'

function Navigation(props) {
    return (
        <div className={styles.navigation}>
            <div className={styles.links}>
                <li>About</li>
                <li>Contact</li>
                <li>Courses</li>
            </div>
            <div className={styles.button}>
                <Button onClick={props.onShowPage}>Sign In</Button>
                <Button onClick={props.onShowPage}>Sign Up</Button>
            </div>
        </div>
    )
}

export default Navigation

