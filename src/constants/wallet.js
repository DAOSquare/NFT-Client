import METAMASK_ICON_URL from 'assets/imgs/metamask.png';
import { injected } from '../connectors';

export const SUPPORTED_WALLETS = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    icon: METAMASK_ICON_URL,
  },
  // WALLET_LINK: {
  //   connector: walletlink,
  //   name: 'Coinbase Wallet',
  //   icon: COINBASE_ICON_URL,
  // },
};
