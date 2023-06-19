import React from 'react'
import { useState } from 'react'

export default function DateDifference(props) {
    const [firstDate, setFirstDate] = useState("")
    const [secondDate, setSecondDate] = useState("")
    const [calculated, setCalculated] = useState("")


    const calculateDifference = () => {
        if (firstDate === "" || secondDate === "") {
            props.showAlert("danger", "Please specify the following dates")
            setCalculated("");
        }
        else {
            let firstDataArray = firstDate.split("-");
            let secondDataArray = secondDate.split("-");

            let firstYear = firstDataArray[0];
            let firstMonth = firstDataArray[1];
            let firstDay = firstDataArray[2];
            let secondYear = secondDataArray[0];
            let secondMonth = secondDataArray[1];
            let secondDay = secondDataArray[2];

            let calculatedYear = firstYear >= secondYear ? firstYear - secondYear : secondYear - firstYear;
            let calculatedMonth = firstMonth > secondMonth ? firstMonth - secondMonth : secondMonth - firstMonth;
            let calculatedDay = firstDay > secondDay ? firstDay - secondDay : secondDay - firstDay;

            setCalculated({ year: calculatedYear, month: calculatedMonth, day: calculatedDay });
            props.showAlert("info", "Differences calculated. You can see it below");
        }
    }


    return (
        <div className="container mt-5" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <h2 className="text-center">Calculate diffrenece between two dates</h2>

            <div style={{ width: "50%", margin: "50px auto" }}>
                <div className='mt-3'>
                    <p>From:</p>
                    <input type="date" name="inputDate" id="datePicker" onChange={(e) => { const { value } = e.target; setFirstDate(value) }} style={{ backgroundColor: props.mode === "light" ? "rgb(0, 0, 0, 0.1)" : "rgb(255, 255, 255, 0.7)" }} />
                </div>
                <div className='mt-3'>
                    <p>To:</p>
                    <input type="date" name="inputDate" id="datePicker" onChange={(e) => { const { value } = e.target; setSecondDate(value) }} style={{ backgroundColor: props.mode === "light" ? "rgb(0, 0, 0, 0.1)" : "rgb(255, 255, 255, 0.7)" }} />
                </div>
            </div>


            <div className='text-center mt-5'>
                <button type="button" className="btn btn-primary" onClick={calculateDifference}>Calculate Diffrence</button>
            </div>

            {calculated !== "" && <><p className='mt-5' style={{ fontSize: "30px", fontWeight: "bold" }}>Result</p><p className='mx-5'>First date: {firstDate}</p><p className='mx-5'>Second date: {secondDate}</p><p className='mx-5'>Calculated diffrenece: {calculated.year} years - {calculated.month} months - {calculated.day} days</p></>}
        </div>
    )
}
