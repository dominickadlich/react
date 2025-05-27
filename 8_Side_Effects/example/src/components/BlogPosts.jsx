import { useState, useEffect } from "react";

import classes from './BlogPosts.module.css'

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogPosts = await response.json();
    return blogPosts;
}

function BlogPosts() {
    const [loadedPosts, setLoadedPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
    }, []);

    return (
        <>
            <ul>
                {loadedPosts.map((post) => (
                    <li className={classes.posts} key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export default BlogPosts;