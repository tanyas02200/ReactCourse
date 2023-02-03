import React from "react";
export default function Card(props) {
    return(
        <div className="card">
        <img src ="https://upload.wikimedia.org/wikipedia/commons/5/52/Kartik_Aaryan_in_2022.jpg " className="card-image" />
        <div className="card-stats">
        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" className="star" />
        <span>5.0</span>
        <span className="gray">({props.reviewCount})..</span>
  <span className="gray"> {props.country} </span>
        </div>  
        <p>{props.title}</p>    
        <p><span className="bold">${props.price}</span></p>
</div>
    )
}
