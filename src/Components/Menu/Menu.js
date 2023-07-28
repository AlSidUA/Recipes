import React from "react";
import "../Menu/Menu.css"

const Menu = ({items, setActivePage})=> {
    return(
        <div className="menu">
            {
                items.map(value => {return <div key={value.navName} onClick={ ()=>{setActivePage(value.element)}}>
                    {value.navName}
                    </div>})
            }
        </div>
    )
    
}

export default Menu