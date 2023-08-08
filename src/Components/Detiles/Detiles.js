import React from "react";
import "./Detiles.css"
import RecipeDetilesCards from "../Cards/RecipeDetilesCards/RecipeDetilesCards";
import mainRecipes from "../Array/Recipes";



function Detiles({modalOpen, setModalOpen, name, modalClose}) {
    return (
        <div className="detiles">
            <div className="detiles__wrap">
            {
                setModalOpen ? mainRecipes.filter(value=>value.name===name).map(value => <RecipeDetilesCards setModalOpen={setModalOpen} modalClose={modalClose} key={value.name} obj={value}/>)
                : null
            }
            </div>
            
        </div>
    );
    
}

export default Detiles;               
