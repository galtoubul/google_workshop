import tabGetHostname from "./tabGetHostname";
import amazonExtractor from "./amazon/amazonExtractor";

const cardAutoCreator = async () => {
  // eslint-disable-next-line no-var
  var hostname = await tabGetHostname();
  // eslint-disable-next-line no-var
  var ret;
  switch (hostname) {
    case "www.amazon.com":
      // eslint-disable-next-line no-unused-vars
      ret = await amazonExtractor();
      break;

    default:
      ret = new Error(
        "The Website isn't supported! Please refer to the list of supported websites"
      );
      break;
  }

  return ret;
};

export default cardAutoCreator;
