// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./page/SignIn";
import Dashborad from "./Main/Dashborad";
import Sign from "./page/Sign";
import ReportStatus from "./Main/ReportStatus";
import Settings from "./Main/Settings";
import Report from "./Main/Report";
import Notifications from "./Main/Notification";
import Search from "./Main/Search";
import Sidebar from "./page/Sibebar";
import "./App.css";
import TechinalTool from "./Home/TechinalTool";
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
                    <Route path="/report" element={<Report />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/reportstatus" element={<ReportStatus />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route
                      path="/technical-cutover"
                      element={<TechinalTool />}
                    />
                    <Route path="/business-cutover" element={<Bussniess />} />
                    <Route path="/status-report" element={<Report />} />
                    <Route path="/configurations" element={<Configiration />} />
                    <Route path="/adult" element={<Adult />} />
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
