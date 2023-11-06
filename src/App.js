import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import CourseListing from "./pages/CourseListing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  const isUserLogin = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              isUserLogin ? (
                <Navigate to="/course-listing" replace={true} />
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course-listing" element={<CourseListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
