import { useState } from "react";

function ConditionalEmail() {
    const [emailText, setEmailText] = useState('');
    const [email, setEmail] = useState('');

    function handleSetEmailText(event) {
        setEmailText(event.target.value);
    }

    function handleSetEmail(event) {
        event.preventDefault();
        setEmail(emailText);
        setEmailText('');
    }

    return (
        <>
            <div className="border-div">
                <form onSubmit={handleSetEmail}>
                    <label>Your Email: </label>
                    <input
                        type="text"
                        onChange={handleSetEmailText}
                        value={emailText}
                    />
                    <button>Submit</button>
                </form>
                <section role="alert">
                    {!email.includes("@") && <p>Invalid email address entered!</p>}
                </section>
            </div>
        </>
    );
};

export default ConditionalEmail;