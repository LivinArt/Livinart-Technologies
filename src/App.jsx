import "./App.css";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Home from "./components/Home";
import About from "./components/About";
import SignUP from "./components/Signup";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProject from "./components/AddProject";


function App() {
  
  if(window.location.pathname=="/livinArt"){
    window.location.href="/livinArt/index.html"
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:id" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
