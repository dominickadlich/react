import { useRef } from "react";

function FormRef() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(credentials);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />
      </p>
      <p className="actions">
        <button>Login</button>
      </p>
    </form>
  );
}

export default FormRef;
