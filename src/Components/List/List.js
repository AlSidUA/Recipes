import React from "react";
import mainRecipes from "../Array/Recipes";
import RecipeCards from "../Cards/RecipeCards/RecipeCards";
import "./List.css"



function List({setActivePage, type}) {
    return (
        <div className="list">
            <div className="list__cards">
                {
                    setActivePage ? mainRecipes.filter(value=>value.categore===type).map(element => <RecipeCards key={element.name} obj={element}/>)
                    :    mainRecipes.map(value => <RecipeCards key={value.name} obj={value}/>)
                }
            </div>
        </div>
        
    );

}

export default List;