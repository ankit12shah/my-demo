import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './componetes/About';
import Navbar from './componetes/Navbar';
import TextForm from './componetes/TextForm';
import Alert from './componetes/Alert';

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] =useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode Enabel Successfully","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Enabel Successfully","success");
    }
  }

  return (
    <>
      {/* <Navbar titel="Word App" mode={mode} toggleMode={toggleMode} />
      <TextForm heding="Start Play with Text in This Box " /> */}
      {/* <About /> */}
      <Router>
        <Navbar titel="Word App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          {/* <Navbar titel="Word App" mode={mode} toggleMode={toggleMode} /> */}
          <Route path="/" element={<TextForm heding="Start Play with Text in This Box " mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About  mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
