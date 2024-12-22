import React from "react";

function Article({props}) {
    return(
        <div className="article">
            <div className="thumbnail">
                <img src={props.thumbnail} alt={props.title} />
            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <h5>{props.authod}</h5>
            <h6>{props.date}</h6>
        </div>
    )
}

export default Article;