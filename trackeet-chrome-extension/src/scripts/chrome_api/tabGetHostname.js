const tabGetHostname = () => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true }, (result) => {
      // eslint-disable-next-line prefer-destructuring, prefer-const
      let tab = result[0];
      // eslint-disable-next-line no-undef
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => {
            return window.location.hostname; //URL of the Open tab
          },
        },
        (injectionResults) => {
          resolve(injectionResults[0].result);
        }
      );
    });
  });
};

export default tabGetHostname;
