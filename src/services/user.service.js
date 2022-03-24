import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://localhost:3008/";

class UserService {
  getUser(){
    const _token = JSON.parse(localStorage.getItem("jwttoken"));
    const decoded = jwtDecode(_token.accessToken);
    return axios
      .get(API_URL + "user/"+ decoded.uid)
      .then((response) => {
        
        return response.data;
      });
  };
}
export default new UserService();