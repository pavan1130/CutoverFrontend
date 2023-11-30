// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./page/SignIn";
import Dashborad from "./Main/Dashborad";
import Sign from "./page/Sign";

import Report from "./Home/Report";
import Notifications from "./Main/Notification";
import Sidebar from "./page/Sibebar";
import "./App.css";

import Bussniess from "./Home/Bussniess";
import Configiration from "./Home/Configiration";
import Adult from "./Home/Adult";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<Sign />} />
        <Route
          path="/*"
          element={
            <>
              <div className="app">
                <Sidebar />
                <div className="content">
                  <Routes>
                    <Route path="/dash" element={<Dashborad />} />
                    <Route path="/business-cutover" element={<Bussniess />} />
                    <Route path="/adult" element={<Adult />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/status-report" element={<Report />} />
                    <Route path="/configurations" element={<Configiration />} />
                  </Routes>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
