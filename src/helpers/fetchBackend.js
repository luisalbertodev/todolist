/* eslint-disable no-unneeded-ternary */
import Axios from "axios";
import { BASE_URL } from "constant";

export const fetchBackend = async ({ method = "get", url, data }) => {
  try {
    const response = await Axios({ url: `${BASE_URL}${url}`, method, data });
    return { error: false, response: response?.data };
  } catch ({ response }) {
    return { error: true, response };
  }
};
