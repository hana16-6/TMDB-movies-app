import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import favicon from "../assets/images/icons/5.png";
import {
  MOVIES_DROPDOWN_LINK,
  TV_SHOWS_DROPDOWN_LINK,
} from "../constants/navbar";
import "../assets/sass/core.scss";
function Navbar() {
  const [query, setQuery] = useState("");
  const MainNavBarItems = () => {
    return (
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <AiOutlineHome className="h5 m-1 mt-0" />
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/type/movie/popular">
            <GoPeople className="h5 m-1 mt-0" />
            People
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#other-utilities"
            id="other-utilities-id"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <MdOutlineMarkunreadMailbox className="h5 m-1 mt-0" />
            Movies
          </a>
          <ul
            className="dropdown-menu utilities-dropdown"
            aria-labelledby="other-utilities-id"
          >
            {MOVIES_DROPDOWN_LINK.map((item) => (
              <li key={item.title}>
                <Link className="dropdown-item" to={item.path}>
                  {item.title}
                  <item.icon />
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#other-utilities"
            id="other-utilities-id"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <MdOutlineMarkunreadMailbox className="h5 m-1 mt-0" />
            TV Shows
          </a>
          <ul
            className="dropdown-menu utilities-dropdown"
            aria-labelledby="other-utilities-id"
          >
            {TV_SHOWS_DROPDOWN_LINK.map((item) => (
              <li key={item.title}>
                <Link className="dropdown-item" to={item.path}>
                  {item.title}
                  <item.icon />
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={favicon} alt="website favicon" width="50" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-main-menu"
            aria-controls="navbar-main-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-main-menu">
            <MainNavBarItems />
            <form className="me-auto">
              <div className="navbar-search-form">
                <input
                  className="form-control form-control-sm"
                  type="search"
                  name="query"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search"
                />
                <button className="btn btn-link btn-sm" type="submit">
                  <FcSearch />
                </button>
              </div>
            </form>
            {/* <AuthLinks
							isLoggedIn={isLoggedIn}
							user={user}
							onLogoutClick={onLogoutClick}
						/> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
