import { useState, useEffect } from "react";

import classes from './NewPost'

function NewPost() {
    const [enteredTitle, setEnteredTitle] = useState('');

    function handleUpdateTitle(event) {
        setEnteredTitle(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // TODO: Handle the creation of new posts and send new post data to https:jsonplaceholder.typicode.com (via a Post) request
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div>
                <label>Title</label>
                <input type="text" onChange={handleUpdateTitle} value={enteredTitle} />
            </div>
            <button>Save</button>
        </form>
    );
}

export default NewPost;