import tabGetHostname from "./chrome_api/tabGetHostname";
import amazonExtractor from "./amazon/amazonExtractor";
import aliExpressExtractor from "./aliexpress/aliExpressExtractor";
import ebayExtractor from "./ebay/ebayExtractor";
import tabGetPathname from "./chrome_api/tabGetPathname";
import isCardValid from "./isCardValid";

export const getAdaptedCode = async () => {
  //Default Adapted code is the one that return undefined card object
  let ret = async () => {
    return undefined;
  };

  const hostname = await tabGetHostname();
  const path = await tabGetPathname();

  //Check if there is an adapted extractor code for the website
  switch (hostname) {
    case "www.amazon.com":
      if (path.search("/progress-tracker/package/") === -1) break;
      else {
        ret = amazonExtractor;
        break;
      }

    case "track.aliexpress.com":
      if (path !== "/logisticsdetail.htm") break;
      else {
        ret = aliExpressExtractor;
        break;
      }

    case "order.ebay.com":
      if (path !== "/ord/show") break;
      else {
        ret = ebayExtractor;
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

  console.log("First version of automatic card");
  console.log(card);
  if (!isCardValid(card))
    throw "The URL isn't supported! Please refer to the manual";
  else return card;
};
