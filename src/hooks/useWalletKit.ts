import { useState, useEffect } from 'react';
import { WalletKit } from '@reown/walletkit';
import { initWalletKit } from '../lib/walletkit';

export function useWalletKit() {
  const [walletKit, setWalletKit] = useState<WalletKit | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        const kit = await initWalletKit();
        setWalletKit(kit);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize WalletKit'));
      } finally {
        setIsLoading(false);
      }
    };

    initialize();
  }, []);

  return { walletKit, isLoading, error };
}