import './App.css';
import AgeCalculator from './components/AgeCalculator';
import DateDifference from './components/DateDifference';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(false);

  const showAlert = (type, message) => {
    setAlert({ type: type, message: message });
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }


  const toggleModes = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Router>
        {<Navbar toggleModes={toggleModes} mode={mode} />}
        {<Alert alert={alert} />}
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home mode={mode} />}></Route>
            <Route exact path='/age-calculator' element={<AgeCalculator mode={mode} showAlert={showAlert} />}></Route>
            <Route exact path='/date-difference-calculator' element={<DateDifference mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
