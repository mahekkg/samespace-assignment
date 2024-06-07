import axios from "axios";

export const getApiInstance = () => {
  return axios.create({
    baseURL: "https://cms.samespace.com/items/songs",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
