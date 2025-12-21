import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  function handleUpdateTitle(event) {
    setEnteredTitle(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSendingRequest(true);

    // TODO: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com (via a Post) request
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title: enteredTitle }),
    });

    setIsSendingRequest(false);
    setEnteredTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={handleUpdateTitle} value={enteredTitle} />
      </div>
      <button disabled={isSendingRequest}>
        {isSendingRequest ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

export default NewPost;

// const sendHttpRequest = (method, url, data) => {
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         if (response.status >= 400) { // !response.ok
//             return response.json().then(errResData => {
//                 const error = new Error('Something went wrong!');
//                 error.data = errResData;
//                 throw error;
//             })
//         }
//         return response.json();
//     })
// };

// function handleSubmit(event) {
//     event.preventDefault();
//     const getData = () => {
//         sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com')
//         .then(responseData => {
//             console.log(responseData)
//         });
//     };

//     const sendData = () => {
//         sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com', {

//         }).then(responseData => {
//             console.log(responseData);
//         })
//         .catch(err => {
//             console.log(err, error.data);
//         })
//     };
// }
