export const scriptExecutor = () => {
  let final = "blahblah";
  // eslint-disable-next-line no-undef
  chrome.tabs.query({ active: true }, (tabs) => {
    // eslint-disable-next-line no-undef
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: () => {
          return window.location.href;
        },
      },
      (injectionResults) => {
        console.log(injectionResults[0].result);
        // eslint-disable-next-line prefer-destructuring
        final = injectionResults[0].result;
      }
    );
  });
  // eslint-disable-next-line no-alert
  alert(final);
  return final;
};
