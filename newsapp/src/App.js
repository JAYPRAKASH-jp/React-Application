import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

//news Api key : 3aa9ba47c73e446988df073f6d82a4a3
export default function App() {
  const apikey=process.env.REACT_APP_API_KEY;
  const [progress,setProgress]=useState(10)
    return (
    <div>
      <BrowserRouter>
         <Navbar/>
         <LoadingBar
          color='#f11946'
          progress={progress}
          //onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apikey} key="business" pageSize={5}  catagories="business" />}/>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apikey} key="home" pageSize={5}  catagories="general" />}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apikey} key="entertainment" pageSize={5} catagories="entertainment" />}/>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apikey} key="general" pageSize={5} catagories="general"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apikey} key="health" pageSize={5} catagories="health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apikey} key="science" pageSize={5} catagories="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apikey} key="sports" pageSize={5} catagories="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apikey} key="technology" pageSize={5} catagories="technology"/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}

