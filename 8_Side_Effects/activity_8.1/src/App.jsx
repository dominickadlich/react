import { useState, useEffect } from 'react'

import './App.css'

import BlogPosts from './components/BlogPosts'
import NewPost from './components/NewPost'

function App() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const blogPosts = await response.json();
      setLoadedPosts(blogPosts);
    }

    loadPosts();
  }, [])

  return (
    <>
      <NewPost /> 
      <BlogPosts posts={loadedPosts}/>
    </>
  )
}

export default App
