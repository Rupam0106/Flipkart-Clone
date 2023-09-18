import axios from "axios";
import {
  LOGIN_USER_URL,
  LOGOUT_URL,
  REGISTER_USER_URL,
} from "../../constant/urls";

export const getUser = () =>
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export const authenticateLogin = async (email, password) => {
  try {
    console.log(password);
    const data = await axios.post(LOGIN_USER_URL, { email, password });
    localStorage.setItem("user", JSON.stringify(data.data));
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

export const logoutUser = async () => {
  try {
    await axios.get(LOGOUT_URL);
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};
