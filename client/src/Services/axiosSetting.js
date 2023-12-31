import React from "react";
import axios from "axios";
import { baseUrl } from "./constants.js";

const AxiosSettings = () => {
  const axiosInstance = axios.create({ url: baseUrl, maxBodyLength: Infinity });
  axiosInstance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return { axiosInstance };
};

export default AxiosSettings;
