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
    const a = {};
    Object.keys(data.card).forEach((k) => {
      if (data.card[k] != null) {
        a[k] = data.card[k];
      }
    });
    return axios.post(
      `https://trackeet.co/api/${path}`,
      {
        ...a,
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
