import axios from "axios";

export const initHttp = (idtoken) => {
  const get = (path, param = {}) => {
    return axios
      .post(
        `https://trackeet.co/api/${path}`,
        {
          token_id: idtoken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: { ...param },
        }
      )
      .then((r) => {
        return r.data;
      });
  };

  const post = (path, data, param = {}) => {
    return axios.post(
      `https://trackeet.co/api/${path}`,
      {
        ...data,
        token_id: idtoken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return { get, post };
};
