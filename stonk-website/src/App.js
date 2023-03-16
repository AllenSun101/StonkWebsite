import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNavbar from './Navbar';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./AboutMe";
import Contact from "./Contact";
import DailyTradingUpdates from "./DailyTradingUpdates";
import MiscellaneousResources from "./MiscellaneousResources";
import PersonalBlog from "./PersonalBlog";
import Records from "./Records";
import ProjectsResources from "./ProjectsResources";
import TradingReports from "./TradingReports";
import Footer from "./Footer"
import BlogHub from "./BlogHub"
import RecordsHub from './RecordsHub';
import React from 'react'
import BlogPage from "./BlogPage";


function App() { 

  return (
    <div>
      <div className='Body'>
        <SiteNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/AboutMe" element={<About/>}/> 
          <Route path="/Contact" element={<Contact/>}/> 
          <Route path="/DailyTradingUpdates" element={<DailyTradingUpdates/>}/> 
          <Route path="/MiscellaneousResources" element={<MiscellaneousResources/>}/> 
          <Route path="/PersonalBlog" element={<PersonalBlog/>}/> 
          <Route path="/Records" element={<Records/>}/> 
          <Route path="/ProjectsResources" element={<ProjectsResources/>}/> 
          <Route path="/TradingReports" element={<TradingReports/>}/> 
          <Route path="/BlogHub" element={<BlogHub/>}/> 
          <Route path="/RecordsHub" element={<RecordsHub/>}/> 
          <Route path="/PersonalBlog/:blogPostID" element={<BlogPage/>}/>
        </Routes>
      </div>
      <Footer className="Footer"/>
    </div>
    
  );
}

export default App;
