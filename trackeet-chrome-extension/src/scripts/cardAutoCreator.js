import tabGetHostname from "./chrome_api/tabGetHostname";
import amazonExtractor from "./amazon/amazonExtractor";
import tabGetPathname from "./chrome_api/tabGetPathname";
import cardValidator from "./cardValidator";

export const getIsSupported = async () => {
  const hostname = await tabGetHostname();
  const path = await tabGetPathname();
  if (
    path.search("/progress-tracker/package/") !== -1 &&
    hostname === "www.amazon.com"
  ) {
    return true;
  }

  return false;
};

export const cardAutoCreator = async () => {
  // eslint-disable-next-line no-var
  const hostname = await tabGetHostname();
  const path = await tabGetPathname();
  let ret;

  switch (hostname) {
    case "www.amazon.com":
      if (path.search("/progress-tracker/package/") === -1) {
        console.log("hi2");
        ret = null;
        break;
      } else {
        ret = await amazonExtractor();
        console.log(ret);
        break;
      }

    default:
      ret = null;
      break;
  }

  if (!cardValidator(ret))
    throw "The URL isn't supported! Please refer to the manual";
  return ret;
};
