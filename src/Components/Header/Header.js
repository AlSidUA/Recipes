import logo from "../Img/Recipe.svg"
import "../../Components/Header/Header.css"
import Menu from "../Menu/Menu"

const Header = ({activePage, setActivePage, navigation})=> {
        return(
        <div className="header">
            <div className="header__nav">
                <img src={logo} alt="" />
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




/*const Header = ()=> {
    const[activePage, setActivePage]=useState(null)

    return(
        <div className="header">
            <div className="header__nav">
                <img src={logo} alt="" />
                <div className="header__menu">
                    <Menu setActivePage={setActivePage} activePage={activePage} items={navigation}/>
                    {activePage}
                </div>
            </div>
            
        </div>
    )
    
}

export default Header*/

/*{
    navigation.map(value => <li onClick={handClick} key={value}>
        {value}
    </li>)
}*/
//<Menu setActivePage={setActivePage} activePage={activePage} items={test}/>

/*{
    test.map(value => <li onClick={handClick} key={value.navName}>
    {value.navName}
    </li>)
}*/

/*<div className="header__menu">
    <Menu setActivePage={setActivePage} activePage={activePage} items={navigation}/>
    {activePage}
</div>*/