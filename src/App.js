import React , {Component} from 'react';
//import logo from './logo.svg';

import './App.css';
import Clock from './Clock';

const Prima = <h2>Questa è la prima App</h2>

function getDate(date) {
  return date.toLocaleDateString() +" "+ date.toLocaleTimeString()
}

class App extends Component {
  
  render() {
     return(
      <React.Fragment>
      <div className='App'>
      
         </div>
        
         {Prima}
         <p>Questa è un'espressione che restituisce: {4+4}</p>
         
         <Clock timezone="0" country="Italia" />
         <Clock timezone="2" country="Russia"/>
         <Clock timezone="-6" country="Cuba"/>
         
         </React.Fragment>
     );
  }
 
}

  
export default App;