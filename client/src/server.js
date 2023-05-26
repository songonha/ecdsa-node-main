import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3042",
  withCredentials: false,
  headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
  }
});

export default server;
