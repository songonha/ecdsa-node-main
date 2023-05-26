import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3042",
  withCredentials: false,
  headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
  }
});

export default server;
