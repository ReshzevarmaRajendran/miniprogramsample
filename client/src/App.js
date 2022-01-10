import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from './Home.js';
import Payment from './Payment.js';
import {Link} from "react-router-dom";

class App extends Component{

render(){
  return(
    <div>
     
      <Payment/>
      
      
    </div>
  )
}
}

export default App;