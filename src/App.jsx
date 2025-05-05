import React from "react";
import { Outlet, Link, useLocation } from "react-router";
import "./App.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="layout-container">
      {!isHomePage && (
        <Link to="/" className="home-link">
          Home
        </Link>
      )}
      <Outlet />
    </div>
  );
}

export default App;
