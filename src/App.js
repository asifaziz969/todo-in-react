import { useState } from 'react';
import './App.css';
import Home from './pages/Home'
import Locator from './pages/Locator'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
const [person, setPerson] = useState({
   
    name: "asif",
    age: 22,
    qualification: "bachelors in software engineering"
  
})
localStorage.setItem("p",JSON.stringify(person))

const [personFromLocalStorage] = useState(JSON.parse(localStorage.getItem("p")))


  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locator" element={<Locator />} />
          <Route path="/contact/:title" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

<>
<h1>{personFromLocalStorage.name}</h1>
<h1>{personFromLocalStorage.age}</h1>
<h1>{personFromLocalStorage.qualification}</h1>
</>
    </div>
  );
}

export default App;
