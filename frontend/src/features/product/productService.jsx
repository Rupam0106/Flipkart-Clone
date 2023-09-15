import axios from "axios";
import {
  DELETE_PRODUCT_BY_ID_URL,
  PERODUCT_BY_SEARCH_URL,
  PRODUCTS_URL,
  PRODUCT_BY_ID_URL,
  UPDATE_PEODUCT_BY_ID_URL,
} from "../../constant/urls";

export const getAllProduct = async () => {
  return new Promise(async (resolve) => {
    const { data } = await axios.get(PRODUCTS_URL);
    resolve(data);
  });
};

export const getProductById = async (productId) => {
  return new Promise(async (resolve) => {
    const { data } = await axios.get(PRODUCT_BY_ID_URL + productId);
    resolve(data);
  });
};

export const searchProduct = async (searchTerm) => {
  const { data } = await axios.get(PERODUCT_BY_SEARCH_URL + searchTerm);
  return data;
};


export const updateProductById = async (productId) => {
  const data = await axios.get(UPDATE_PEODUCT_BY_ID_URL + productId);
  return data;
};

export const deleteProductById = async (productId) => {
  const data = await axios.get(DELETE_PRODUCT_BY_ID_URL + productId);
  return data;
};
