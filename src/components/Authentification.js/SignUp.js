import React, { useState } from 'react'
import Button from '../../UI/Button'
import Modal from '../../UI/Modal'
import styles from './SignUp.module.css'

const SignUp = (props) => {
    const [enteredValue, setEnteredValue] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [message, setMessage] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: enteredValue.email,
            password: enteredValue.password,
        }

        if (enteredValue.email.trim() === '' || enteredValue.password === '' || enteredValue.confirmPassword === '') {
            setMessage('Please fill in all the inputs!')
            return;
        }

        if (enteredValue.password !== enteredValue.confirmPassword) {
            setMessage('passwords mismatch!')
            return;
        } else {
            setMessage('user added successfully!!')
        }

        await fetch('https://react-course-tacker-app-default-rtdb.firebaseio.com/login.json', {
            method: 'POST',
            // body: JSON.stringify({
            //     userLogin: userLogin
            // })
            body: JSON.stringify(userData)
        });

        // setEnteredValue(userLogin)

        console.log(enteredValue.email)
        console.log(enteredValue.password)
        console.log(enteredValue.confirmPassword)

        setEnteredValue({
            email: '',
            password: '',
            confirmPassword: '',
        });
    }

    const emailChangeHandler = (e) => {
        setEnteredValue({
            ...enteredValue,
            email: e.target.value,
        })
    }

    const passwordChangeHandler = (e) => {
        setEnteredValue({
            ...enteredValue,
            password: e.target.value,
        });
    }

    const ConfirmChangeHandler = (e) => {
        setEnteredValue({
            ...enteredValue,
            confirmPassword: e.target.value
        });
    }

    return (
        <Modal onHidePage={props.onHideSignUp}>
            <form onSubmit={handleSubmit}>
                < h2 className={styles.title} > Sign Up </h2>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your Email </label>
                    <input type="email" className={styles.input} value={enteredValue.email} onChange={emailChangeHandler} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your password </label>
                    <input type="password" className={styles.input} value={enteredValue.password} onChange={passwordChangeHandler} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Confirm password </label>
                    <input type="password" className={styles.input} value={enteredValue.confirmPassword} onChange={ConfirmChangeHandler} />
                </div>
                <Button className={styles.signUpButton}>Submit</Button>
                <p className={styles.message}>{message}</p>
                <p className={styles.signUpParagraph}>Already have an account ? <a href="SignIn">Sign In</a></p>
            </form>
        </Modal>
    )
}

export default SignUp
