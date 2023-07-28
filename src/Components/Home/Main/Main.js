import React from "react";
import "./Main.css";
import CategoreCards from "../../Cards/CategoreCards/CategoreCards";
import mainCards from "../../Array/Categories";

const Main = ()=> {
    return(
        <div className="main">
            <div className="main__title">
                <h2>Recipes</h2>
            </div>
            <div className="main__cards">
                        {
                            mainCards.map(value => <CategoreCards key={value.names} obj={value}/>)
                        }
            </div>
        </div> 
    )
}

export default Main