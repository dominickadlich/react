function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Submitted!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </p>
            <p className="actions">
                <button>Login</button>
            </p>
        </form>
    );
}

export default Form;