import React from 'react'
import '../../styles/jumbotron.css' 


export default function Jumbotron({title, body}){
    return(
        <div className="d-flex justify-content-center" ><div className="jumbotron jumbotron-fluid mt-5">
            <div className="contrainer">
                <h1>{title}</h1>
                <p>{body}</p>
                </div>
                </div></div>
    )
    }
