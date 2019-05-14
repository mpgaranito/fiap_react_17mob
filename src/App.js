import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/index.jsx'
import Routes from './routes';
class App extends Component {
  render() {
   return (
   <div className="App">
    <Header/>
      <header className="App-header">
       
       
   
      </header>
    </div>
   )
  }
}

export default App;
