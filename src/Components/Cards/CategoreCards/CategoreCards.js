import React from "react";
import "../CategoreCards/CategoreCards.css";

const CategoreCards = ({obj})=>{
    const {photo, names, text} = obj;
        return(
            <div className="cards">
                <img src={photo} alt={names}/>
                <h2>{names}</h2>
                <p>{text}</p>
            </div>
        )
    
    }

    export default CategoreCards
    