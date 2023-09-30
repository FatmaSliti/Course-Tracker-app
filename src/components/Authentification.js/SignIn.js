import React from 'react'
import Button from '../../UI/Button'
import Modal from '../../UI/Modal';
import styles from './SignIn.module.css'

const SignIn = props => {
    const handleSubmit = e => {
        e.preventDefault();

    }
    return (
        <Modal onHidePage={props.onHidePage}  >
            <form onSubmit={handleSubmit}>
                <h2 className={styles.title}>Sign In</h2>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your Email </label>
                    <input type="email" className={styles.input} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your password </label>
                    <input type="password" className={styles.input} />
                </div>
                <Button className={styles.signInButton} >Submit</Button>
                <p className={styles.signInParagraph}>Don't have an account? <a href="SignUp">Sign Up</a></p>
            </form>
        </Modal>
    )
}

export default SignIn
