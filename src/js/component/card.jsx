import React from 'react'
export default function Card ({ title, text, imageUrl, buttonurl, buttontext }){

return(
    <div>
        < div className="card mt-4" style={{ width: '18rcm'}}>
            <img src={imageUrl} className="card-ing-top" />
            < div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{text}</p>
             <a href={buttonurl} className="btn btn-primary">{buttontext}</a>
             </div>
            </div>
          </div> )
}