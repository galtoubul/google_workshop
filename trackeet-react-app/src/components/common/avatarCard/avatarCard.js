import { getAvatarLogo } from './logo/getAvatarLogo';

export const AvatarCard = (props) => {
  return getAvatarLogo(props.shopName);
};
