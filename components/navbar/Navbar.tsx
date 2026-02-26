"use client";

import "./Navbar.css";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar__left">
          <img
            src="/download-removebg-preview.png"
            alt="airbnb"
            className="navbar__logo"
          />
        </div>

        <div className="navbar__center">
          <div className="nav__item active">
            <img src="/home.avif" alt="homes" />
            <span>Homes</span>
          </div>

          <div className="nav__item">
            <img src="/ballon.avif" alt="experiences" />
            <span>
              Experiences <span className="new">NEW</span>
            </span>
          </div>

          <div className="nav__item">
            <img src="/bell.avif" alt="services" />
            <span>
              Services <span className="new">NEW</span>
            </span>
          </div>
        </div>
        <div className="navbar__right">
          <span className="host">Become a host</span>
          <div className="icon__circle">
            <LanguageIcon fontSize="small" />
          </div>
          <div className="menu__box">
            <MenuIcon fontSize="small" />
          </div>
        </div>
      </div>

      <div className="search__wrapper">
        <div className="search__bar">
          <div className="search__item">
            <span>Where</span>
            <p>Search destinations</p>
          </div>

          <div className="divider" />

          <div className="search__item">
            <span>When</span>
            <p>Add dates</p>
          </div>

          <div className="divider" />

          <div className="search__item">
            <span>Who</span>
            <p>Add guests</p>
          </div>

          <div className="search__icon">
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
