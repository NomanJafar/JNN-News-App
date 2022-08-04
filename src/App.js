
import './App.css';
import React, { Component } from 'react'
import NavBar from './customComponents/NavBar';
import News from './customComponents/News';
import NewsItem from './customComponents/NewsItem';

export default class App extends Component {
  render() {
    
    return (
      <div>
        <NavBar title="JNN"/>
        <News/>
      </div>
    )
  }
}

