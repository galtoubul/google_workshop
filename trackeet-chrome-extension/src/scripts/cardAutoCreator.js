import tabGetHostname from "./chrome_api/tabGetHostname";
import amazonExtractor from "./amazon/amazonExtractor";
import tabGetPathname from "./chrome_api/tabGetPathname";
import cardValidator from "./cardValidator";

const cardAutoCreator = async () => {
  // eslint-disable-next-line no-var
  var hostname = await tabGetHostname();
  // eslint-disable-next-line no-var
  var path = await tabGetPathname();
  // eslint-disable-next-line no-var
  var ret;
  // console.log(hostname);
  // console.log(path);
  // console.log("hi");
  switch (hostname) {
    case "www.amazon.com":
      if (path.search("/progress-tracker/package/") === -1) {
        console.log("hi2");
        ret = null;
        break;
      } else {
        // console.log("hi3");
        ret = await amazonExtractor();
        break;
      }

    default:
      ret = null;
      break;
  }

  // console.log("hi4");
  // console.log(ret);
  if (!cardValidator(ret))
    throw "The URL isn't supported! Please refer to the manual";
  return ret;
};

export default cardAutoCreator;
