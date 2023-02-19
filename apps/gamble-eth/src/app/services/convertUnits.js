import { ETH_TO_WEI_RATIO } from './constants';

export const ETHtoWEI = (ETH) => ETH * ETH_TO_WEI_RATIO;
export const WEItoETH = (WEI) => WEI / ETH_TO_WEI_RATIO;
