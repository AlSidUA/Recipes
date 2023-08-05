import React from "react";
import "../CategoreCards/CategoreCards.css";
import List from "../../List/List";
import { useState } from "react";

const CategoreCards = ({obj, setActivePage})=>{
    const {photo, names, text, type} = obj;
        return(
            <div onClick={() =>{setActivePage(<List setActivePage={setActivePage} type={type}/>)}} className="cards">
                <img src={photo} alt={names}/>
                <h2>{names}</h2>
                <p>{text}</p>
            </div>
        )
    
    }

    export default CategoreCards
    