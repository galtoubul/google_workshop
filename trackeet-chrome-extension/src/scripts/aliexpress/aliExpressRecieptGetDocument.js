/* eslint-disable no-alert */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-const */
import tabGetDocument from "../chrome_api/tabGetDocument";

const aliExpressRecieptGetDocument = (newURL) => {
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
          doc = await clickerAndExtractor(tab);
          resolve(doc);
          // eslint-disable-next-line no-undef
          await chrome.tabs.remove(firstTab.id);
        }
      });
    });
  });
};

const clickerAndExtractor = async (tab) => {
  await clicker(tab);
  let doc = await tabGetDocument(tab.id);
  return doc;
};

const clicker = async (tab) => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          document.getElementsByClassName("ui-switchable-trigger")[1].click();
        },
      },
      (results) => {
        resolve(true);
      }
    );
  });
};

export default aliExpressRecieptGetDocument;
