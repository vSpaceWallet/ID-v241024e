import React from 'react';
import { KeyRound } from 'lucide-react';

interface HeaderProps {
  isConnected?: boolean;
  address?: string;
  onDisconnect?: () => void;
}

export function Header({ isConnected, address, onDisconnect }: HeaderProps) {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <KeyRound className="w-8 h-8 text-blue-600" />
        <span className="text-xl font-semibold">vSpaceWallet ID</span>
      </div>
      {isConnected && address && (
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {`${address.slice(0, 6)}...${address.slice(-4)}`}
          </span>
          <button
            onClick={onDisconnect}
            className="text-sm text-red-600 hover:text-red-800"
          >
            Disconnect
          </button>
        </div>
      )}
    </header>
  );
}