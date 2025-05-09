import { useState } from "react";

function EmailAndPassword() {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    const [emailText, setEmailText] = useState('');
    const [email, setEmail] = useState('');

    const [passwordText, setPasswordText] = useState('');
    const [password, setPassword] = useState('');

    function handleSetEmailText(event) {
        setEmailText(event.target.value)
    }

    function handleSetEmail(event) {
        event.preventDefault();
        setEmail(emailText);
        setEmailText('')
    }

    function handleSetPasswordText(event) {
        setPasswordText(event.target.value);
    }

    function handleSetPassword(event) {
        event.preventDefault();
        setPassword(passwordText);
        setPasswordText('');
    }

    return (
        <>
            <form onSubmit={handleSetEmail}>
                <label>Email: </label>
                <input
                    type="text"
                    onChange={handleSetEmailText}
                    value={emailText}
                />
            </form>
            {/* <form onSubmit={handleSetPassword}>
                <label>Password: </label>
                <input
                    type="text"
                    onChange={setPasswordText}
                    value={passwordText}
                />
            </form> */}
            <button>Submit</button>
            <section role='alert'>
                {!email.includes("@") && <p>Invalid email address!</p>}
                {/* {regex.test(password) && <p>Invalid password!</p>} */}
            </section>
        </>
    )
}

export default EmailAndPassword;