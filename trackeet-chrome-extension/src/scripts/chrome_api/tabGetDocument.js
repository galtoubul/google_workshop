const tabGetDocument = (id) => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.tabs.get(id, (tab) => {
      // eslint-disable-next-line prefer-destructuring, prefer-const
      // eslint-disable-next-line no-undef
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => {
            return new XMLSerializer().serializeToString(document);
          },
        },
        (injectionResults) => {
          resolve(
            new DOMParser().parseFromString(
              injectionResults[0].result,
              "text/xml"
            )
          );
        }
      );
    });
  });
};

export default tabGetDocument;
