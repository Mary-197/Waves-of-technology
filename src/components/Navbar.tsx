// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo1 from "../pages/Home/img/Logo1.png";
import logo2 from "../pages/Home/img/Logo2.png";

const Navbar: React.FC = () => {
  const [expandir, setExpandir] = useState(false);
  const navigate = useNavigate();

  const handleExpandMenu = () => {
    setExpandir(!expandir);
  };

  const handleQuizClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate("/quiz");
    }
  };

  return (
    <>
      {/* Topo fixo */}
      <header className="topo-site">
        <div className="logo-container">
          <img src={logo1} alt="Logo 1" className="logo1" />
          <img src={logo2} alt="Logo 2" className="logo2" />
        </div>
        <Link to="/perfil" className="perfil-link" aria-label="Perfil">
          <i className="bi bi-person-circle"></i>
        </Link>
      </header>

      {/* Menu lateral fixo */}
      <nav
        className={`menu-lateral ${expandir ? "expandir" : ""}`}
        aria-label="Menu lateral principal"
      >
        <button
          className="btn-expandir"
          aria-expanded={expandir}
          aria-controls="menu-lista"
          onClick={handleExpandMenu}
        >
          <i className="bi bi-list" aria-hidden="true"></i>
          <span className="sr-only"></span>
        </button>
        <ul id="menu-lista">
          <li className="item-menu">
            <Link to="/home">
              <span className="icon">
                <i className="bi bi-house-door-fill"></i>
              </span>
              <span className="txt-link">Home</span>
            </Link>
          </li>
          <li className="item-menu">
            <Link to="/clima">
              <span className="icon">
                <i className="bi bi-cloud-sun-fill"></i>
              </span>
              <span className="txt-link">Clima</span>
            </Link>
          </li>
          <li className="item-menu">
            <a href="/quiz" onClick={handleQuizClick}>
              <span className="icon">
                <i className="bi bi-question-circle-fill"></i>
              </span>
              <span className="txt-link">Quiz</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
