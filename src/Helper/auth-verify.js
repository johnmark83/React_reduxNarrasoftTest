 import React, { useState } from "react";
import { history } from './history';

const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

function AuthVerify(){
    const [user,setUser] = useState();

    history.listen(() => {
      const token = JSON.parse(localStorage.getItem("jwttoken"));

      if (token) {
        const decodedJwt = parseJwt(token.accessToken);

        console.log(decodedJwt);
        if (decodedJwt.exp * 1000 < Date.now()) {
          props.logOut();
        }
      }
    });
  

    return (<div></div>);

}
    
export default AuthVerify;
