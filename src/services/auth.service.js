import axios from "axios";

const API_URL = "http://localhost:3008/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", { username, password })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("jwttoken", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

  logout() {
    localStorage.removeItem("jwttoken");
  };
}
export default new AuthService();