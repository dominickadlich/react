function FormAction() {
  function submitAction(formData) {
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(credentials);
  }

  return (
    <form action={submitAction}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </p>
      <p>
        <button className="actions">Login</button>
      </p>
    </form>
  );
}

export default FormAction;
