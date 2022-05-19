import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import { FiAlignJustify } from "react-icons/fi"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
            to="/"
          >
            home
          </Link>
          <Link
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
            to="/recipes"
          >
            recipes
          </Link>
          <Link
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
            to="/tags"
          >
            tags
          </Link>
          <Link
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
            to="/about"
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
