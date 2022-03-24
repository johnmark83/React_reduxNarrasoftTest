import React from "react";
import { Switch, Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Products from "../Components/Products";
import Profile from "../Components/Profile";
import jwtDecode from "jwt-decode";

function App(){
 
  return (
    
    <>
    <Router>
      <Routes>
        {/*Authentication*/}
        <Route path="/login" element={<Login />}/>
        
        {/*Dashboard*/}
        <Route exact path="/" element={<Dashboard />}>
          <Route exact path='/' element={Products}/>
          <Route path='/profile' element={Profile}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
};

export default App;