import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {
    const location = useLocation();
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light" ? "light" : "dark"} bg-${props.mode === "light" ? "light" : "dark"}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontWeight: "600" }}>Date Utility</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/age-calculator" ? "active" : ""}`} to="/age-calculator">Age calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/date-difference-calculator" ? "active" : ""}`} to="/date-difference-calculator">Calculate date Difference</Link>
                            </li>

                        </ul>
                        <div className="form-check form-switch mx-3">
                            <input className="form-check-input" onChange={props.toggleModes} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === "light" ? "black" : "white" }}>Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
