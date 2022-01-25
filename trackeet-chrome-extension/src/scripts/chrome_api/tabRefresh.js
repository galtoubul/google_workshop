import tabGetHostname from "./tabGetHostname";
import tabGetPathname from "./tabGetPathname";

const tabRefresh = () => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true }, (tabs) => {
      // eslint-disable-next-line prefer-destructuring, prefer-const
      // eslint-disable-next-line no-undef
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          func: () => {
            // eslint-disable-next-line no-restricted-globals
            location.reload();
            return true;
          },
        },
        (injectionResults) => {
          // eslint-disable-next-line no-undef
          chrome.tabs.onUpdated.addListener(async function (
            tabId,
            changeInfo,
            tab
          ) {
            // make sure the status is 'complete' and it's the right tab
            console.log(tabId);
            console.log(tab);
            console.log(changeInfo);
            if (tabId === tabs[0].id && changeInfo.status === "complete") {
              const hostname = await tabGetHostname();
              const path = await tabGetPathname();
              resolve({ hostname, path });
            }
          });
        }
      );
    });
  });
};

export default tabRefresh;
