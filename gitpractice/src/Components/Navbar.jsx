import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="/">
          MyProject
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>

          <form className="d-flex me-3">
            <input
              className="form-control rounded-pill me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-light rounded-pill">
              Search
            </button>
          </form>

          <button className="btn btn-warning rounded-pill px-4">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;