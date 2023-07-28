//APP

import React, { useState } from 'react';
import "../src/App.css"
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import List from './Components/List/List';
import Search from './Search/Search';




function App({}) {
  const[activePage, setActivePage]=useState(<Home/>)
  const  navigation  = [
  { navName:'HOME',
    element: <Home setActivePage={setActivePage}/>
  },
  { navName:'LIST',
    element:<List/>
  },
  { navName:'SEARCH',
    element:<Search/>
  }
  ]

  //const[activeCard, setActiveCard]=useState(null)
    return (
    <div className="App">
      <Header setActivePage={setActivePage} activePage={activePage} navigation={navigation}/>
      {activePage}
    </div>
  );
}

export default App;

//Home

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

//Banner

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