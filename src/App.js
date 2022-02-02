import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,Comedy, Horror, Romance, Documentaries} from './Urls';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals' />
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={Comedy} title='Comedy' isSmall/>
     <RowPost url={Horror} title='Horror' isSmall/>
     <RowPost url={Romance} title='Romance' isSmall/>
     <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
