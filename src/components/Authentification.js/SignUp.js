import React from 'react'
import Button from '../../UI/Button'
import Modal from '../../UI/Modal'
import styles from './SignUp.module.css'

const SignUp = (props) => {
    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <Modal onHidePage={props.onHideSignUp}>
            <form onSubmit={handleSubmit}>
                < h2 className={styles.title} > Sign Up </h2>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your Email </label>
                    <input type="email" className={styles.input} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your password </label>
                    <input type="password" className={styles.input} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Confirm password </label>
                    <input type="password" className={styles.input} />
                </div>
                <Button className={styles.signUpButton}>Submit</Button>
                <p className={styles.signUpParagraph}>Already have an account ? <a href="SignIn">Sign In</a></p>
            </form>
        </Modal>
    )
}

export default SignUp
