import React from "react";
import { Outlet, Link, useLocation } from "react-router";
import "./App.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="layout-container">
      {!isHomePage && (
        <>
          <Link to="/" className="home-link">
            Home
          </Link>
          <div className="help-info">
            <p>
              If using mobile, please rotate your screen to see the
              responsiveness
            </p>
            <p>
              If using desktop, please resize your screen to see the
              responsiveness
            </p>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default App;
