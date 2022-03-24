import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

export default function Profile(){
  const [ username, setUsername] = useState();
  const [ password, setPassword ] = useState();
  const [ firstname, setFirstname ] = useState();
  const [ lastname, setLastname ] = useState();
  const [ token, setToken ] = useState();
  const [ ID, setID] = useState();

  useEffect(async ()=>{
    const userdetails = await UserService.getUser();
    setUsername(userdetails.username);
    setPassword(userdetails.password);
    setFirstname(userdetails.firstname);
    setLastname(userdetails.lastname);
    setID(userdetails.uid);
    setToken(userdetails.accessToken);
  },[])

  return (
    <>
      <div className="container">
        <header className="jumbotron">
        <h1 style={{marginBottom:'2rem', marginTop:'1rem'}}>Profile</h1>
        </header>
        <p key='usernamep'>
          <strong key='username'>Username:</strong> {username}
        </p>
        <p key='passwordp'>
          <strong key='password'>Password:</strong> {password}
        </p>
        <p key='tokenp'>
          <strong key='token'>Token:</strong> {token?.substring(0, 30)}...
        </p>
        <p key='idp'>
          <strong key='id'>Id:</strong> {ID}
        </p>
        <p key='firstnamep'>
          <strong key='firstname'>Firstname:</strong> {firstname}
        </p>
        <p key='lastnamep'>
          <strong key='lastname'>Lastname:</strong> {lastname}
        </p>
      </div>
      </>
  );
}
