import { AliExpressLogo } from "./logo/aliExpressLogo";
import { AsosLogo } from "./logo/asosLogo";
import { DefaultLogo } from "./logo/defaultLogo";
import { AmazonLogo } from "./logo/amazoneLogo";
import { EbayLogo } from "./logo/ebayLogo";
import { GoogleLogo } from "./logo/googleLogo";
import { FacebookLogo } from "./logo/facebookLogo";
import { AppleLogo } from "./logo/appleLogo";
import { FedExLogo } from "./logo/fedEx";
import { NikeLogo } from "./logo/nikeLogo";

export const getLogo = (logo) => {
  switch (logo) {
    case "Amazon":
      return <AmazonLogo />;
    case "Aliexpress":
    case "AliExpress":
      return <AliExpressLogo />;
    case "Asos":
      return <AsosLogo />;
    case "Ebay":
      return <EbayLogo />;
    case "Google":
      return <GoogleLogo />;
    case "Facebook":
      return <FacebookLogo />;
    case "Apple":
      return <AppleLogo />;
    case "Fedex":
    case "FedEx":
      return <FedExLogo />;
    case "Nike":
      return <NikeLogo />;
    default:
      return <DefaultLogo />;
  }
};
