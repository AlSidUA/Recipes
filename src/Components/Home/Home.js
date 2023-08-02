import "./Home.css"
import Banner from "./Banner/Banner";
import Main from "./Main/Main";

const Home=({setActivePage})=> {
    
    return (
        <div className="home">
            <Banner setActivePage={setActivePage}/>
            <Main setActivePage={setActivePage}/>
        </div>
    );
}

export default Home;