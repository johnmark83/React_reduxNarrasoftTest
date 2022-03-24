export default function authHeader() {
    const token = JSON.parse(localStorage.getItem("jwttoken"));
  
    if (token) {  
      return { Authorization: 'x-access-token ' + token };
    } else {
        return {};
    }
  }