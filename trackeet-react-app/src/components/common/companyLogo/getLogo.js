import { AliExpressLogo } from './logo/aliExpressLogo';
import { AsosLogo } from './logo/asosLogo';
import { DefaultLogo } from './logo/defaultLogo';
import { AmazonLogo } from './logo/amazoneLogo';
import { EbayLogo } from './logo/ebayLogo';

export const getLogo = (logo) => {
  switch (logo) {
    case 'amazon':
      return <AmazonLogo />;
    case 'aliExpress':
      return <AliExpressLogo />;
    case 'asos':
      return <AsosLogo />;
    case 'ebay':
      return <EbayLogo />;
    default:
      return <DefaultLogo />;
  }
};
