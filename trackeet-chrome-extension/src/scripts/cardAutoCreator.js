import tabGetHostname from "./chrome_api/tabGetHostname";
import amazonExtractor from "./amazon/amazonExtractor";
import tabGetPathname from "./chrome_api/tabGetPathname";
import isCardValid from "./isCardValid";

export const getAdaptedCode = async () => {
  const hostname = await tabGetHostname();
  const path = await tabGetPathname();
  //Default Adapted code is the one that return undefined card object
  let ret = async () => {
    return undefined;
  };

  //Check maybe there is an adapted extractor code for the website
  switch (hostname) {
    case "www.amazon.com":
      if (path.search("/progress-tracker/package/") === -1) break;
      else {
        ret = amazonExtractor;
        break;
      }

    default:
      break;
  }

  return ret;
};

export const cardAutoCreator = async () => {
  // eslint-disable-next-line no-var
  const creator = await getAdaptedCode();
  const card = await creator();

  if (!isCardValid(card))
    throw "The URL isn't supported! Please refer to the manual";
  else return card;
};
