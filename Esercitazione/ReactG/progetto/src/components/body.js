import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Body({ post }) {

    const [title, setTitle] = useState([])
    const [comments, setComments] = useState([])

    //Asincrona per titolo 
    useEffect(() => {
        async function getTitle() {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
            let json = await res.json()
            setTitle(json)
        }
        getTitle()
    }, [post])


    //Asincrona per commento 
    useEffect(() => {
        async function getComments() {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
            let json = await res.json()
            setComments(json)
        }
        getComments()
    }, [post])

    return (
        <div className="body">
            <h2>{title.title}</h2>
            <div className="commentsList">
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>{comment.body}</li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}