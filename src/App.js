import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import CourseListing from "./pages/CourseListing";
import StudentDashboard from "./pages/StudentDashboard";
import CourseDetail from "./pages/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path="/"
            element={<Navigate to="/course-listing" replace={true} />}
          />
          <Route path="/course-listing" element={<CourseListing />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
