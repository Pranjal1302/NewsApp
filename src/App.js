import './App.css';

import React  from 'react'
import Navbar from './Components/Navbar';
import Newscomponent from './Components/Newscomponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route path="/general"  element={<Newscomponent key="general" category="general"/>} />
        <Route path="/business"  element={<Newscomponent key="business" category="business"/>} />
        <Route path="/entertainment"  element={<Newscomponent key="entertainment" category="entertainment"/>} />
        <Route path="/health"  element={<Newscomponent key="health" category="health"/>} />
        <Route path="/science"  element={<Newscomponent key="science" category="science"/>} />
        <Route path="/sports" element={<Newscomponent  key="sports" category="sports"/>} />
        <Route path="/technology"  element={<Newscomponent key="technology" category="technology"/>} />
        </Routes>
      </Router>
      </div>
    )
  }


export default App;

