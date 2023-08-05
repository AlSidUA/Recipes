import React from "react";
import mainRecipes from "../Array/Recipes";
import RecipeCards from "../Cards/RecipeCards/RecipeCards";
import mainCards from "../Array/Categories";
import "./List.css"
import { useState } from "react";
import CategoreCards from "../Cards/CategoreCards/CategoreCards";


function List({setActivePage, type}) {

    return (
        <div className="list">
            <div className="list__cards">
            {
                setActivePage ? mainRecipes.filter(value=>value.categore===type).map(element => <RecipeCards key={element.id} obj={element}/>)
            :    mainRecipes.map(value => <RecipeCards key={value.id} obj={value}/>)
            }
            
        </div>
        </div>
        
    );

}

export default List;
//mainRecipes.filter(velue=>velue.categore==="Напої").map(element => <RecipeCards key={element.id} obj={element}/>)



//console.log(mainRecipes[0].categore);
/*{
    mainRecipes.map(value => <RecipeCards key={value.id} obj={value}/>)
    
}*/

/*mainRecipes.map(value =>{
    if (value.categore === "Основні страви"){
        return <RecipeCards key={value.id} obj={value}/>
    }else{
        
    }
})*/