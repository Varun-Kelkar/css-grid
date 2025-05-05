import React from "react";
import { Outlet, Link, useLocation } from "react-router";
import "./App.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div>
      {isHomePage ? null : (
        <Link
          to="/"
          style={{
            color: "#3498db",
            textDecoration: "none",
            padding: "1rem",
            fontSize: "1.4rem",
          }}
        >
          Home
        </Link>
      )}
      <Outlet />
    </div>
  );
}

export default App;
