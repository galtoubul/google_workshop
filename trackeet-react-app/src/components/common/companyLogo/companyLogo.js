import { getLogo } from './getLogo';

export const CompanyLogo = (props) => {
  return getLogo(props.shopName);
};
