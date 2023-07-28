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
