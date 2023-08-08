import React from "react";
import {useState} from "react";
import "../RecipeCards/RecipeCards.css";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import Detiles from "../../Detiles/Detiles";
import RecipeDetilesCards from "../RecipeDetilesCards/RecipeDetilesCards";

const RecipeCards = ({obj})=>{
    const [modalOpen, setModalOpen] = useState(false);
    const handleButtonClick = () => {
        setModalOpen(!modalOpen);
        
    }

    const {photo="фото", name="назва", categore = "категорія", description="опис"} = obj;
        return (

            <div className="recipe__cards">
                <img src={photo} alt={name}/>
                <h2>{name}</h2>
                <h2>{`Категорія: ${categore}`}</h2>  
                <p>{description}</p>
                <Button onClick={handleButtonClick} cardstyle={true}>Показати деталі</Button>
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <Detiles modalOpen={modalOpen} setModalOpen={setModalOpen} name={name}/>
                </Modal>
                
            </div>
        )
    
    }

    export default RecipeCards
