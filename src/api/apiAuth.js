const axios = require("axios");

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Send cookies back to the API
});

const errorHandler = (err) => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("Response =>", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  service,

  signin(data) {
    return service
      .post("/api/auth/signin", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .delete("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signup(data) {
    return service
      .post("/api/auth/signup", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  
  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
