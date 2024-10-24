import { createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('Missing VITE_WALLET_CONNECT_PROJECT_ID environment variable');
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    projectId,
    showQrModal: true,
    metadata: {
      name: 'vSpaceWallet ID',
      description: 'Connect with vSpaceWallet ID',
      url: window.location.origin,
      icons: ['https://avatars.githubusercontent.com/u/37784886'],
    },
  },
});

const injectedConnector = new InjectedConnector({
  chains,
  options: {
    name: 'Browser Wallet',
    shimDisconnect: true,
  },
});

export const config = createConfig({
  autoConnect: true,
  connectors: [
    walletConnectConnector,
    injectedConnector,
  ],
  publicClient,
  webSocketPublicClient,
});