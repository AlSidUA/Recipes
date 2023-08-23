import React from "react";
import Button from "../../Button/Button";
import "../RecipeDetilesCards/RecipeDetilesCards.css";

const RecipeDetilesCards = ({obj, setModalOpen, modalClose})=>{
    const handleButton = () => {
        setModalOpen(modalClose);
        
    }
    const {photo, name, categore, time, description, ingredients, cookingMethod} = obj;
    return(
        <div className="detiles-cards">
            <div className="detiles-cards-left">
                <img src={photo} alt={name}/>
                <div className="detiles-cards-left-content">
                    <h2>{name}</h2>
                    <div className="detiles-cards-left-content-names">
                        <span>Категорія:</span>
                        <h3>{categore}</h3>
                    </div>
                    <div className="detiles-cards-left-content-names">
                        <span>Час виконання:</span>
                        <h3>{time}</h3>
                    </div>
                    <div className="detiles-cards-left-content-names-float">
                        <span className="detiles-cards-left-content-names-float-description">Опис:</span>
                        <span className="detiles-cards-left-content-names-float-text">{description}</span>
                    </div>
                </div>
            </div>
            <div className="detiles-cards-right">
                    <div className="detiles-cards-right-ingredients">
                            {
                                ingredients.map(value => 
                                <div className="detiles-cards-right-ingredients-box" key={value}>
                                    {value}
                                    <input type="checkbox" className="checkboxField" />
                                </div>)
                            }
                    </div>
                <div className="detiles-cards-right-bottom">
                    <p>{cookingMethod}</p>
                </div>
                <Button onClick={handleButton} $colorstyle $cardstyle $yle >Back</Button>
            </div>
        </div>
    )

}
    export default RecipeDetilesCards