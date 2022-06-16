import "./App.css";
import Testimonials from './components/Testimonials.js';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Newsitem from './components/Newsitem';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App(){
  const [progress, setprogress] = useState(0);

 const setProgress=(progres)=>{
  setprogress(progres);
 }
  
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar color='#f11946' progress={progress} />
      <div className='container my-7' style={{paddingTop: '55px'}}>
      <h2 className='text-center' >Breaking News<i className='badge rounded-pill text-bg-danger'>New</i></h2>
      </div>
      <Switch>
        <Route  exact path="/"><Newsitem setProgress={setProgress} key='general' pageSize={21} country='in' category='general'/></Route>
        <Route exact path="/business"><Newsitem setProgress={setProgress} key='business' pageSize={21} country='in' category='business'/></Route>
        <Route exact path="/entertainment"><Newsitem setProgress={setProgress} key='entertainment' pageSize={21} country='in' category='entertainment'/></Route>
        <Route exact path="/general"><Newsitem setProgress={setProgress} key='general' pageSize={21} country='in' category='general'/></Route>
        <Route exact path="/health"><Newsitem setProgress={setProgress} key='health' pageSize={21} country='in' category='health'/></Route>
        <Route exact path="/science"><Newsitem setProgress={setProgress} key='science' pageSize={21} country='in' category='science'/></Route>
        <Route exact path="/sports"><Newsitem setProgress={setProgress} key='sports' pageSize={21} country='in' category='sports'/></Route>
        <Route exact path="/technology"><Newsitem setProgress={setProgress} key='technology' pageSize={21} country='in' category='technology'/></Route>
        </Switch>

      </Router>
      </div>
    )
}

