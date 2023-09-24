import React from "react";
import './ContactCard.css';


export default function ContactCard({name, mobile}){
    return(
        <div className="card-container">
            <h2 className="card-heading">{name}</h2>
            <span className="number">{mobile}</span>
        </div>
    )
}