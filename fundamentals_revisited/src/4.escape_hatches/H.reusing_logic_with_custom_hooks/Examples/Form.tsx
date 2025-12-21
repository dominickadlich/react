import { useFormInput } from "./useFormInput";

export default function Form() {
    const firstNameProps = useFormInput('Mary')
    const lastNameProps = useFormInput('Poppins')

  return (
    <>
      <label>
        First Name: <input {...firstNameProps} />
      </label>
      <label>
        Last Name: <input {...lastNameProps} />
      </label>
      <h1>
        <b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b>
      </h1>
    </>
  );
}
