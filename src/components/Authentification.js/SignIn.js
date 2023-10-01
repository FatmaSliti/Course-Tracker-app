import React, { useEffect, useState } from 'react'
import Button from '../../UI/Button'
import Modal from '../../UI/Modal';
import styles from './SignIn.module.css'

const SignIn = props => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [loadedData, setLoadedData] = useState([]);
    const [message, setMessage] = useState('');

    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://react-course-tacker-app-default-rtdb.firebaseio.com/login.json');
            if (!response.ok) {
                throw new Error('something went wrong')
            }
            const loginData = await response.json();
            console.log(loginData)

            const loadedData = [];

            for (const key in loginData) {
                loadedData.push({
                    id: key,
                    email: loginData[key].email,
                    password: loginData[key].password,
                })
            }

            // const loadedData = Object.keys(loginData).map(key => ({
            //     id: key,
            //     ...loginData[key],
            // }));

            setLoadedData(loadedData);
        }
        fetchData();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        console.log(enteredEmail + enteredPassword)

        const matchingUser = loadedData.find((user) => user.email === enteredEmail);
        console.log(matchingUser)

        // if (matchingUser && matchingUser.password === enteredPassword) {

        if (enteredEmail.trim() === '' || enteredPassword.trim() === '') {
            setMessage('Please fill in all the inputs!');
            return;
        }

        if (matchingUser) {
            if (matchingUser.password === enteredPassword) {
                console.log('login successful!');
                setMessage('login successful!')
            } else {
                console.log('Password mismatch.');
                setMessage('Password mismatch')
            }
        } else {
            console.log('User not found.');
            setMessage('user not found');
        }

        setEnteredEmail('')
        setEnteredPassword('')
    }

    const handleEmailChange = e => {
        setEnteredEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setEnteredPassword(e.target.value);

    }

    return (
        <Modal onHidePage={props.onHideSignIn}  >
            <form onSubmit={handleSubmit}>
                <h2 className={styles.title}>Sign In</h2>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your Email </label>
                    <input type="email" className={styles.input} value={enteredEmail} onChange={handleEmailChange} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your password </label>
                    <input type="text" className={styles.input} value={enteredPassword} onChange={handlePasswordChange} />
                </div>
                <Button className={styles.signInButton} >Submit</Button>
                <p className={styles.message}>{message}</p>
                <p className={styles.signInParagraph}>Don't have an account? <a href="SignUp">Sign Up</a></p>
            </form>
        </Modal>
    )
}

export default SignIn
