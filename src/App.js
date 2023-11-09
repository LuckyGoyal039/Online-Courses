import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CourseListing from "./pages/CourseListing";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/course-listing" element={<CourseListing />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
