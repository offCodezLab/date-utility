import React from 'react'
import { useState } from 'react'

export default function AgeCalculator(props) {
    const [userDate, setUserDate] = useState("")
    const [calculatedAge, setCalculatedAge] = useState("")

    const date = new Date();
    const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();


    const changeDetection = (e) => {
        const { value } = e.target;
        setUserDate(value);
    }

    const calculateAge = () => {
        let userDateArray = userDate.split('-');
        let userDateYear = parseInt(userDateArray[0]);
        let userDateMonth = parseInt(userDateArray[1]);
        let userDateDay = parseInt(userDateArray[2]);

        let currentYear = date.getFullYear();
        let currentMonth = date.getMonth() + 1;
        let currentDay = date.getDate();

        let calculatedYear = currentYear - userDateYear;
        let calculatedMonth = userDateMonth > currentMonth ? 12 - (userDateMonth - currentMonth) : currentMonth - userDateMonth;
        let calculatedDay = userDateDay > currentDay ? 31 - (userDateDay - currentDay) : currentDay - userDateDay;

        calculatedYear = userDateMonth > currentMonth ? calculatedYear - 1 : calculatedYear;
        calculatedMonth = userDateDay > currentDay ? calculatedMonth - 1 : calculatedMonth;

        if ((calculatedYear || calculatedMonth || calculatedDay) < 0) {
            props.showAlert("danger", "Your date of birth cannot be exceeds the current date.");
            setCalculatedAge("");
        }
        else if (userDate === "") {
            props.showAlert("danger", "Please select your date of birth to calculate your age");
            setCalculatedAge("");
        }
        else {
            setCalculatedAge({ year: calculatedYear, month: calculatedMonth, day: calculatedDay });
            props.showAlert("info", "Calculated your age. You can see it below");
        }

    }

    return (
        <div className="container my-5" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <h2 className='text-center'>Age calculator</h2>
            <div className='text-center my-5'>
                <p className='d-inline-block mx-3'>Please select your date of birth</p>
                <input type="date" style={{ backgroundColor: props.mode === "light" ? "rgb(0, 0, 0, 0.1)" : "rgb(255, 255, 255, 0.7)" }} name="inputDate" id="datePicker" onChange={changeDetection} className='d-inline-block mx-3' />
            </div>
            <div className='text-center'>
                <button type="button" onClick={calculateAge} className="btn btn-primary">Calculate Date</button>
            </div>
            {calculatedAge !== "" && <><p className='mt-5' style={{ fontSize: "30px", fontWeight: "bold" }}>Result</p><p className='mx-5'>Today's date: {currentDate}</p><p className='mx-5'>Selected date: {userDate}</p><p className='mx-5'>Calculated Age: {calculatedAge.year} years - {calculatedAge.month} months - {calculatedAge.day} days</p></>}
        </div>
    )
}
