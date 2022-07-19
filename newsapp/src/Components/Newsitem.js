import React from 'react'

export default function Newsitem (props) {

    let {title,description,imageUrl,newUrl,source,author,publishedAt} = props;

    return (
      <div>
        <div className="card my-3"><span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left: "90%", zIndex : "1"}}>
        {source}
        <span className="visually-hidden">unread messages</span>
        </span>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <footer className="blockquote-footer">By {!author? 'unknown' : author} at {new Date(publishedAt).toUTCString()}</footer>

            <a href={newUrl}  target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
        </div>
        </div>
      </div>
    )
}
