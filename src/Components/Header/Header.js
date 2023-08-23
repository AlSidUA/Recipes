import React from "react"
import logo from "../Img/Recipe.svg"
import "../../Components/Header/Header.css"
import Menu from "../Menu/Menu"
import Home from "../Home/Home"

const Header = ({activePage, setActivePage, navigation})=> {
return(
        <div className="header">
            <div className="header__nav">
                <img onClick={()=>setActivePage(<Home  setActivePage={setActivePage}/>)} src={logo} alt="" />
                <div className="header__menu">
                {
                    <Menu setActivePage={setActivePage} activePage={activePage} items={navigation}/>
                }
                
                </div>
            </div>
        </div>
    )
}

export default Header




