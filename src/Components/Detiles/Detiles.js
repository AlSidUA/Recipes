import React from "react";
import "./Detiles.css"
import RecipeDetilesCards from "../Cards/RecipeDetilesCards/RecipeDetilesCards";
import mainRecipes from "../Array/Recipes";


function Detiles() {
    return (
        <div className="detiles">
            <div className="detiles__wrap">
            {
                mainRecipes.map(value => <RecipeDetilesCards key={value.name} obj={value}/>)
            }
            </div>
            
        </div>
    );
    
}

export default Detiles;               
