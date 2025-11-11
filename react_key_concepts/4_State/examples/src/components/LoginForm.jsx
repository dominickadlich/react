function LoginForm() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    function handleUpdateEmail(event) {
        setEnteredEmail(event.target.value)
    }
    function handleUpdatePassword(event) {
        setEnteredPassword(event.target.value);
    };
    return (
        <form>
            <input
                type="email"
                placeholder="Your email"
                onBlur={handleUpdateEmail} />
            <input
                type="password"
                placeholder="Password"
                onBlur={handleUpdatePassword}
            />
        </form>
    );
};