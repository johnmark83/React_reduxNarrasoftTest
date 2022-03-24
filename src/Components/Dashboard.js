import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import Products from "./Products";
import Profile from "./Profile";

function Dashboard(){
  const user = useSelector(state => state.auth);

  return (
    !user.isLoggedIn? <Navigate to='/login'/> :
    <>
    <Navigation/>
    <Routes>        
        {/*Products*/}
        <Route exact path="/" element={<Products/>}/>

        {/*Profile*/}
        <Route path="/profile" element={<Profile/>}/> 
    </Routes>
    </>
  )
};

export default Dashboard;