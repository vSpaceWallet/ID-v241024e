import { Core } from '@walletconnect/core';
import { WalletKit } from '@reown/walletkit';

const core = new Core({
  projectId: 'b2ff247a4050dcf26fad2a3bbf362abf'
});

const metadata = {
  name: 'vSpace',
  description: 'AppKit Example',
  url: window.location.origin,
  icons: ['https://assets.reown.com/reown-profile-pic.png']
};

export const initWalletKit = async () => {
  try {
    const walletKit = await WalletKit.init({
      core,
      metadata
    });
    return walletKit;
  } catch (error) {
    console.error('Failed to initialize WalletKit:', error);
    throw error;
  }
};