import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import GameDetailsPage from "pages/GameDetailsPage/GameDetailsPage";
import { ROUTES } from "./routes";

function RouterCustom() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.home} element={<HomePage />} />
        <Route exact path={ROUTES.gameDetails} element={<GameDetailsPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default RouterCustom;
