import axios from "axios";

export const initHttp = () => {
  const get = (path, param = {}) => {
    return axios
      .get(`https://trackeet.co/${path}`, {
        withCredentials: true,
        ...param,
      })
      .then((r) => r.data)
      .catch((e) => console.log(e));
  };

  const post = (path, data, param = {}) => {
    return axios.post(`https://trackeet.co/${path}`, data, {
      withCredentials: true,
      ...param,
    });
  };

  return { get, post };
};
