import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Component71 from './components/Component71';
import CompDash from './components/ComponentDashBoard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Component71}/>
        <Route path='/dash' component={CompDash}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
