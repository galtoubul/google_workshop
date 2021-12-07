/* eslint-disable no-alert */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

export const Script_Executor = function (resource) {
  var final = "lolz";
  if (resource === "document") {
    // eslint-disable-next-line no-undef
    chrome.tabs.executeScript(
      null,
      {
        code: "(()=>{return new XMLSerializer().serializeToString(document)})()",
      },
      function (result) {
        final = new DOMParser().parseFromString(result[0], "text/xml");
      }
    );
  } else {
    // eslint-disable-next-line no-undef
    chrome.tabs.executeScript(
      null,
      {
        code: `(()=>{return ${resource}})()`,
      },
      function (result) {
        // eslint-disable-next-line prefer-destructuring
        final = result[0];
        console.log(final);
      }
    );
  }

  return final;
};
