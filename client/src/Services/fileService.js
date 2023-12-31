import AxiosSettings from "./axiosSetting";
import { baseUrl } from "./constants";

export const GetFile = () => {
  const { axiosInstance } = AxiosSettings();

  const postCustomer = (data) => {
    return axiosInstance.post(`${baseUrl}/api/`, data);
  };

  const getCustomer = () => {
    return axiosInstance.get(`${baseUrl}/api/`);
  };

  const getSingleCustomer = (id) => {
    return axiosInstance.get(`${baseUrl}/api/${id}`);
  };

  const destroyCustomer = (id) => {
    return axiosInstance.delete(`${baseUrl}/api/${id}`);
  };

  return {
    postCustomer,
    getCustomer,
    getSingleCustomer,
    destroyCustomer,
  };
};
