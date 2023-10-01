import React, { Fragment } from 'react'
import styles from './Header.module.css'
import Navigation from './Navigation'
import Courses from '../../Home/Courses';
import About from '../../Home/About';
import Contact from '../../Home/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header = (props) => {
    return (
        <Fragment>
            <div className={styles.header}>
                <h2>CourseTracker</h2>
                <Navigation onShowSignIn={props.onShowSignIn}  onShowSignUp={props.onShowSignUp} />
                {/* <Navigation  onHidePage={props.onShowSignIn} onShowPage={props.onShowPage}  /> */}
            </div>
        </Fragment>
    )
}

export default Header
