import About from './components/About';
import React, { useState } from 'react';
// import './App.css';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




 function App() {
    const [mode, setMode] = useState("light")
    const [state, setState] = useState("dark")
    const [alert,setAlert] = useState('');
    
   

  
   

    const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    }
    setTimeout(() => {
      setAlert(null)
    }, 4000);
    const [box, setBox] = useState({
      color:'black',
      backgroundColor: " white"
      })


    const toggleMode = () => {
 
      
      if(mode === 'light') {
       
        setMode("dark")
        setState('light')
        
        setBox({
          color:'white',
      backgroundColor: " grey"

        })
        
        document.querySelector('body').style.backgroundColor = "#343a40"
      showAlert('Dark Mode has been enabled', 'success')
      }
   
      else if (mode === 'dark' ){
        // setCheck(true)
        setMode('light')
        setState("dark")
         
        setBox({
          color:'black',
      backgroundColor: " white"
        })
        document.querySelector('body').style.backgroundColor = "white";
        showAlert(' Light Mode has been enabled', 'success');
  
      }

    }
    
    const aboutPage = () => {
   document.title = " TextConverter - About"
    }
const homePage = () => {
  document.title = " Textconverter - Home"
}
    return (
 <Router>
<>

<Navbar title="TextConverter" homePage={homePage} about="About" mode={mode} aboutPage={aboutPage} toggleMode={toggleMode} state={state}  />
<Alert alert={alert} />

<div className='container my-3' >
 
<Routes>
   
          <Route path="/about" element={<About  about="About Us" mode={mode} />}>
            
        </Route>
           <Route path="/"element={<TextForm mode={mode}  box={box}  showAlert={showAlert} />}>
         
         
          </Route>
       
        </Routes>
          </div>
       

 
</>
 </Router>


    )
    
 }


export default App;