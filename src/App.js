import React from 'react'
import Home from './Views/Home';
import {About} from './Views/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from './Constants';
import Workspace from './Views/Workspace';
import { Pricing } from './Views/Pricing';
import { Services } from './Views/Services';
import { Team } from './Views/Team';
import { SignIn } from './Views/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.home} element={<Home/>}></Route>
        <Route path={PATHS.about} element={<About/>}></Route>
        <Route path={PATHS.workspace} element={<Workspace/>}></Route>
        <Route path={PATHS.services} element={<Services/>}></Route>
        <Route path={PATHS.pricing} element={<Pricing/>}></Route>
        <Route path={PATHS.team} element={<Team/>}></Route>
        <Route path={PATHS.signin} element={<SignIn/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
