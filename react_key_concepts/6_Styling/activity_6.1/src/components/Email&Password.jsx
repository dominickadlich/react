import { useState } from "react";

function EmailAndPassword() {
    // const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    const [emailText, setEmailText] = useState('');
    const [email, setEmail] = useState('');

    const [passwordText, setPasswordText] = useState('');
    const [password, setPassword] = useState('');

    function handleSetEmailText(event) {
        setEmailText(event.target.value)
    }

    function handleSetPasswordText(event) {
        setPasswordText(event.target.value);
    }

    function handleSetPassword(event) {
        event.preventDefault();
        setPassword(passwordText);
        setPasswordText('');
    }

    function handleSetDetail(event) {
        event.preventDefault();
        
        setEmail(emailText);
        setPassword(passwordText);
        setEmailText('')
        setPasswordText('')
    }

    return (
        <>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSetDetail} className="space-y-6">
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-white-900">
                                Email Address
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray=900 outline-1 -outline-offset-1 outline-gray-300 placeholder: text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                                onChange={handleSetEmailText}
                                value={emailText}

                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-white-900">
                                Password 
                            </label>
                        </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray=900 outline-1 -outline-offset-1 outline-gray-300 placeholder: text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                                    onChange={handleSetPasswordText}
                                    value={passwordText}
                                />
                            </div>
                        </div>
                    <div>
                        <button
                            type="sumbit"
                            className= { !passwordIsValid
                            ? "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            : "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-offset-2 outline-color: var(--color-red-500)"
                        }
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EmailAndPassword;