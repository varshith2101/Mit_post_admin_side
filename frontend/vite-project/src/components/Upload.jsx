import React from "react";
import { useState } from "react";
import "./styling.css"

function Upload() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [date,setDate] = useState('');

    function submitted(e){
        e.preventDefault(); // stops page from reloading, kinda defeats the whole point of useState

        const article_object = {title,content,author,thumbnail,date};
        console.log(title,content,author,thumbnail,date);
        console.log(article_object);

        fetch( 'http://localhost:8000/articles/' , {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(article_object)
        }).then(() => {console.log("Article added to the database")})

    }
    return (
        <div className="form-container">
            <h2>Add a new Article</h2>
            <form onSubmit={submitted}>

                <label>Title :</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange = {(e) => setTitle(e.target.value) }
                //  e is the currently typed shit in the text box 
                />

                <label>Content :</label>
                <textarea 
                    required
                    value={content}
                    onChange = {(e) => setContent(e.target.value) }
                />

                <label>Author :</label>
                <textarea 
                    required
                    value={author}
                    onChange = {(e) => setAuthor(e.target.value) }
                />

                <label>Thumbnail link :</label>
                <textarea 
                    required
                    value={thumbnail}
                    onChange = {(e) => setThumbnail(e.target.value) }
                />

                <label>Date :</label>
                <textarea 
                    required
                    value={date}
                    onChange = {(e) => setDate(e.target.value) }
                />

                <button type="submit">Add Article</button>
             </form>
        </div>
    )
}

export default Upload;