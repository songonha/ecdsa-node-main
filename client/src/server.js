import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3042",
  headers: {
          'Access-Control-Allow-Origin'       : '*',
          'Access-Control-Allow-Headers'      : 'Origin, X-Requested-With, Content-Type, Accept',
  }
});

export default server;
