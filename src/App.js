import React, { useState } from 'react';
import { useEffect } from 'react';
import "../src/App.css"
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import List from './Components/List/List';
import Forms from './Forms/Forms';
import RecipeCards from './Components/Cards/RecipeCards/RecipeCards';
import Detiles from './Components/Detiles/Detiles';

function App({}) {
  
  const[activePage, setActivePage]=useState(<Home/>)
  useEffect(() => {
    setActivePage(<Home setActivePage={setActivePage}/>)
}, []);


    const  navigation  = [
  { navName:'HOME',
    element: <Home setActivePage={setActivePage}/>
  },
  { navName:'LIST',
    element:<List/>
  },
  { navName:'FORMS',
    element:<Forms/>
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

