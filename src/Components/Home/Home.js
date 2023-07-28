import "./Home.css"
import Banner from "./Banner/Banner";
import Main from "./Main/Main";

const Home=({setActivePage})=> {
    
    return (
        <div className="home">
            {
                <Banner setActivePage={setActivePage}/>
            }
            
            <Main/>
        </div>
    );
}

export default Home;