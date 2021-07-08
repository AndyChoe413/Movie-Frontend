import axios from "axios";
//creates axios server and checks if development or production mode
const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "deploy CLOUD ADDRESS",
  timeout: 50000,
});

export default Axios;
