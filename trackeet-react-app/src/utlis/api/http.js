import axios from "axios";

export const initHttp = (idtoken) => {
  const get = (path, param = {}) => {
    return axios
      .post(
        `http://trackeet.co/api/${path}`,
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
        console.log(r);
        return r.data;
      })
      .catch((e) => console.log(e));
  };

  const post = (path, data, param = {}) => {
    const a = {};
    Object.keys(data.card).forEach((k) => {
      if (data.card[k] != null) {
        a[k] = data.card[k];
        console.log(a);
      }
    });
    return axios.post(
      `http://trackeet.co/api/${path}`,
      { ...a, token_id: idtoken },
      {
        headers: {
          "Content-Type": "application/json",
        },

        params: {
          company: data.card.company,
          order_serial_code: data.card.order_serial_code,
        },
      }
    );
  };

  return { get, post };
};
