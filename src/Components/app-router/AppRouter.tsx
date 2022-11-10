import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "../../pages/home/Home";
import Project from "../../pages/project/Project";
import Team from "../../pages/team/Team";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/home"
            element={ <Home /> }>
              Home
          </Route>
          
          <Route 
            path="/project"
            element={ <Project /> }>
              Project
          </Route>
          
          <Route 
            path="/team"
            element={ <Team /> }>
              Team
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter;
