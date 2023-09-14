import axios from "axios";
import { useEffect, useState } from "react";
import {
  LOGIN_USER_URL,
  LOGOUT_URL,
  REGISTER_USER_URL,
} from "../constant/urls";
import { getProductById } from "./productService";

export default function useFetch(url) {
  const [product, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = getProductById(url);
        console.log(response)
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    })();
  }, [url]);

  return { product, error };
}

export const getUser = () =>
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export const authenticateLogin = async (email, password) => {
  try {
    const data = await axios.post(LOGIN_USER_URL, { email, password });
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const authenticateSignup = async (registerData) => {
  try {
    const data = await axios.post(REGISTER_USER_URL, registerData);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  await axios.get(LOGOUT_URL);
  localStorage.removeItem("user");
};
