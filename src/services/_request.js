import axios from "axios";

axios.defaults.baseURL = "https://gateway.marvel.com:443/v1/public/";

export default {
  send: (route, method, payload) => {
    return axios[method](route, payload, {
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
    });
  },
};
