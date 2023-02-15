import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "@/styles/components/ContactForm.module.css"

// * create a confirmation popup
// ! create a reset confirmation popup 
export default function ContactForm() {

    const [confirm, setConfirm] = useState(false)
    const form = useRef();

    const clearForm = () => {
        form.current.reset()
    }

    const handleReset = () => {
        clearForm()
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6pu45og', 'template_07m9bxs', form.current, 'xhXjJ0KkuOldlRY-c')
        .then((result) => {
            console.log(result.text);
            clearForm()
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
            <div className={styles.container}>
                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                    <label className={styles.label}>Feel free to include your pronuons.</label>
                    <input className={styles.inputs} type="text" name="name" placeholder="Your Full Name - (Pronuons)" required/>
                    <label className={styles.label}>Let me know how to get a hold of you.</label>
                    <input className={styles.inputs} type="email" name="email" placeholder="Your Email" required/>
                    <label className={styles.label}>What are we talking about?</label>
                    <input className={styles.inputs} type="text" name="subject" placeholder="Subject" required/>
                    <label className={styles.label}>What&apos;s on your mind?</label>
                    <textarea className={styles.text} name="message" rows="15" cols="" resize="none" placeholder="This is your place to tell me anything you want." required></textarea>
                    <div>
                        <input className={styles.inputs} type="submit" value="Submit Message"/>
                    </div>
                        <button className={styles.reset} onClick={() => handleReset()}>Reset</button>
                </form>
            </div>
    );
};