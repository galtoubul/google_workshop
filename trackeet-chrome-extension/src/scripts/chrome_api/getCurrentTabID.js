/* eslint-disable no-alert */
/* eslint-disable no-var */
/* eslint-disable prefer-const */

const getCurrentTabID = () => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef,no-unused-vars
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true }, (tabs) => {
      let tabID = tabs[0].id;
      console.log(tabID);
      resolve(tabID);
    });
  });
};

export default getCurrentTabID;
