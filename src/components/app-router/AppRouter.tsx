import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import NavigationBar from "../navigation-bar/NavigationBar";

import Home from "../../pages/home/Home";
import Project from "../../pages/project/Project";
import Team from "../../pages/team/Team";
import NotFoundPage from "../../pages/not-found-page/NotFoundPage";

function AppRouter() {
  return(
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
  </BrowserRouter>
  )
}

export default AppRouter;
