import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//news Api key : 3aa9ba47c73e446988df073f6d82a4a3
export default class App extends Component {


  render() {
    return (
    <div>
      <BrowserRouter>
         <Navbar/>
        <Routes>
            <Route exact path="/business" element={<News key="business" pageSize={5}  catagories="business" />}/>
            <Route exact path="/" element={<News key="home" pageSize={5}  catagories="general" />}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} catagories="entertainment" />}/>
            <Route exact path="/general" element={<News key="general" pageSize={5} catagories="general"/>}/>
            <Route exact path="/health" element={<News key="health" pageSize={5} catagories="health"/>}/>
            <Route exact path="/science" element={<News key="science" pageSize={5} catagories="science"/>}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={5} catagories="sports"/>}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={5} catagories="technology"/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
  }
}

