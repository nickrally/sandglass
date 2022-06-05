import axios from "axios";

import { config } from "../utils/Constants";
const url = config.urls.DAYS_URL;

export const getAll = async () => {
  try {
    const response = await axios.get(url);
    return await response.data;
  } catch (err) {
    console.log(err);
  }
};

export const saveItem = async (item) => {
  try {
    if (item.id) {
      axios.put(`${url}/${item.id}`, item);
    } else {
      axios.post(url, { ...item, id: Date.now() });
    }
  } catch (err) {
    console.log(err);
  }
};
