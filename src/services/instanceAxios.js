import axios from "axios";

const instance = axios.create({
  baseURL: "https://cubos-api-contacts.herokuapp.com",
  timeout: 1000,
});

export default instance;
