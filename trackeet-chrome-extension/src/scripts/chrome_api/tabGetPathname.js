const tabGetPathname = () => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true }, (result) => {
      // eslint-disable-next-line prefer-destructuring, prefer-const
      let tab = result[0];
      // eslint-disable-next-line no-undef
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => {
            return window.location.pathname; //URL of the Open tab
          },
        },
        (injectionResults) => {
          if (injectionResults === undefined) {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject("Not a legal tab to execute a script at");
          }

          resolve(injectionResults[0].result);
        }
      );
    });
  });
};

export default tabGetPathname;
