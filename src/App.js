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
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dash" element={<Dashborad />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<Sign />} />
        <Route path="/report" element={<Report />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reportstatus" element={<ReportStatus />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
