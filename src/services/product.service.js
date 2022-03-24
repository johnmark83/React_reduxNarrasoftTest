import axios from "axios";
const API_URL = "http://localhost:3008/";

class ProductService {
  getAllProduct() {
    return axios
      .get(API_URL + "products")
      .then((response) => {
        return response.data;
      });
  };
}
export default new ProductService();