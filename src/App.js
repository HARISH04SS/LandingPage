import './App.css';
import './Top';
import './Masthead'
import React from 'react';
import { Top } from './Top';
import { Masthead } from './Masthead';
import { Bott } from './Bott';
import { Card } from './Card';
import { Upbot } from './Upbot';
import { Feed } from './Feed';
import { Sixpic } from './Sixpic';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Top/>
      <Masthead/>
      <Card/>
      <Sixpic/>
      <Feed/>
      <Upbot/>
      <Bott/>
    </div>
  );
}


export default App;
