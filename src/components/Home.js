import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
    const navigate = useNavigate();
    const buttonStyle = props.mode === "dark" ? { borderColor: "gray", color: "white" } : {}
    return (
        <div className="container my-5" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <div className='text-center'>
                <h1 style={{ fontSize: "5em" }}>Date Utility</h1>
                <h6 className='my-1'>Age calculator and dates difference calculator</h6>
            </div>
            <div className="container">
                <p style={{ fontSize: "20px", margin: "80px 2px 10px 0px" }}>Choose what you want to do!</p>
                <button type="button" className="btn btn-outline-primary mx-1 my-2" onClick={() => { navigate("/age-calculator") }} style={buttonStyle}>Calculate your age</button>
                <button type="button" className="btn btn-outline-primary mx-1 my-2" onClick={() => { navigate("/date-difference-calculator") }} style={buttonStyle}>Calculate dates difference</button>
            </div>
        </div>
    )
}
