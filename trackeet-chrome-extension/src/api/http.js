import axios from "axios";

const getGoogleToken = () => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.identity.getAuthToken({ interactive: true }, (auth_token, x) => {
      resolve(auth_token);
    });
  });
};

export const initHttp = (tokenId) => {
  const post = async (path, data, param = {}) => {
    const a = {};
    const apiToken = await getGoogleToken();
    Object.keys(data.card).forEach((k) => {
      if (data.card[k] != null) {
        a[k] = data.card[k];
        console.log(a);
      }
    });
    return axios.post(
      `https://trackeet.co/api/${path}`,
      { ...a, token_id: apiToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return { post };
};
