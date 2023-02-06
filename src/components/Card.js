import React from "react";
export default function Card(props) {
    let badgeText
    if(props.openSpots===0){badgeText= "SOLD OUT"}
    else if (props.location === "Online"){
        badgeText="ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <a href ={props.link}>
        <img src = {props.img} className="card-image" />
        </a>
        <div className="card-stats">
        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" className="star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})..</span>
  <span className="gray"> {props.country} </span>
        </div>  
        <p>{props.title}</p>    
        <p><span className="bold">${props.price}</span></p>
</div>
    )
}
