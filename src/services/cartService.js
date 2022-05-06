import axios from "axios";

export default class CartService {

    getCart(){
        return axios.get("http://localhost:8080/api/products/getCart")
    }

}