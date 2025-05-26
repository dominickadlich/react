import { useState } from "react";

import classes from './BlogPosts.module.css'

async function fetchPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogPosts = await response.json();
    return blogPosts;
}

function BlogPosts() {
    const [loadedPosts, setLoadedPosts] = useState([]);

    fetchPost().then((fetchedPosts) => setLoadedPosts(fetchedPosts));

    return (
        <ul className={classes.posts}>
            {loadedPosts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default BlogPosts;