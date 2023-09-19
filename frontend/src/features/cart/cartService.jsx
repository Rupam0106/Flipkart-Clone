import axios from "axios";
import { CREATE_CART_URL, GET_CART_URL } from "../../constant/urls";

export const addToCart = async () => {
  return new Promise(async (resolve) => {
    const { data } = await axios.get(CREATE_CART_URL);
    resolve(data);
  });
};

export const fetchItemsByUserId = async () => {
  return new Promise(async (resolve) => {
    const { data } = await axios.get(GET_CART_URL);
    resolve(data);
  });
};
