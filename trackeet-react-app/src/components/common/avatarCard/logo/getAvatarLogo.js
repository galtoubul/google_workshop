import { AliExpressLogo } from './aliExpressLogo';
import { AsosLogo } from './asosLogo';
import { DefaultLogo } from './defaultLogo';
import { AmazonLogo } from './amazoneLogo';
import { EbayLogo } from './ebayLogo';

export const getAvatarLogo = (logo) => {
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
