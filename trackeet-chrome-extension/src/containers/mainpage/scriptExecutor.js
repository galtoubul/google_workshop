export const scriptExecutor = (resource) => {
  let final = "";
  if (resource === "document") {
    // eslint-disable-next-line no-undef
    chrome.tabs.executeScript(
      null,
      {
        code: "(()=>{return new XMLSerializer().serializeToString(document)})()",
      },
      (result) => {
        final = new DOMParser().parseFromString(result[0], "text/xml");
      }
    );
  } else {
    // eslint-disable-next-line no-undef
    chrome.tabs.executeScript(
      null,
      {
        code: `(()=>{return (window.location.href)})()`,
      },
      (result) => {
        // eslint-disable-next-line prefer-destructuring
        final = result[0];
      }
    );
  }

  return final;
};
