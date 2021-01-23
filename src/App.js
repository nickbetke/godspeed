import logo from './logo.svg';
import './App.css';
import './style.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './Home'
import Chead from './Chead'
import Slide from './slide'
import Slideshow from './Slide2'

function App() {
  return (
    <div>

      <Router>
        <Route path='/' exact strict component={Home}/>
        <Route path='/h' exact strict component={Chead}/>
        <Route path='/s' exact strict component={Slideshow}/>
      </Router>
        
       
    </div>
  );
}

export default App;
