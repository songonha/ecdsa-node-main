import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3042",
  headers: {
          'Access-Control-Allow-Origin'       : '*',
          'Access-Control-Allow-Headers'      : '*',
          'Access-Control-Allow-Credentials'  : true,
          'Access-Control-Allow-Methods'      : 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
          'Content-Type'                      : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
  }
});

export default server;
