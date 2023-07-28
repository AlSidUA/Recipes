import React from "react"
import bannerImg from "../../Img/undraw_hamburger_-8-ge6 1.svg"
import "./Banner.css"
import Button from "../../Button/Button";
import List from "../../List/List";

const Banner = ({setActivePage})=> {
    return(
        <div className="banner">
            <div className="banner__content">
                <div className="banner__content_text">
                    <h1 className="banner__content_text-title">Yummy Recipes</h1>
                    <p>we have a lot of yummy recipes from all aruond the world.</p>
                    <Button onClick={() =>{setActivePage(<List/>)}}>
                        See Recipes
                    </Button>
                </div>
                <div className="banner__content_banner">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    )
    
}

export default Banner