import { useRef } from "react";

function EmailForm() {
    const emailRef = useRef(null); 

    function handleSubmitForm(event) {
        event.preventDefault();
        const enteredEmail = emailRef.current.value // .current is mandatory!
        // Could send enteredEmail to backend server
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="email">Your email</label>
            <input 
                ref={emailRef}
                type="email" 
                id="email" 
            />
            <button>Save</button>
        </form>
    );
}

export default EmailForm;