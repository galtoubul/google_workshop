/* eslint-disable no-alert */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

const getTabID = () => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef,no-unused-vars
    var tabID;
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true }, (tabs) => {
      tabID = tabs[0].id;
      resolve(tabID);
    });
  });
};

export default getTabID;
