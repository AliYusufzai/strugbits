import AxiosSettings from "./axiosSetting";
import { baseUrl } from "./constants";

export const GetFile = () => {
  const { axiosInstance } = AxiosSettings();

  const postCustomer = (data) => {
    return axiosInstance.post(`${baseUrl}/api/`, data);
  };
  const updateCustomer = (id, data) => {
    return axiosInstance.patch(`${baseUrl}/api/${id}`, data);
  };

  const getCustomer = (sortField, sortOrder) => {
    const params = { sortField, sortOrder };
    return axiosInstance.get(`${baseUrl}/api/`, { params });
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
    updateCustomer
  };
};
