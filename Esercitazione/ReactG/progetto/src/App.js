import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/home';
import Body from './components/body';
import HomePage from './components/homepage';


export default function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    //effettuo la chiamata al server esterno per la navbar
    async function getId() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const json = await res.json()
      const cutJson = json.slice(0, 6)
      setPosts(cutJson)
    }
    getId()
  }, [])

  return (
    <>
      <div className="App">
        <h1>Forum</h1>
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<HomePage />} />
                {/* {posts.length > 0 && <Route index element={<Body post={1} />} />} */}
                {posts.map(post => (
                  <Route path={`post/${post.id}`} element={<Body post={post.id} />} />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>

        </div>
      </div>
    </>
  );
}

