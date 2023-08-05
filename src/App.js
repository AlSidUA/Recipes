import React, { useState } from 'react';
import { useEffect } from 'react';
import "../src/App.css"
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import List from './Components/List/List';
import Search from './Search/Search';


function App({}) {
    
  const[activePage, setActivePage]=useState(<Home/>)
  useEffect(() => {
    setActivePage(<Home setActivePage={setActivePage}/>)
}, []);
  //const[activeCard, setActiveCard]=useState(null)
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
    return (
    <div className="App">
      <Header setActivePage={setActivePage} activePage={activePage} navigation={navigation}/>
      {activePage}
    </div>
  );
}

export default App;

