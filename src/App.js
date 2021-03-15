import logo from './logo.svg';
import './App.css';
import './style.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './Home'
import Chead from './Chead'
import Quotefull from './Quotefull'
import Anime from './Anime'
import Add from './Add'
import Slideshow from './Slide2'
import Movies from './Movies'
import Random from './Random'
import Tmp from './tmp'
function App() {
  return (
    <div>

      <Router>
        <Route path='/' exact strict component={Home}/>
        <Route path='/h' exact strict component={Chead}/>
        <Route path='/s' exact strict component={Slideshow}/>
        <Route path='/a' exact strict component={Anime}/>
        <Route path='/add' exact strict component={Add}/>
        <Route path='/movies' exact strict component={Movies}/>
        <Route path='/quotes' exact strict component={Quotefull}/>
        <Route path='/random' exact strict component={Random}/>
        <Route path='/t' exact strict component={Tmp}/>
      </Router>
        
       
    </div>
  );
}

export default App;
