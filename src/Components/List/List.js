import React from "react";
import mainRecipes from "../Array/Recipes";
import RecipeCards from "../Cards/RecipeCards/RecipeCards";
import "./List.css"



function List() {
    return (
        <div className="list">
            <div className="list__cards">
                {
                    mainRecipes.map(value => <RecipeCards key={value.id} obj={value}/>)
                    
                }
            </div>
        </div>
    );
    
}
export default List;