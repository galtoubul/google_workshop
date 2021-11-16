import { AliExpressLogo } from "./logo/aliExpressLogo";
import { AsosLogo } from "./logo/asosLogo";
import { DefaultLogo } from "./logo/defaultLogo";
import { AmazonLogo } from "./logo/amazoneLogo";
import { EbayLogo } from "./logo/ebayLogo";

export const getLogo = (logo) => {
  switch (logo) {
    case "Amazon":
      return <AmazonLogo />;
    case "AliExpress":
      return <AliExpressLogo />;
    case "Asos":
      return <AsosLogo />;
    case "Ebay":
      return <EbayLogo />;
    default:
      return <DefaultLogo />;
  }
};
