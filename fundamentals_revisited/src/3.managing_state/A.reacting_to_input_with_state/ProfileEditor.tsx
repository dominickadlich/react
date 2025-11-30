import { useState, type SetStateAction } from 'react';

export default function EditProfile() {
  const [saveStatus, setSaveStatus] = useState(true)
  const [firstName, setFirstName] = useState('Jane')
  const [lastName, setLastName] = useState('Jacobs')

  function handleStatusChange() {
    setSaveStatus(!saveStatus)
  }

  function handleChangeFirstName(e: { target: { value: SetStateAction<string>; }; }) {
    setFirstName(e.target.value)
  };
  
  function handleChangeLastName(e: { target: { value: SetStateAction<string>; }; }) {
    setLastName(e.target.value)
  }
  
  return (
    <form>
      <label>
        First name:{' '}
        {saveStatus === true
          ? <b>{firstName}</b>
          : <input 
              placeholder={firstName}
              onChange={handleChangeFirstName}
              value={firstName}
            />
        }
      </label>
      <label>
        Last name:{' '}
        {saveStatus === true
          ? <b>{lastName}</b>
          : <input 
              placeholder={lastName}
              onChange={handleChangeLastName}
              value={lastName}
            />
        }
      </label>
      <button 
        onClick={e => {
          e.preventDefault();
          handleStatusChange();
        }}  
      >
        {saveStatus === true
          ? "Edit Profile"
          : "Save Profile"
        }
      </button>
      <p><i>Hello, {firstName} {lastName}</i></p>
    </form>
  );
}
