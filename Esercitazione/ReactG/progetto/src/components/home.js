import React from "react";
import "../App.css"
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";


//Link per prendere l'id dei prodotti
//https://jsonplaceholder.typicode.com/posts
//Cosi tramite l'id riesco a fare ogni singolo collegamento

export default function Home() {


    const [idPost, setIdPost] = useState([])

    useEffect(() => {
        //effettuo la chiamata al server esterno per la navbar
        async function getId() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const json = await res.json()
            const cutJson = json.slice(0, 6)
            setIdPost(cutJson)
        }
        getId()
    }, [])
    return (
        <div className="home">
            <div className="navbar">
                <ul>
                    <li><Link to='/'>HomePage</Link></li>
                    {idPost.map((e) => (
                        <li key={e.id}><Link to={`/post/${e.id}`}><h2>Post {e.id}</h2></Link></li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}