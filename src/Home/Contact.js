import React, { Fragment, useState } from 'react';
import styles from './Contact.module.css';
import Button from '../UI/Button';

const Contact = () => {
    // Define state variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        //...
    };

    return (
        <Fragment>
            
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <h2 className={styles.title}>Contact Us</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        required
                        className={styles.textarea}
                    ></textarea>
                </div>
                <div className={styles.formGroup}>
                    <Button type="submit" >
                        Submit
                    </Button>
                </div>
            </form>
        </Fragment>
    );
};

export default Contact;
