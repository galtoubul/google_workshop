/* eslint-disable no-alert */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import tabGetDocument from "../chrome_api/tabGetDocument";

const getDocOfURL = (newURL) => {
  // eslint-disable-next-line no-debugger
  // eslint-disable-next-line no-async-promise-executor
  return new Promise((resolve) => {
    // eslint-disable-next-  no-undef
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line prefer-destructuring, prefer-const,no-unused-vars
    var doc;
    // eslint-disable-next-line no-undef
    chrome.tabs.create({ url: newURL, active: false }, async (tab) => {
      var firstTab = tab;
      // eslint-disable-next-line no-undef
      chrome.tabs.onUpdated.addListener(async function (
        tabId,
        changeInfo,
        tab
      ) {
        // make sure the status is 'complete' and it's the right tab
        if (tabId === firstTab.id && changeInfo.status === "complete") {
          doc = await tabGetDocument(tab.id);
          resolve(doc);
          // eslint-disable-next-line no-undef
          await chrome.tabs.remove(firstTab.id);
        }
      });
    });
  });
};

export default getDocOfURL;
