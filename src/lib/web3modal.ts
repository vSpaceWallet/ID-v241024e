import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { mainnet } from 'wagmi/chains';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('Missing VITE_WALLET_CONNECT_PROJECT_ID environment variable');
}

const metadata = {
  name: 'vSpaceWallet ID',
  description: 'Connect with vSpaceWallet ID',
  url: window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet];
export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

export const web3Modal = createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'Inter, sans-serif',
    '--w3m-accent-color': '#3b82f6',
  },
});