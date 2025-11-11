import { useState } from "react";

function NewsLetterSignup() {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
    function handelUpdateEmail(event) {
        setEmail(event.target.value);
    };
    function handleUpdateAgreement(event) {
        setAgreed(event.target.value);
    };
    function handleSignup(event) {
        event.preventDefault();
        const userData = {userEmail: email, userAgrees: agreed};
        // doWhateverYouWant(userData)
    };
    return (
        <form>
            <div>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email"/>
            </div>
            <div>
                <input type="checkbox" id="agree" onChange={handleUpdateAgreement}/>
                <label htmlFor="agree">Agree to terms and conditions</label>
            </div>
        </form>
    );
};

export default NewsLetterSignup;