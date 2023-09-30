import React, { Fragment } from 'react'
import styles from './Header.module.css'
import Navigation from './Navigation'

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
