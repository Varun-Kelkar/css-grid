import React from "react";
import { Link } from "react-router";
import "./Home.css";
export default function Home() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">CSS Grid Demo</h1>
      <p className="hero-description">
        These are my personal grid projects I used while learning CSS Grid. Use
        the links below to see the different layouts you can create with grid.
      </p>
      <div className="hero-links">
        <Link to="/basic-grid" className="hero-link">
          Basic 3 X 3 Grid
        </Link>
        <Link to="/varying-column-size" className="hero-link">
          Varying Column Size Grid
        </Link>
        <Link to="/custom-item-placement" className="hero-link">
          Custom Item Placement
        </Link>
        <Link to="/template-areas-grid" className="hero-link">
          Template Areas
        </Link>
        <Link to="/auto-fit-grid" className="hero-link">
          Autofit Grid
        </Link>
        <Link to="/nested-grids" className="hero-link">
          Nested Grids
        </Link>
      </div>
    </div>
  );
}
