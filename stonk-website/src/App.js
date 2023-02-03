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
import React from 'react'


function App() { 

  const [data, setData] = React.useState(null);

  React.useEffect(() =>{
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message()))
  }, []);

  return (
    <div>
      <div className='Body'>
        <SiteNavbar />
        <p>{!data ? "Loading..." : data}</p>
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
        </Routes>
      </div>
      <Footer className="Footer"/>
    </div>
    
  );
}

export default App;
