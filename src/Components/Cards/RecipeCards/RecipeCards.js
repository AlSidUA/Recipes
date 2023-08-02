import React from "react";
import "../RecipeCards/RecipeCards.css";
import Button from "../../Button/Button";

const RecipeCards = ({obj})=>{
    const {photo="фото", name="назва", categore = "категорія", description="опис"} = obj;
        return(
            <div className="recipe__cards">
                <img src={photo} alt={name}/>
                <h2>{name}</h2>
                <h2>{`Категорія: ${categore}`}</h2>  
                <p>{description}</p>
                <Button cardstyle={true}>Показати деталі</Button>
            </div>
        )
    
    }

    export default RecipeCards
