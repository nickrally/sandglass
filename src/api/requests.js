import axios from "axios";

import { config } from "../utils/Constants";
const url = config.urls.HABITS_URL;

export const getAll = async () => {
  try {
    const response = await axios.get(url);
    return await response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteItem = async (id) => {
  try {
    await axios.delete(`${url}/${id}`, id);
  } catch (err) {
    console.log(err);
  }
};

export const saveItem = async (item) => {
  if (item.id) {
    console.log("update");
    await axios.put(`${url}/${item.id}`, item);
  } else {
    try {
      console.log("create");
      await axios.post(url, { ...item, id: Date.now() });
    } catch (err) {
      console.log(err);
    }
  }
};
