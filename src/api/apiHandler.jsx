import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  service,

  getAll(endPoint) {
    return service.get(endPoint);
  },

  getOne(id) {
    return service.get("/clothes/" + id);
  },

  createGarm(endPoint, data) {
    return service.post(endPoint, data);
  },

  updateOne(endPoint, data){
    return service.patch(endPoint, data);
  },

  deleteOne(endPoint, data) {
    return service.delete(endPoint, data);
  },

};

