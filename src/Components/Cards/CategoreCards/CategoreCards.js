import React from "react";
import "../CategoreCards/CategoreCards.css";
import List from "../../List/List";
import Home from "../../Home/Home";
import { useState } from "react";

const CategoreCards = ({obj, setActivePage})=>{
    const[activeType, setActiveType]=useState(null)
    const {photo, names, text} = obj;
        return(
            <div onClick={() =>{setActivePage(<List activeType={activeType} setActiveType={setActiveType}/>)}} className="cards">
                <img src={photo} alt={names}/>
                <h2>{names}</h2>
                <p>{text}</p>
            </div>
        )
    
    }

    export default CategoreCards
    