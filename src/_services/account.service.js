import Axios from "./caller.service";

let login = (credentials) => {
  return Axios.post("/api/v1/user/login", credentials);
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let logout = () => {
  localStorage.removeItem("token");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

let getToken = () => {
  return localStorage.getItem("token");
};

let updateName = (credentials) => {
  return Axios.put("/api/v1/user/profile", credentials);
};

export const accountService = {
  login,
  saveToken,
  logout,
  isLogged,
  getToken,
  updateName,
};
